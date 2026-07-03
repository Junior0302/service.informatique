import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import ServicesActionButtons from "@/components/services/ServicesActionButtons";
import ServicesContactChannels from "@/components/services/ServicesContactChannels";
import Reveal from "@/components/ui/Reveal";
import { Link } from "@/i18n/routing";
import { businessEmail } from "@/lib/seo";
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
    title: `Contact | ${site.contact.title}`,
    description: site.contact.description,
    canonicalPath: `/${safeLocale}/services/contact`,
  });
}

export default async function ServicesContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const site = getServicesSiteContent(locale);
  const mailtoHref = `mailto:${businessEmail}?subject=${encodeURIComponent(
    site.contact.mailSubject
  )}&body=${encodeURIComponent(site.contact.mailBody)}`;

  return (
    <main className="px-6 pb-20 pt-6 text-slate-950 md:px-12">
      <div className="mx-auto max-w-7xl">
        <Reveal className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_20px_50px_rgba(15,23,42,0.06)] md:p-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
            {site.contact.eyebrow}
          </p>
          <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.03em] text-slate-950 md:text-5xl">
            {site.contact.title}
          </h1>
          <p className="mt-4 max-w-4xl text-base leading-8 text-slate-600 md:text-lg">
            {site.contact.description}
          </p>
        </Reveal>

        <div className="mt-6 grid gap-6 lg:grid-cols-[0.88fr_1.12fr]">
          <Reveal className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_20px_50px_rgba(15,23,42,0.06)] md:p-8">
            <p className="text-sm font-semibold text-slate-900">Contact</p>
            <div className="mt-5 space-y-4">
              <div className="flex items-start gap-3 text-sm text-slate-600">
                <Mail className="mt-1 h-5 w-5 shrink-0 text-[#0f3b97]" />
                <a href={mailtoHref} className="transition-colors hover:text-slate-900">
                  {businessEmail}
                </a>
              </div>
              <div className="flex items-start gap-3 text-sm text-slate-600">
                <Phone className="mt-1 h-5 w-5 shrink-0 text-[#0f3b97]" />
                <span>+33 7 80 43 47 60</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-slate-600">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-[#0f3b97]" />
                <span>Interventions sur site</span>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              {site.contact.cards.map((card, index) => (
                <div key={card.title} className="rounded-[20px] border border-slate-200 bg-slate-50 p-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                    0{index + 1}
                  </p>
                  <h2 className="mt-2 text-base font-semibold text-slate-900">{card.title}</h2>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{card.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={mailtoHref}
                className="inline-flex items-center rounded-xl bg-[#0f3b97] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0c327f]"
              >
                {site.contact.emailCta}
              </a>
              <Link
                href="/"
                className="inline-flex items-center rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                {site.contact.backToMain}
              </Link>
            </div>

            <ServicesActionButtons className="mt-6" />
          </Reveal>

          <Reveal delay={80} className="space-y-5">
            <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_20px_50px_rgba(15,23,42,0.06)] md:p-8">
              <p className="text-sm font-semibold text-slate-900">Canaux directs et securises</p>
              <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                Pour la securite, le formulaire a ete retire. Le contact passe maintenant par des
                liens directs et des reseaux verifies deja utilises sur Genesis Connect.
              </p>
            </div>
            <ServicesContactChannels />
          </Reveal>
        </div>
      </div>
    </main>
  );
}
