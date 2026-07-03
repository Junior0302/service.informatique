import Image from "next/image";
import { Link } from "@/i18n/routing";
import { businessEmail } from "@/lib/seo";
import { getServicesSiteContent } from "@/lib/servicesSiteContent";
import { socialLinks } from "@/lib/socialLinks";

export default function ServicesSiteFooter({ locale }: { locale: string }) {
  const site = getServicesSiteContent(locale);

  return (
    <section className="rounded-[28px] bg-[#082556] text-white shadow-[0_24px_70px_rgba(15,23,42,0.16)]">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 md:px-8 lg:grid-cols-[1.1fr_0.75fr_0.75fr_0.9fr]">
        <div className="max-w-xl">
          <Image
            src="/images/branding/service-info-logo.svg"
            alt="Genesis Service Informatique"
            width={210}
            height={60}
            className="h-auto w-[178px] md:w-[210px]"
          />
          <p className="mt-4 font-serif text-3xl leading-tight text-white md:text-4xl">
            {site.home.finalTitle}
          </p>
          <p className="mt-4 text-base leading-8 text-blue-50/78">
            {site.home.finalText}
          </p>
        </div>

        <div className="space-y-3">
          <p className="text-[11px] uppercase tracking-[0.22em] text-blue-200/78">
            Liens
          </p>
          <div className="flex flex-col gap-3 text-sm text-blue-50/86">
            <Link href="/services" className="transition-colors hover:text-white">
              {site.nav.home}
            </Link>
            <Link href="/services/domaines" className="transition-colors hover:text-white">
              {site.nav.domaines}
            </Link>
            <Link href="/services/a-propos" className="transition-colors hover:text-white">
              {site.nav.about}
            </Link>
            <Link href="/services/faq" className="transition-colors hover:text-white">
              {site.nav.faq}
            </Link>
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-[11px] uppercase tracking-[0.22em] text-blue-200/78">
            Contact
          </p>
          <div className="flex flex-col gap-3 text-sm text-blue-50/86">
            <Link href="/services/contact" className="transition-colors hover:text-white">
              {site.nav.contact}
            </Link>
            <a href={`mailto:${businessEmail}`} className="transition-colors hover:text-white">
              {businessEmail}
            </a>
            <Link href="/services" className="transition-colors hover:text-white">
              {site.nav.mainSite}
            </Link>
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-[11px] uppercase tracking-[0.22em] text-blue-200/78">
            Reseaux
          </p>
          <div className="flex flex-col gap-3 text-sm text-blue-50/86">
            {socialLinks
              .filter((item) => ["WhatsApp", "LinkedIn", "Facebook"].includes(item.label))
              .map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-white"
                >
                  {item.label}
                </a>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
