import type { Metadata } from "next";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { Link } from "@/i18n/routing";
import { getServicesLocale, getServicesSiteContent } from "@/lib/servicesSiteContent";
import { buildServicesMetadata } from "@/lib/servicesSeo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const site = getServicesSiteContent(locale);
  const safeLocale = getServicesLocale(locale);

  return buildServicesMetadata({
    title: `Prestations | ${site.domains.title}`,
    description: site.domains.description,
    canonicalPath: `/${safeLocale}/services/domaines`,
  });
}

export default async function ServicesDomainsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const site = getServicesSiteContent(locale);

  return (
    <main className="px-6 pb-20 pt-6 text-slate-950 md:px-12">
      <div className="mx-auto max-w-7xl">
        <Reveal className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_20px_50px_rgba(15,23,42,0.06)] md:p-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
            {site.domains.eyebrow}
          </p>
          <h1 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-slate-950 md:text-5xl">
            {site.domains.title}
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
            {site.domains.description}
          </p>
        </Reveal>

        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {site.services.map((service, index) => (
            <Reveal
              key={service.slug}
              delay={index * 50}
              className="overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.05)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(15,23,42,0.08)]"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.alt}
                  width={1260}
                  height={750}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                  0{index + 1}
                </p>
                <h2 className="mt-4 text-xl font-semibold leading-tight text-slate-950">
                  {service.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">
                  {service.summary}
                </p>
                <p className="mt-4 text-sm leading-7 text-slate-500 md:text-base">
                  {service.outcome}
                </p>
                <Link
                  href={`/services/domaines/${service.slug}`}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#0f3b97] transition hover:text-[#0c327f]"
                >
                  {site.domains.cta}
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </main>
  );
}
