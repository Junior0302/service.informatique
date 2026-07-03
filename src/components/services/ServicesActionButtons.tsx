import { MessageCircle, Mail, Linkedin, Facebook } from "lucide-react";
import { serviceActionLinks } from "@/lib/serviceActionLinks";

type Variant = "light" | "dark";

const buttonStyles: Record<Variant, string> = {
  light:
    "border border-slate-200 bg-white text-slate-800 hover:border-slate-300 hover:bg-slate-50 focus-visible:ring-[#0f3b97]/25",
  dark:
    "border border-white/20 bg-white/8 text-white hover:bg-white/14 focus-visible:ring-white/20",
};

const items = [
  {
    label: "WhatsApp",
    href: serviceActionLinks.whatsapp,
    icon: MessageCircle,
  },
  {
    label: "Email",
    href: serviceActionLinks.email,
    icon: Mail,
  },
  {
    label: "LinkedIn",
    href: serviceActionLinks.linkedin,
    icon: Linkedin,
  },
  {
    label: "Facebook",
    href: serviceActionLinks.facebook,
    icon: Facebook,
  },
] as const;

export default function ServicesActionButtons({
  variant = "light",
  className = "",
}: {
  variant?: Variant;
  className?: string;
}) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`.trim()}>
      {items.map((item) => {
        const Icon = item.icon;

        return (
          <a
            key={item.label}
            href={item.href}
            target={item.href.startsWith("mailto:") ? undefined : "_blank"}
            rel={item.href.startsWith("mailto:") ? undefined : "noreferrer"}
            className={`inline-flex min-h-11 items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-4 ${buttonStyles[variant]}`}
          >
            <Icon className="h-4 w-4" />
            {item.label}
          </a>
        );
      })}
    </div>
  );
}
