import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config";
import { services, blogPosts } from "@/content/mock-content";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/services",
    "/emergency-dentist-austin",
    "/about",
    "/smile-gallery",
    "/reviews",
    "/new-patients",
    "/insurance-financing",
    "/blog",
    "/contact",
    "/privacy-policy",
    "/accessibility-statement",
    "/terms",
  ].map((path) => ({
    url: `${siteConfig.siteUrl}${path}`,
    lastModified: new Date(),
  }));

  const serviceRoutes = services.map((service) => ({
    url: `${siteConfig.siteUrl}/services/${service.slug}`,
    lastModified: new Date(),
  }));

  const blogRoutes = blogPosts.map((post) => ({
    url: `${siteConfig.siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
  }));

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes];
}
