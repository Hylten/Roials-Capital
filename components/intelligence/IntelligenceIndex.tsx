import React, { useState, useEffect } from 'react';

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
      // New key-value pair
      const key = line.slice(0, colonIdx).trim();
      let rawVal = line.slice(colonIdx + 1).trim();

      // Detect YAML block scalar
      if (rawVal === '>-' || rawVal === '|' || rawVal === '>' || rawVal === '|-' || rawVal === '>-') {
        currentKey = key;
        currentIsBlock = true;
        data[key] = '';
        continue;
      }

      // Strip surrounding quotes
      if ((rawVal.startsWith('"') && rawVal.endsWith('"')) || (rawVal.startsWith("'") && rawVal.endsWith("'"))) {
        rawVal = rawVal.slice(1, -1);
      }

      if (key) {
        data[key] = rawVal;
        currentKey = key;
        currentIsBlock = false;
      }
    } else if (currentKey && currentIsBlock && line.trim()) {
      // Continuation of a YAML block scalar
      const separator = data[currentKey] ? ' ' : '';
      data[currentKey] += separator + line.trim();
    } else if (currentKey && !currentIsBlock && line.trim()) {
      // Continuation of a multi-line scalar with indentation (compact YAML)
      const separator = data[currentKey] ? ' ' : '';
      data[currentKey] += separator + line.trim();
    } else {
      currentKey = null;
      currentIsBlock = false;
    }
  }

  return { data, content };
}

// Extract a clean excerpt from content when description is missing/broken
function extractExcerpt(content: string, maxLength = 120): string {
  // Strip markdown heading markers
  let text = content.replace(/^#+\s*/gm, '');
  // Strip YAML frontmatter
  text = text.replace(/^---[\s\S]*?---\n*/m, '');
  // Strip bold/italic markers
  text = text.replace(/\*\*/g, '').replace(/\*/g, '');
  // Strip markdown links (keep text)
  text = text.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');
  // Strip list markers
  text = text.replace(/^[-*+]\s+/gm, '');
  text = text.replace(/^\d+\.\s+/gm, '');
  // Collapse whitespace
  text = text.replace(/\s+/g, ' ').trim();
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength).replace(/\s+\S*$/, '') + '...';
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
      description: (data.description && data.description !== '>-' && data.description !== '|' && data.description.length > 3)
        ? data.description
        : extractExcerpt(rawMarkdown),
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

    // Update Open Graph for Intelligence Index
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    const ogUrl = document.querySelector('meta[property="og:url"]');
    const canonical = document.querySelector('link[rel="canonical"]');
    const ogType = document.querySelector('meta[property="og:type"]');
    
    if (ogTitle) ogTitle.setAttribute('content', 'Intelligence | Roials Capital');
    if (ogDescription) ogDescription.setAttribute('content', 'Insights and perspectives on private credit, middle-market lending, and macroeconomics from Roials Capital.');
    if (ogUrl) ogUrl.setAttribute('content', 'https://roialscapital.com/intelligence/');
    if (canonical) canonical.setAttribute('href', 'https://roialscapital.com/intelligence/');
    if (ogType) ogType.setAttribute('content', 'website');

    // Remove any article schema from previous pages
    const existingSchema = document.getElementById('json-ld-schema');
    if (existingSchema) existingSchema.remove();
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
