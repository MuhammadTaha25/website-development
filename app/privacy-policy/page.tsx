import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/config";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = pageMetadata(
  "Privacy Policy",
  `Privacy policy for ${siteConfig.practiceName}'s website.`,
  "/privacy-policy",
);

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" />
      <article className="mx-auto max-w-3xl px-4 py-14 text-sm leading-relaxed text-neutral-700 sm:px-6">
        {/* TODO: have this reviewed by legal counsel before launch, and reconcile with HIPAA Notice of Privacy Practices used in-office. */}
        <p className="text-xs text-neutral-500">Last updated: January 1, 2026</p>

        <h2 className="mt-8 text-lg font-semibold text-neutral-900">Overview</h2>
        <p className="mt-2">
          This Privacy Policy describes how {siteConfig.practiceName} (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;)
          collects, uses, and protects information submitted through this website,{" "}
          {siteConfig.siteUrl}. This policy applies only to information collected through our
          website and does not cover the handling of protected health information (PHI), which is
          governed separately by our HIPAA Notice of Privacy Practices, available at our office.
        </p>

        <h2 className="mt-8 text-lg font-semibold text-neutral-900">Information We Collect</h2>
        <p className="mt-2">
          When you submit a form on this site (such as our appointment request form), we collect
          the information you provide: your name, phone number, email address, preferred
          appointment date and time, patient status, and a general reason for your visit. We do
          not request or knowingly collect clinical or medical information through this website.
        </p>

        <h2 className="mt-8 text-lg font-semibold text-neutral-900">How We Use Information</h2>
        <p className="mt-2">
          Information submitted through our forms is used solely to schedule and confirm
          appointments and to respond to your inquiries. We do not sell or rent your personal
          information to third parties.
        </p>

        <h2 className="mt-8 text-lg font-semibold text-neutral-900">Cookies & Analytics</h2>
        <p className="mt-2">
          We may use analytics tools, such as Google Analytics, to understand how visitors use
          our website. These tools may use cookies to collect anonymized usage data. You can
          disable cookies through your browser settings.
        </p>

        <h2 className="mt-8 text-lg font-semibold text-neutral-900">Data Security</h2>
        <p className="mt-2">
          We take reasonable administrative and technical measures to protect the information
          submitted through this site. However, no method of transmission over the internet is
          completely secure.
        </p>

        <h2 className="mt-8 text-lg font-semibold text-neutral-900">Contact Us</h2>
        <p className="mt-2">
          If you have questions about this Privacy Policy, contact us at{" "}
          <a href={`mailto:${siteConfig.email}`} className="text-brand-600">
            {siteConfig.email}
          </a>{" "}
          or {siteConfig.phone.display}.
        </p>
      </article>
    </>
  );
}
