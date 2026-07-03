import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
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
    title: `A propos | ${site.about.title}`,
    description: site.about.description,
    canonicalPath: `/${safeLocale}/services/a-propos`,
  });
}

export default async function ServicesAboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const site = getServicesSiteContent(locale);

  return (
    <main className="px-6 pb-20 pt-6 text-slate-950 md:px-12">
      <div className="mx-auto max-w-7xl">
        <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_20px_50px_rgba(15,23,42,0.06)] md:p-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
              {site.about.eyebrow}
            </p>
            <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.03em] text-slate-950 md:text-5xl">
              {site.about.title}
            </h1>
            <p className="mt-4 max-w-4xl whitespace-pre-line text-base leading-8 text-slate-600 md:text-lg">
              {site.about.description}
            </p>
            <p className="mt-8 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
              {site.about.approachTitle}
            </p>
            <div className="mt-4 space-y-4">
              {site.about.approach.map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm leading-7 text-slate-600 md:text-base">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#0f3b97]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal
            delay={80}
            className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_20px_50px_rgba(15,23,42,0.06)]"
          >
            <div className="relative aspect-[4/3]">
              <Image
                src="/api/service-images/cablage-detail.jpg"
                alt="Technicien devant une installation reseau et baie informatique"
                fill
                className="object-cover"
              />
            </div>
          </Reveal>
        </section>

        <section className="mt-6">
          <Reveal className="mb-5">
            <p className="text-sm font-semibold text-slate-900 md:text-base">
              {site.about.valuesTitle}
            </p>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {site.about.values.map((value, index) => (
            <Reveal
              key={value.title}
              delay={index * 80}
              className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.05)]"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                0{index + 1}
              </p>
              <h2 className="mt-4 text-xl font-semibold text-slate-950">{value.title}</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">{value.text}</p>
            </Reveal>
          ))}
          </div>
        </section>
      </div>
    </main>
  );
}
