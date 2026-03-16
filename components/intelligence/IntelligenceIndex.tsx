import React, { useState, useEffect } from 'react';

// Browser-safe frontmatter parser (no gray-matter / no Buffer needed)
function parseFrontmatter(raw: string) {
  const lines = raw.split(/\r?\n/);
  if (!lines[0] || lines[0].trim() !== '---') return { data: {} as Record<string, string>, content: raw };

  const data: Record<string, string> = {};
  let i = 1;
  while (i < lines.length && !lines[i].trim().startsWith('---')) {
    const line = lines[i];
    const colonIdx = line.indexOf(':');
    if (colonIdx !== -1) {
      const key = line.slice(0, colonIdx).trim();
      let value = line.slice(colonIdx + 1).trim();
      if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1);
      }
      data[key] = value;
    }
    i++;
  }

  const content = lines.slice(i + 1).join('\n');
  return { data, content };
}

// Helper to parse the raw markdown files imported by Vite
const getPosts = () => {
  const postsGlob = import.meta.glob('../../content/intelligence/*.md', { query: '?raw', eager: true });

  const posts = Object.entries(postsGlob).map(([filepath, content]) => {
    const rawMarkdown = (content as any).default;
    const { data } = parseFrontmatter(rawMarkdown);

    return {
      slug: data.slug || filepath.split('/').pop()?.replace('.md', ''),
      title: data.title || 'Untitled',
      description: data.description || '',
      date: data.date || '',
      author: data.author || 'Roials Capital',
    };
  });

  // Sort by date descending
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export const IntelligenceIndex: React.FC = () => {
  const [posts, setPosts] = useState<ReturnType<typeof getPosts>>([]);

  useEffect(() => {
    setPosts(getPosts());

    // Update SEO tags for the index page
    document.title = 'Intelligence | Roials Capital';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Insights and perspectives on private credit, middle-market lending, and macroeconomics from Roials Capital.');
    }
  }, []);

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-4xl mx-auto min-h-screen">
      <div className="mb-24">
        <h1 className="font-display text-4xl md:text-6xl text-platinum mb-8 uppercase tracking-wider">
          Intelligence
        </h1>
        <div className="w-24 h-1 bg-oldgold mb-12"></div>
        <p className="font-sans text-lg text-platinum/70 font-light leading-relaxed max-w-2xl">
          Proprietary intelligence on asset hardening, institutional migration, and the structural mechanics of Fund III+ expansions.
        </p>
      </div>

      <div className="space-y-24">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="group border-b border-white/10 pb-20 hover:border-oldgold/50 transition-colors duration-500"
          >
            <a href={`/intelligence/${post.slug}`} className="block">
              <div className="flex flex-col md:flex-row md:items-baseline gap-4 mb-8">
                <time className="font-sans text-sm text-oldgold uppercase tracking-widest font-bold">
                  {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </time>
                <span className="hidden md:inline text-white/20 px-2">•</span>
                <span className="font-sans text-sm text-platinum/50 uppercase tracking-wider">
                  {post.author}
                </span>
              </div>

              <h2 className="font-display text-2xl md:text-3xl text-platinum group-hover:text-oldgold transition-colors duration-300 mb-8 leading-tight">
                {post.title}
              </h2>

              <p className="font-sans text-platinum/70 text-lg leading-relaxed font-light mb-10 line-clamp-3">
                {post.description}
              </p>

              <div className="inline-flex items-center gap-2 text-oldgold font-sans text-xs tracking-[0.2em] uppercase font-bold group-hover:translate-x-2 transition-transform duration-300">
                Read Analysis
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </div>
            </a>
          </article>
        ))}

        {posts.length === 0 && (
          <div className="flex flex-col items-center gap-8">
            <div className="w-full text-center py-24 border border-white/5 bg-white/[0.02]">
              <p className="text-platinum/50 font-sans tracking-wide">Intelligence access is restricted to mandated partners. Public briefings are released periodically.</p>
            </div>
            <a
              href="/"
              className="inline-flex items-center gap-2 px-8 py-4 border border-oldgold/30 hover:bg-oldgold/10 hover:border-oldgold text-oldgold font-sans text-xs tracking-[0.2em] font-bold uppercase transition-all duration-300"
            >
              Return to Home
            </a>
          </div>
        )}
      </div>
    </div>
  );
};
