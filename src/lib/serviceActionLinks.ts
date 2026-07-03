import { businessEmail } from "@/lib/seo";
import { socialLinks } from "@/lib/socialLinks";

function findSocial(label: string) {
  return socialLinks.find((item) => item.label === label)?.href ?? "#";
}

export const serviceActionLinks = {
  whatsapp: findSocial("WhatsApp"),
  linkedin: findSocial("LinkedIn"),
  facebook: findSocial("Facebook"),
  email: `mailto:${businessEmail}`,
} as const;

export const serviceSocialCards = [
  {
    label: "WhatsApp",
    href: serviceActionLinks.whatsapp,
    description: "Pour une demande rapide, un besoin urgent ou une premiere qualification.",
  },
  {
    label: "LinkedIn",
    href: serviceActionLinks.linkedin,
    description: "Pour suivre l'activite, presenter votre contexte ou prendre contact plus corporate.",
  },
  {
    label: "Facebook",
    href: serviceActionLinks.facebook,
    description: "Pour un contact direct et une passerelle simple depuis vos equipes ou vos pages pro.",
  },
  {
    label: "Email",
    href: serviceActionLinks.email,
    description: "Pour envoyer un besoin plus detaille avec contexte, volume de postes et contraintes.",
  },
] as const;
