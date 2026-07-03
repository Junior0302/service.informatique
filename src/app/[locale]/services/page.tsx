import type { Metadata } from "next";
import Image from "next/image";
import { Cable, ChevronRight, HardDrive, LifeBuoy, ShieldCheck, Wifi } from "lucide-react";
import ServicesActionButtons from "@/components/services/ServicesActionButtons";
import ServicesJsonLd from "@/components/services/ServicesJsonLd";
import Reveal from "@/components/ui/Reveal";
import { Link } from "@/i18n/routing";
import { getServicesLocale, getServicesSiteContent } from "@/lib/servicesSiteContent";
import { buildFaqSchema, buildOrganizationSchema, buildServicesMetadata } from "@/lib/servicesSeo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const site = getServicesSiteContent(locale);
  const safeLocale = getServicesLocale(locale);

  return buildServicesMetadata({
    title: `Genesis Service Informatique | ${site.home.title}`,
    description: site.home.description,
    canonicalPath: `/${safeLocale}/services`,
  });
}

export default async function ServicesHomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const site = getServicesSiteContent(locale);
  const schemas = [buildOrganizationSchema(), buildFaqSchema(site.home.faq)];
  const quickFacts = [
    "Intervention sur site",
    "Accompagnement humain",
    "Solutions concretes",
    "Services complets",
  ];
  const needIcons = [HardDrive, LifeBuoy, Cable, Wifi];

  return (
    <main className="px-6 pb-20 pt-6 text-slate-950 md:px-12">
      <ServicesJsonLd data={schemas} />
      <div className="mx-auto max-w-7xl">
        <section className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.08)]">
          <div className="grid gap-0 lg:grid-cols-[1.08fr_0.92fr]">
            <Reveal className="bg-[#082556] p-8 text-white md:p-12">
              <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-blue-200/78">
                {site.home.eyebrow}
              </p>
              <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.02] tracking-[-0.04em] md:text-6xl">
                {site.home.title}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-50/84 md:text-[1.12rem]">
                {site.home.subtitle}
              </p>
              <p className="mt-5 max-w-2xl text-base leading-8 text-blue-100/76 md:text-lg">
                {site.home.description}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/services/domaines"
                  className="inline-flex items-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#082556] transition hover:-translate-y-0.5 hover:bg-slate-100"
                >
                  {site.home.primaryCta}
                </Link>
                <Link
                  href="/services/domaines"
                  className="inline-flex items-center rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/8"
                >
                  {site.home.secondaryCta}
                </Link>
              </div>
              <ServicesActionButtons variant="dark" className="mt-4" />
            </Reveal>

            <Reveal
              delay={80}
              className="relative min-h-[320px] overflow-hidden bg-slate-200 lg:min-h-full"
            >
              <Image
                src="/images/service-info/setup-purple.jpg"
                alt="Bureau informatique moderne pret pour une intervention sur site"
                fill
                priority
                className="object-cover transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-black/5 via-transparent to-[#082556]/22" />
            </Reveal>
          </div>

          <div className="grid gap-0 border-t border-slate-200 md:grid-cols-4">
            {quickFacts.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 border-b border-slate-200 px-5 py-4 text-sm text-slate-700 last:border-b-0 md:border-b-0 md:border-r last:md:border-r-0"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-[#0f3b97]">
                  <ShieldCheck className="h-4 w-4" />
                </span>
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="py-10">
          <Reveal className="mb-5">
            <p className="text-sm font-semibold text-slate-900 md:text-base">
              {site.home.needsTitle}
            </p>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {site.home.needs.map((need, index) => {
              const Icon = needIcons[index] ?? HardDrive;

              return (
                <Reveal
                  key={need.title}
                  delay={index * 45}
                  className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-[0_18px_50px_rgba(15,23,42,0.05)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(15,23,42,0.08)]"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-[#0f3b97]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h2 className="mt-4 text-lg font-semibold text-slate-900">{need.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{need.text}</p>
                </Reveal>
              );
            })}
          </div>
        </section>

        <section className="py-6">
          <Reveal className="mb-5">
            <p className="text-sm font-semibold text-slate-900 md:text-base">
              {site.home.interventionsTitle}
            </p>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {site.home.interventions.map((item, index) => (
              <Reveal
                key={item.title}
                delay={index * 45}
                className="overflow-hidden rounded-[22px] border border-slate-200 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.05)]"
              >
                <div className="aspect-[5/4] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    width={900}
                    height={720}
                    className="h-full w-full object-cover transition duration-700 hover:scale-[1.04]"
                  />
                </div>
                <div className="p-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                    {item.tag}
                  </p>
                  <h3 className="mt-2 text-sm font-semibold text-slate-900">{item.title}</h3>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="py-10">
          <Reveal className="mb-5">
            <p className="text-sm font-semibold text-slate-900 md:text-base">
              {site.home.servicesTitle}
            </p>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {site.services.map((service, index) => (
              <Reveal
                key={service.slug}
                delay={index * 55}
                className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-[0_18px_50px_rgba(15,23,42,0.05)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(15,23,42,0.08)]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">{service.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{service.summary}</p>
                  </div>
                </div>
                <Link
                  href={`/services/domaines/${service.slug}`}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#0f3b97] transition hover:text-[#0c327f]"
                >
                  En savoir plus
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="py-10">
          <Reveal className="mb-5">
            <p className="text-sm font-semibold text-slate-900 md:text-base">
              {site.home.methodTitle}
            </p>
          </Reveal>
          <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_20px_50px_rgba(15,23,42,0.06)] md:p-8">
            <div className="grid gap-5 md:grid-cols-4">
              {site.home.method.map((step, index) => (
                <Reveal key={step.title} delay={index * 45} className="relative">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0f3b97]">
                    {index + 1}. {step.title}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{step.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-6 py-10 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_20px_50px_rgba(15,23,42,0.06)] md:p-8">
            <p className="text-sm font-semibold text-slate-900">Questions frequentes</p>
            <div className="mt-5 space-y-4">
              {site.home.faq.map((item) => (
                <div key={item.question} className="border-b border-slate-100 pb-4 last:border-b-0">
                  <p className="text-sm font-semibold text-slate-900">{item.question}</p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{item.answer}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal
            delay={80}
            className="rounded-[28px] bg-[#082556] p-6 text-white shadow-[0_24px_60px_rgba(15,23,42,0.14)] md:p-8"
          >
            <p className="text-sm font-semibold text-blue-100">{site.home.finalTitle}</p>
            <p className="mt-4 max-w-2xl text-base leading-8 text-blue-50/82">
              {site.home.finalText}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/services/domaines"
                className="inline-flex items-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#082556] transition hover:-translate-y-0.5 hover:bg-slate-100"
              >
                {site.home.primaryCta}
              </Link>
              <Link
                href="/services/a-propos"
                className="inline-flex items-center rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/8"
              >
                {site.nav.about}
              </Link>
            </div>
          </Reveal>
        </section>
      </div>
    </main>
  );
}
