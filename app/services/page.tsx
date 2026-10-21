import Link from "next/link";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/config";
import { getServices } from "@/lib/sanity-client";
import PageHero from "@/components/PageHero";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = pageMetadata(
  "Dental Services",
  `Explore the full range of dental services offered by ${siteConfig.practiceName} in ${siteConfig.address.city}, ${siteConfig.address.state}, from preventive care to cosmetic dentistry.`,
  "/services",
);

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Comprehensive Dental Care, All in One Place"
        description={`From routine cleanings to advanced restorative and cosmetic work, our ${siteConfig.address.city} team has you covered.`}
      />

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group flex flex-col rounded-2xl border border-neutral-200 bg-white p-6 transition hover:border-brand-300 hover:shadow-md"
            >
              <h2 className="text-lg font-semibold text-brand-800 group-hover:text-brand-600">
                {service.name}
              </h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-600">
                {service.shortDescription}
              </p>
              <span className="mt-4 text-sm font-semibold text-brand-600">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
