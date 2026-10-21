"use client";

import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { trackEvent } from "@/lib/analytics";

export default function CtaBanner() {
  return (
    <section className="bg-brand-700">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-4 px-4 py-12 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div>
          <h2 className="text-2xl font-bold text-white">
            Ready to get your best smile?
          </h2>
          <p className="mt-1 text-brand-100">
            New patients welcome — most insurance plans accepted.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href={`tel:${siteConfig.phone.raw}`}
            onClick={() => trackEvent("phone_click", { location: "cta_banner" })}
            className="rounded-full border border-white/40 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
          >
            Call {siteConfig.phone.display}
          </a>
          <Link
            href="/new-patients#book"
            onClick={() => trackEvent("appointment_cta_click", { location: "cta_banner" })}
            className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-brand-700 hover:bg-brand-50"
          >
            Book Appointment
          </Link>
        </div>
      </div>
    </section>
  );
}
