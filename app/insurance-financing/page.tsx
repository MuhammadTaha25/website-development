import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/config";
import PageHero from "@/components/PageHero";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = pageMetadata(
  "Insurance & Financing",
  `Learn about accepted insurance plans and flexible financing options at ${siteConfig.practiceName} in ${siteConfig.address.city}, ${siteConfig.address.state}.`,
  "/insurance-financing",
);

// TODO: replace with the real list of accepted insurance carriers.
const acceptedInsurance = [
  "Delta Dental",
  "Cigna",
  "MetLife",
  "Guardian",
  "Aetna",
  "United Concordia",
];

const financingOptions = [
  {
    title: "In-house membership plan",
    description:
      "For patients without insurance, our membership plan covers two cleanings, exams, and x-rays per year plus a discount on additional treatment — for one flat annual fee.",
  },
  {
    title: "CareCredit financing",
    description:
      "Spread the cost of treatment over time with promotional financing options through CareCredit, with approval decisions in minutes.",
  },
  {
    title: "Flexible payment plans",
    description:
      "For larger treatment plans, our team can set up a custom payment schedule directly with our office.",
  },
];

export default function InsuranceFinancingPage() {
  return (
    <>
      <PageHero
        eyebrow="Insurance & Financing"
        title="Dental Care That Fits Your Budget"
        description="We believe cost shouldn't stand between you and a healthy smile — here's how we make care accessible."
      />

      <section className="mx-auto max-w-5xl px-4 py-14 sm:px-6">
        <h2 className="text-2xl font-bold text-brand-900">Accepted Insurance Plans</h2>
        <p className="mt-2 text-sm text-neutral-600">
          We&rsquo;re in-network with most major PPO plans. Don&rsquo;t see yours below? Call our office — we
          may still be able to file out-of-network claims on your behalf.
        </p>
        <ul className="mt-6 grid gap-3 sm:grid-cols-3">
          {acceptedInsurance.map((carrier) => (
            <li
              key={carrier}
              className="rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm font-medium text-neutral-800"
            >
              {carrier}
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-neutral-100">
        <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6">
          <h2 className="text-2xl font-bold text-brand-900">Financing Options</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            {financingOptions.map((option) => (
              <div key={option.title} className="rounded-2xl border border-neutral-200 bg-white p-6">
                <h3 className="font-semibold text-neutral-900">{option.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">{option.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
