import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
};

const posts = [
  {
    slug: "the-basic-idea",
    title: "The basic IDea",
    date: "2021-12-16",
    excerpt:
      "Imagine people living in the flight path of an airport. For example, the Rhine-Main Airport in Frankfurt, Germany. Maybe they personally rarely or never fly. But they are affected by the airport\u2019s impact every day. It\u2019s noisy, it stinks, and the air they breathe is sometimes unpleasant and perhaps even harmful. They should be compensated\u2026",
  },
];

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-[650px]">
      <h1 className="mb-[clamp(1.8rem,1.8rem+((1vw-0.48rem)*2.885),3rem)]">
        Blog
      </h1>

      <div className="space-y-12">
        {posts.map((post) => (
          <article key={post.slug}>
            <h2 className="mb-3">
              <Link
                href={`/blog/${post.slug}`}
                className="no-underline hover:underline"
              >
                {post.title}
              </Link>
            </h2>
            <p className="mb-2 text-gray-600">{post.excerpt}</p>
            <time className="text-sm text-gray-400" dateTime={post.date}>
              {post.date}
            </time>
          </article>
        ))}
      </div>
    </div>
  );
}
