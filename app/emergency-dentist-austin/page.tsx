import Link from "next/link";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/config";
import { faqPageSchema, breadcrumbSchema } from "@/lib/schema";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = pageMetadata(
  "Emergency Dentist",
  `Dental emergency in ${siteConfig.address.city}? ${siteConfig.practiceName} offers same-day emergency appointments for toothaches, broken teeth, and more.`,
  "/emergency-dentist-austin",
);

const emergencySigns = [
  "Severe or throbbing tooth pain",
  "A tooth that's been knocked out or broken",
  "Swelling in the face, jaw, or gums",
  "A lost crown, filling, or bridge that's causing pain",
  "Uncontrolled bleeding in the mouth",
  "A cracked or fractured tooth",
];

const faqs = [
  {
    question: "What should I do if my tooth gets knocked out?",
    answer:
      "Pick it up by the crown (not the root), rinse it gently if dirty, and try to place it back in the socket or store it in milk. Call us immediately — the sooner we see you, the better the chance of saving the tooth.",
  },
  {
    question: "Do you see emergency patients the same day?",
    answer:
      `Yes. We hold same-day slots specifically for dental emergencies in ${siteConfig.address.city}. Call our office as soon as the problem happens.`,
  },
  {
    question: "What if I have a dental emergency after hours?",
    answer:
      "Call our main number — our after-hours answering service will connect you with guidance and, if needed, the on-call dentist.",
  },
];

export default function EmergencyDentistPage() {
  return (
    <>
      <JsonLd data={faqPageSchema(faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Emergency Dentist", path: "/emergency-dentist-austin" },
        ])}
      />

      <PageHero
        eyebrow="Dental Emergencies"
        title={`Emergency Dentist in ${siteConfig.address.city}, ${siteConfig.address.state}`}
        description="Dental pain doesn't wait, and neither do we. Call now for a same-day emergency appointment."
      />

      <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
        <div className="rounded-2xl border border-accent-200 bg-accent-50 p-6">
          <p className="text-lg font-semibold text-accent-600">
            In severe pain right now?
          </p>
          <p className="mt-1 text-sm text-neutral-700">
            Call us immediately at{" "}
            <a href={`tel:${siteConfig.phone.raw}`} className="font-semibold text-accent-600 underline">
              {siteConfig.phone.display}
            </a>
            . If you&rsquo;re experiencing a life-threatening emergency, call 911 or go to your nearest
            emergency room.
          </p>
        </div>

        <h2 className="mt-10 text-2xl font-bold text-brand-900">
          Signs You Need Emergency Dental Care
        </h2>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
          {emergencySigns.map((sign) => (
            <li key={sign} className="flex items-start gap-2 text-sm text-neutral-700">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" aria-hidden="true" />
              {sign}
            </li>
          ))}
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-brand-900">FAQs</h2>
        <dl className="mt-5 flex flex-col gap-6">
          {faqs.map((faq) => (
            <div key={faq.question}>
              <dt className="font-semibold text-neutral-900">{faq.question}</dt>
              <dd className="mt-1 text-sm leading-relaxed text-neutral-700">{faq.answer}</dd>
            </div>
          ))}
        </dl>

        <Link
          href="/services/emergency-dentistry"
          className="mt-8 inline-block text-sm font-semibold text-brand-600 hover:text-brand-700"
        >
          Learn more about our emergency dentistry service →
        </Link>
      </section>

      <CtaBanner />
    </>
  );
}
