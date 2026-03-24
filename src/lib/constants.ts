export const NAV_LINKS = [
  { label: "Tjänster", href: "#tjanster" },
  { label: "Resultat", href: "#resultat" },
  { label: "Varför H.A.B.", href: "#varfor" },
  { label: "Kundröster", href: "#kundröster" },
] as const;

export const BANNER = {
  text: "Över 20 års erfarenhet av att bygga lönsam B2B-försäljning.",
} as const;

export const HERO = {
  headline: "Vi bygger ",
  headlineEm: "försäljningen",
  headlineSuffix: " som driver era beslut",
  subtitle:
    "Vi hjälper företag att effektivisera säljprocesser, samordna team och fatta smartare beslut med expertis och beprövade metoder.",
  ctaPrimary: "Kom igång",
  ctaSecondary: "Boka ett möte",
  facepileText: "100+ företag litar redan på oss",
} as const;

export const SEGMENT_CARDS = [
  {
    label: "För tillväxtbolag",
    description:
      "Säker, flexibel implementering anpassad för kritisk infrastruktur och affärsbehov.",
    image: "/images/segment-1.jpg",
  },
  {
    label: "För etablerade bolag",
    description:
      "Effektivisera arbetsflöden, avslöja insikter och skala med trygghet.",
    image: "/images/segment-2.jpg",
  },
] as const;

export const FOUNDATION = {
  text: "Moderna utmaningar kräver moderna lösningar. Vår approach kombinerar djup expertis med beprövade metoder designade för att ersätta föråldrade system och manuellt arbete.",
  items: [
    {
      icon: "sparkle",
      title: "Insikter utan brus",
      description: "Tydlig riktning baserad på data",
    },
    {
      icon: "shield",
      title: "Kvalitet i varje steg",
      description: "Säkerhet och process i fokus",
    },
    {
      icon: "smile",
      title: "Byggt kring människor",
      description: "Relationer och förtroende först",
    },
  ],
} as const;

export const FEATURES = [
  {
    title: "Skräddarsydd Strategi\nFör Moderna Företag",
    description:
      "Säljmodeller designade kring de unika behoven hos professionella organisationer — kombinerat med branschkunskap och avancerad metodik för maximal effekt.",
    image: "/images/feature-1.svg",
    mockupTitle: "H.A.B. Strategimodell",
    reverse: false,
  },
  {
    title: "Precisa Insikter\ni Varje System",
    description:
      "Håll er data synkroniserad mellan system. Vår approach ger er insikter i realtid som ni kan agera på direkt — utan fördröjning.",
    image: "/images/feature-2.jpg",
    mockupTitle: "Pipeline Dashboard",
    reverse: true,
  },
  {
    title: "Komplett Säljstyrka\nFör Er Verksamhet",
    description:
      "Få tillgång till ett tränat säljteam som representerar ert varumärke. Vi prospekterar, bokar möten och stänger — ni fokuserar på leverans.",
    image: "/images/feature-3.jpg",
    mockupTitle: "H.A.B. Säljteam",
    reverse: false,
  },
] as const;

export const STATS = {
  headline: "Företagsresultat, Backade\nav Verkliga Siffror",
  subtitle: "Vi mäter framgång i konkreta affärsresultat, inte aktivitetsmått.",
  rating: "4.9/5 från 300+ recensioner",
  items: [
    {
      number: "500+",
      title: "Genomförda projekt",
      description:
        "Över 500 framgångsrika säljprojekt för B2B-företag i Norden sedan starten.",
      label: "PROJEKT",
    },
    {
      number: "70%",
      title: "Smartare arbetsflöden",
      description:
        "Genomsnittlig förbättring av tid från första kontakt till stängd affär.",
      label: "EFFEKTIVITET",
    },
    {
      number: "5x",
      title: "Snabbare exekvering",
      description:
        "Våra kunder bygger pipeline fem gånger snabbare med vår metodik.",
      label: "HASTIGHET",
    },
    {
      number: "98%",
      title: "Kundnöjdhet",
      description:
        "Andelen kunder som rekommenderar H.A.B. till andra företag.",
      label: "NÖJDHET",
    },
  ],
} as const;

export const VISION = {
  quote:
    "Vi ville inte bara ha ett verktyg, vi ville ha ett sätt att verkligen förändra hur företag arbetar tillsammans.",
  authors: "Henrik Andersson och Maria Björk",
  role: "Grundare av H.A.B.",
} as const;

export const COMPARISON = {
  headline: "Vad skiljer oss från\nkonkurrenterna?",
  rows: [
    { feature: "Uppstartstid", hab: "1 dag", competitor: "3–5 dagar" },
    { feature: "Datadriven precision", hab: true, competitor: "Delvis" },
    { feature: "Automatisering", hab: true, competitor: false },
    { feature: "Prediktiva insikter", hab: true, competitor: false },
    { feature: "Implementationskostnad", hab: "Inkluderad", competitor: "Tillägg" },
    { feature: "Samarbetsverktyg", hab: true, competitor: false },
    { feature: "Anpassade dashboards", hab: true, competitor: false },
    { feature: "Säkerhet & Compliance", hab: "Premium", competitor: "Bas" },
    { feature: "Kundsupport", hab: "Obegränsad", competitor: "Bas" },
  ],
} as const;

export const TESTIMONIALS = {
  headline: "Vad Våra Kunder Säger\nom H.A.B.",
  items: [
    {
      quote:
        "H.A.B. har gett oss den klarhet vi saknade. Det förändrade inte bara våra siffror — det kopplade ihop vårt team direkt och effektiviserade beslutsfattandet inom dagar.",
      author: "Anna Eriksson",
      role: "Försäljningschef, DataFlow AB",
      image: "/images/testimonial-1.jpg",
    },
    {
      quote:
        "Vi gick från noll till en pipeline värd 15 MSEK på bara tre månader. Helt otroligt engagemang och professionalism.",
      author: "Marcus Berg",
      role: "Grundare, CloudNine Solutions",
      image: "/images/testimonial-2.jpg",
    },
    {
      quote:
        "Den bästa investeringen vi gjort. H.A.B. förstod vår bransch direkt och levererade konkreta resultat som översteg alla förväntningar.",
      author: "Sofia Andersson",
      role: "COO, GreenTech Nordic",
      image: "/images/testimonial-3.jpg",
    },
    {
      quote:
        "Professionellt, transparent och resultat­orienterat. Precis vad vi behövde för att ta nästa steg i vår tillväxtresa.",
      author: "Erik Johansson",
      role: "CEO, Nordic SaaS Group",
      image: "/images/testimonial-4.jpg",
    },
  ],
} as const;

export const FAQ_ITEMS = [
  {
    question: "Hur snabbt kan vi komma igång med H.A.B.?",
    answer:
      "De flesta kunder är igång inom 1–2 veckor. Vi börjar med en intensiv analys av er nuvarande situation och har en handlingsplan klar inom den första veckan.",
  },
  {
    question: "Integreras det med verktyg som Slack, Teams eller Salesforce?",
    answer:
      "Absolut. Vi har erfarenhet av alla ledande CRM-plattformar och samarbetsverktyg: HubSpot, Salesforce, Pipedrive, Microsoft Dynamics, Slack och Teams.",
  },
  {
    question: "Kan H.A.B. skala med vår verksamhetstillväxt?",
    answer:
      "Vår modell är helt skalbar. Vi kan börja med ett fokuserat pilotprojekt och sedan utöka till fler segment, marknader eller produktlinjer.",
  },
  {
    question: "Vilka säkerhetsåtgärder finns för att skydda vår data?",
    answer:
      "Vi följer GDPR och ISO 27001-riktlinjer. All kunddata hanteras med full sekretess och vi arbetar alltid under NDA.",
  },
  {
    question: "Erbjuder ni utbildning för nya användare efter uppstart?",
    answer:
      "Ja, vi inkluderar onboarding och löpande coaching som en del av vårt erbjudande. Ert team får full support från dag ett.",
  },
] as const;

export const FOOTER = {
  heading: "Vi formar framtidens\nsmartare försäljning",
  description:
    "H.A.B. Sales Invest AB hjälper ambitiösa B2B-företag att nå sin fulla försäljningspotential med beprövade strategier och operativt stöd.",
  cta: "Boka ett möte",
  columns: [
    {
      title: "Tjänster",
      links: [
        { label: "Rådgivning", href: "#tjanster" },
        { label: "Implementering", href: "#tjanster" },
        { label: "Processdesign", href: "#tjanster" },
        { label: "Träning & Support", href: "#tjanster" },
      ],
    },
    {
      title: "Lösningar",
      links: [
        { label: "Dataintegration", href: "#" },
        { label: "Automatisering", href: "#" },
        { label: "Samarbetsverktyg", href: "#" },
        { label: "Säkerhet", href: "#" },
      ],
    },
    {
      title: "Företaget",
      links: [
        { label: "Om oss", href: "#" },
        { label: "Karriär", href: "#" },
      ],
    },
    {
      title: "Juridiskt",
      links: [
        { label: "Integritetspolicy", href: "#" },
        { label: "Villkor", href: "#" },
        { label: "Compliance", href: "#" },
      ],
    },
    {
      title: "Socialt",
      links: [
        { label: "X / Twitter", href: "#" },
        { label: "Instagram", href: "#" },
        { label: "LinkedIn", href: "#" },
      ],
    },
  ],
  copyright: `© ${new Date().getFullYear()} H.A.B. Sales Invest AB`,
} as const;
