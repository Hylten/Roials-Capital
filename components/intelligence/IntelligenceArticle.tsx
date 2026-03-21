import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

// Browser-safe frontmatter parser (no gray-matter / no Buffer needed)
function parseFrontmatter(raw: string) {
    const match = raw.match(/^---\s*([\s\S]*?)\s*---\s*([\s\S]*)$/);
    if (!match) return { data: {} as Record<string, string>, content: raw };

    const frontmatter = match[1];
    const content = match[2];
    const data: Record<string, string> = {};

    // Standard YAML-style key parsing (handles multiline)
    const lines = frontmatter.split(/\n/);
    lines.forEach(line => {
        const colonIdx = line.indexOf(':');
        if (colonIdx !== -1) {
            const key = line.slice(0, colonIdx).trim();
            let value = line.slice(colonIdx + 1).trim();
            // Only set if not set yet, or if this looks like a cleaner line-based set
            if (key && !data[key]) {
                if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
                    value = value.slice(1, -1);
                }
                data[key] = value;
            }
        }
    });

    // Fallback / Enhanced parsing for single-line or mashed keys
    // This regex matches keys that might contain hyphens/underscores and values that are quoted OR unquoted
    const pairs = frontmatter.match(/([\w-]+):\s*(?:"([^"]*)"|'([^']*)'|([^ \n,]+))/g);
    if (pairs) {
        pairs.forEach(pair => {
            const cIdx = pair.indexOf(':');
            const k = pair.slice(0, cIdx).trim();
            let v = pair.slice(cIdx + 1).trim();
            if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) {
                v = v.slice(1, -1);
            }
            // If the line-based parser caught a "leaking" line (multiple keys on one line), 
            // the regex-based one here will provide much cleaner values.
            // So we prioritize regex matches for common keys.
            if (k) data[k] = v;
        });
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
                    setContent(foundPost.body);
                    setMeta(foundPost.meta);

                    if (foundPost.meta.title) {
                        document.title = `${foundPost.meta.title} | Roials Capital Intelligence`;
                    }
                    if (foundPost.meta.description) {
                        const metaDescription = document.querySelector('meta[name="description"]');
                        if (metaDescription) {
                            metaDescription.setAttribute('content', foundPost.meta.description);
                        }
                    }
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

                {meta.description && (
                    <p className="font-sans text-xl text-platinum/70 leading-relaxed font-light">
                        {meta.description}
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
                .article-content p { margin-bottom: 4.5rem; }
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
