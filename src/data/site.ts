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
  { value: "5+", label: "Years designing products" },
  { value: "+30%", label: "Completed transactions on Rex's website" },
  { value: "−25%", label: "Drop-off on Rex's website" },
  { value: "5+", label: "Partners onboarded onto Rex's API gateway" },
];

export const about = {
  statement:
    "I take complex, high-stakes workflows and turn them into products people trust, then hand them over so engineering builds exactly what was designed.",
  body: [
    "I'm a product designer in Lagos. At Rex Insurance I lead design on the mobile app, the public website, and the internal platforms behind them: a multi-portal API gateway for brokers and partners, a broker portal, and HR tools.",
    "Before that I redesigned a mobile betting product at Techaven and rebuilt losode.com, a pan-African fashion marketplace, from the ground up.",
    "I also mentor. Under my guidance, a junior developer at Rex designed a visitor management system that tracks incoming and outgoing visitors and lets staff schedule visits.",
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
    note: "Full redesign of a mobile betting app, simplifying the core betting and account flows.",
  },
  {
    org: "Losode",
    role: "UI/UX Designer",
    dates: "2022 — 2024",
    note: "Rebuilt losode.com end to end, buyer and seller. About 70% more designers onboarded.",
  },
  {
    org: "University of Lagos",
    role: "B.Sc Geography",
    dates: "2022",
    note: "",
  },
];

/** Services and capabilities. Each one points to the case study that proves it. */
export const services = [
  {
    title: "Product design, end to end",
    body: "From a messy brief to shipped screens: research, flows, UI and the decisions in between, for products people rely on.",
    deliverables: ["Research & flows", "UI design", "Prototypes"],
    proof: { label: "RexVerse app", slug: "rex-insurance" },
  },
  {
    title: "Enterprise & B2B platforms",
    body: "Admin portals, partner dashboards and developer tools that turn manual, email-driven work into self-serve products.",
    deliverables: ["Dashboards", "Role & access flows", "Developer UX"],
    proof: { label: "Rex API Gateway", slug: "api-gateway" },
  },
  {
    title: "Mobile apps",
    body: "iOS and Android apps for money and cover: buying, claiming, splitting and paying, designed for one hand and a weak signal.",
    deliverables: ["App flows", "UI kit", "Usability tests"],
    proof: { label: "Divvy", slug: "divvy" },
  },
  {
    title: "Design systems",
    body: "Components and tokens that absorb messy real-world data and keep thirty-plus screens consistent as the product grows.",
    deliverables: ["Components", "Tokens", "Usage docs"],
    proof: { label: "Losode marketplace", slug: "losode" },
  },
  {
    title: "UX writing & handover",
    body: "Plain-language interfaces, plus the annotated screens, user guides and specs that make sure engineering builds what was designed.",
    deliverables: ["Microcopy", "Specs", "User guides"],
    proof: { label: "RexVerse app", slug: "rex-insurance" },
  },
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

/** `image` is the grid thumbnail; `pages` are the full-length designs shown (stacked, scrollable) in the lightbox. */
export const gallery = [
  {
    image: "full-hub-1.png",
    pages: ["full-hub-1.png", "full-hub-2.png", "full-hub-3.png"],
    title: "Losode — Designer video hub",
    tag: "Commerce / Web",
    url: "https://www.behance.net/gallery/254040071/Loode-Designer-Video-Hub",
  },
  {
    image: "memoria-hero.png",
    pages: ["full-beauty.jpg"],
    title: "Beauty Memoria",
    tag: "E-commerce / Web",
    url: "https://www.behance.net/gallery/178955723/Beauty-Memoria",
  },
  {
    image: "the-society.png",
    pages: ["full-society.jpg"],
    title: "The Society",
    tag: "E-commerce / Web",
    url: "https://www.behance.net/gallery/179213875/TheSociety",
  },
  {
    image: "full-gym.jpg",
    pages: ["full-gym.jpg"],
    title: "Gym Redefined",
    tag: "Fitness / Web",
    url: "https://www.behance.net/gallery/179451563/Gym-Redefinded",
  },
  {
    image: "nature-landing.png",
    pages: ["full-nature.jpg"],
    title: "Nature landing page",
    tag: "Web / Landing",
    url: "https://www.behance.net/gallery/179009623/Nature-Landig-Page",
  },
];
