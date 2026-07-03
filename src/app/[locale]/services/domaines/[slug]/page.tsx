import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import ServicesActionButtons from "@/components/services/ServicesActionButtons";
import ServicesJsonLd from "@/components/services/ServicesJsonLd";
import Reveal from "@/components/ui/Reveal";
import { Link } from "@/i18n/routing";
import ServicesFaqAccordion from "@/components/services/ServicesFaqAccordion";
import {
  getServicesLocale,
  getServicesSiteContent,
  getServicesSiteService,
  serviceSlugs,
} from "@/lib/servicesSiteContent";
import { buildFaqSchema, buildServiceSchema, buildServicesMetadata } from "@/lib/servicesSeo";

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const safeLocale = getServicesLocale(locale);
  const service = getServicesSiteService(locale, slug);

  if (!service) {
    return buildServicesMetadata({
      title: "Service introuvable",
      description: "La prestation demandee est introuvable.",
      canonicalPath: `/${safeLocale}/services/domaines`,
    });
  }

  return buildServicesMetadata({
    title: `${service.title} | Genesis Service Informatique`,
    description: service.summary,
    canonicalPath: `/${safeLocale}/services/domaines/${service.slug}`,
  });
}

export default async function ServicesDomainDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const site = getServicesSiteContent(locale);
  const service = getServicesSiteService(locale, slug);

  if (!service) {
    notFound();
  }

  const schemas = [
    buildServiceSchema({
      title: service.title,
      description: service.summary,
      canonicalPath: `/${getServicesLocale(locale)}/services/domaines/${service.slug}`,
    }),
    buildFaqSchema(service.faq),
  ];

  return (
    <main className="px-6 pb-20 pt-6 text-slate-950 md:px-12">
      <ServicesJsonLd data={schemas} />
      <div className="mx-auto max-w-7xl">
        <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_20px_50px_rgba(15,23,42,0.06)] md:p-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
              Genesis Service Informatique
            </p>
            <h1 className="mt-4 max-w-5xl text-3xl font-semibold leading-tight tracking-[-0.03em] text-slate-950 md:text-5xl">
              {service.title}
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
              {service.summary}
            </p>
            <p className="mt-5 max-w-4xl text-base leading-8 text-slate-600 md:text-lg">
              {service.problem}
            </p>
            <ServicesActionButtons className="mt-6" />
          </Reveal>

          <Reveal
            delay={80}
            className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_20px_50px_rgba(15,23,42,0.06)]"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <Image
                src={service.image}
                alt={service.alt}
                width={1260}
                height={945}
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </section>

        <div className="mt-6 grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <Reveal className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.05)]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
              {site.common.deliverables}
            </p>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-600 md:text-base">
              {service.deliverables.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={80} className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.05)]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
              {site.common.audience}
            </p>
            <ul className="mt-5 grid gap-3 md:grid-cols-2">
              {service.audience.map((item) => (
                <li
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 md:text-base"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <section className="mt-6 grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
          <Reveal className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.05)] md:p-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
              {site.common.process}
            </p>
            <div className="mt-6 space-y-6">
              {service.process.map((step, index) => (
                <div key={step.title} className="border-b border-slate-100 pb-5 last:border-b-0">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#0f3b97]">
                    0{index + 1}
                  </p>
                  <h2 className="mt-2 text-xl font-semibold text-slate-950">{step.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={40} className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.05)] md:p-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
              {site.common.fieldActions}
            </p>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-600 md:text-base">
              {service.fieldActions.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={80} className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.05)] md:p-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
              {site.common.faq}
            </p>
            <div className="mt-5">
              <ServicesFaqAccordion items={service.faq} />
            </div>
          </Reveal>
        </section>

        <Reveal className="mt-6 rounded-[28px] bg-[#082556] p-6 text-white shadow-[0_24px_60px_rgba(15,23,42,0.14)] md:p-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-200/80">
            {site.common.outcome}
          </p>
          <p className="mt-4 max-w-4xl text-base leading-8 text-blue-50/84 md:text-lg">
            {service.outcome}
          </p>
          <h2 className="mt-5 max-w-4xl text-3xl font-semibold leading-tight md:text-4xl">
            {site.home.finalTitle}
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-blue-50/78 md:text-lg">
            {site.home.finalText}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/services/domaines"
              className="inline-flex items-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#082556] transition hover:-translate-y-0.5 hover:bg-slate-100"
            >
              {site.common.contactCta}
            </Link>
            <Link
              href="/services/domaines"
              className="inline-flex items-center rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/8"
            >
              {site.nav.domaines}
            </Link>
          </div>
          <ServicesActionButtons variant="dark" className="mt-4" />
        </Reveal>
      </div>
    </main>
  );
}
