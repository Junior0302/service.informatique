import { ArrowUpRight, Facebook, Linkedin, Mail, MessageCircle } from "lucide-react";
import { serviceSocialCards } from "@/lib/serviceActionLinks";

const iconMap = {
  WhatsApp: MessageCircle,
  LinkedIn: Linkedin,
  Facebook: Facebook,
  Email: Mail,
} as const;

export default function ServicesContactChannels() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {serviceSocialCards.map((item) => {
        const Icon = iconMap[item.label];

        return (
          <a
            key={item.label}
            href={item.href}
            target={item.href.startsWith("mailto:") ? undefined : "_blank"}
            rel={item.href.startsWith("mailto:") ? undefined : "noreferrer"}
            className="group rounded-[24px] border border-slate-200 bg-white p-5 shadow-[0_18px_50px_rgba(15,23,42,0.05)] transition duration-200 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_24px_60px_rgba(15,23,42,0.08)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#0f3b97]/20"
          >
            <div className="flex items-start justify-between gap-4">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-[#0f3b97]">
                <Icon className="h-5 w-5" />
              </span>
              <ArrowUpRight className="h-4 w-4 text-slate-400 transition group-hover:text-slate-700" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-slate-950">{item.label}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
          </a>
        );
      })}
    </div>
  );
}
