import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/config";
import { getBlogPosts } from "@/lib/sanity-client";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = pageMetadata(
  "Dental Health Blog",
  `Tips and insights on dental health and treatment from ${siteConfig.practiceName} in ${siteConfig.address.city}, ${siteConfig.address.state}.`,
  "/blog",
);

export default async function BlogIndexPage() {
  const posts = await getBlogPosts();

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Dental Health Tips & News"
        description="Helpful articles from our clinical team on keeping your smile healthy."
      />

      <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
        <div className="flex flex-col gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white transition hover:border-brand-300 hover:shadow-md"
            >
              {post.coverImage ? (
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src={post.coverImage}
                    alt={post.coverImageAlt ?? post.title}
                    fill
                    className="object-cover"
                  />
                </div>
              ) : null}
              <div className="p-6">
              <p className="text-xs font-medium text-neutral-500">
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}{" "}
                &middot; {post.author}
              </p>
              <h2 className="mt-2 text-xl font-semibold text-brand-800 group-hover:text-brand-600">
                {post.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">{post.excerpt}</p>
              <span className="mt-3 inline-block text-sm font-semibold text-brand-600">
                Read more →
              </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
