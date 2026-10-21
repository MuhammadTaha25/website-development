"use client";

import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { trackEvent } from "@/lib/analytics";

export default function MobileStickyBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex border-t border-neutral-200 bg-white shadow-[0_-2px_10px_rgba(0,0,0,0.06)] sm:hidden">
      <a
        href={`tel:${siteConfig.phone.raw}`}
        onClick={() => trackEvent("phone_click", { location: "mobile_sticky_bar" })}
        className="flex flex-1 items-center justify-center gap-2 py-3 text-sm font-semibold text-brand-700"
        aria-label={`Call ${siteConfig.practiceName}`}
      >
        Call Now
      </a>
      <div className="w-px bg-neutral-200" aria-hidden="true" />
      <Link
        href="/new-patients#book"
        onClick={() => trackEvent("appointment_cta_click", { location: "mobile_sticky_bar" })}
        className="flex flex-1 items-center justify-center gap-2 bg-brand-600 py-3 text-sm font-semibold text-white"
      >
        Book Appointment
      </Link>
    </div>
  );
}
