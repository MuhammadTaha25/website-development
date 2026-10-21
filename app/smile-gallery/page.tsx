import Image from "next/image";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/config";
import PageHero from "@/components/PageHero";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = pageMetadata(
  "Smile Gallery",
  `See real before-and-after results from patients at ${siteConfig.practiceName} in ${siteConfig.address.city}, ${siteConfig.address.state}.`,
  "/smile-gallery",
);

// TODO: replace placeholders with real, patient-consented before/after photos.
const gallery = [
  { label: "Invisalign — 10 months", alt: "Before and after Invisalign smile transformation" },
  { label: "Porcelain veneers", alt: "Before and after porcelain veneer smile transformation" },
  { label: "Professional whitening", alt: "Before and after professional teeth whitening" },
  { label: "Dental implant restoration", alt: "Before and after dental implant restoration" },
  { label: "Full smile makeover", alt: "Before and after full smile makeover" },
  { label: "Clear aligner treatment", alt: "Before and after clear aligner treatment" },
];

export default function SmileGalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Smile Gallery"
        title="Real Results From Real Patients"
        description="Every smile tells a story. Here's a look at some of the transformations we're proud to have been part of."
      />

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((item) => (
            <figure key={item.label} className="overflow-hidden rounded-2xl border border-neutral-200 bg-white">
              <div className="relative aspect-[4/3] bg-brand-100">
                <Image src="/images/gallery-placeholder.svg" alt={item.alt} fill className="object-cover" />
              </div>
              <figcaption className="p-4 text-sm font-medium text-neutral-800">
                {item.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
