import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

// Safety-net preprocessor for formatting issues
function preprocessMarkdown(markdown: string): string {
  let text = markdown;

  // Fix broken words
  text = text.replace(/INTRODUCTIO\n\nN/g, 'INTRODUCTION\n\n');
  text = text.replace(/INTRODUCTIO N /g, 'INTRODUCTION ');
  text = text.replace(/THE MANDAT\n\nE/g, 'THE MANDATE\n\n');
  text = text.replace(/MANDAT\n\nE/g, 'MANDATE\n\n');
  text = text.replace(/Case s\b/g, 'Cases');

  // Fix fake bullet lists
  text = text.replace(/^[•●○▪►]\s*/gm, '- ');

  // Remove AI junk fragments
  text = text.replace(/^TECHNICAL MANDATE$[\s\S]*?(?=\n##|\n---|$)/gm, '');
  text = text.replace(/^Access is restricted to approved mandates.*$/gm, '');
  text = text.replace(/^Minimum target size:.*\$5M\+.*$/gm, '');

  // Fix ALL-CAPS pseudo-headings merged with body text
  text = text.replace(/^([A-Z][A-Z\s:']{7,70})\s+([A-Z][a-z].+)$/gm, (_, heading, body) => {
    const h = heading.trim();
    const letters = h.replace(/[^A-Za-z]/g, '');
    const upperCount = letters.split('').filter(c => c >= 'A' && c <= 'Z').length;
    if (upperCount / letters.length >= 0.65 && h.split(/\s+/).length >= 2) {
      const titleCased = h.toLowerCase().split(/\s+/).map((w: string, i: number, a: string[]) => {
        const keepLower = ['the', 'of', 'in', 'and', 'or', 'at', 'to', 'for', 'with', 'by', 'a', 'an'];
        if (i > 0 && keepLower.includes(w) && a[i - 1] !== ':') return w;
        return w.charAt(0).toUpperCase() + w.slice(1);
      }).join(' ').replace(/ : /g, ': ');
      return `## ${titleCased}\n\n${body}`;
    }
    return _;
  });

  // Fix numbered lists with blank lines
  text = text.replace(/^(\d+)\.\s*\n\n+/gm, '$1. ');

  return text;
}

// Browser-safe frontmatter parser (no gray-matter / no Buffer needed)
function parseFrontmatter(raw: string) {
  const match = raw.match(/^\s*---\s*([\s\S]*?)\s*---\s*([\s\S]*)$/);
  if (!match) return { data: {} as Record<string, string>, content: raw };

  const frontmatter = match[1];
  const content = match[2].trim();
  const data: Record<string, string> = {};

  // Parse YAML frontmatter line by line, handling block scalars (>-, |, etc.)
  const lines = frontmatter.split(/\n/);
  let currentKey: string | null = null;
  let currentIsBlock = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const colonIdx = line.indexOf(':');

    if (colonIdx !== -1 && !line.startsWith(' ') && !line.startsWith('\t')) {
      const key = line.slice(0, colonIdx).trim();
      let rawVal = line.slice(colonIdx + 1).trim();

      if (rawVal === '>-' || rawVal === '|' || rawVal === '>' || rawVal === '|-' || rawVal === '>-') {
        currentKey = key;
        currentIsBlock = true;
        data[key] = '';
        continue;
      }

      if ((rawVal.startsWith('"') && rawVal.endsWith('"')) || (rawVal.startsWith("'") && rawVal.endsWith("'"))) {
        rawVal = rawVal.slice(1, -1);
      }

      if (key) {
        data[key] = rawVal;
        currentKey = key;
        currentIsBlock = false;
      }
    } else if (currentKey && currentIsBlock && line.trim()) {
      const separator = data[currentKey] ? ' ' : '';
      data[currentKey] += separator + line.trim();
    } else if (currentKey && !currentIsBlock && line.trim()) {
      const separator = data[currentKey] ? ' ' : '';
      data[currentKey] += separator + line.trim();
    } else {
      currentKey = null;
      currentIsBlock = false;
    }
  }

  return { data, content };
}

interface IntelligenceArticleProps {
    slug: string;
}

export const IntelligenceArticle: React.FC<IntelligenceArticleProps> = ({ slug }) => {
    const [content, setContent] = useState('');
    const [meta, setMeta] = useState<any>({});
    const [error, setError] = useState(false);

    useEffect(() => {
        const loadContent = async () => {
            try {
                const postsGlob = import.meta.glob('../../content/intelligence/*.md', { query: '?raw', eager: true });

                let foundPost = null;

                for (const [filepath, fileContent] of Object.entries(postsGlob)) {
                    const rawMarkdown = (fileContent as any).default;
                    const { data, content: markdownBody } = parseFrontmatter(rawMarkdown);

                    const fileSlug = data.slug || filepath.split('/').pop()?.replace('.md', '');

                    if (fileSlug === slug) {
                        foundPost = { meta: data, body: markdownBody };
                        break;
                    }
                }

                if (foundPost) {
                    setContent(preprocessMarkdown(foundPost.body));
                    setMeta(foundPost.meta);

                    const articleUrl = `https://roialscapital.com/intelligence/${slug}`;
                    
                    if (foundPost.meta.title) {
                        document.title = `${foundPost.meta.title} | Roials Capital Intelligence`;
                    }
                    const cleanDesc = foundPost.meta.description
                        ?.replace(/\n+/g, ' ')
                        .replace(/\s+/g, ' ')
                        .trim();
                    if (cleanDesc && !cleanDesc.match(/^[\s>-]+$/)) {
                        const metaDescription = document.querySelector('meta[name="description"]');
                        if (metaDescription) {
                            metaDescription.setAttribute('content', cleanDesc);
                        }
                    }

                    // Update Open Graph tags dynamically
                    const ogTitle = document.querySelector('meta[property="og:title"]');
                    const ogDescription = document.querySelector('meta[property="og:description"]');
                    const ogUrl = document.querySelector('meta[property="og:url"]');
                    const ogType = document.querySelector('meta[property="og:type"]');
                    const canonical = document.querySelector('link[rel="canonical"]');
                    
                    if (ogTitle) ogTitle.setAttribute('content', foundPost.meta.title || 'Intelligence | Roials Capital');
                    if (ogDescription) ogDescription.setAttribute('content', cleanDesc || '');
                    if (ogUrl) ogUrl.setAttribute('content', articleUrl);
                    if (ogType) ogType.setAttribute('content', 'article');
                    if (canonical) canonical.setAttribute('href', articleUrl);

                    // Inject Schema.org JSON-LD
                    const existingScript = document.getElementById('json-ld-schema');
                    if (existingScript) existingScript.remove();
                    
                    const schemaScript = document.createElement('script');
                    schemaScript.id = 'json-ld-schema';
                    schemaScript.type = 'application/ld+json';
                    schemaScript.textContent = JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": foundPost.meta.title,
                        "description": foundPost.meta.description,
                        "author": {
                            "@type": "Organization",
                            "name": foundPost.meta.author || 'Roials Capital'
                        },
                        "datePublished": foundPost.meta.date,
                        "dateModified": foundPost.meta.date,
                        "url": articleUrl,
                        "publisher": {
                            "@type": "Organization",
                            "name": "Roials Capital",
                            "logo": {
                                "@type": "ImageObject",
                                "url": "https://roialscapital.com/logo.png"
                            }
                        },
                        "mainEntityOfPage": {
                            "@type": "WebPage",
                            "@id": articleUrl
                        }
                    });
                    document.head.appendChild(schemaScript);
                } else {
                    setError(true);
                }
            } catch (e) {
                console.error("Failed to load article:", e);
                setError(true);
            }
        };

        loadContent();
        window.scrollTo(0, 0);
    }, [slug]);

    if (error) {
        return (
            <div className="pt-32 pb-24 px-6 text-center min-h-screen flex flex-col items-center justify-center">
                <h1 className="text-2xl text-platinum font-display uppercase tracking-widest mb-4">Report Not Found</h1>
                <a href="/intelligence" className="text-oldgold font-sans tracking-widest uppercase text-sm hover:text-white transition-colors">
                    Return to Intelligence
                </a>
            </div>
        );
    }

    if (!content) {
        return <div className="min-h-screen bg-obsidian"></div>;
    }

    return (
        <article className="pt-32 pb-24 px-6 md:px-12 max-w-3xl mx-auto min-h-screen">
            <a
                href="/intelligence"
                className="inline-flex items-center gap-2 text-oldgold/70 hover:text-oldgold font-sans text-xs tracking-[0.2em] font-bold uppercase mb-12 transition-colors duration-300"
            >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 12H5"></path>
                    <path d="M12 19l-7-7 7-7"></path>
                </svg>
                Back to Index
            </a>

            <header className="mb-16 border-b border-white/10 pb-12">
                <div className="flex flex-col md:flex-row md:items-baseline gap-4 mb-6">
                    <time className="font-sans text-sm text-oldgold uppercase tracking-widest font-bold">
                        {meta.date ? new Date(meta.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : ''}
                    </time>
                    <span className="hidden md:inline text-white/20 px-2">•</span>
                    <span className="font-sans text-sm text-platinum/50 uppercase tracking-wider">
                        {meta.author || 'Roials Capital'}
                    </span>
                </div>

                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-platinum mb-8 leading-tight">
                    {meta.title}
                </h1>

                {meta.description && !meta.description.match(/^[\s>-]+$/) && (
                    <p className="font-sans text-xl text-platinum/70 leading-relaxed font-light">
                        {meta.description.replace(/\n+/g, ' ')}
                    </p>
                )}
            </header>

            <div className="article-content" style={{ color: 'rgba(229, 231, 235, 0.7)', fontSize: '1.15rem', fontWeight: 300, fontFamily: "'Inter', sans-serif" }}>
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {content}
                </ReactMarkdown>
            </div>

            <style>{`
                .article-content { line-height: 2.4; -webkit-font-smoothing: antialiased; }
                .article-content p { margin-bottom: 2.5rem; }
                .article-content h2 { font-family: 'Cormorant Garamond', serif; font-size: 2.6rem; margin-top: 6rem; margin-bottom: 3rem; color: #fff; line-height: 1.2; font-weight: 300; }
                .article-content h3 { font-family: 'Cormorant Garamond', serif; font-size: 1.8rem; margin-top: 4.5rem; margin-bottom: 2.5rem; color: #fff; font-weight: 400; }
                .article-content ul, .article-content ol { margin-bottom: 3.5rem; padding-left: 2rem; }
                .article-content li { margin-bottom: 1.5rem; }
                .article-content hr { border: 0; border-top: 1px solid rgba(255,255,255,0.1); margin: 6rem 0; }
                .article-content strong { color: #fff; font-weight: 500; }
                .article-content a { color: #C5A059; text-decoration: underline; text-underline-offset: 4px; }
                .article-content blockquote { border-left: 1px solid #C5A059; padding-left: 1.5rem; margin: 4.5rem 0; font-style: italic; color: rgba(229, 231, 235, 0.5); }
            `}</style>

            <footer className="mt-16 text-center">
                <p className="font-sans text-sm text-platinum/40 tracking-wider">
                    &copy; {new Date().getFullYear()} Roials Capital Intelligence. All rights reserved.
                </p>
            </footer>
        </article>
    );
};
