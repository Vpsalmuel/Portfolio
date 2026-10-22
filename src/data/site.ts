// Everything about Samuel that appears on the site. Edit text here, not in the pages.

export const profile = {
  firstName: "Samuel",
  lastName: "Daniel",
  fullName: "Samuel Kufre Daniel",
  role: "Product Designer",
  location: "Lagos, Nigeria",
  availability: "Available for projects",
  intro:
    "A product designer turning complex insurance, fintech and commerce workflows into products people trust, and documenting them so teams can build them.",
  email: "kufreysamuel@gmail.com",
  cv: "/samuel-daniel-cv.pdf",
  links: {
    email: "mailto:kufreysamuel@gmail.com",
    whatsapp: "https://wa.me/2348126391905",
    linkedin: "https://www.linkedin.com/in/samuel-daniel/",
    behance: "https://www.behance.net/kufrey",
    github: "https://github.com/Vpsalmuel",
  },
};

export const collaborators = ["Rex Insurance", "Losode", "Techaven", "Paddi.ng"];

export const stats = [
  { value: "4+", label: "Years designing products" },
  { value: "+30%", label: "Completed transactions at Rex" },
  { value: "−25%", label: "User drop-off at Rex" },
  { value: "+40%", label: "Task completion at Techaven" },
];

export const about = {
  statement:
    "I design the parts of a product that carry real weight: buying a policy, filing a claim, splitting a bill, running a store.",
  body: [
    "I'm a product designer in Lagos. At Rex Insurance I lead design on the mobile app, the public website, and the internal platforms behind them: a multi-portal API gateway for brokers and partners, a broker portal, and HR tools.",
    "Before that I redesigned a mobile betting product at Techaven and rebuilt losode.com, a pan-African fashion marketplace, from the ground up.",
    "I care about the handover as much as the screens. Every project ships with annotated decks, user guides and specs, so engineering builds what was designed.",
  ],
};

export const experience = [
  {
    org: "Rex Insurance",
    role: "Product Designer",
    dates: "2025 — Now",
    note: "Mobile app, public website, API gateway, broker portal, internal HR platforms.",
  },
  {
    org: "Techaven",
    role: "UI/UX Designer",
    dates: "2024 — 2025",
    note: "Full redesign of a mobile betting app. Task completion up 40%.",
  },
  {
    org: "Losode",
    role: "UI/UX Designer",
    dates: "2022 — 2024",
    note: "Rebuilt losode.com end to end, buyer and seller. Retention up 25%.",
  },
  {
    org: "University of Lagos",
    role: "B.Sc Geography",
    dates: "2022",
    note: "",
  },
];

export const services = [
  "Product design",
  "Enterprise dashboards",
  "Mobile apps",
  "Design systems",
  "UX writing",
  "Prototyping",
];

export const process = [
  {
    title: "Frame the problem",
    body: "Talk to the people who run the business and the people who use it. Write down what has to be true for the product to work.",
  },
  {
    title: "Map the flow",
    body: "Journeys, information architecture and the hard edge cases first, before any pixels, so the structure holds under real data.",
  },
  {
    title: "Design the system",
    body: "Interfaces built from shared components and tokens, tested with users, and accessible to WCAG 2.1.",
  },
  {
    title: "Ship and document",
    body: "Annotated screens, user guides, specs and demo scripts, so engineering and stakeholders know exactly what to build and why.",
  },
];

export const gallery = [
  { image: "losode-designer-jide.png", title: "Losode — Designer storefront", tag: "Commerce / Web" },
  { image: "memoria-hero.png", title: "Beauty Memoria", tag: "E-commerce / Web" },
  { image: "the-society.png", title: "The Society", tag: "E-commerce / Web" },
  { image: "fintech-cards.png", title: "Muse App", tag: "Fintech / Mobile" },
  { image: "nature-landing.png", title: "Nature landing page", tag: "Web / Landing" },
];
