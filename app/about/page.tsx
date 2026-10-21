import Image from "next/image";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/config";
import PageHero from "@/components/PageHero";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = pageMetadata(
  "About Our Practice",
  `Meet the team at ${siteConfig.practiceName} and learn about our approach to gentle, modern dental care in ${siteConfig.address.city}, ${siteConfig.address.state}.`,
  "/about",
);

// TODO: replace with real bios, headshots, and credentials before launch.
const team = [
  {
    name: "Dr. Sarah Bennett, DDS",
    role: "Founder & General Dentist",
    bio: "Dr. Bennett has practiced general and cosmetic dentistry for over 15 years and is passionate about helping anxious patients feel at ease in the chair.",
  },
  {
    name: "Dr. Omar Hassan, DMD",
    role: "Associate Dentist",
    bio: "Dr. Hassan focuses on restorative and implant dentistry, with a particular interest in same-day emergency care.",
  },
  {
    name: "Maria Lopez, RDH",
    role: "Lead Dental Hygienist",
    bio: "Maria has been part of the practice since it opened and leads our preventive care and patient education programs.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title={siteConfig.practiceName}
        description={`${siteConfig.practiceName} was built around one idea: dental care should feel comfortable, honest, and convenient — not stressful.`}
      />

      <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
        {/* TODO: replace with real practice history */}
        <p className="text-base leading-relaxed text-neutral-700">
          Since opening our doors in {siteConfig.address.city}, we&rsquo;ve focused
          on building long-term relationships with our patients — not just
          treating teeth. Our office combines modern diagnostic technology
          with a warm, unhurried approach, so you always understand your
          options and feel comfortable asking questions.
        </p>
        <p className="mt-5 text-base leading-relaxed text-neutral-700">
          Whether you&rsquo;re coming in for a routine cleaning, exploring
          Invisalign, or dealing with a dental emergency, our goal is the
          same: high-quality care delivered with patience and respect for
          your time.
        </p>
      </section>

      <section className="bg-neutral-100">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h2 className="text-2xl font-bold text-brand-900">Meet the Team</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {team.map((member) => (
              <div key={member.name} className="rounded-2xl border border-neutral-200 bg-white p-6">
                <div className="relative mb-4 aspect-square overflow-hidden rounded-xl bg-brand-100">
                  <Image
                    src="/images/team-placeholder.svg"
                    alt={`Headshot of ${member.name}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-semibold text-neutral-900">{member.name}</h3>
                <p className="text-sm font-medium text-brand-600">{member.role}</p>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
