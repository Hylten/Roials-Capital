#!/usr/bin/env python3
"""
Deduplicate intelligence articles by grouping similar titles and 
keeping the most complete version.
"""

import os, re, glob, shutil, json

CONTENT_DIR = os.path.join(os.path.dirname(__file__), '..', 'content', 'intelligence')
BACKUP_DIR = os.path.join(os.path.dirname(__file__), '..', 'content', '_duplicates')

def extract_fm(content):
    parts = content.split('---', 2)
    if len(parts) < 3:
        return None, content
    return parts[1], parts[2]

def get_meta(content):
    fm, body = extract_fm(content)
    if not fm:
        return {}
    meta = {}
    m = re.search(r"title:\s*['\"]?(.+?)['\"]?\s*$", fm, re.MULTILINE)
    if m: meta['title'] = m.group(1).strip().rstrip('>').strip()
    m = re.search(r"date:\s*'([^']+)'", fm)
    if m: meta['date'] = m.group(1)
    m = re.search(r"slug:\s*['\"]?(.+?)['\"]?\s*$", fm, re.MULTILINE)
    if m: meta['slug'] = m.group(1).strip().strip('>').strip()
    return meta

def normalize_title(title):
    """Normalize title for comparison."""
    t = title.lower().strip()
    # Remove common suffixes
    t = re.sub(r'\s*(for|in|of|the|and)\s*$', '', t)
    t = re.sub(r'[^a-z0-9\s]', '', t)
    t = re.sub(r'\s+', ' ', t).strip()
    return t

def find_duplicate_groups(files):
    """Group files by normalized title similarity."""
    articles = []
    for f in files:
        with open(f) as fh:
            content = fh.read()
        meta = get_meta(content)
        title = meta.get('title', '')
        wc = len(content.split())
        articles.append({
            'path': f,
            'filename': os.path.basename(f),
            'title': title,
            'norm': normalize_title(title),
            'slug': meta.get('slug', ''),
            'date': meta.get('date', '0000-00-00'),
            'wc': wc,
            'fm_length': len(extract_fm(content)[0]) if extract_fm(content)[0] else 0,
        })
    
    # Group by normalized title
    groups = {}
    for a in articles:
        norm = a['norm']
        if not norm or len(norm) < 10:
            continue
        # Find matching group
        found = False
        for key in list(groups.keys()):
            if key == norm or key.startswith(norm[:20]) or norm.startswith(key[:20]):
                groups[key].append(a)
                found = True
                break
        if not found:
            groups[norm] = [a]
    
    # Filter to groups with 2+ members
    dup_groups = {k: v for k, v in groups.items() if len(v) >= 2}
    return dup_groups

def select_best(articles):
    """Among duplicates, select the best one to keep."""
    # Sort by word count desc (keep most complete)
    sorted_arts = sorted(articles, key=lambda a: (-a['wc'], -len(a['slug'])))
    return sorted_arts[0]

def main():
    files = sorted(glob.glob(os.path.join(CONTENT_DIR, '*.md')))
    print(f"Total files: {len(files)}")
    
    groups = find_duplicate_groups(files)
    print(f"Duplicate groups: {len(groups)}")
    
    all_to_remove = []
    
    for norm, articles in sorted(groups.items()):
        print(f"\nGroup: '{norm}' ({len(articles)} articles)")
        for a in articles:
            print(f"  [{a['date']}] {a['wc']:5d}w - {a['filename']}")
        
        best = select_best(articles)
        print(f"  => KEEP: {best['filename']} ({best['wc']}w)")
        
        for a in articles:
            if a['path'] != best['path']:
                all_to_remove.append(a['path'])
    
    print(f"\n\n=== SUMMARY ===")
    print(f"Files to remove: {len(all_to_remove)}")
    print(f"Files to keep: {len(files) - len(all_to_remove)}")
    
    # Confirm and execute
    print(f"\nMoving {len(all_to_remove)} duplicates to {BACKUP_DIR}")
    os.makedirs(BACKUP_DIR, exist_ok=True)
    
    for path in all_to_remove:
        dst = os.path.join(BACKUP_DIR, os.path.basename(path))
        shutil.move(path, dst)
        print(f"  MOVED: {os.path.basename(path)}")
    
    remaining = glob.glob(os.path.join(CONTENT_DIR, '*.md'))
    print(f"\nRemaining files: {len(remaining)}")

if __name__ == '__main__':
    main()
