import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/config";
import PageHero from "@/components/PageHero";
import BookingForm from "@/components/BookingForm";

export const metadata: Metadata = pageMetadata(
  "Contact Us",
  `Get in touch with ${siteConfig.practiceName} in ${siteConfig.address.city}, ${siteConfig.address.state} — phone, email, address, and office hours.`,
  "/contact",
);

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="We'd Love to Hear From You" />

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold text-neutral-900">Office Information</h2>
            <dl className="mt-4 flex flex-col gap-4 text-sm text-neutral-700">
              <div>
                <dt className="font-medium text-neutral-900">Address</dt>
                <dd>
                  {siteConfig.address.street}
                  <br />
                  {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
                </dd>
              </div>
              <div>
                <dt className="font-medium text-neutral-900">Phone</dt>
                <dd>
                  <a href={`tel:${siteConfig.phone.raw}`} className="text-brand-600 hover:text-brand-700">
                    {siteConfig.phone.display}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-medium text-neutral-900">Email</dt>
                <dd>
                  <a href={`mailto:${siteConfig.email}`} className="text-brand-600 hover:text-brand-700">
                    {siteConfig.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-medium text-neutral-900">Hours</dt>
                <dd>
                  <ul className="mt-1 flex flex-col gap-1">
                    {siteConfig.hours.map((h) => (
                      <li key={h.day} className="flex justify-between gap-6">
                        <span>{h.day}</span>
                        <span>{"closed" in h ? "Closed" : `${h.open} - ${h.close}`}</span>
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            </dl>

            <div className="mt-6 overflow-hidden rounded-2xl border border-neutral-200">
              <iframe
                title={`Map to ${siteConfig.practiceName}`}
                src={`https://www.google.com/maps?q=${encodeURIComponent(
                  siteConfig.address.full,
                )}&output=embed`}
                className="h-64 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-neutral-900">Send Us a Message</h2>
            <p className="mt-2 text-sm text-neutral-600">
              Use this form to request an appointment or ask a general question. For urgent
              dental emergencies, please call us directly.
            </p>
            <div className="mt-6 rounded-2xl border border-neutral-200 bg-white p-6">
              <BookingForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
