import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import type { ComponentType } from "react";
import { pageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/config";
import { getServices, getReviews } from "@/lib/sanity-client";
import CtaBanner from "@/components/CtaBanner";
import {
  IconCalendarCheck,
  IconShieldCheck,
  IconFamily,
  IconSparkleOffice,
  IconTooth,
  IconAligner,
  IconSparkle,
  IconRootCanal,
} from "@/components/Icons";

export const metadata: Metadata = pageMetadata(
  "Family & Cosmetic Dentist",
  `${siteConfig.practiceName} provides gentle, modern dental care in ${siteConfig.address.city}, ${siteConfig.address.state} — from routine cleanings to implants and Invisalign. New patients welcome.`,
  "/",
);

const trustPoints = [
  { label: "Same-day emergency appointments", icon: IconCalendarCheck },
  { label: "Most insurance plans accepted", icon: IconShieldCheck },
  { label: "Gentle care for the whole family", icon: IconFamily },
  { label: "Modern, comfortable office", icon: IconSparkleOffice },
];

const serviceIcons: Record<string, ComponentType<{ className?: string }>> = {
  "dental-implants": IconTooth,
  invisalign: IconAligner,
  "teeth-whitening": IconSparkle,
  "root-canal-therapy": IconRootCanal,
};

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

export default async function HomePage() {
  const [services, reviews] = await Promise.all([getServices(), getReviews()]);
  const featuredServices = services.slice(0, 4);

  return (
    <>
      <section className="bg-brand-50">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">
              {siteConfig.address.city}, {siteConfig.address.state} Dentist
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-brand-900 sm:text-5xl">
              {siteConfig.tagline}
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-neutral-700">
              {/* TODO: replace with real practice bio */}
              {siteConfig.practiceName} combines modern technology with a warm,
              welcoming team — so every visit feels easy, from routine
              cleanings to same-day emergencies.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/new-patients#book"
                className="rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
              >
                Book an Appointment
              </Link>
              <a
                href={`tel:${siteConfig.phone.raw}`}
                className="rounded-full border border-brand-300 px-6 py-3 text-sm font-semibold text-brand-700 hover:bg-brand-100"
              >
                Call {siteConfig.phone.display}
              </a>
            </div>
            <p className="mt-3 text-sm font-medium text-brand-700">
              New patients get a free consultation — same-day slots often available.
            </p>
            <ul className="mt-8 grid grid-cols-2 gap-3 text-sm text-neutral-700">
              {trustPoints.map(({ label, icon: Icon }) => (
                <li key={label} className="flex items-center gap-2">
                  <Icon className="h-5 w-5 shrink-0 text-brand-600" />
                  {label}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-brand-100 pt-5 text-xs font-semibold uppercase tracking-wide text-brand-600">
              <span className="flex items-center gap-1.5">
                <IconShieldCheck className="h-4 w-4" />
                ADA Member Practice
              </span>
              <span className="flex items-center gap-1.5">
                <IconCalendarCheck className="h-4 w-4" />
                Serving Austin since 2011
              </span>
              <span className="flex items-center gap-1.5">
                ★★★★★ 500+ 5-star reviews
              </span>
            </div>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-brand-100">
            <Image
              src="/images/hero-smile.svg"
              alt={`Patient smiling during a visit at ${siteConfig.practiceName}`}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl font-bold text-brand-900 sm:text-3xl">
            Popular Services
          </h2>
          <Link href="/services" className="text-sm font-semibold text-brand-600 hover:text-brand-700">
            View all services →
          </Link>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredServices.map((service) => {
            const Icon = serviceIcons[service.slug] ?? IconTooth;
            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group rounded-2xl border border-neutral-200 bg-white p-6 transition hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-md"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-50 text-brand-600 transition group-hover:bg-brand-100">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-brand-800 group-hover:text-brand-600">
                  {service.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  {service.shortDescription}
                </p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand-600">
                  Learn more
                  <span aria-hidden="true" className="transition group-hover:translate-x-0.5">→</span>
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="bg-neutral-100">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="text-2xl font-bold text-brand-900 sm:text-3xl">
            What Our Patients Say
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {reviews.map((review) => (
              <figure
                key={review.author}
                className="rounded-2xl border border-neutral-200 bg-white p-6"
              >
                <div aria-label={`${review.rating} out of 5 stars`} className="text-accent-500">
                  {"★".repeat(review.rating)}
                  <span className="text-neutral-300">{"★".repeat(5 - review.rating)}</span>
                </div>
                <blockquote className="mt-3 text-sm leading-relaxed text-neutral-700">
                  “{review.text}”
                </blockquote>
                <figcaption className="mt-4 flex items-center gap-3 text-sm font-semibold text-neutral-800">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-100 text-xs font-bold text-brand-700">
                    {initials(review.author)}
                  </span>
                  {review.author}
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-8">
            <Link href="/reviews" className="text-sm font-semibold text-brand-600 hover:text-brand-700">
              Read all reviews →
            </Link>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
