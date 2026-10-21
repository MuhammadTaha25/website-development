import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/config";
import { getReviews } from "@/lib/sanity-client";
import { aggregateRating } from "@/content/mock-content";
import { aggregateRatingSchema } from "@/lib/schema";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = pageMetadata(
  "Patient Reviews",
  `Read reviews from patients of ${siteConfig.practiceName} in ${siteConfig.address.city}, ${siteConfig.address.state}.`,
  "/reviews",
);

export default async function ReviewsPage() {
  const reviews = await getReviews();

  return (
    <>
      <JsonLd data={aggregateRatingSchema(aggregateRating.ratingValue, aggregateRating.reviewCount)} />

      <PageHero
        eyebrow="Patient Reviews"
        title="What Our Patients Are Saying"
        description={`Rated ${aggregateRating.ratingValue} out of 5 based on ${aggregateRating.reviewCount} reviews.`}
      />

      <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
        <div className="flex flex-col gap-6">
          {reviews.map((review) => (
            <figure key={review.author} className="rounded-2xl border border-neutral-200 bg-white p-6">
              <div aria-label={`${review.rating} out of 5 stars`} className="text-accent-500">
                {"★".repeat(review.rating)}
                <span className="text-neutral-300">{"★".repeat(5 - review.rating)}</span>
              </div>
              <blockquote className="mt-3 text-base leading-relaxed text-neutral-700">
                “{review.text}”
              </blockquote>
              <figcaption className="mt-3 text-sm font-semibold text-neutral-800">
                {review.author}{" "}
                <span className="font-normal text-neutral-500">
                  &middot;{" "}
                  {new Date(review.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                  })}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
        {/* TODO: wire up GOOGLE_PLACES_API_KEY + GOOGLE_PLACES_ID to pull live reviews instead of mock data. */}
      </section>

      <CtaBanner />
    </>
  );
}
