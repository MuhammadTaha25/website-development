import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/config";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = pageMetadata(
  "Terms of Service",
  `Terms of service for ${siteConfig.practiceName}'s website.`,
  "/terms",
);

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms of Service" />
      <article className="mx-auto max-w-3xl px-4 py-14 text-sm leading-relaxed text-neutral-700 sm:px-6">
        {/* TODO: have this reviewed by legal counsel before launch. */}
        <p className="text-xs text-neutral-500">Last updated: January 1, 2026</p>

        <h2 className="mt-8 text-lg font-semibold text-neutral-900">Acceptance of Terms</h2>
        <p className="mt-2">
          By accessing or using the website at {siteConfig.siteUrl} (the &quot;Site&quot;), you agree to be
          bound by these Terms of Service. If you do not agree to these terms, please do not use
          the Site.
        </p>

        <h2 className="mt-8 text-lg font-semibold text-neutral-900">Not Medical Advice</h2>
        <p className="mt-2">
          Content on this Site, including blog articles and service descriptions, is provided for
          general informational purposes only and does not constitute professional dental or
          medical advice. Always consult with a qualified dentist regarding your specific
          condition.
        </p>

        <h2 className="mt-8 text-lg font-semibold text-neutral-900">Appointment Requests</h2>
        <p className="mt-2">
          Submitting a request through our online booking form does not guarantee an appointment.
          All appointment requests are subject to confirmation by our scheduling team.
        </p>

        <h2 className="mt-8 text-lg font-semibold text-neutral-900">Intellectual Property</h2>
        <p className="mt-2">
          All content on this Site, including text, graphics, and logos, is the property of{" "}
          {siteConfig.practiceName} unless otherwise noted, and may not be reproduced without
          permission.
        </p>

        <h2 className="mt-8 text-lg font-semibold text-neutral-900">Limitation of Liability</h2>
        <p className="mt-2">
          {siteConfig.practiceName} is not liable for any damages arising from the use of, or
          inability to use, this Site.
        </p>

        <h2 className="mt-8 text-lg font-semibold text-neutral-900">Contact</h2>
        <p className="mt-2">
          Questions about these Terms can be directed to{" "}
          <a href={`mailto:${siteConfig.email}`} className="text-brand-600">
            {siteConfig.email}
          </a>
          .
        </p>
      </article>
    </>
  );
}
