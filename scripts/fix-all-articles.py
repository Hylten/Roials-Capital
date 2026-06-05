#!/usr/bin/env python3
"""
Comprehensive bulk fix for ALL Roials Capital intelligence articles.
Makes every article as clean as structural-alpha reference article.

Fixes:
 1. Remove Bible verses (brand filter: Roials Capital, no religious content)
 2. Remove NAEO/NAEOC/NAEOCCC references (brand filter: forbidden entities)
 3. Fix "THE MANDAT E" / "The Mandat E" → "THE MANDATE"
 4. Remove blank lines between bullet items and their descriptions
 5. Fix orphaned pseudo-headings (capitalized text lines that should be ###)
 6. Fix stuttering (paragraph first sentence repeating heading)
 7. Fix casing issues (e.g. "Institutional INTRODUCTION" → "Institutional Introduction")
 8. Fix em dashes (safety net, already done)
"""

import os
import re
import glob

CONTENT_DIR = os.path.join(os.path.dirname(__file__), '..', 'content', 'intelligence')

def remove_bible_verses(text):
    # Verse 1: Proverbs 13:22 - very common
    text = re.sub(
        r'\s*"?[A-Z]?[a]?\s*good man leaves an inheritance to his children\'s children[^.]*\.?"?\s*[-–,]\s*Proverbs\s+13:22\*?',
        '',
        text,
        flags=re.IGNORECASE
    )
    # Footnote for Proverbs 13:22
    text = re.sub(
        r'\n\*{1,2}\s*:?\s*[A-Za-z].*?(?:children\'s children|generation|preservational|inheritance|stewardship|righteous|sinner|just).*?\n',
        '\n',
        text,
        flags=re.IGNORECASE
    )
    # Verse 2: Luke 16:10
    text = re.sub(
        r'\s*"[^"]*Luke\s+16:10[^"]*"\s*[-–,]\s*Luke\s+16:10\*?',
        '',
        text,
        flags=re.IGNORECASE
    )
    text = re.sub(
        r'\s*Luke\s+16:10\*?',
        '',
        text,
        flags=re.IGNORECASE
    )
    return text

def remove_naeo_references(text):
    # Remove definitions/expansions first (longest patterns)
    text = re.sub(r'\s*\(?[Nn]ow known as [Nn]orth American[^)]*\)?', '', text)
    text = re.sub(r'\s*[–-]\s*[Tt]he [Nn]orth American [Ee]nergy [&and] [Oo]perations [Cc]onsolidation\b[^)]*\)?', '', text)
    
    # "to which we serve as a strategic partner" pattern
    text = re.sub(r',?\s*to which we serve as a strategic partner[,.]?\s*', ', ', text)
    text = re.sub(r'\s*[,.]?\s*supported by our strategic partner [Nn][Aa][Ee][Oo][A-Za-z]*', '', text)
    
    # Entity-in-sentence patterns (case-insensitive for NAEO variants)
    text = re.sub(r'\b[Nn][Aa][Ee][Oo][A-Za-z]*\s+operates as a strategic partner', 'Operating partners provide', text)
    text = re.sub(r'\b[Nn][Aa][Ee][Oo][A-Za-z]*\s+exemplifies this alignment', 'This alignment is exemplified', text)
    text = re.sub(r'\b[Nn][Aa][Ee][Oo][A-Za-z]*\s+is positioned as an institutional partner', 'Energy operators are positioned as institutional partners', text)
    text = re.sub(r"\b[Nn][Aa][Ee][Oo][A-Za-z]*'?s?\s+institutional\s+grade\b", 'institutional grade', text)
    
    # "such as" / "including" patterns
    text = re.sub(r'such as\s+[Nn][Aa][Ee][Oo][A-Za-z]*\b', 'such as select institutional operators', text)
    text = re.sub(r'including\s+[Nn][Aa][Ee][Oo][A-Za-z]*\b', 'including select institutional operators', text)
    
    # NAEO as standalone entity at start of clause/sentence
    text = re.sub(r'\b[Nn][Aa][Ee][Oo][A-Za-z]*\s+is\b', 'The energy sector is', text)
    text = re.sub(r'\b[Nn][Aa][Ee][Oo][A-Za-z]*\s+was\b', 'The corridor was', text)
    text = re.sub(r'\b[Nn][Aa][Ee][Oo][A-Za-z]*\s+remains?\b', 'The corridor remains', text)
    text = re.sub(r'\b[Nn][Aa][Ee][Oo][A-Za-z]*\s+requires?\b', 'Energy deployment requires', text)
    text = re.sub(r'\b[Nn][Aa][Ee][Oo][A-Za-z]*\s+alignment\b', 'structural alignment', text)
    
    # NAEO with modifiers
    text = re.sub(r'\bNAE[Oo][Cc]*\s+corridor\b', 'energy corridor', text)
    text = re.sub(r'\bNAE[Oo][Cc]*\s+belt\b', 'energy corridor', text)
    text = re.sub(r'\bNAE[Oo][Cc]*\s+energy\b', 'energy', text)
    text = re.sub(r'\bNAE[Oo][Cc]*\s+sector\b', 'energy sector', text)
    text = re.sub(r'\bNAE[Oo][Cc]*\s+mandates?\b', 'energy mandates', text)
    text = re.sub(r'\bNAE[Oo][Cc]*\s+deployment\b', 'energy deployment', text)
    text = re.sub(r'\bNAE[Oo][Cc]*\s+operations?\b', 'energy operations', text)
    
    # NAEO with dollar amounts
    text = re.sub(r'\bNAE[Oo][Cc]*\s+\$\d+[MKB].*?\d+[MKB]', 'energy mandates', text)
    text = re.sub(r'\bNAE[Oo][Cc]*\s+\d+[Mm].\d+[Mm]', 'energy mandates', text)
    text = re.sub(r'\bNAEO\s+([$€£]?\d+[Mmk]?\b)', r'energy \1', text)
    
    # NAEO in "with Naeocc" / "via Naeo" phrase patterns
    text = re.sub(r' (with|via) [Nn][Aa][Ee][Oo][A-Za-z]*\b', '', text)
    
    # Hyphenated compounds like "NAEOC-aligned"
    text = re.sub(r'\bNAE[Oo][Cc]*-', 'energy-', text)
    
    # Replace remaining variants (including "Naeo" without trailing "cc")
    text = re.sub(r'\bNAEOCCC\b', 'energy operators', text)
    text = re.sub(r'\bNAEOC\b', 'energy mandates', text)
    text = re.sub(r'\bNAEO\b', 'energy operations', text)
    text = re.sub(r'\bNaeocc\b', 'energy operators', text)
    text = re.sub(r'\bNaeo\b', 'energy', text)
    text = re.sub(r'\bNAEO[A-Z]*\b', 'energy operations', text)
    
    # Clean up double-words
    text = re.sub(r'\benergy\s+energy\b', 'energy', text, flags=re.IGNORECASE)
    text = re.sub(r'\bthe\s+the\b', 'the', text, flags=re.IGNORECASE)
    text = re.sub(r',\s+,', ',', text)
    text = re.sub(r'(?<=\S) {2,}(?=\S)', ' ', text)
    
    return text

def fix_mandat_e(text):
    text = re.sub(r'THE MANDAT E', 'THE MANDATE', text)
    text = re.sub(r'The Mandat E\b', 'The Mandate', text)
    text = re.sub(r'the Mandat E\b', 'the Mandate', text)
    return text

def fix_blank_lines_between_bullets(text):
    # Remove blank line(s) between a bullet line and the next bullet line
    text = re.sub(r'^(\s*- .*)\n{2,}(?=\s*- )', r'\1\n', text, flags=re.MULTILINE)
    return text

def fix_orphaned_lines(text):
    """
    Fix orphaned pseudo-headings: plain text lines that look like headings.
    A line that:
    - does NOT start with #, -, >, [, *, |, or a number.
    - is ALL CAPS or Title Case (first letter of most words capitalized)
    - is between 5 and 80 chars
    - does NOT end with period, colon, or punctuation
    - is preceded by a blank line (or is at start of body)
    - is followed by a non-blank line
    → convert to ### gold subheading
    """
    lines = text.split('\n')
    result = []
    for i, line in enumerate(lines):
        stripped = line.strip()
        # Skip headings, list items, blockquotes, etc
        if not stripped:
            result.append(line)
            continue
        if stripped.startswith('#'):
            result.append(line)
            continue
        if stripped.startswith('- ') or stripped.startswith('>') or stripped.startswith('[') or stripped.startswith('* ') or stripped.startswith('|'):
            result.append(line)
            continue
        
        # Check if it looks like a heading
        is_heading_like = (
            len(stripped) >= 5 and
            len(stripped) <= 80 and
            not stripped.endswith('.') and
            not stripped.endswith(':') and
            not stripped.endswith(';') and
            not stripped.endswith(',') and
            not stripped.endswith('?') and
            not stripped.endswith('!') and
            not re.match(r'^\d', stripped)  # not starting with digit
        )
        
        # Check for Title Case or ALL CAPS
        if is_heading_like:
            words = stripped.split()
            if len(words) <= 1:
                result.append(line)
                continue
            upper_count = sum(1 for w in words if w[0].isupper() if w)
            total_alpha = sum(1 for w in words if w[0].isalpha() if w)
            if total_alpha > 0 and (upper_count / total_alpha) >= 0.6:
                # Check if preceded by empty line (or start of file)
                prev_empty = (i == 0 or (i > 0 and lines[i-1].strip() == ''))
                next_nonempty = (i+1 < len(lines) and lines[i+1].strip() != '')
                if prev_empty and next_nonempty:
                    result.append(f'### {stripped}')
                    continue
        
        result.append(line)
    
    return '\n'.join(result)

def fix_stuttering(text):
    """
    Fix text that repeats the heading/subheading words.
    E.g. "### Liquidity Architecture\\n\\nLiquidity architecture converts..." 
    → "### Liquidity Architecture\\n\\nThis converts..."
    """
    lines = text.split('\n')
    result = []
    i = 0
    while i < len(lines):
        line = lines[i]
        result.append(line)
        
        # Check if this line is a ### heading
        heading_match = re.match(r'^###\s+(.+)', line)
        if heading_match:
            heading_text = heading_match.group(1)
            # Normalize heading for comparison
            heading_norm = heading_text.lower().strip().rstrip('.')
            
            # Look ahead: skip blank lines, check next non-blank line
            j = i + 1
            while j < len(lines) and lines[j].strip() == '':
                j += 1
            if j < len(lines):
                next_line = lines[j].strip()
                # Extract first few words of next line
                next_words = next_line.split()[:8]
                next_start = ' '.join(next_words).lower().rstrip('.,;:')
                
                # If next line starts with the same words as heading
                heading_words = heading_norm.split()[:4]
                heading_start = ' '.join(heading_words).lower()
                
                if next_start.startswith(heading_start) and len(heading_words) >= 2:
                    # Replace the repeated words
                    rest = next_line
                    for hw in heading_words:
                        if rest.lower().startswith(hw.lower()):
                            rest = rest[len(hw):].lstrip()
                        else:
                            break
                    new_start = 'This '
                    result.append(lines[j].replace(next_line, new_start + rest))
                    # Skip the line we just replaced
                    i = j
        i += 1
    
    return '\n'.join(result)

def fix_casing_issues(text):
    """Fix common casing issues like 'Institutional INTRODUCTION'"""
    text = re.sub(r'\bINTRODUCTION\b', 'Introduction', text)
    text = re.sub(r'\bTHE MANDATE\b', 'The Mandate', text)
    # Also fix "INTRODUCTIO N" (broken word variant)
    text = re.sub(r'\bINTRODUCTIO N\b', 'Introduction', text)
    return text

def fix_em_dashes(text):
    """Replace em dashes with comma (safety net)"""
    text = re.sub(r' \u2014 ', ', ', text)
    text = re.sub(r'\u2014(\w)', r', \1', text)
    text = re.sub(r'(\w)\u2014', r'\1, ', text)
    return text

def clean_double_spaces(text):
    """Fix 'energy energy' and other double words, triple newlines.
       Preserves leading indentation (3-space bullet indentation etc.)."""
    text = re.sub(r'\b(\w+)\s+\1\b', r'\1', text)
    text = re.sub(r'\n{4,}', '\n\n\n', text)
    text = re.sub(r'(?<=\S)[ \t]{2,}(?=\S)', ' ', text)
    return text

def process_file(filepath, dry_run=False):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    parts = content.split('---', 2)
    if len(parts) < 3:
        print(f"  ⚠ Skipping (no frontmatter): {os.path.basename(filepath)}")
        return False
    
    frontmatter = parts[1]
    body = parts[2]
    original_body = body
    original_fm = frontmatter
    
    # Clean frontmatter description field too
    if 'description:' in frontmatter:
        for fix_fn in [remove_bible_verses, remove_naeo_references, fix_mandat_e, fix_em_dashes]:
            frontmatter = fix_fn(frontmatter)
    
    # Apply all fixes to body
    body = remove_bible_verses(body)
    body = remove_naeo_references(body)
    body = fix_mandat_e(body)
    body = fix_blank_lines_between_bullets(body)
    body = fix_orphaned_lines(body)
    body = fix_stuttering(body)
    body = fix_casing_issues(body)
    body = fix_em_dashes(body)
    body = clean_double_spaces(body)
    
    if body != original_body or frontmatter != original_fm:
        if dry_run:
            print(f"  🔍 Would fix: {os.path.basename(filepath)}")
            return True
        new_content = f'---{frontmatter}---{body}'
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"  ✅ Fixed: {os.path.basename(filepath)}")
        return True
    else:
        return False

def main():
    files = glob.glob(os.path.join(CONTENT_DIR, '*.md'))
    print(f"Found {len(files)} markdown files in {CONTENT_DIR}")
    
    dry_run = False
    import sys
    if '--dry-run' in sys.argv:
        dry_run = True
        print("🔍 DRY RUN MODE - no files will be changed")
    
    fixed_count = 0
    for filepath in sorted(files):
        if process_file(filepath, dry_run):
            fixed_count += 1
    
    mode = "Would fix" if dry_run else "Fixed"
    total_before = len(files)
    remaining = total_before - (fixed_count if not dry_run else 0)
    print(f"\n{mode} {fixed_count} of {total_before} files")
    if not dry_run:
        print(f"Unchanged: {remaining} files (already clean)")

if __name__ == '__main__':
    main()
