import type { Metadata } from "next";
import ServicesJsonLd from "@/components/services/ServicesJsonLd";
import Reveal from "@/components/ui/Reveal";
import ServicesFaqAccordion from "@/components/services/ServicesFaqAccordion";
import { getServicesLocale, getServicesSiteContent } from "@/lib/servicesSiteContent";
import { buildFaqSchema, buildServicesMetadata } from "@/lib/servicesSeo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const site = getServicesSiteContent(locale);
  const safeLocale = getServicesLocale(locale);

  return buildServicesMetadata({
    title: `FAQ | ${site.faqPage.title}`,
    description: site.faqPage.description,
    canonicalPath: `/${safeLocale}/services/faq`,
  });
}

export default async function ServicesFaqPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const site = getServicesSiteContent(locale);
  const faqItems = [
    ...site.home.faq,
    ...site.services.flatMap((service) => service.faq),
  ];

  return (
    <main className="px-6 pb-20 pt-6 text-slate-950 md:px-12">
      <ServicesJsonLd data={buildFaqSchema(faqItems)} />
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.08fr_0.92fr]">
        <Reveal className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_20px_50px_rgba(15,23,42,0.06)] md:p-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
            {site.faqPage.eyebrow}
          </p>
          <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.03em] text-slate-950 md:text-5xl">
            {site.faqPage.title}
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
            {site.faqPage.description}
          </p>
        </Reveal>

        <Reveal
          delay={80}
          className="rounded-[28px] bg-[#082556] p-6 text-white shadow-[0_24px_60px_rgba(15,23,42,0.14)] md:p-8"
        >
          <p className="text-sm font-semibold text-blue-100">Vous avez une autre question ?</p>
          <p className="mt-4 text-base leading-8 text-blue-50/82">
            Nous pouvons vous repondre rapidement et vous orienter vers la bonne intervention.
          </p>
        </Reveal>

        <Reveal className="lg:col-span-2">
          <ServicesFaqAccordion items={faqItems} />
        </Reveal>
      </div>
    </main>
  );
}
