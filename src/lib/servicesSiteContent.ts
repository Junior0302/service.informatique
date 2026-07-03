export type ServicesLocale = "fr" | "en" | "zh";

export type ServicesFaqItem = {
  question: string;
  answer: string;
};

export type ServicesStepItem = {
  title: string;
  text: string;
};

export type ServicesShowcaseItem = {
  tag: string;
  title: string;
  text: string;
  image: string;
  alt: string;
};

export type ServicesServiceItem = {
  slug: string;
  title: string;
  summary: string;
  problem: string;
  deliverables: string[];
  audience: string[];
  process: ServicesStepItem[];
  faq: ServicesFaqItem[];
  fieldActions: string[];
  outcome: string;
  image: string;
  alt: string;
};

type ServicesSiteContent = {
  nav: {
    home: string;
    domaines: string;
    about: string;
    faq: string;
    contact: string;
    mainSite: string;
  };
  home: {
    eyebrow: string;
    title: string;
    subtitle: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    needsTitle: string;
    needs: Array<{ title: string; text: string }>;
    interventionsTitle: string;
    interventionsLead: string;
    interventions: ServicesShowcaseItem[];
    servicesTitle: string;
    servicesLead: string;
    methodTitle: string;
    method: ServicesStepItem[];
    faqTitle: string;
    faq: ServicesFaqItem[];
    finalTitle: string;
    finalText: string;
  };
  about: {
    eyebrow: string;
    title: string;
    description: string;
    valuesTitle: string;
    values: Array<{ title: string; text: string }>;
    approachTitle: string;
    approach: string[];
  };
  faqPage: {
    eyebrow: string;
    title: string;
    description: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    cards: Array<{ title: string; text: string }>;
    emailCta: string;
    backToMain: string;
    mailSubject: string;
    mailBody: string;
  };
  domains: {
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
  };
  common: {
    discover: string;
    deliverables: string;
    audience: string;
    process: string;
    faq: string;
    fieldActions: string;
    outcome: string;
    contactCta: string;
  };
  services: ServicesServiceItem[];
};

const interventionImages = {
  network: "/api/service-images/cablage-baie.jpg",
  classroom: "/api/service-images/salle-equipee.jpg",
  woodenDesk: "/api/service-images/setup-premium.jpg",
  blueDesk: "/api/service-images/double-screen-blue.jpg",
  officeDesk: "/api/service-images/desk-clean.jpg",
  userSupport: "/api/service-images/screen-support.jpg",
} as const;

export const serviceSlugs = [
  "installation-postes-recents",
  "assistance-accompagnement",
  "maintenance-parc-informatique",
  "cablage-reseau-wifi",
  "sauvegarde-securisation-postes",
  "support-depannage-utilisateurs",
] as const;

export type ServiceSlug = (typeof serviceSlugs)[number];

export function getServicesLocale(locale: string): ServicesLocale {
  return (["fr", "en", "zh"].includes(locale) ? locale : "fr") as ServicesLocale;
}

const content: Record<ServicesLocale, ServicesSiteContent> = {
  fr: {
    nav: {
      home: "Accueil",
      domaines: "Prestations",
      about: "A propos",
      faq: "FAQ",
      contact: "Contact",
      mainSite: "Accueil service info",
    },
    home: {
      eyebrow: "Genesis Service Informatique",
      title: "Installation, assistance et maintenance informatique sur site.",
      subtitle: "Un site pense pour les actions terrain et l'accompagnement utilisateur.",
      description:
        "Ce projet est recentre sur le concret: deploiement de postes recents, cablage reseau, assistance utilisateur, maintenance de parc, reprise d'installation et accompagnement des equipes sur site.",
      primaryCta: "Demander une intervention",
      secondaryCta: "Voir les prestations",
      needsTitle: "Besoins couverts",
      needs: [
        {
          title: "Installation de postes",
          text: "Preparation, raccordement, mise en service et verification de postes recents en environnement bureau, salle ou accueil.",
        },
        {
          title: "Assistance et accompagnement",
          text: "Prise en main utilisateur, aide a l'adoption, explication des outils et accompagnement au quotidien.",
        },
        {
          title: "Reseau et connectique",
          text: "Cablage, switch, baie, Wi-Fi, etiquetage, tests de liaison et remise au propre de l'existant.",
        },
        {
          title: "Maintenance et stabilisation",
          text: "Mises a jour, nettoyage, sauvegarde, support incidents et remise en condition d'un parc informatique.",
        },
      ],
      interventionsTitle: "Actions physiques recentes",
      interventionsLead:
        "Le site montre des interventions reelles de terrain: reseau, salle equipee, postes installes, bureau remis en service et accompagnement utilisateur.",
      interventions: [
        {
          tag: "Reseau",
          title: "Baie et cablage technique",
          text: "Remise au propre des arrivages, raccordement des liaisons et verification de la stabilite reseau.",
          image: interventionImages.network,
          alt: "Vue rapprochee d'un rack reseau avec cables ethernet et connexions techniques.",
        },
        {
          tag: "Salle equipee",
          title: "Deploiement de postes en salle",
          text: "Installation coherent de plusieurs postes dans une salle de formation, d'accueil ou d'enseignement.",
          image: interventionImages.classroom,
          alt: "Salle avec plusieurs postes informatiques alignes et prets a etre utilises.",
        },
        {
          tag: "Poste recent",
          title: "Mise en service d'un poste complet",
          text: "Ecran, peripheriques, logiciels utiles, acces et environnement de travail configure.",
          image: interventionImages.woodenDesk,
          alt: "Poste informatique moderne avec grand ecran, clavier et environnement de travail configure.",
        },
        {
          tag: "Bureau",
          title: "Installation bureau et double equipement",
          text: "Configuration d'un poste fixe ou mixte avec ecran, portable, station d'accueil et tests finaux.",
          image: interventionImages.blueDesk,
          alt: "Poste de travail moderne avec grand ecran et ordinateur portable sur un bureau.",
        },
        {
          tag: "Accompagnement",
          title: "Aide a la prise en main",
          text: "Accompagnement utilisateur apres installation pour rendre l'equipement exploitable tout de suite.",
          image: interventionImages.userSupport,
          alt: "Utilisateur en situation d'accompagnement informatique dans une salle equipee.",
        },
      ],
      servicesTitle: "Prestations principales",
      servicesLead:
        "Chaque prestation est decrite comme une action terrain: ce qui est fait, pour qui, comment l'intervention se deroule et quel resultat est attendu.",
      methodTitle: "Methode d'intervention",
      method: [
        {
          title: "Cadrage rapide",
          text: "Nous validons les lieux, le nombre de postes, l'etat du reseau, les contraintes d'acces et la priorite reelle.",
        },
        {
          title: "Preparation",
          text: "Nous listons le materiel, les comptes, les logiciels utiles, le plan de cablage et les verifications a faire.",
        },
        {
          title: "Intervention",
          text: "Installation physique, branchements, parametrage, tests et remise en condition sur site.",
        },
        {
          title: "Transmission",
          text: "Nous laissons une situation stable, claire pour l'equipe, avec les explications utiles et les points a surveiller.",
        },
      ],
      faqTitle: "Questions frequentes",
      faq: [
        {
          question: "Intervenez-vous vraiment sur site ?",
          answer:
            "Oui. Le positionnement du site est centre sur des actions physiques: installation de postes, remise en ordre d'un bureau, cablage, reseau, accompagnement et support de proximite.",
        },
        {
          question: "Pouvez-vous gerer plusieurs postes recents dans une meme intervention ?",
          answer:
            "Oui. Le deploiement peut concerner un poste unique, une salle complete, un petit parc ou une remise a niveau progressive.",
        },
        {
          question: "L'accompagnement utilisateur fait-il partie du service ?",
          answer:
            "Oui. L'installation ne s'arrete pas au branchement: prise en main, explications, verifications d'usage et support de demarrage sont integres quand c'est necessaire.",
        },
      ],
      finalTitle: "Un service info concret, oriente terrain.",
      finalText:
        "Ici, on parle d'installations, de postes, d'assistance, de cablage et de maintenance reelle. Le but est de rendre une intervention lisible, utile et actionnable.",
    },
    about: {
      eyebrow: "A propos de nous",
      title: "Votre partenaire informatique de proximite",
      description:
        "Nous accompagnons les entreprises, independants, associations et petites structures dans l'installation, la maintenance et le bon fonctionnement de leur environnement informatique.\n\nNotre objectif est simple : fournir un service informatique fiable, reactif et humain, afin que vous puissiez travailler dans les meilleures conditions, sans vous soucier des problemes techniques.\n\nContrairement a un simple support a distance, nous intervenons directement sur site pour installer, configurer, depanner et optimiser vos equipements. Chaque intervention est realisee avec methode, dans le respect de vos contraintes et de votre activite.",
      valuesTitle: "Nos valeurs",
      values: [
        {
          title: "Proximite",
          text: "Une presence sur site et un interlocuteur a votre ecoute pour comprendre votre environnement reel.",
        },
        {
          title: "Reactivite",
          text: "Des interventions rapides pour limiter les interruptions d'activite et remettre vos equipes au travail vite.",
        },
        {
          title: "Fiabilite",
          text: "Des solutions durables adaptees a vos besoins, a vos usages et a votre niveau d'equipement.",
        },
        {
          title: "Simplicite",
          text: "Un langage clair, sans jargon technique inutile, pour vous aider a prendre les bonnes decisions.",
        },
        {
          title: "Professionnalisme",
          text: "Des prestations realisees selon les bonnes pratiques du secteur avec methode et rigueur.",
        },
      ],
      approachTitle: "Notre mission",
      approach: [
        "Permettre a chaque entreprise de disposer d'un environnement informatique stable, securise et performant grace a un accompagnement concret et des interventions de terrain.",
        "Nous intervenons notamment pour l'installation et le renouvellement de postes informatiques, le deploiement de materiel, la maintenance preventive et corrective, l'assistance utilisateur, les reseaux filaires et Wi-Fi, la sauvegarde et la remise en service rapide.",
        "Pourquoi nous choisir ? Interventions directement sur site, interlocuteur unique, solutions concretes, approche orientee resultats et prestations claires sans complexite inutile.",
        "Chaque intervention est realisee avec le meme objectif : offrir un environnement informatique fiable, securise et performant pour que vos equipes puissent travailler sereinement au quotidien.",
      ],
    },
    faqPage: {
      eyebrow: "FAQ",
      title: "Les questions utiles avant une intervention informatique.",
      description:
        "Cette FAQ rassemble les points les plus frequents autour de l'installation de postes, du support utilisateur, du reseau et de la maintenance de parc.",
    },
    contact: {
      eyebrow: "Contact",
      title: "Parlons de votre installation, de votre parc ou de votre besoin d'assistance.",
      description:
        "Cette page sert a lancer une vraie demande terrain: nombre de postes, environnement, reseau, urgence, contraintes d'acces et niveau d'accompagnement attendu.",
      cards: [
        {
          title: "Ou",
          text: "Bureaux, salles de formation, espaces d'accueil, petits sites professionnels et environnements de travail a remettre en ordre.",
        },
        {
          title: "Pour quoi",
          text: "Installation de postes recents, assistance, maintenance, cablage reseau, Wi-Fi, sauvegarde et support utilisateurs.",
        },
        {
          title: "Avant intervention",
          text: "Indiquez le nombre de postes, l'adresse, le contexte, l'etat actuel, l'urgence et si du materiel est deja sur place.",
        },
      ],
      emailCta: "Envoyer une demande d'intervention",
      backToMain: "Retour accueil service info",
      mailSubject: "Demande - Service Informatique",
      mailBody:
        "Nom :\nEntreprise :\nAdresse d'intervention :\nNombre de postes :\nType de besoin :\nMateriel deja en place :\nReseau / Wi-Fi :\nUrgence :\nContexte :\nInformations complementaires :",
    },
    domains: {
      eyebrow: "Prestations",
      title: "Des prestations pensees pour le terrain et l'usage reel.",
      description:
        "Chaque prestation detaille ce qui est fait sur site, le type d'environnement concerne et le resultat attendu apres intervention.",
      cta: "Voir le detail",
    },
    common: {
      discover: "Voir le detail",
      deliverables: "Ce qui est pris en charge",
      audience: "Environnements concernes",
      process: "Deroulement",
      faq: "Questions frequentes",
      fieldActions: "Actions sur site",
      outcome: "Resultat attendu",
      contactCta: "Demander une intervention",
    },
    services: [
      {
        slug: "installation-postes-recents",
        title: "Installation de postes recents",
        summary:
          "Mise en service de postes fixes ou mobiles: branchements, ecrans, peripheriques, comptes, logiciels et verification finale.",
        problem:
          "Quand de nouveaux postes arrivent, le risque est de perdre du temps en branchements incomplets, profils mal configures, acces manquants ou peripheriques non reconnus.",
        deliverables: [
          "Preparation du poste et des peripheriques",
          "Raccordement ecran, clavier, souris, station d'accueil",
          "Connexion reseau, imprimante et acces utiles",
          "Verification de fonctionnement en fin d'installation",
        ],
        audience: ["Bureaux individuels", "Petites equipes", "Salles equipees", "Structures en renouvellement de parc"],
        process: [
          { title: "Preparation", text: "Controle du materiel, des comptes et des logiciels attendus avant mise en place." },
          { title: "Installation", text: "Montage du poste, branchements, detection des peripheriques et parametrage utile." },
          { title: "Validation", text: "Tests de connexion, impression, session, affichage et verification d'usage reel." },
        ],
        faq: [
          {
            question: "Pouvez-vous installer plusieurs postes d'un coup ?",
            answer: "Oui. Le service couvre un poste unique comme une petite vague de deploiement sur plusieurs bureaux ou salles.",
          },
        ],
        fieldActions: [
          "Montage et raccordement complet du poste",
          "Gestion des ecrans, stations d'accueil et accessoires",
          "Connexion au reseau, au Wi-Fi ou a l'impression",
          "Controle final avec l'utilisateur ou le responsable sur place",
        ],
        outcome:
          "Des postes vraiment exploitables a la fin de l'intervention, sans laisser les equipes seules avec des branchements incomplets.",
        image: interventionImages.woodenDesk,
        alt: "Poste informatique recent configure sur un bureau avec ecran et peripheriques.",
      },
      {
        slug: "assistance-accompagnement",
        title: "Assistance et accompagnement",
        summary:
          "Accompagnement de proximite pour aider les utilisateurs a prendre en main leur environnement, comprendre les outils et travailler sans blocage.",
        problem:
          "Un poste installe mais non compris ralentit l'activite. Les utilisateurs ont souvent besoin d'un accompagnement court mais clair pour etre autonomes.",
        deliverables: [
          "Prise en main utilisateur apres installation",
          "Aide a la connexion aux comptes et services",
          "Explications des usages essentiels",
          "Support de demarrage et bonnes pratiques de base",
        ],
        audience: ["Nouveaux utilisateurs", "Equipes non techniques", "Petites structures", "Environnements avec rotation de personnel"],
        process: [
          { title: "Observation", text: "Identifier les blocages reals d'usage et le niveau d'autonomie attendu." },
          { title: "Accompagnement", text: "Montrer, faire avec l'utilisateur, puis verifier qu'il peut reproduire les actions utiles." },
          { title: "Consolidation", text: "Laisser des reperes simples pour eviter les demandes repetitives sur les memes points." },
        ],
        faq: [
          {
            question: "Est-ce seulement pour des debutants ?",
            answer: "Non. L'accompagnement est utile a chaque changement de poste, d'outil, d'organisation ou de procedure.",
          },
        ],
        fieldActions: [
          "Accompagnement poste par poste ou petit groupe",
          "Aide a la prise en main des outils du quotidien",
          "Verification d'acces, de reperes et de procedures simples",
          "Transmission claire des points de vigilance et d'autonomie",
        ],
        outcome:
          "Des utilisateurs plus a l'aise, avec moins de friction au demarrage et moins d'appels d'urgence pour des gestes essentiels.",
        image: interventionImages.userSupport,
        alt: "Situation d'accompagnement utilisateur dans une salle informatique.",
      },
      {
        slug: "maintenance-parc-informatique",
        title: "Maintenance de parc informatique",
        summary:
          "Suivi de postes, mises a jour, controles de stabilite, nettoyage et remise en ordre d'un environnement devenu fragile.",
        problem:
          "Quand les postes vieillissent mal ou ne sont plus suivis, les incidents se multiplient, les performances chutent et l'organisation technique devient floue.",
        deliverables: [
          "Etat des lieux du parc et des points fragiles",
          "Mises a jour et controles de stabilite",
          "Nettoyage logique et verifications d'usage",
          "Recommandations de priorite a court terme",
        ],
        audience: ["Petits parcs", "Bureaux de 2 a 30 postes", "Associations", "Structures sans support interne"],
        process: [
          { title: "Audit rapide", text: "Lister les postes critiques, les habitudes de travail et les incidents recurrent." },
          { title: "Maintenance", text: "Traiter prioritairement ce qui bloque ou fragilise le quotidien des utilisateurs." },
          { title: "Suivi", text: "Laisser une base plus propre et des prochaines etapes claires." },
        ],
        faq: [
          {
            question: "Faut-il avoir un gros parc pour demander ce service ?",
            answer: "Non. Les petites structures gagnent souvent le plus a remettre propre un environnement qui s'est degrade progressivement.",
          },
        ],
        fieldActions: [
          "Controle de plusieurs postes sur site",
          "Mises a jour, nettoyage et corrections rapides",
          "Verification des profils, imprimantes et partages utiles",
          "Remise en coherence du parc et des usages de base",
        ],
        outcome:
          "Un parc plus stable, mieux compris et plus simple a faire vivre au quotidien.",
        image: interventionImages.officeDesk,
        alt: "Poste de bureau moderne dans un environnement de travail professionnel.",
      },
      {
        slug: "cablage-reseau-wifi",
        title: "Cablage reseau et Wi-Fi",
        summary:
          "Organisation du cablage, reprises de liaisons, optimisation de couverture Wi-Fi et verification de connectivite.",
        problem:
          "Un reseau mal propre ou des points de connexion mal identifies font perdre du temps, degradent la stabilite et compliquent toute evolution.",
        deliverables: [
          "Reprise du cablage utile et raccordements",
          "Organisation physique des liaisons et reperage",
          "Verification des points reseau et de la couverture",
          "Tests de stabilite et recommandations d'amelioration",
        ],
        audience: ["Bureaux", "Locaux multi-postes", "Salles equipees", "Sites en remise a niveau technique"],
        process: [
          { title: "Lecture de l'existant", text: "Comprendre le role des liaisons, des switchs, des acces Wi-Fi et des zones faibles." },
          { title: "Intervention", text: "Raccorder proprement, etiqueter, reorganiser et tester les points critiques." },
          { title: "Stabilisation", text: "Verifier que les usages reels tiennent sans coupure ni incomprehension d'infrastructure." },
        ],
        faq: [
          {
            question: "Pouvez-vous reprendre un reseau deja en place ?",
            answer: "Oui. C'est meme un cas frequent: remettre propre sans tout refaire, en priorisant ce qui compte vraiment.",
          },
        ],
        fieldActions: [
          "Controle baie, switch et prises utiles",
          "Raccordement et reprise de cablage",
          "Tests de liaisons reseau et connectivite Wi-Fi",
          "Reperage simple pour faciliter les futures interventions",
        ],
        outcome:
          "Un reseau plus lisible, plus stable et moins dependant d'improvisations ou de branchements non identifies.",
        image: interventionImages.network,
        alt: "Raccordement reseau avec cables ethernet sur un equipement technique.",
      },
      {
        slug: "sauvegarde-securisation-postes",
        title: "Sauvegarde et securisation des postes",
        summary:
          "Sauvegarde de base, hygiene numerique, protection des acces et reduction des risques sur des environnements de travail courants.",
        problem:
          "Beaucoup de structures travaillent sans sauvegarde fiable, avec des acces trop simples ou des habitudes risquant de provoquer perte de donnees ou compromission.",
        deliverables: [
          "Verification des acces et mots de passe essentiels",
          "Mise en place d'une sauvegarde de base",
          "Recommandations de securisation prioritaires",
          "Sensibilisation simple pour l'equipe",
        ],
        audience: ["TPE", "Independants", "Petits bureaux", "Structures sans procedure securite formalisee"],
        process: [
          { title: "Priorites", text: "Identifier ce qui expose le plus vite la structure a une perte ou un blocage." },
          { title: "Protection", text: "Mettre en place des mesures simples, realistes et exploitables." },
          { title: "Transmission", text: "Expliquer ce qui a ete mis en place et ce qu'il faut maintenir dans le temps." },
        ],
        faq: [
          {
            question: "Ce service est-il utile meme pour une petite equipe ?",
            answer: "Oui. Les petites equipes sont souvent les plus exposees quand tout repose sur quelques postes et peu de sauvegardes.",
          },
        ],
        fieldActions: [
          "Verification des acces principaux",
          "Mise en place ou controle d'une sauvegarde utile",
          "Correction de points de faiblesse evidents",
          "Transmission de bonnes pratiques directement applicables",
        ],
        outcome:
          "Moins de risque, plus de continuite et une base de securite enfin exploitable au quotidien.",
        image: interventionImages.blueDesk,
        alt: "Poste de travail moderne utilise pour illustrer la protection, la sauvegarde et la stabilite d'environnement.",
      },
      {
        slug: "support-depannage-utilisateurs",
        title: "Support et depannage utilisateurs",
        summary:
          "Diagnostic de blocages, resolution d'incidents courants et remise en service rapide de postes ou d'usages critiques.",
        problem:
          "Quand un utilisateur est bloque, l'activite s'arrete tout de suite. Il faut une intervention claire, rapide et rassurante pour relancer le travail.",
        deliverables: [
          "Diagnostic de la situation et de la criticite",
          "Correction du blocage sur place ou en proximite",
          "Verification que l'usage repart correctement",
          "Conseils simples pour limiter la recurrence",
        ],
        audience: ["Utilisateurs bureautiques", "Petites equipes", "Structures sans support interne", "Postes isoles ou critiques"],
        process: [
          { title: "Diagnostic", text: "Comprendre le symptome, l'impact et le chemin le plus rapide vers une remise en service." },
          { title: "Resolution", text: "Corriger ce qui bloque sans sur-complexifier la solution." },
          { title: "Verification", text: "Confirmer avec l'utilisateur que le poste ou l'usage est redevenu operationnel." },
        ],
        faq: [
          {
            question: "Pouvez-vous intervenir pour un blocage ponctuel ?",
            answer: "Oui. Le service couvre aussi les besoins urgents ou localises quand un utilisateur ne peut plus travailler normalement.",
          },
        ],
        fieldActions: [
          "Diagnostic du poste ou du symptome utilisateur",
          "Correction ciblee et remise en service",
          "Verification des acces et des usages immediats",
          "Recommandation de prevention quand c'est utile",
        ],
        outcome:
          "Un utilisateur relance plus vite, avec moins d'interruption et un contexte mieux compris pour la suite.",
        image: interventionImages.officeDesk,
        alt: "Poste de travail vide illustrant un support de proximite et une remise en service rapide.",
      },
    ],
  },
  en: {
    nav: {
      home: "Home",
      domaines: "Services",
      about: "About",
      faq: "FAQ",
      contact: "Contact",
      mainSite: "Service home",
    },
    home: {
      eyebrow: "Genesis IT Services",
      title: "On-site installation, user assistance and IT maintenance.",
      subtitle: "A service website focused on real field operations.",
      description:
        "This version is centered on physical IT actions: workstation deployment, cabling, on-site support, maintenance, stabilization and user onboarding.",
      primaryCta: "Request an intervention",
      secondaryCta: "View services",
      needsTitle: "Needs covered",
      needs: [
        { title: "Workstations", text: "Deployment of recent workstations and peripherals." },
        { title: "Support", text: "User assistance and guided onboarding." },
        { title: "Network", text: "Cabling, Wi-Fi and connectivity verification." },
        { title: "Maintenance", text: "Stabilization, updates and support." },
      ],
      interventionsTitle: "Recent field actions",
      interventionsLead:
        "A gallery of real physical IT contexts: network, equipped room, installed workstation and user support.",
      interventions: [],
      servicesTitle: "Core services",
      servicesLead: "Each page explains a real on-site service and the expected outcome.",
      methodTitle: "Method",
      method: [
        { title: "Scope", text: "We review the site, equipment and constraints." },
        { title: "Prepare", text: "We list the materials, accounts and checks to perform." },
        { title: "Intervene", text: "We install, connect, configure and test on site." },
        { title: "Hand over", text: "We leave the environment stable and understandable." },
      ],
      faqTitle: "FAQ",
      faq: [
        { question: "Do you work on site?", answer: "Yes. This project is focused on physical IT work and proximity support." },
        { question: "Can you deploy several workstations?", answer: "Yes, from a single desk to a small room or a compact fleet." },
        { question: "Is user onboarding included?", answer: "Yes, when needed we include practical user guidance after installation." },
      ],
      finalTitle: "A concrete IT service website.",
      finalText: "Less studio language, more real operations, installations and support.",
    },
    about: {
      eyebrow: "About",
      title: "A dedicated site for physical IT services.",
      description:
        "This repository is being refocused on on-site installation, support, maintenance and network work instead of the previous studio-oriented positioning.",
      valuesTitle: "Principles",
      values: [
        { title: "Field-first", text: "Describe what is physically done on site." },
        { title: "Clarity", text: "Make the intervention understandable quickly." },
        { title: "Continuity", text: "Leave a stable and usable setup behind." },
      ],
      approachTitle: "Approach",
      approach: [
        "Direct wording focused on field operations.",
        "Pages structured around workstations, support, network and maintenance.",
        "Contact focused on location, equipment volume and technical constraints.",
      ],
    },
    faqPage: {
      eyebrow: "FAQ",
      title: "Useful answers before requesting an intervention.",
      description: "Practical questions about installations, support and maintenance.",
    },
    contact: {
      eyebrow: "Contact",
      title: "Tell us about your site, workstations or support need.",
      description: "Use this page to describe the location, number of workstations, network context and urgency.",
      cards: [
        { title: "Where", text: "Office, classroom, reception or structured small worksite." },
        { title: "What", text: "Workstation install, support, maintenance, network and Wi-Fi." },
        { title: "Before we come", text: "Share address, number of workstations, urgency and current setup." },
      ],
      emailCta: "Send an intervention request",
      backToMain: "Back to service home",
      mailSubject: "Request - IT Service",
      mailBody:
        "Name:\nCompany:\nAddress:\nNumber of workstations:\nMain need:\nExisting equipment:\nNetwork / Wi-Fi:\nUrgency:\nContext:\nAdditional info:",
    },
    domains: {
      eyebrow: "Services",
      title: "Field services and practical support.",
      description: "Every page explains what is done on site and what result is expected.",
      cta: "View details",
    },
    common: {
      discover: "View details",
      deliverables: "Coverage",
      audience: "For",
      process: "Process",
      faq: "FAQ",
      fieldActions: "On-site actions",
      outcome: "Expected outcome",
      contactCta: "Request an intervention",
    },
    services: [],
  },
  zh: {
    nav: {
      home: "首页",
      domaines: "服务",
      about: "关于",
      faq: "FAQ",
      contact: "联系",
      mainSite: "服务首页",
    },
    home: {
      eyebrow: "Genesis IT Services",
      title: "现场安装、用户协助与 IT 维护。",
      subtitle: "一个真正面向现场服务的新站点。",
      description:
        "这个版本聚焦物理 IT 行动：新工位安装、布线、现场支持、维护、环境稳定化与用户陪伴。",
      primaryCta: "申请干预",
      secondaryCta: "查看服务",
      needsTitle: "覆盖需求",
      needs: [
        { title: "工位", text: "新工位与外设部署。" },
        { title: "协助", text: "用户陪伴与上手支持。" },
        { title: "网络", text: "布线、Wi-Fi 与连通性检查。" },
        { title: "维护", text: "稳定化、更新与支持。" },
      ],
      interventionsTitle: "近期现场操作",
      interventionsLead: "围绕网络、教室、工位与用户支持的真实 IT 场景。",
      interventions: [],
      servicesTitle: "主要服务",
      servicesLead: "每个页面都说明真实现场服务及预期结果。",
      methodTitle: "方式",
      method: [
        { title: "确认", text: "确认现场、设备与限制。" },
        { title: "准备", text: "整理材料、账户与检查点。" },
        { title: "执行", text: "现场安装、连接、配置与测试。" },
        { title: "交付", text: "留下稳定、可理解的环境。" },
      ],
      faqTitle: "常见问题",
      faq: [
        { question: "是否现场服务？", answer: "是的，这个项目聚焦物理 IT 干预与近场支持。" },
        { question: "能否部署多个工位？", answer: "可以，从单个工位到小型教室或小规模设备组。" },
        { question: "是否包含用户上手？", answer: "需要时会包含安装后的实际使用陪伴。" },
      ],
      finalTitle: "一个更具体的服务信息站。",
      finalText: "减少 studio 叙事，更多真实安装、支持与维护。",
    },
    about: {
      eyebrow: "关于",
      title: "一个真正面向现场 IT 服务的站点。",
      description: "这个仓库正在从旧的 studio / 3D 方向转向现场安装、支持、维护与网络服务。",
      valuesTitle: "原则",
      values: [
        { title: "现场优先", text: "先说明现场实际做什么。" },
        { title: "清晰", text: "让访客快速理解干预内容。" },
        { title: "连续性", text: "留下稳定可用的环境。" },
      ],
      approachTitle: "方法",
      approach: [
        "更直接的现场语言。",
        "按工位、支持、网络与维护组织内容。",
        "联系信息聚焦地点、数量与技术限制。",
      ],
    },
    faqPage: {
      eyebrow: "FAQ",
      title: "申请现场服务前的常见问题。",
      description: "围绕安装、支持与维护的实用说明。",
    },
    contact: {
      eyebrow: "联系",
      title: "告诉我们你的现场、工位数量或支持需求。",
      description: "请说明地点、工位数量、网络环境与紧急程度。",
      cards: [
        { title: "地点", text: "办公室、教室、接待区或小型工作场所。" },
        { title: "内容", text: "工位安装、支持、维护、网络与 Wi-Fi。" },
        { title: "提前信息", text: "请给出地址、数量、紧急度与现状。" },
      ],
      emailCta: "发送干预请求",
      backToMain: "返回服务首页",
      mailSubject: "需求 - IT 服务",
      mailBody:
        "姓名：\n公司：\n地址：\n工位数量：\n主要需求：\n现有设备：\n网络 / Wi-Fi：\n紧急程度：\n背景：\n补充信息：",
    },
    domains: {
      eyebrow: "服务",
      title: "现场服务与实用支持。",
      description: "每个页面都解释现场动作与预期结果。",
      cta: "查看详情",
    },
    common: {
      discover: "查看详情",
      deliverables: "覆盖内容",
      audience: "适用环境",
      process: "流程",
      faq: "FAQ",
      fieldActions: "现场动作",
      outcome: "预期结果",
      contactCta: "申请干预",
    },
    services: [],
  },
};

content.en.home.interventions = content.fr.home.interventions;
content.zh.home.interventions = content.fr.home.interventions;

content.en.services = content.fr.services.map((service) => ({
  ...service,
}));

content.zh.services = content.fr.services.map((service) => ({
  ...service,
}));

export function getServicesSiteContent(locale: string) {
  return content[getServicesLocale(locale)];
}

export function getServicesSiteService(locale: string, slug: string) {
  const site = getServicesSiteContent(locale);
  return site.services.find((service) => service.slug === slug);
}
