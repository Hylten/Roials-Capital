import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import matter from 'gray-matter';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const CONTENT_DIR = path.resolve(__dirname, '..', 'content', 'intelligence');

function fixBrokenWords(text) {
  return text
    // Fix split words (newline in middle of word)
    .replace(/INTRODUCTIO\n\nN/g, 'INTRODUCTION\n\n')
    .replace(/INTRODUCTIO N /g, 'INTRODUCTION ')
    .replace(/THE MANDAT\n\nE/g, 'THE MANDATE\n\n')
    .replace(/MANDAT\n\nE/g, 'MANDATE\n\n')
    .replace(/Case s\b/g, 'Cases')
    // Fix H1 with trailing "INTRODUCTION" (from broken-word merge)
    .replace(/^(# .+?) INTRODUCTION\s*$/m, '$1\n\nINTRODUCTION')
    // Fix "Phase I: s" → "Phase I is" and "Step I: s" → "Step I is"
    .replace(/### (Phase|Step) I:\s*s\s+/g, '### $1 I is ')
    // Fix standalone ": s" pattern (catch-all)
    .replace(/:\s*s\s+(the|integration|extraction|typically|a\b)/g, ' is $1');
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

function detectSectionHeadings(text) {
  const lines = text.split('\n');
  const result = [];

  // Known heading patterns to detect
  const headingPatterns = [
    /^(Pillar|Stage|Phase)\s+(One|Two|Three|Four|Five|Six)\b\.?\s*$/i,
    /^(Pillar|Stage|Phase)\s+\d+\.?\s*$/i,
    /^(Step|Principle)\s+(One|Two|Three|Four|Five|Six)\b\.?\s*$/i,
    /^(The\s+Future\s+State\s+of\s+.+)/i,
    /^(Strategic\s+Use\s+Cases?)\b\.?\s*$/i,
  ];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    if (trimmed.startsWith('#')) {
      result.push(line);
      continue;
    }

    let matched = false;
    for (const pattern of headingPatterns) {
      const m = trimmed.match(pattern);
      if (m) {
        const heading = m[1] || m[0];
        const prefix = trimmed.match(/^(Pillar|Stage|Phase|Step|Principle)\b/i) ? '##' : '##';
        result.push(prefix + ' ' + heading.trim().replace(/\.$/, ''));
        matched = true;
        break;
      }
    }
    if (matched) continue;

    // Lines where a title-like phrase runs into the first sentence without punctuation
    // Examples: "The Fragmentation Problem in Sovereign Debt Systems Modern debt markets..."
    //           "Why Sovereign Class Flows Require a Mathematical Framework Sovereign systems..."
    const mergedTitle = trimmed.match(/^(The\s+(?:Role|Architecture|Fragmentation|Sequence|Future|Evolution|Rise|Power|Strategic)\s+.{10,80}?)\s+(Modern|Sovereign|Debt|Institutional|A\s|The\s|We\s|This\s|Its\s|Large|Capital|Every|Under|When|Traditional|As\s)/i);
    if (mergedTitle && !trimmed.startsWith('#') && !trimmed.startsWith('-')) {
      const title = mergedTitle[1].trim();
      const rest = trimmed.substring(title.length).trim();
      if (title.split(' ').length >= 3 && title.split(' ').length <= 18) {
        result.push('## ' + title);
        result.push('');
        if (rest) result.push(rest);
        matched = true;
        continue;
      }
    }

    // "Why X..." pattern where title merges into content
    const whyMatch = trimmed.match(/^(Why\s+.{15,80}?)\s+(it|we|the|this|these|a\s|an\s|every|most|large|probabilistic)\s/i);
    if (whyMatch && !trimmed.startsWith('#') && !trimmed.startsWith('-')) {
      const title = whyMatch[1].trim();
      const rest = trimmed.substring(title.length).trim();
      if (rest.length > 20) {
        result.push('## ' + title);
        result.push('');
        result.push(rest);
        matched = true;
        continue;
      }
    }

    // "The Sequence of Harmonization..." → section title + content
    const seqMatch = trimmed.match(/^(The\s+(Sequence|Architecture|Role|Implications)\s+of\s+.{10,80}?)\s+(For|Debt|Sovereign|Institutional|Capital|A\s|The\s|This\s)/i);
    if (seqMatch && !trimmed.startsWith('#') && !trimmed.startsWith('-')) {
      const title = seqMatch[1].trim();
      const rest = trimmed.substring(title.length).trim();
      if (rest.length > 20) {
        result.push('## ' + title);
        result.push('');
        result.push(rest);
        matched = true;
        continue;
      }
    }

    // Lines ending with colon that look like subheadings
    const colonTitle = trimmed.match(/^([A-Z][A-Za-z\s]{4,60}):$/);
    if (colonTitle && trimmed.length > 10 && trimmed.length < 80) {
      const prevLine = i > 0 ? lines[i - 1].trim() : '';
      if (prevLine === '' || prevLine.startsWith('#')) {
        result.push('### ' + colonTitle[1]);
        matched = true;
        continue;
      }
    }

    result.push(line);
  }

  return result.join('\n');
}

function hasSentenceEnding(text) {
  return /[.!?]\s*$/.test(text.trim());
}

function countSentences(text) {
  const matches = text.match(/[.!?]+/g);
  return matches ? matches.length : 0;
}

function isBlockHeadingOrList(line) {
  const trimmed = line.trim();
  return trimmed.startsWith('#') || trimmed.startsWith('- ') || trimmed.startsWith('* ') ||
    trimmed.startsWith('>') || trimmed.startsWith('```') || trimmed.startsWith('---');
}

function mergeStaccato(text) {
  const blocks = text.split(/\n\n+/);
  const result = [];
  let buffer = [];

  function flushBuffer() {
    if (buffer.length > 0) {
      const merged = buffer.join(' ');
      result.push(merged);
      buffer = [];
    }
  }

  for (const block of blocks) {
    const lines = block.split('\n');
    const firstLine = lines[0].trim();

    if (lines.length === 1 && firstLine && !isBlockHeadingOrList(firstLine)) {
      buffer.push(firstLine);
    } else {
      flushBuffer();

      if (lines.length === 1 && isBlockHeadingOrList(firstLine)) {
        result.push(block);
      } else if (lines.length > 1) {
        const mergedLines = [];
        let lineBuffer = [];

        for (const line of lines) {
          const t = line.trim();
          if (!t) {
            if (lineBuffer.length > 0) {
              mergedLines.push(lineBuffer.join(' '));
              lineBuffer = [];
            }
            mergedLines.push('');
          } else if (isBlockHeadingOrList(t)) {
            if (lineBuffer.length > 0) {
              mergedLines.push(lineBuffer.join(' '));
              lineBuffer = [];
            }
            mergedLines.push(t);
          } else {
            lineBuffer.push(t);
          }
        }
        if (lineBuffer.length > 0) {
          mergedLines.push(lineBuffer.join(' '));
        }

        result.push(mergedLines.join('\n'));
      } else {
        result.push(block);
      }
    }
  }

  flushBuffer();

  return result.join('\n\n');
}

function removeStrayIntroLine(text) {
  return text.replace(/^#\s+.+?INTRODUCTIO\n\n/gm, '');
}

function fixContent(body) {
  let text = body;

  text = fixBrokenWords(text);
  text = removeAiJunk(text);
  text = removeConclusion(text);
  text = removeStrayIntroLine(text);
  text = fixFakeBulletLists(text);
  text = detectSectionHeadings(text);
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
        console.log(`✅ Fixed: ${file}`);
      } else {
        console.log(`─ Skipped: ${file} (no changes)`);
      }
    } catch (e) {
      console.error(`❌ Error: ${file}: ${e.message}`);
      errors++;
    }
  }

  console.log(`\nDone. ${fixed} files fixed, ${errors} errors.`);
}

main();
