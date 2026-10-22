import Link from "next/link";
import Image from "next/image";
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
  return pageMetadata(post.title, post.metaDescription ?? post.excerpt, `/blog/${slug}`);
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
          &middot; By {post.author}
          {post.reviewedBy ? <> &middot; {post.reviewedBy}</> : null}
        </p>

        {post.coverImage ? (
          <div className="relative mt-6 aspect-[16/9] w-full overflow-hidden rounded-2xl">
            <Image
              src={post.coverImage}
              alt={post.coverImageAlt ?? post.title}
              fill
              priority
              className="object-cover"
            />
          </div>
        ) : null}

        <div
          className="prose-blog mt-8 flex flex-col gap-5 [&_h2]:mt-6 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-brand-800 [&_li]:ml-5 [&_li]:list-disc [&_li]:text-base [&_li]:leading-relaxed [&_li]:text-neutral-700 [&_p]:text-base [&_p]:leading-relaxed [&_p]:text-neutral-700 [&_a]:font-semibold [&_a]:text-brand-600 [&_a]:underline [&_a:hover]:text-brand-700 [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-2"
        >
          {post.content.map((block, i) => (
            <div key={i} dangerouslySetInnerHTML={{ __html: block }} />
          ))}
        </div>

        {post.authorCredentials ? (
          <div className="mt-12 rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
            <p className="text-sm font-semibold text-brand-800">About the author</p>
            <p className="mt-1 text-sm leading-relaxed text-neutral-600">
              {post.author} — {post.authorCredentials}
            </p>
          </div>
        ) : null}
      </article>

      <CtaBanner />
    </>
  );
}
