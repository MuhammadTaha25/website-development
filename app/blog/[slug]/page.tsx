import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { getBlogPosts, getBlogPostBySlug } from "@/lib/sanity-client";
import CtaBanner from "@/components/CtaBanner";

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post) return {};
  return pageMetadata(post.title, post.excerpt, `/blog/${slug}`);
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
        <Link href="/blog" className="text-sm font-semibold text-brand-600 hover:text-brand-700">
          ← Back to Blog
        </Link>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-brand-900 sm:text-4xl">
          {post.title}
        </h1>
        <p className="mt-2 text-sm text-neutral-500">
          {new Date(post.publishedAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}{" "}
          &middot; {post.author}
        </p>

        <div className="mt-8 flex flex-col gap-5">
          {post.content.map((paragraph, i) => (
            <p key={i} className="text-base leading-relaxed text-neutral-700">
              {paragraph}
            </p>
          ))}
        </div>
      </article>

      <CtaBanner />
    </>
  );
}
