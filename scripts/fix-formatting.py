#!/usr/bin/env python3
"""
Bulk fix formatting issues across all intelligence articles:
1. Flat numbered lists → proper markdown lists
2. Lowercase list items → capitalized
3. Broken words ("Mandat E" → "MANDATE")
4. Step numbering corrections
5. Multiple H1 headings → H2
6. Fix spacing after headings
"""

import os
import re
import glob

CONTENT_DIR = os.path.join(os.path.dirname(__file__), '..', 'content', 'intelligence')

def fix_flat_numbered_lists(text):
    """Convert flat numbered lists like '1.\n\nText 2.\n\nText 3.\n\nText' to proper lists"""
    # Pattern: number at start of line followed by dot and space, but all on one paragraph
    # Fix cases where items are separated by double newlines but inline
    text = re.sub(
        r'(\d+)\.\s+(.*?)(?=\s+\d+\.\s|\Z)',
        lambda m: f'{m.group(1)}. {m.group(2)}',
        text
    )
    return text

def fix_inline_numbered_lists(text):
    """Fix lists where items are on same line: '1. Text 2. Text 3. Text'"""
    # Split into proper list items
    def fix_list(match):
        prefix = match.group(1)
        items_text = match.group(2)
        items = re.split(r'\s+(?=\d+\.\s)', items_text.strip())
        fixed = '\n\n'.join(items)
        return prefix + '\n' + fixed
    return text

def fix_broken_words(text):
    """Fix words broken across line breaks."""
    text = re.sub(r'THE MANDAT\n\nE', 'THE MANDATE', text)
    text = re.sub(r'MANDAT\n\nE', 'MANDATE', text)
    text = re.sub(r'INTRODUCTIO\n\nN', 'INTRODUCTION', text)
    text = re.sub(r'INTRODUCTIO N\b', 'INTRODUCTION', text)
    text = re.sub(r'Case s\b', 'Cases', text)
    return text

def fix_list_capitalization(text):
    """Fix list items starting with lowercase."""
    lines = text.split('\n')
    fixed = []
    for line in lines:
        stripped = line.lstrip()
        if stripped.startswith('- ') and stripped[2:3].islower():
            indent = line[:len(line) - len(stripped)]
            fixed.append(indent + '- ' + stripped[2].upper() + stripped[3:])
        elif re.match(r'^\d+\.\s', stripped) and stripped[re.match(r'^\d+\.\s', stripped).end():3].islower():
            # Find the match
            m = re.match(r'^(\s*)(\d+\.\s)(.)', line)
            if m:
                fixed.append(m.group(1) + m.group(2) + m.group(3).upper() + line[m.end():])
            else:
                fixed.append(line)
        else:
            fixed.append(line)
    return '\n'.join(fixed)

def fix_multiple_h1(text):
    """Convert multiple H1 headings to H2."""
    lines = text.split('\n')
    first_h1 = True
    fixed = []
    for line in lines:
        if line.startswith('# ') and not line.startswith('## ') and not line.startswith('### '):
            if first_h1:
                first_h1 = False
                fixed.append(line)
            else:
                fixed.append('##' + line[1:])
        else:
            fixed.append(line)
    return '\n'.join(fixed)

def fix_step_numbering(text):
    """Fix step numbering sequences that have wrong order."""
    # Known error: Step I, Step I, Step II, Step I, Step V
    step_order = ['I', 'II', 'III', 'IV', 'V']
    step_count = 0
    lines = text.split('\n')
    fixed = []
    for i, line in enumerate(lines):
        m = re.match(r'^(###\s*)Step\s+([IV]+):', line)
        if m and step_count < len(step_order):
            current_step = m.group(2)
            expected = step_order[step_count]
            if current_step != expected:
                # Check if next expected step matches somewhere
                if expected == step_order[step_count]:
                    line = m.group(1) + 'Step ' + expected + ':'
                    step_count += 1
                else:
                    step_count += 1
                    line = m.group(1) + 'Step ' + expected + ':'
            else:
                step_count += 1
        fixed.append(line)
    return '\n'.join(fixed)

def fix_heading_spacing(text):
    """Reduce excessive spacing between headings and content."""
    # Remove blank lines between headings and immediately following content
    text = re.sub(r'(#{1,3}\s+.*?)\n{3,}(?=\S)', r'\1\n\n', text)
    return text

def fix_paragraph_spacing(text):
    """Normalize paragraph spacing to max 2 newlines."""
    text = re.sub(r'\n{4,}', '\n\n\n', text)
    return text

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Split frontmatter from body
    parts = content.split('---', 2)
    if len(parts) < 3:
        print(f"  ⚠️  No valid frontmatter: {os.path.basename(filepath)}")
        return
    
    frontmatter = parts[1]
    body = parts[2]
    
    original_body = body
    
    # Apply fixes
    body = fix_broken_words(body)
    body = fix_list_capitalization(body)
    body = fix_multiple_h1(body)
    body = fix_step_numbering(body)
    body = fix_heading_spacing(body)
    body = fix_paragraph_spacing(body)
    
    if body != original_body:
        new_content = f'---{frontmatter}---{body}'
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"  ✅ Fixed: {os.path.basename(filepath)}")
        return True
    else:
        # print(f"  - No changes: {os.path.basename(filepath)}")
        return False

def main():
    files = glob.glob(os.path.join(CONTENT_DIR, '*.md'))
    print(f"Found {len(files)} markdown files")
    
    fixed_count = 0
    for filepath in sorted(files):
        if process_file(filepath):
            fixed_count += 1
    
    print(f"\nFixed {fixed_count} files")

if __name__ == '__main__':
    main()
