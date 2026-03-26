export const NAV_LINKS = [
  { label: "Tjänster", href: "#tjanster" },
  { label: "Resultat", href: "#resultat" },
  { label: "Varför H.A.B.", href: "#varfor" },
  { label: "Kundröster", href: "#kundröster" },
] as const;

export const BANNER = {
  text: "Över 20 års erfarenhet av att bygga lönsam försäljning.",
} as const;

export const HERO = {
  headline: "Vi hjälper företag som vill ",
  headlineEm: "sälja mer",
  headlineSuffix: " – men inte vet hur de ska ta nästa steg",
  subtitle:
    "H.A.B. Sales Invest AB är konsultbolaget som inte bara pratar strategi – vi kavlar upp ärmarna och driver försäljningen åt er. Från uppstartsfasen till skalning, från kalla prospekt till stängda affärer.",
  ctaPrimary: "Kontakta oss",
  ctaSecondary: "Boka ett möte",
  facepileText: "Företag som valt att växa med oss",
} as const;

export const SEGMENT_CARDS = [
  {
    label: "För tillväxtbolag",
    description:
      "Ni har en bra produkt men saknar en försäljningsmotor. Vi bygger er pipeline från grunden – prospektering, mötesbokning och stängda affärer.",
    image: "/images/segment-1.jpg",
  },
  {
    label: "För etablerade bolag",
    description:
      "Ni har ett säljteam men resultaten uteblir. Vi optimerar processer, coachar teamet och säkerställer att fler leads blir kunder.",
    image: "/images/segment-2.jpg",
  },
] as const;

export const FOUNDATION = {
  text: "Många företag har en bra produkt eller tjänst – men försäljningen hänger inte med. Det är inte ovanligt. Faktum är att det är precis där de flesta av våra kunder befinner sig när de kontaktar oss.",
  items: [
    {
      icon: "sparkle",
      title: "\"Vi har inte tid att prospektera\"",
      description: "Er tid går åt till leverans och administration. Nykundförvärv hamnar längst ner på listan – trots att det är livsnerven i företaget.",
    },
    {
      icon: "shield",
      title: "\"Vi får in leads men stänger för få\"",
      description: "Leads kommer in men ingen har en tydlig process för att följa upp och stänga. Potentiella kunder faller mellan stolarna.",
    },
    {
      icon: "smile",
      title: "\"Vi vill växa men saknar en försäljningsmotor\"",
      description: "Ni har ambitionen men det saknas struktur, process och rätt kompetens internt. Tillväxten är beroende av slump och nätverk.",
    },
  ],
} as const;

export const FEATURES = [
  {
    title: "Uppsökande Försäljning\n& Prospektering",
    description:
      "Vi tar över hela kedjan från målgruppsanalys till förstamöte. Genom beprövade metoder för kallbearbetning – telefon, mejl och sociala kanaler – fyller vi er pipeline med kvalificerade leads så att ert team kan fokusera på att stänga affärer. Vi hanterar målgruppsdefiniering och listbygge, kvalificering via telefon och mejl, mötesbokning med beslutsfattare samt löpande rapportering och optimering.",
    image: "/images/feature-1.svg",
    mockupTitle: "H.A.B. Strategimodell",
    reverse: false,
  },
  {
    title: "Hantering av Varma\nLeads & Closing",
    description:
      "Ni får in leads – men hur många blir faktiskt kunder? Vi implementerar en tydlig uppföljningsprocess, kvalificerar era inkommande leads och säkerställer att varje potentiell affär får den uppmärksamhet den förtjänar. Från strukturerade uppföljningsflöden och lead-scoring till förhandlingsstöd och affärsavslut – vi optimerar ert CRM och bygger en pipeline som konverterar.",
    image: "/images/feature-2.jpg",
    mockupTitle: "Pipeline Dashboard",
    reverse: true,
  },
  {
    title: "Strategi, Rådgivning\n& Säljträning",
    description:
      "Ibland behövs det inte fler säljare – utan en bättre plan. Vi analyserar er nuvarande försäljning, identifierar flaskhalsar och bygger en strategi anpassad för just er marknad, produkt och tillväxtmål. Dessutom tränar vi ert team i modern försäljningsmetodik, förhandlingsteknik och kundbemötande – individuellt och i grupp – så att de presterar på högsta nivå långt efter att vårt samarbete är avslutat.",
    image: "/images/feature-3.jpg",
    mockupTitle: "H.A.B. Säljteam",
    reverse: false,
  },
] as const;

export const STATS = {
  headline: "Det som skiljer oss\nfrån mängden",
  subtitle: "Vi är inte teoretiker – vi har suttit i tusentals kundmöten och byggt försäljningsavdelningar från grunden.",
  rating: "Bevisade resultat i varje uppdrag",
  items: [
    {
      number: "20+",
      title: "Års praktisk erfarenhet",
      description:
        "Vi har ringt tiotusentals samtal och byggt försäljningsavdelningar från grunden. Den erfarenheten går inte att läsa sig till.",
      label: "ERFARENHET",
    },
    {
      number: "100%",
      title: "Operativt engagemang",
      description:
        "Vi kavlar upp ärmarna och arbetar sida vid sida med ert team. Vi ringer samtalen, tar mötena och visar hur det ska göras.",
      label: "ENGAGEMANG",
    },
    {
      number: "1",
      title: "Hela kedjan under ett tak",
      description:
        "Prospektering, lead-hantering, strategi och träning – ni behöver inte koordinera tre olika leverantörer. En kontakt, en plan, ett mål.",
      label: "LEVERANTÖR",
    },
    {
      number: "∞",
      title: "Långsiktigt fokus",
      description:
        "Vi bygger inte kortsiktiga försäljningsruschar – vi bygger maskiner som fortsätter leverera. Vårt mål är att ni ska stå på egna ben.",
      label: "HÅLLBARHET",
    },
  ],
} as const;

export const VISION = {
  quote:
    "Det här handlade inte bara om att sälja mer – det handlade om att rädda företaget. Och det gjorde vi.",
  authors: "Kund inom fastighetsunderhåll",
  role: "Case study – från röda siffror till lönsam tillväxt",
} as const;

export const COMPARISON = {
  headline: "Vad skiljer oss från\nkonkurrenterna?",
  rows: [
    { feature: "Operativt engagemang", hab: "Vi är med i vardagen", competitor: "Levererar rapport" },
    { feature: "Erfarenhet", hab: "20+ år i fält", competitor: "Varierar" },
    { feature: "Hela försäljningskedjan", hab: true, competitor: false },
    { feature: "Prospektering & kallbearbetning", hab: true, competitor: false },
    { feature: "Lead-hantering & closing", hab: true, competitor: "Delvis" },
    { feature: "Säljträning & coaching", hab: true, competitor: false },
    { feature: "Strategirådgivning", hab: true, competitor: true },
    { feature: "Anpassade upplägg", hab: "Alltid skräddarsytt", competitor: "Standardpaket" },
    { feature: "Långsiktigt fokus", hab: "Bygger bestående resultat", competitor: "Korta uppdrag" },
  ],
} as const;

export const TESTIMONIALS = {
  headline: "Vad Våra Kunder Säger\nom H.A.B.",
  items: [
    {
      quote:
        "Vi hade noll pipeline och ingen tid att prospektera. H.A.B. tog över hela kedjan och inom tre månader hade vi fler kvalificerade möten än vi haft på ett helt år.",
      author: "Anna Eriksson",
      role: "VD, NordBygg Konsult AB",
      image: "/images/testimonial-1.jpg",
    },
    {
      quote:
        "Vi fick in leads men stängde alldeles för få. H.A.B. implementerade en tydlig uppföljningsprocess och lärde oss kvalificera rätt. Nu konverterar vi dubbelt så många.",
      author: "Marcus Berg",
      role: "Försäljningschef, Teknikpartner Sverige",
      image: "/images/testimonial-2.jpg",
    },
    {
      quote:
        "Vårt säljteam hade kompetensen men saknade struktur och coaching. Efter H.A.B.:s träningsprogram ser vi en helt annan energi och framför allt – helt andra siffror.",
      author: "Sofia Andersson",
      role: "COO, GreenService Nordic",
      image: "/images/testimonial-3.jpg",
    },
    {
      quote:
        "Vi stod inför vikande försäljning och behövde en vändning. H.A.B. kom in med ett helhetsgrepp – strategi, prospektering och coaching – och resultatet överträffade alla förväntningar.",
      author: "Erik Johansson",
      role: "Ägare, Fastighetsgruppen Syd",
      image: "/images/testimonial-4.jpg",
    },
  ],
} as const;

export const FAQ_ITEMS = [
  {
    question: "Vilka typer av företag jobbar ni med?",
    answer:
      "Vi arbetar främst med medelstora och etablerade företag som vill skala upp sin försäljning eller outsourca delar av försäljningsprocessen. Våra kunder finns inom en rad branscher – från tjänstesektorn till bygg och fastighet.",
  },
  {
    question: "Hur långt är ett typiskt samarbete?",
    answer:
      "Det varierar beroende på uppdraget. En strategigenomgång kan vara några veckor, medan ett löpande försäljningsuppdrag ofta sträcker sig över 3–12 månader. Vi anpassar alltid längden efter era behov och mål.",
  },
  {
    question: "Kan ni hjälpa oss även om vi redan har ett eget säljteam?",
    answer:
      "Absolut. Många av våra uppdrag handlar om att förstärka och utveckla befintliga team genom coaching, processförbättring och nya metoder. Vi kompletterar – vi ersätter inte.",
  },
  {
    question: "Vad kostar det?",
    answer:
      "Priset beror på omfattningen av uppdraget. Vi offererar alltid efter ett inledande samtal där vi kartlägger era behov. Kontakta oss så tar vi en kostnadsfri första diskussion.",
  },
  {
    question: "Hur snabbt kan vi se resultat?",
    answer:
      "Det beror på var ni startar och vad som behövs. Vissa kunder ser en tydlig ökning inom några veckor, andra behöver en längre uppbyggnadsfas. Vi sätter alltid realistiska förväntningar från start.",
  },
] as const;

export const FOOTER = {
  heading: "Vi bygger försäljning\nsom håller",
  description:
    "H.A.B. Sales Invest AB är konsultbolaget som kavlar upp ärmarna och driver försäljningen åt er. Från strategi till stängda affärer – vi finns med hela vägen.",
  cta: "Kontakta oss",
  columns: [
    {
      title: "Tjänster",
      links: [
        { label: "Uppsökande försäljning", href: "#tjanster" },
        { label: "Lead-hantering & closing", href: "#tjanster" },
        { label: "Försäljningsstrategi", href: "#tjanster" },
        { label: "Säljträning & coaching", href: "#tjanster" },
      ],
    },
    {
      title: "Företaget",
      links: [
        { label: "Om H.A.B.", href: "#varfor" },
        { label: "Resultat", href: "#resultat" },
        { label: "Kundröster", href: "#kundröster" },
      ],
    },
    {
      title: "Kontakt",
      links: [
        { label: "Kontakta oss", href: "#kontakt" },
        { label: "LinkedIn", href: "#" },
      ],
    },
    {
      title: "Juridiskt",
      links: [
        { label: "Integritetspolicy", href: "/integritetspolicy" },
        { label: "Villkor", href: "/villkor" },
      ],
    },
  ],
  copyright: `© ${new Date().getFullYear()} H.A.B. Sales Invest AB`,
} as const;
