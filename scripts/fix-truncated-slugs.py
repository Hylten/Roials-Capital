#!/usr/bin/env python3
"""Fix truncated filenames/slugs in remaining intelligence articles."""

import os, re, shutil

CONTENT_DIR = os.path.join(os.path.dirname(__file__), '..', 'content', 'intelligence')

# Map of old filename -> new slug
# Map of old filename -> new filename
FIXES = {
    'institutional-frameworks-for-private-debt-originat.md': 'institutional-frameworks-for-private-debt-origination.md',
    'institutional-grade-infrastructure-for-global-capi.md': 'institutional-grade-infrastructure-for-global-capital-markets.md',
    'structural-integrity-the-roials-capital-underwrit.md': 'structural-integrity-the-roials-capital-underwriting-standard.md',
    'topological-asset-architecture-frameworks-for-mult.md': 'topological-asset-architecture-frameworks-for-multi-layer-portfolios-using-the-sovereign-protocol-technique.md',
    'debt-structure-harmonization-for-sovereign-class-c.md': 'debt-structure-harmonization-for-sovereign-class-capital-flows-using-the-mathematical-axiom.md',
    'covenant-tolerant-capital-routing-for-multi-asset.md': 'covenant-tolerant-capital-routing-for-multi-asset-frameworks-via-frictionless-technical-engineering.md',
    'sovereign-debt-strategies-and-the-flight-to-crypto-backed-abl-the-new-architecture-for-uhnw-liquidit.md': 'sovereign-debt-strategies-and-the-flight-to-crypto-backed-abl-the-new-architecture-for-uhnw-liquidity.md',
    'multiasset-hardening-for-fund-iii-integrating-digital-assets-into-institutional-liquidity-engineerin.md': 'multiasset-hardening-for-fund-iii-integrating-digital-assets-into-institutional-liquidity-engineering-architecture.md',
}

def extract_and_fix_fm(content, new_slug):
    """Replace slug in frontmatter with new value."""
    parts = content.split('---', 2)
    if len(parts) < 3:
        return content
    fm = parts[1]
    body = parts[2]
    
    # Replace slug line if it exists
    if re.search(r'^slug:', fm, re.MULTILINE):
        fm = re.sub(r'^slug:.*$', f'slug: {new_slug}', fm, flags=re.MULTILINE)
    else:
        fm += f'\nslug: {new_slug}\n'
    
    return f'---{fm}---{body}'

def main():
    for old_name, new_name in FIXES.items():
        old_path = os.path.join(CONTENT_DIR, old_name)
        new_path = os.path.join(CONTENT_DIR, new_name)
        
        if not os.path.exists(old_path):
            print(f"  NOT FOUND: {old_name}")
            continue
        
        with open(old_path) as f:
            content = f.read()
        
        # Extract new slug (without .md)
        new_slug = new_name.replace('.md', '')
        
        # Fix frontmatter
        fixed = extract_and_fix_fm(content, new_slug)
        
        # Write to new filename
        with open(new_path, 'w') as f:
            f.write(fixed)
        
        # Remove old file
        os.remove(old_path)
        print(f"  FIXED: {old_name} -> {new_name}")

if __name__ == '__main__':
    main()
