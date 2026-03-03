import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import matter from 'gray-matter';

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
                // Vite's import.meta.glob is statically analyzable and resolves at build time.
                // We load all raw markdown files and find the one matching the current slug.
                const postsGlob = import.meta.glob('../../content/intelligence/*.md', { query: '?raw', eager: true });

                let foundPost = null;

                // Find the matched file by checking its frontmatter slug or filename
                for (const [filepath, fileContent] of Object.entries(postsGlob)) {
                    const rawMarkdown = (fileContent as any).default;
                    const { data, content: markdownBody } = matter(rawMarkdown);

                    const fileSlug = data.slug || filepath.split('/').pop()?.replace('.md', '');

                    if (fileSlug === slug) {
                        foundPost = { meta: data, body: markdownBody };
                        break;
                    }
                }

                if (foundPost) {
                    setContent(foundPost.body);
                    setMeta(foundPost.meta);

                    // Update SEO dynamically
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
        return <div className="min-h-screen bg-obsidian"></div>; // Loading state
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

            <div className="prose prose-invert prose-p:font-sans prose-p:font-light prose-p:leading-relaxed prose-p:text-platinum/80 prose-headings:font-display prose-headings:font-normal prose-headings:text-platinum prose-h1:text-4xl prose-h2:text-3xl prose-h2:mt-12 prose-h3:text-2xl prose-h3:mt-8 prose-a:text-oldgold prose-strong:font-bold prose-strong:text-white prose-ol:text-platinum/80 prose-ul:text-platinum/80 border-b border-white/10 pb-16">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {content}
                </ReactMarkdown>
            </div>

            <footer className="mt-16 text-center">
                <p className="font-sans text-sm text-platinum/40 tracking-wider">
                    &copy; {new Date().getFullYear()} Roials Capital Intelligence. All rights reserved.
                </p>
            </footer>
        </article>
    );
};
