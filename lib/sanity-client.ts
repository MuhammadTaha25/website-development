// Thin Sanity client wrapper. Until NEXT_PUBLIC_SANITY_PROJECT_ID is set, every
// exported getter falls back to the mock content in /content/mock-content.ts so the
// site runs end-to-end with zero external config. Once a real project ID + token are
// supplied, swap the bodies below for actual `client.fetch(...)` calls — the function
// signatures are designed to not require changes anywhere they're called from.
import { siteConfig } from "@/lib/config";
import {
  services as mockServices,
  blogPosts as mockBlogPosts,
  reviews as mockReviews,
  type Service,
  type BlogPost,
  type Review,
} from "@/content/mock-content";

export const isSanityConfigured = Boolean(siteConfig.sanity.projectId);

// TODO: once isSanityConfigured is true, replace these with @sanity/client calls, e.g.:
// import { createClient } from "next-sanity";
// export const sanityClient = createClient({
//   projectId: siteConfig.sanity.projectId,
//   dataset: siteConfig.sanity.dataset,
//   apiVersion: "2024-01-01",
//   token: siteConfig.sanity.readToken,
//   useCdn: true,
// });

export async function getServices(): Promise<Service[]> {
  return mockServices;
}

export async function getServiceBySlug(slug: string): Promise<Service | undefined> {
  return mockServices.find((s) => s.slug === slug);
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  return mockBlogPosts;
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
  return mockBlogPosts.find((p) => p.slug === slug);
}

export async function getReviews(): Promise<Review[]> {
  return mockReviews;
}
