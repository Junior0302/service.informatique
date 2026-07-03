import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Geist_Mono, Geist } from "next/font/google";
import "../globals.css";
import { defaultSEO } from "@/lib/seo";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';

type AppLocale = (typeof routing.locales)[number];

/* const Scene = dynamic(() => import("@/components/three/Scene"), {
  ssr: false,
}); */

const surgena = localFont({
  src: [
    {
      path: "../../fonts/Surgena-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../fonts/Surgena-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../fonts/Surgena-Medium.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-surgena",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata({
  params
}: {
  params: Promise<{locale: string}>;
}): Promise<Metadata> {
  const {locale} = await params;
  const localizedTitles = {
    fr: "Genesis Service Informatique | Installation, assistance et maintenance sur site",
    en: "Genesis IT Services | On-site setup, support and maintenance",
    zh: "Genesis IT Services | 现场安装、支持与维护",
  } as const;
  const localizedDescriptions = {
    fr: "Site dedie aux interventions terrain: installation de postes, support utilisateurs, maintenance, cablage reseau, Wi-Fi et assistance de proximite.",
    en: "Dedicated on-site IT services: workstation setup, user support, maintenance, cabling, Wi-Fi and field assistance.",
    zh: "专注于现场 IT 服务：工位安装、用户支持、维护、布线、Wi-Fi 与现场协助。",
  } as const;
  const safeLocale = locale in localizedTitles ? (locale as keyof typeof localizedTitles) : "fr";

  return {
    ...defaultSEO,
    metadataBase: defaultSEO.metadataBase,
    title: localizedTitles[safeLocale],
    description: localizedDescriptions[safeLocale],
    keywords: defaultSEO.keywords,
    openGraph: {
      ...defaultSEO.openGraph,
      title: localizedTitles[safeLocale],
      description: localizedDescriptions[safeLocale],
      locale: locale,
    },
    twitter: {
      ...defaultSEO.twitter,
      title: localizedTitles[safeLocale],
      description: localizedDescriptions[safeLocale],
    },
  };
}

export const viewport: Viewport = {
  themeColor: "#f3f5f8",
  colorScheme: "light",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;

  if (!routing.locales.includes(locale as AppLocale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`${surgena.variable} ${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground flex min-h-screen flex-col`}
      >
        <NextIntlClientProvider messages={messages}>
          <main className="flex-grow">{children}</main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
