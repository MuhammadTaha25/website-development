import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/config";
import PageHero from "@/components/PageHero";
import BookingForm from "@/components/BookingForm";

export const metadata: Metadata = pageMetadata(
  "New Patients",
  `Everything you need to know as a new patient at ${siteConfig.practiceName} in ${siteConfig.address.city}, ${siteConfig.address.state}, plus an easy way to book your first visit.`,
  "/new-patients",
);

const steps = [
  {
    title: "Book your visit",
    description: "Fill out the form below or call our office to schedule a time that works for you.",
  },
  {
    title: "Complete new patient forms",
    description:
      "We'll email you a link to complete your medical history and intake forms online before your visit.",
  },
  {
    title: "Meet your care team",
    description:
      "Your first visit includes a full exam, digital x-rays if needed, and time to ask questions.",
  },
  {
    title: "Build your care plan",
    description: "We'll walk through any recommended treatment and financing options together — no surprises.",
  },
];

export default function NewPatientsPage() {
  return (
    <>
      <PageHero
        eyebrow="New Patients"
        title="Welcome to the Practice"
        description="Here's what to expect for your first visit, and an easy way to get on the schedule."
      />

      <section className="mx-auto max-w-5xl px-4 py-14 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div key={step.title} className="rounded-2xl border border-neutral-200 bg-white p-6">
              <span className="text-sm font-semibold text-brand-500">Step {i + 1}</span>
              <h3 className="mt-1 font-semibold text-neutral-900">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="book" className="bg-neutral-100">
        <div className="mx-auto max-w-2xl px-4 py-14 sm:px-6">
          <h2 className="text-2xl font-bold text-brand-900">Request an Appointment</h2>
          <p className="mt-2 text-sm text-neutral-600">
            Submit the form below and our scheduling team will reach out to confirm your appointment.
            For dental emergencies, please call{" "}
            <a href={`tel:${siteConfig.phone.raw}`} className="font-semibold text-brand-600">
              {siteConfig.phone.display}
            </a>{" "}
            directly.
          </p>
          <div className="mt-8 rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8">
            <BookingForm />
          </div>
        </div>
      </section>
    </>
  );
}
