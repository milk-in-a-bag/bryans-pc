"use client";

import { useState } from "react";

interface Post {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  tags: string[];
}

const POSTS: Post[] = [
  {
    slug: "building-scalable-apis",
    title: "Building Scalable REST APIs with Node.js",
    date: "Sep 10, 2026",
    readTime: "6 min read",
    excerpt:
      "A deep dive into designing APIs that hold up under load — covering rate limiting, caching strategies, and clean error handling.",
    tags: ["Node.js", "API", "Backend"],
  },
  {
    slug: "nextjs-app-router",
    title: "Lessons from the Next.js App Router",
    date: "Aug 22, 2026",
    readTime: "5 min read",
    excerpt:
      "After shipping several projects with the App Router, here are the patterns that stuck and the gotchas worth knowing about.",
    tags: ["Next.js", "React", "Frontend"],
  },
  {
    slug: "typescript-tips",
    title: "TypeScript Tips I Wish I Knew Earlier",
    date: "Jul 14, 2026",
    readTime: "4 min read",
    excerpt:
      "Practical utility types, discriminated unions, and a few patterns that cut boilerplate without sacrificing safety.",
    tags: ["TypeScript"],
  },
  {
    slug: "postgres-performance",
    title: "PostgreSQL Performance for Developers",
    date: "Jun 3, 2026",
    readTime: "7 min read",
    excerpt:
      "Indexing strategies, query planning, and connection pooling — the parts of Postgres that make the biggest difference.",
    tags: ["PostgreSQL", "Database", "Backend"],
  },
];

export default function BlogContent() {
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const allTags = Array.from(new Set(POSTS.flatMap((p) => p.tags)));
  const filtered = activeTag
    ? POSTS.filter((p) => p.tags.includes(activeTag))
    : POSTS;

  return (
    <div className="p-6 text-white/90 font-sans">
      <div className="max-w-3xl flex flex-col gap-5">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold text-white">Blog</h1>
          <span className="text-xs text-white/40">{POSTS.length} posts</span>
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveTag(null)}
            className={`text-[11px] px-3 py-1 rounded-full border transition-colors ${activeTag === null ? "bg-[#0078d4] border-[#0078d4] text-white" : "border-white/15 text-white/50 hover:border-white/30 hover:text-white/80"}`}
          >
            All
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag === activeTag ? null : tag)}
              className={`text-[11px] px-3 py-1 rounded-full border transition-colors ${activeTag === tag ? "bg-[#0078d4] border-[#0078d4] text-white" : "border-white/15 text-white/50 hover:border-white/30 hover:text-white/80"}`}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          {filtered.map((post) => (
            <article
              key={post.slug}
              className="rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/[0.07] transition-colors cursor-pointer group"
            >
              <h2 className="text-[14px] font-semibold text-white leading-snug group-hover:text-[#60cdff] transition-colors mb-2">
                {post.title}
              </h2>
              <p className="text-sm text-white/55 leading-relaxed mb-3">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between gap-3 flex-wrap">
                <div className="flex flex-wrap gap-1.5">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] px-2 py-0.5 rounded bg-white/10 text-white/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-2 text-[11px] text-white/35 shrink-0">
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-sm text-white/30 text-center py-8">
            No posts for this tag.
          </p>
        )}
      </div>
    </div>
  );
}
