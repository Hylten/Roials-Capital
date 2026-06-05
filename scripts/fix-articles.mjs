import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import matter from 'gray-matter';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const CONTENT_DIR = path.resolve(__dirname, '..', 'content', 'intelligence');

function titleCase(str) {
  const keepLower = ['the', 'of', 'in', 'and', 'or', 'at', 'to', 'for', 'with', 'by', 'a', 'an'];
  const keepUpper = ['II', 'III', 'IV', 'EU', 'UK', 'US', 'NA', 'M&A'];
  const words = str.trim().split(/\s+/);
  return words
    .map((word, i, arr) => {
      const w = word.toLowerCase();
      if (keepUpper.includes(word.replace(/[^A-Za-z]/g, ''))) return word;
      if (i > 0 && keepLower.includes(w) && arr[i - 1] !== ':') return w;
      return w.charAt(0).toUpperCase() + w.slice(1);
    })
    .join(' ')
    .replace(/ : /g, ': ');
}

function fixBrokenWords(text) {
  return text
    .replace(/INTRODUCTIO\n\nN/g, 'INTRODUCTION\n\n')
    .replace(/INTRODUCTIO N /g, 'INTRODUCTION ')
    .replace(/THE MANDAT\n\nE/g, 'THE MANDATE\n\n')
    .replace(/MANDAT\n\nE/g, 'MANDATE\n\n')
    .replace(/Case s\b/g, 'Cases')
    .replace(/^(# .+?) INTRODUCTION\s*$/m, '$1\n\nINTRODUCTION')
    .replace(/### (Phase|Step) I:\s*s\s+/g, '### $1 I is ')
    .replace(/:\s*s\s+(the|integration|extraction|typically|a\b)/g, ' is $1');
}

function fixMergedHeadings(text) {
  const lines = text.split('\n');
  return lines.map(line => {
    if (/^#/.test(line) || !line.trim()) return line;

    // Case 1: Standalone ALL-CAPS heading (no body text on same line)
    if (/^[A-Z][A-Z\s:']{4,60}$/.test(line.trim())) {
      const heading = line.trim();
      const letters = heading.replace(/[^A-Za-z]/g, '');
      const upperCount = letters.split('').filter(c => c >= 'A' && c <= 'Z').length;
      if (upperCount / letters.length >= 0.65 && heading.split(/\s+/).filter(w => w.length > 0).length >= 2) {
        return `## ${titleCase(heading)}`;
      }
      return line;
    }

    // Case 2: ALL-CAPS heading + body text on same line
    const match = line.match(/^([A-Z][A-Z\s:']{7,70})\s+([A-Z][a-z].*)$/);
    if (match) {
      let [, heading, body] = match;
      heading = heading.trim();
      const letters = heading.replace(/[^A-Za-z]/g, '');
      const upperCount = letters.split('').filter(c => c >= 'A' && c <= 'Z').length;
      if (upperCount / letters.length >= 0.65 && heading.split(/\s+/).filter(w => w.length > 0).length >= 2) {
        return `## ${titleCase(heading)}\n\n${body}`;
      }
    }

    return line;
  }).join('\n');
}

function fixNumberedLists(text) {
  return text.replace(/^(\d+)\.\s*\n\n+/gm, '$1. ');
}

function mergeStaccato(text) {
  const blocks = text.split(/\n\n+/);
  const result = [];
  let buffer = [];

  function flush() {
    if (buffer.length > 0) {
      result.push(buffer.join(' '));
      buffer = [];
    }
  }

  for (const block of blocks) {
    const trimmed = block.trim();
    if (!trimmed) {
      flush();
      result.push('');
      continue;
    }

    const firstLine = trimmed.split('\n')[0];
    const isStructural = /^#/.test(firstLine) || /^[-*]\s/.test(firstLine) || /^\d+[.)]/.test(firstLine) || /^```/.test(firstLine) || /^>/.test(firstLine) || /^[-*_]{3,}\s*$/.test(firstLine);

    if (isStructural) {
      flush();
      result.push(block);
      continue;
    }

    const sentenceEnds = trimmed.match(/[.!?]+/g);
    const sentenceCount = sentenceEnds ? sentenceEnds.length : 0;
    const wordCount = trimmed.split(/\s+/).length;

    if (sentenceCount <= 1 && wordCount <= 50) {
      buffer.push(trimmed);
    } else {
      flush();
      result.push(block);
    }
  }

  flush();
  return result.join('\n\n');
}

function removeAiJunk(text) {
  const lines = text.split('\n');
  const cleaned = [];
  let skipBlock = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.trim() === 'TECHNICAL MANDATE') {
      skipBlock = true;
      continue;
    }

    if (skipBlock) {
      if (line.trim() === '' && (i + 1 >= lines.length || lines[i + 1].startsWith('##') || lines[i + 1].startsWith('---'))) {
        skipBlock = false;
      }
      continue;
    }

    if (/access is restricted to approved mandates/i.test(line)) continue;
    if (/minimum target size/i.test(line) && /\$5M\+/.test(line)) continue;
    if (/access is restricted/i.test(line) && /approved mandates/i.test(line)) continue;

    cleaned.push(line);
  }

  return cleaned.join('\n');
}

function removeConclusion(text) {
  const idx = text.search(/^## Conclusion\b/m);
  if (idx === -1) return text;
  return text.substring(0, idx).trimEnd();
}

function fixFakeBulletLists(text) {
  const lines = text.split('\n');
  const result = [];
  let inList = false;

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];

    if (/^[•●○▪►]/.test(line.trim())) {
      const content = line.trim().replace(/^[•●○▪►]\s*/, '');
      result.push('- ' + content);
      inList = true;
      continue;
    }

    if (inList && line.trim() === '' && i + 1 < lines.length && /^[•●○▪►-]/.test(lines[i + 1].trim())) {
      continue;
    }

    if (inList && line.trim() === '' && i + 1 < lines.length && /^\d+\./.test(lines[i + 1].trim())) {
      continue;
    }

    inList = false;
    result.push(line);
  }

  return result.join('\n');
}

function removeStrayIntroLine(text) {
  return text.replace(/^#\s+.+?INTRODUCTIO\n\n/gm, '');
}

function fixContent(body) {
  let text = body;

  text = fixBrokenWords(text);
  text = fixNumberedLists(text);
  text = fixMergedHeadings(text);
  text = removeAiJunk(text);
  text = removeConclusion(text);
  text = removeStrayIntroLine(text);
  text = fixFakeBulletLists(text);
  text = mergeStaccato(text);

  text = text
    .replace(/\n{4,}/g, '\n\n\n')
    .replace(/^\s+/, '');

  return text;
}

function main() {
  const files = fs.readdirSync(CONTENT_DIR).filter(f => f.endsWith('.md'));
  let fixed = 0;
  let errors = 0;

  for (const file of files) {
    const filePath = path.join(CONTENT_DIR, file);
    try {
      const raw = fs.readFileSync(filePath, 'utf8');
      const parsed = matter(raw);
      const originalBody = parsed.content;
      const fixedBody = fixContent(originalBody);

      if (fixedBody !== originalBody) {
        const newContent = matter.stringify(fixedBody, parsed.data);
        fs.writeFileSync(filePath, newContent, 'utf8');
        fixed++;
        console.log(`Fixed: ${file}`);
      } else {
        console.log(`Skipped: ${file} (no changes)`);
      }
    } catch (e) {
      console.error(`Error: ${file}: ${e.message}`);
      errors++;
    }
  }

  console.log(`\nDone. ${fixed} files fixed, ${errors} errors.`);
}

main();
