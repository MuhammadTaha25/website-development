import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/config";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = pageMetadata(
  "Accessibility Statement",
  `Our commitment to web accessibility at ${siteConfig.practiceName}.`,
  "/accessibility-statement",
);

export default function AccessibilityStatementPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Accessibility Statement" />
      <article className="mx-auto max-w-3xl px-4 py-14 text-sm leading-relaxed text-neutral-700 sm:px-6">
        <p className="text-xs text-neutral-500">Last updated: January 1, 2026</p>

        <h2 className="mt-8 text-lg font-semibold text-neutral-900">Our Commitment</h2>
        <p className="mt-2">
          {siteConfig.practiceName} is committed to ensuring our website is accessible to
          everyone, including people with disabilities. We aim to conform to the Web Content
          Accessibility Guidelines (WCAG) 2.1, Level AA, and we regularly review our site to
          identify and fix accessibility issues.
        </p>

        <h2 className="mt-8 text-lg font-semibold text-neutral-900">What We&rsquo;ve Done</h2>
        <ul className="mt-2 list-disc pl-5">
          <li>Designed text and interface colors to meet WCAG AA contrast ratios.</li>
          <li>Ensured all interactive elements are reachable and operable via keyboard.</li>
          <li>Provided descriptive alternative text for meaningful images.</li>
          <li>Associated form fields with visible labels and appropriate ARIA attributes.</li>
          <li>Structured pages with semantic HTML and a logical heading hierarchy.</li>
        </ul>

        <h2 className="mt-8 text-lg font-semibold text-neutral-900">Feedback</h2>
        <p className="mt-2">
          If you encounter any barriers while using this website, please let us know so we can
          address them. Contact us at{" "}
          <a href={`mailto:${siteConfig.email}`} className="text-brand-600">
            {siteConfig.email}
          </a>{" "}
          or {siteConfig.phone.display}, and we&rsquo;ll do our best to assist you directly and correct
          the underlying issue.
        </p>
      </article>
    </>
  );
}
