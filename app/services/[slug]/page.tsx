import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { getServices, getServiceBySlug } from "@/lib/sanity-client";
import { serviceSchema, faqPageSchema, breadcrumbSchema } from "@/lib/schema";
import JsonLd from "@/components/JsonLd";
import CtaBanner from "@/components/CtaBanner";

export async function generateStaticParams() {
  const services = await getServices();
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);
  if (!service) return {};
  return pageMetadata(service.name, service.shortDescription, `/services/${slug}`);
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <>
      <JsonLd data={serviceSchema(service)} />
      <JsonLd data={faqPageSchema(service.faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: service.name, path: `/services/${slug}` },
        ])}
      />

      <section className="border-b border-neutral-200 bg-brand-50">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2">
          <div>
            <Link href="/services" className="text-sm font-semibold text-brand-600 hover:text-brand-700">
              ← All Services
            </Link>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-brand-900 sm:text-4xl">
              {service.name}
            </h1>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-neutral-700">
              {service.shortDescription}
            </p>
            <Link
              href="/new-patients#book"
              className="mt-6 inline-block rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-700"
            >
              Book a Consultation
            </Link>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-brand-100">
            <Image
              src="/images/service-placeholder.svg"
              alt={service.heroImageAlt}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
        {service.description.map((paragraph, i) => (
          <p key={i} className="mb-5 text-base leading-relaxed text-neutral-700">
            {paragraph}
          </p>
        ))}
      </section>

      <section className="bg-neutral-100">
        <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
          <h2 className="text-2xl font-bold text-brand-900">Frequently Asked Questions</h2>
          <dl className="mt-6 flex flex-col gap-6">
            {service.faqs.map((faq) => (
              <div key={faq.question}>
                <dt className="font-semibold text-neutral-900">{faq.question}</dt>
                <dd className="mt-1 text-sm leading-relaxed text-neutral-700">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
