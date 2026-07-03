import { HardDrive, ShieldCheck } from "lucide-react";
import ServicesActionButtons from "@/components/services/ServicesActionButtons";
import { Link } from "@/i18n/routing";
import { getServicesSiteContent } from "@/lib/servicesSiteContent";

export default function ServicesSiteHeader({ locale }: { locale: string }) {
  const site = getServicesSiteContent(locale);

  return (
    <section className="rounded-[28px] border border-slate-200 bg-white shadow-[0_20px_50px_rgba(15,23,42,0.06)]">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-4 md:px-8">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0f3b97] text-white">
            <HardDrive className="h-5 w-5" />
          </div>
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-500">
              Genesis
            </p>
            <p className="text-sm font-semibold text-slate-900 md:text-base">
              Service Informatique
            </p>
          </div>
        </div>

        <nav className="flex flex-wrap items-center gap-x-5 gap-y-3 text-[0.82rem] font-medium text-slate-600">
          <Link href="/services" className="transition-colors hover:text-slate-950">
            {site.nav.home}
          </Link>
          <Link href="/services/domaines" className="transition-colors hover:text-slate-950">
            {site.nav.domaines}
          </Link>
          <Link href="/services/a-propos" className="transition-colors hover:text-slate-950">
            {site.nav.about}
          </Link>
          <Link href="/services/faq" className="transition-colors hover:text-slate-950">
            {site.nav.faq}
          </Link>
          <Link href="/services/contact" className="transition-colors hover:text-slate-950">
            {site.nav.contact}
          </Link>
          <Link
            href="/services/domaines"
            className="inline-flex items-center gap-2 rounded-xl bg-[#0f3b97] px-4 py-2.5 text-[0.8rem] font-semibold text-white transition hover:bg-[#0c327f]"
          >
            <ShieldCheck className="h-4 w-4" />
            {site.home.primaryCta}
          </Link>
        </nav>
        </div>

        <div className="border-t border-slate-100 pt-4">
          <ServicesActionButtons />
        </div>
      </div>
    </section>
  );
}
