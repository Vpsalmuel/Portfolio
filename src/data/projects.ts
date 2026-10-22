// Case studies. Each one is a list of sections, and each section is a list of blocks.
// Image names refer to files in src/assets/work.

export type Block =
  | { type: "text"; body: string[] }
  | { type: "goals"; items: string[] }
  | { type: "cards"; items: { title: string; body: string }[] }
  | { type: "stats"; items: { value: string; label: string }[] }
  | { type: "palette"; items: { name: string; hex: string; usage: string }[] }
  | {
      type: "images";
      layout: "phones" | "wide" | "pair";
      items: { image: string; caption?: string }[];
    };

export type Section = { label: string; title: string; blocks: Block[] };

export type Project = {
  slug: string;
  title: string;
  year: string;
  category: string;
  summary: string;
  headline: string;
  scope: string[];
  tags: string[];
  meta: { k: string; v: string }[];
  live?: string;
  cover: string;
  sections: Section[];
};

export const projects: Project[] = [
  {
    slug: "rex-insurance",
    title: "Rex Insurance",
    year: "2025 — Now",
    category: "Insurance · Mobile",
    summary:
      "The official Rex Insurance app. Policies, claims and renewals in a few calm taps, for people who have never read a policy document.",
    headline:
      "Leading design on Rex Insurance's mobile app: buying cover, filing claims and renewing, without calling an agent.",
    scope: ["Product design", "Mobile app", "Design system"],
    tags: ["UX", "UI", "Mobile", "WCAG 2.1"],
    meta: [
      { k: "Role", v: "Lead product designer" },
      { k: "Company", v: "Rex Insurance" },
      { k: "Timeline", v: "May 2025 — now" },
      { k: "Platform", v: "iOS & Android" },
      { k: "Status", v: "Shipped, iterating" },
    ],
    cover: "rex-insurance-cover.webp",
    sections: [
      {
        label: "Overview",
        title: "Insurance people can run themselves",
        blocks: [
          {
            type: "text",
            body: [
              "Most people deal with their insurer twice: when they buy cover and when something goes wrong. Both moments used to be paper-heavy and routed through an agent on the phone.",
              "I led the end-to-end design of the Rex Insurance mobile app, covering onboarding, policy purchase, claims and account management, alongside a redesign of the public website.",
            ],
          },
        ],
      },
      {
        label: "Problem",
        title: "Opaque, agent-driven and easy to lapse",
        blocks: [
          {
            type: "text",
            body: [
              "Customers rarely understood what they were covered for or how to file a claim. Renewals lapsed silently, claim documents got lost in WhatsApp threads, and people often learned what their plan excluded at the worst possible moment.",
            ],
          },
          {
            type: "cards",
            items: [
              { title: "Jargon-heavy policies", body: "Coverage and exclusions buried in PDFs nobody reads." },
              { title: "Claims as a black box", body: "No idea who is reviewing a claim, what stage it is at, or how long it will take." },
              { title: "Silent renewals", body: "Policies lapse without warning, discovered only at claim time." },
              { title: "Agent dependency", body: "Even updating a phone number needed a call or an email." },
            ],
          },
        ],
      },
      {
        label: "Goals",
        title: "What the app had to do",
        blocks: [
          {
            type: "goals",
            items: [
              "Buy a policy end to end on mobile in under five minutes.",
              "Make what's covered, and what isn't, readable at a glance.",
              "Guide claims step by step, with photo upload and visible status.",
              "Surface renewals and open claims on the home screen so nothing lapses.",
              "Scale to health, auto, gadget and travel cover from day one.",
            ],
          },
        ],
      },
      {
        label: "Flow",
        title: "Sign-up that verifies, then gets out of the way",
        blocks: [
          {
            type: "text",
            body: [
              "Returning policyholders verify with phone and OTP and land on their dashboard. New customers complete KYC, set a password and buy their first policy. A failed OTP offers resend and loops back into verification.",
            ],
          },
          { type: "images", layout: "wide", items: [{ image: "rex-insurance-signup-flow.png", caption: "Sign-up and onboarding flow" }] },
        ],
      },
      {
        label: "Final design",
        title: "Active cover first, everything else one tap away",
        blocks: [
          {
            type: "images",
            layout: "phones",
            items: [
              { image: "rex-insurance-home-screen.png", caption: "Home: active policies, renewal countdowns and in-progress claims." },
              { image: "rex-insurance-new-policy.png", caption: "New policy: browse cover types, with guidance when unsure." },
              { image: "rex-insurance-claims.png", caption: "Claims: every claim, filterable by status, with payouts." },
              { image: "rex-insurance-my-policies.png", caption: "My policies: active, renewal-due and expired, with quick actions." },
            ],
          },
          {
            type: "images",
            layout: "phones",
            items: [
              { image: "rex-insurance-policy-details.png", caption: "Policy detail with documents, agent contact and a one-tap claim." },
              { image: "rex-insurance-payment.png", caption: "Payments: history, premium breakdown and references." },
              { image: "rex-insurance-track-claims.png", caption: "Claim tracking with a timeline and incident details." },
              { image: "rex-insurance-sign-up.png", caption: "Sign-up: three fields and a clear next step." },
            ],
          },
        ],
      },
      {
        label: "Decisions",
        title: "The choices that shaped it",
        blocks: [
          {
            type: "cards",
            items: [
              { title: "Lead with active cover, not marketing", body: "Home shows what you own and what needs attention. New products sit one tap away, never front and centre." },
              { title: "Plain language everywhere", body: "Every policy detail is rewritten in human terms. Formal wording is available on tap, never the default." },
              { title: "A claim wizard with visible progress", body: "Short steps and a progress bar, so nobody feels lost in the middle of an incident." },
              { title: "Renewals as service, not upsell", body: "Renewal notices read as quiet service messages, kept structurally apart from anything promotional." },
            ],
          },
        ],
      },
      {
        label: "Impact",
        title: "Results",
        blocks: [
          {
            type: "stats",
            items: [
              { value: "+30%", label: "Completed transactions after simplifying policy purchase and claims" },
              { value: "−25%", label: "User drop-off across redesigned customer touchpoints" },
              { value: "WCAG 2.1", label: "Accessibility applied across product screens" },
            ],
          },
          {
            type: "text",
            body: [
              "The app shipped with a full documentation set: feature list, user guide, feature deck and annotated screens, so product, engineering and stakeholders worked from the same source.",
            ],
          },
        ],
      },
      {
        label: "Reflection",
        title: "Insurance is a trust product",
        blocks: [
          {
            type: "text",
            body: [
              "Trust in a mobile app is built through tone as much as flow. One reassuring sentence in the claim wizard does more than visual polish. Designing for someone mid-accident means defaulting to calm, guided, low-friction screens instead of dense information.",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "losode",
    title: "Losode",
    year: "2022 — 2024",
    category: "Marketplace · Web",
    summary:
      "A full rebuild of losode.com, a pan-African fashion marketplace. Every buyer page and seller tool, desktop and mobile.",
    headline:
      "A marketplace for African fashion, rebuilt to feel as considered as the best global platforms while staying rooted in an African context.",
    scope: ["Product design", "Design system", "Web & mobile"],
    tags: ["UX", "UI", "Commerce", "Design system"],
    meta: [
      { k: "Role", v: "Lead product designer" },
      { k: "Team", v: "Founder, dev team, 1 designer" },
      { k: "Timeline", v: "2022 — 2024" },
      { k: "Scope", v: "30+ screens, buyer + seller" },
      { k: "Status", v: "Live at losode.com" },
    ],
    live: "https://www.losode.com",
    cover: "losode-cover.webp",
    sections: [
      {
        label: "Overview",
        title: "A platform redesign with marketplace stakes",
        blocks: [
          {
            type: "text",
            body: [
              "Losode connects fashion designers across Nigeria, Ghana, Kenya and South Africa with buyers at home and in the diaspora. The goal was to move it from an early-stage product to a marketplace that could compete with global fashion platforms without losing its African identity.",
              "The core UX challenge: one coherent system that absorbs wildly inconsistent vendor inventory, photography and inputs, and still outputs a premium, trustworthy shopping experience on every screen.",
            ],
          },
        ],
      },
      {
        label: "Problem",
        title: "Four problems, one platform",
        blocks: [
          {
            type: "cards",
            items: [
              { title: "Buyers", body: "Discovery felt like scrolling, not shopping. No hierarchy, no usable filters." },
              { title: "Designers", body: "Sellers couldn't run their stores. The dashboard showed charts, not the next action." },
              { title: "Business", body: "Inconsistent cards and weak templates made strong inventory look cheap." },
              { title: "Operations", body: "Every new country, currency and category multiplied the design debt." },
            ],
          },
        ],
      },
      {
        label: "Research",
        title: "What buyers actually do",
        blocks: [
          {
            type: "text",
            body: [
              "Stakeholder interviews, a teardown of Farfetch, SSENSE and Net-a-Porter, and conversations with Losode buyers and sellers set six directions.",
            ],
          },
          {
            type: "cards",
            items: [
              { title: "Mobile is the product", body: "Over 80% of buyer sessions arrive on a phone. Every flow is designed phone-first." },
              { title: "Trust is earned per screen", body: "Verification, ratings and delivery signals are ambient, not hidden on an About page." },
              { title: "Browse like a magazine, buy like a list", body: "Discovery wants editorial. Conversion wants ruthless filters and clean product pages." },
              { title: "Sellers need verbs, not dashboards", body: "They open the platform to ship, restock and reply, not to read charts." },
              { title: "Photography is the inventory", body: "Cards must flatter inconsistent photos without ever cropping the garment." },
              { title: "Logistics transparency converts", body: "Shipping windows, returns and customs are visible before the cart, not after." },
            ],
          },
        ],
      },
      {
        label: "System",
        title: "Designing for the worst inputs",
        blocks: [
          {
            type: "text",
            body: [
              "Every component assumes missing photos, inconsistent sizing and unfamiliar designer names, and still produces a premium screen. A single product schema normalises any vendor's input; cards crop to a fixed ratio with smart padding; each designer gets a branded storefront generated from the same components; one-of-one, low-stock and made-to-order are first-class states; currency, ships-from and language are component props, ready for the next country.",
            ],
          },
          {
            type: "images",
            layout: "pair",
            items: [
              { image: "losode-filter-drawer.png", caption: "Category page with a persistent filter rail" },
              { image: "losode-designer-storefront.png", caption: "Designer storefront: each label gets its own audition surface" },
            ],
          },
        ],
      },
      {
        label: "Final UI",
        title: "The shipped marketplace",
        blocks: [
          { type: "images", layout: "wide", items: [{ image: "losode-pdp.png", caption: "Product detail page" }] },
          {
            type: "images",
            layout: "phones",
            items: [
              { image: "losode-pdp-mobile.png", caption: "Product detail, mobile" },
              { image: "losode-cart.png", caption: "Cart" },
              { image: "losode-checkout.png", caption: "Single-screen checkout" },
              { image: "losode-mobile-fallback.jpg", caption: "Mobile shop" },
            ],
          },
          { type: "images", layout: "wide", items: [{ image: "losode-designer-jide.png", caption: "Designer storefront: Jide Anthony" }] },
        ],
      },
      {
        label: "Impact",
        title: "A platform ready to scale",
        blocks: [
          {
            type: "stats",
            items: [
              { value: "+25%", label: "User retention after the rebuild" },
              { value: "30+", label: "Buyer and seller surfaces designed and handed off" },
              { value: "1", label: "Unified component library powering every screen" },
            ],
          },
          {
            type: "text",
            body: [
              "Cleaner product pages, ambient trust signals and a single-screen mobile checkout removed the largest drop-off points. New designers can be onboarded into a templated storefront without bespoke design work.",
            ],
          },
        ],
      },
      {
        label: "Reflection",
        title: "Trust is earned differently here",
        blocks: [
          {
            type: "text",
            body: [
              "A full platform redesign is a different discipline from a single feature: the deliverable is consistency over time, across thirty-plus screens and a business that evolves while you design it. Working without a formal brief, the strongest decisions came from listening to the founder and translating what I heard into a system.",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "divvy",
    title: "Divvy",
    year: "2025",
    category: "Fintech · Mobile",
    summary:
      "A payment-splitting app for how Nigerians actually share bills. Less awkward asking, clearer balances.",
    headline: "Turning awkward money conversations into clear taps, built for how Nigerians share bills.",
    scope: ["UX research", "Mobile app", "Visual system"],
    tags: ["UX", "UI", "Fintech", "Concept"],
    meta: [
      { k: "Role", v: "Product designer" },
      { k: "Type", v: "Self-initiated concept" },
      { k: "Timeline", v: "8 weeks" },
      { k: "Platform", v: "iOS & Android" },
      { k: "Tools", v: "Figma, FigJam, Maze" },
    ],
    cover: "divvy-preview.png",
    sections: [
      {
        label: "Overview",
        title: "Splitting bills without the guilt",
        blocks: [
          {
            type: "text",
            body: [
              "Divvy lets groups split rent, food, rides, trips and subscriptions without chasing people for money. It exists because splitting bills in Nigeria is still mostly done with screenshots, calculator apps and guilt.",
              "Existing tools like Splitwise solve the maths but feel foreign and disconnected from how Nigerians move money: transfers, USSD and mobile wallets.",
            ],
          },
        ],
      },
      {
        label: "Pain points",
        title: "Where people struggle",
        blocks: [
          {
            type: "cards",
            items: [
              { title: "Awkward asks", body: "Reminding friends to pay back small amounts feels personal. People want the app to do the asking." },
              { title: "Lost context", body: "By the time someone settles, nobody remembers what was for what." },
              { title: "Uneven splits are hard", body: "Not everyone owes the same, and calculator maths is slow and error-prone." },
              { title: "No single source of truth", body: "Everyone keeps a different mental ledger, which leads to disputes." },
            ],
          },
        ],
      },
      {
        label: "Flow",
        title: "One question anchors the app: who owes what?",
        blocks: [
          {
            type: "text",
            body: [
              "Onboard, create or join a group, add an expense from the persistent bottom sheet, choose a split type (equal, uneven, shares or percentage), confirm and notify. Balances update in real time, and smart settle collapses debts into the fewest possible transfers.",
            ],
          },
          { type: "images", layout: "wide", items: [{ image: "divvy-user-flow.png", caption: "Primary user flow" }] },
        ],
      },
      {
        label: "Final design",
        title: "Balances first, transactions second",
        blocks: [
          {
            type: "images",
            layout: "phones",
            items: [
              { image: "divvy-homepage.png", caption: "Home: who owes you and who you owe, at a glance." },
              { image: "divvy-reminders-v3.png", caption: "Reminders: nudge one person or everyone at once." },
              { image: "divvy-split-method.png", caption: "Add expense: split presets, member chips and receipts in one sheet." },
              { image: "divvy-summary.png", caption: "Settle: the fewest transfers, with copy-to-transfer." },
            ],
          },
          {
            type: "palette",
            items: [
              { name: "Deep Navy", hex: "#0B1F45", usage: "Brand, dark screens" },
              { name: "Emerald", hex: "#06CF8F", usage: "Money in, settled" },
              { name: "Signal Red", hex: "#FF4757", usage: "Money owed, pending" },
              { name: "Amber Gold", hex: "#F5A623", usage: "Overdue, warnings" },
              { name: "Slate White", hex: "#F4F8FC", usage: "Light surfaces" },
            ],
          },
          {
            type: "text",
            body: ["One rule drives the colour system: colour only ever shows the direction of money. Emerald is coming to you. Red is what you owe."],
          },
        ],
      },
      {
        label: "Decisions",
        title: "The choices that defined it",
        blocks: [
          {
            type: "cards",
            items: [
              { title: "Lead with balances", body: "People open the app to answer one question: who owes me, and who do I owe?" },
              { title: "A persistent bottom sheet", body: "Adding an expense is the most frequent action, so it is always one tap away." },
              { title: "Soft, neutral language", body: "No 'debt'. People 'settle up' and 'even out', which feels social, not transactional." },
              { title: "Smart settle", body: "Instead of paying everyone individually, balances collapse into the fewest transfers." },
            ],
          },
        ],
      },
      {
        label: "Validation",
        title: "Tested with six people",
        blocks: [
          {
            type: "stats",
            items: [
              { value: "6/6", label: "Created a split in under 35 seconds" },
              { value: "5/6", label: "Preferred Divvy's 'settle up' language over Splitwise" },
              { value: "#1", label: "Bottom-sheet add-expense was the top-rated pattern" },
            ],
          },
          {
            type: "text",
            body: [
              "Divvy is a self-initiated concept; there is no live product. Removing one awkward sentence from a notification can do more than adding a feature, and the right reference point wasn't Splitwise, it was the WhatsApp thread people already use.",
            ],
          },
        ],
      },
    ],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
