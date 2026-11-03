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
      items: { image: string; caption?: string; fit?: "contain" }[];
    };

export type Section = { label: string; title: string; blocks: Block[] };

export type Project = {
  slug: string;
  title: string;
  /** One-line result shown on the homepage card */
  outcome: string;
  year: string;
  category: string;
  summary: string;
  headline: string;
  /** The 10-second version shown at the top of the case study */
  glance: { challenge: string; role: string; impact: string };
  scope: string[];
  tags: string[];
  meta: { k: string; v: string }[];
  live?: string;
  liveLabel?: string;
  live2?: string;
  live2Label?: string;
  cover: string;
  sections: Section[];
};

export const projects: Project[] = [
  {
    slug: "api-gateway",
    outcome: "Partner onboarding in under 3 minutes, 5+ partners live",
    title: "Rex API Gateway",
    year: "2025",
    category: "Enterprise · API platform",
    summary:
      "A self-serve API gateway for insurance partners: an admin portal to onboard and govern partners, and a partner portal to test, integrate and monitor.",
    headline:
      "Replacing email threads and hand-wired integrations with a self-serve platform where insurance partners onboard in under three minutes.",
    glance: {
      challenge:
        "Partners connected to Rex's insurance APIs through an onboarding form, long email threads and developers wiring each integration by hand. Every new partner cost engineering time.",
      role: "Designed the gateway end to end, the admin portal and the partner portal, working with a PM and engineers over three months.",
      impact: "Partner onboarding now takes under 3 minutes, with 5+ partners live on it (and growing) and fewer support tickets and emails.",
    },
    scope: ["Product design", "Enterprise UX", "Developer experience"],
    tags: ["UX", "UI", "B2B", "API platform"],
    meta: [
      { k: "Role", v: "Product designer" },
      { k: "Company", v: "Rex Insurance" },
      { k: "Timeline", v: "3 months" },
      { k: "Team", v: "PM, engineers, 1 designer" },
      { k: "Platform", v: "Web: admin + partner portals" },
      { k: "Status", v: "Live with partners" },
    ],
    cover: "gw-cover.jpg",
    sections: [
      {
        label: "Overview",
        title: "One gateway, two portals",
        blocks: [
          {
            type: "text",
            body: [
              "Rex sells insurance through partners, companies that embed cover in their own products: a fintech platform, broker platforms, two banks and a microfinance platform. To do that they need Rex's APIs, and getting a partner connected used to be a manual project.",
              "I designed the API gateway that turned it into a product: an admin portal where Rex's team onboards partners, assigns API access and watches traffic, and a partner portal where each partner gets keys, documentation, a live testing console and their own analytics.",
            ],
          },
          { type: "images", layout: "wide", items: [{ image: "gw-admin-dashboard.jpg", caption: "Admin portal: requests, active users, today's traffic and error rate, with live API activity" }] },
        ],
      },
      {
        label: "Problem",
        title: "Integration by email",
        blocks: [
          {
            type: "text",
            body: [
              "Before the gateway, a partner sent an email, received a form, and the form went through several levels of verification. Then the real work happened over email: developers sent credentials and documentation by hand, answered questions thread by thread, and wired up each integration themselves. When a partner needed something, the request travelled through the customer team before it reached a developer.",
            ],
          },
          {
            type: "cards",
            items: [
              { title: "Developers as the bottleneck", body: "Every new partner needed engineering time before a single API call could be made." },
              { title: "Answers lived in inboxes", body: "Questions, keys and docs were scattered across email threads instead of one place partners could check." },
              { title: "Slow to support", body: "When something broke, finding out what happened meant more emails, not a dashboard." },
              { title: "Hard to scale", body: "Each partner added to the pile, so growing the partner network meant growing the manual work." },
            ],
          },
        ],
      },
      {
        label: "Constraints",
        title: "No brief, no users on tap, and a new domain",
        blocks: [
          {
            type: "text",
            body: [
              "It was my first project at Rex, and the brief was one line: we want an API gateway platform to onboard our partners, go and build it. There was no product requirements document, no research budget, two months to design it, and it was the first developer platform I had designed.",
            ],
          },
          {
            type: "cards",
            items: [
              { title: "A domain I had to learn first", body: "Before drawing anything, I studied how API gateways work: keys, rate limits, policies, environments and how developers actually test an endpoint." },
              { title: "No requirements document", body: "I wrote the scope myself from that research: what an admin must control, what a partner must be able to do alone, and what both sides need to see." },
              { title: "Users outside the building", body: "Most users are partners at other companies, so I couldn't simply walk over and ask. Every chance to talk to them, and every test with them, had to count." },
              { title: "Two products in one", body: "The admin and partner portals serve different people with different goals, but had to feel like one system and share the same data." },
              { title: "No research budget", body: "Research meant desk research and studying existing gateways on my own time, then testing in-house instead of with a recruited panel." },
              { title: "Two months to design", body: "Both portals had to be designed in two months, so some partner-side features I wanted were cut to make the deadline." },
            ],
          },
        ],
      },
      {
        label: "Goals",
        title: "What the platform had to do",
        blocks: [
          {
            type: "goals",
            items: [
              "Let Rex's team onboard a partner and grant API access in minutes, without a developer.",
              "Give every partner self-serve keys, docs and a way to test calls before writing code.",
              "Make access governable: assign, review and suspend API access per partner.",
              "Show traffic, errors and usage to both sides, so problems are spotted before they become emails.",
            ],
          },
        ],
      },
      {
        label: "Admin portal",
        title: "Onboarding a partner in three steps",
        blocks: [
          {
            type: "text",
            body: [
              "Adding a partner is a short wizard: who they are (individual or company), which APIs they can use, and a review before anything goes live. Access is a choice from a list, not a request to engineering.",
            ],
          },
          { type: "images", layout: "wide", items: [{ image: "gw-onboard-details.jpg", caption: "Step 1: partner details, individual or company" }] },
          {
            type: "images",
            layout: "pair",
            items: [
              { image: "gw-onboard-apis.jpg", caption: "Step 2: assign the APIs this partner can call" },
              { image: "gw-onboard-review.jpg", caption: "Step 3: review company details and API access before creating" },
            ],
          },
          {
            type: "images",
            layout: "pair",
            items: [
              { image: "gw-manage-users.jpg", caption: "All partners in one table, with usage and status" },
              { image: "gw-suspend.jpg", caption: "Suspend access for a set duration, with a recorded reason", fit: "contain" },
            ],
          },
        ],
      },
      {
        label: "Governing APIs",
        title: "Publishing and watching every API",
        blocks: [
          {
            type: "text",
            body: [
              "The same pattern runs for the APIs themselves. Admins register an API in four steps (basic info, endpoints, policies such as rate limits and authentication, then review), and every API gets its own health view.",
            ],
          },
          {
            type: "images",
            layout: "pair",
            items: [
              { image: "gw-add-api-2.jpg", caption: "Define endpoints, methods and authentication" },
              { image: "gw-add-api-3.jpg", caption: "Set policies: rate limits, auth type and CORS" },
            ],
          },
          { type: "images", layout: "wide", items: [{ image: "gw-api-metrics.jpg", caption: "API metrics: health, total requests, latency and error rate" }] },
        ],
      },
      {
        label: "Partner portal",
        title: "Everything a partner needs, without an email",
        blocks: [
          {
            type: "text",
            body: [
              "Partners land on a dashboard with their access token, a quick API test and recent activity. From there they browse the APIs they have access to, read the documentation, try requests in a live console, and track their own usage.",
            ],
          },
          { type: "images", layout: "wide", items: [{ image: "gw-partner-dashboard.jpg", caption: "Partner dashboard: usage, access token, quick API test and activity" }] },
          {
            type: "images",
            layout: "pair",
            items: [
              { image: "gw-partner-docs.jpg", caption: "Documentation with a live API testing console" },
              { image: "gw-partner-analytics.jpg", caption: "Partner analytics: usage trends, top endpoints and quotas" },
            ],
          },
        ],
      },
      {
        label: "Iteration",
        title: "Testing for friction before partners felt it",
        blocks: [
          {
            type: "text",
            body: [
              "With partners hard to reach, most testing and iteration happened in-house: we walked through every flow as a partner would, looking for where they'd get stuck. My first draft wasn't approved. After each round of feedback some pages were redesigned, some features removed and others added, until onboarding felt easy.",
              "When partners came on board, the issues that showed up were APIs failing on the engineering side, not people getting lost in the flow.",
              "The result I'm proudest of is the quiet one: partners started using the platform and it didn't break.",
            ],
          },
        ],
      },
      {
        label: "Decisions",
        title: "How I chose between options",
        blocks: [
          {
            type: "cards",
            items: [
              {
                title: "One test for every option",
                body: "Most screens had two or more directions. I kept the one that answered a single question: can someone land here and know where to go next? Manage Users is an example. The version I kept puts every partner, their usage and status in one table, instead of spreading it across pages.",
              },
              {
                title: "Admin onboarding over self sign-up",
                body: "We considered letting partners sign themselves up. We chose to have Rex's team onboard them instead: a partner shows interest through the website, Rex vets them, and they receive a login with a temporary password to change on first sign-in. It removes a whole step for the partner and keeps vetting with Rex.",
              },
              {
                title: "Feedback, round after round",
                body: "Each iteration went back for review. I explained why each route made the platform easier for partners, and took the feedback seriously: pages were redesigned and features added or cut until the flows held up.",
              },
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
              { value: "<3 min", label: "To onboard a partner, down from an email-driven manual process" },
              { value: "5+", label: "Partners live and integrating through the gateway, and growing" },
              { value: "3 months", label: "From first designs to a platform partners use" },
            ],
          },
          {
            type: "text",
            body: [
              "How it was measured: before, onboarding meant an email, a form and several levels of verification, then developers wiring the integration by hand. Now a partner shows interest on the website, Rex vets them, and setting them up on the platform takes under three minutes: a name and the APIs they can access. Since launch, five more partners have been onboarded this way, across fintech, broking, banking and microfinance.",
              "Support changed too. Partner requests used to go through the customer team before reaching a developer. Now partners raise them in the portal and they go straight to the engineers, so there are fewer support tickets, fewer emails and faster fixes.",
            ],
          },
        ],
      },
      {
        label: "What's next",
        title: "Watch how partners really use it",
        blocks: [
          {
            type: "text",
            body: [
              "Next, I'd watch how partners actually use the platform and run usability tests on the key tasks: finding an API, reading the docs, testing a call. I'd log every point of friction, rank them, and fix the biggest ones first.",
              "Then the features the deadline cut: a feedback channel inside the partner portal, richer documentation, and automation, including AI, for the repetitive work on both sides. A gateway is never finished. Each new partner is a chance to make it easier for the next.",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "rex-insurance",
    outcome: "+30% completed transactions on the redesigned website",
    title: "Rex Insurance",
    year: "2025 — Now",
    category: "Insurance · Mobile",
    summary:
      "The official Rex Insurance app. Policies, claims and renewals in a few calm taps, for people who have never read a policy document.",
    headline:
      "Leading design on Rex Insurance's mobile app: buying cover, filing claims and renewing, without calling an agent.",
    glance: {
      challenge:
        "Insurance ran on agents and paperwork. Customers couldn't see what they were covered for, renewals lapsed silently, and claims were a black box.",
      role: "Led end-to-end design of the official mobile app: flows, UI, design system, accessibility, and the documentation engineering built from.",
      impact: "The app shipped with WCAG 2.1 accessibility and a full documentation set. On the redesigned public website, completed transactions rose 30% and drop-off fell 25%.",
    },
    scope: ["Product design", "Mobile app", "Design system"],
    tags: ["UX", "UI", "Mobile", "WCAG 2.1"],
    meta: [
      { k: "Role", v: "Lead product designer" },
      { k: "Company", v: "Rex Insurance" },
      { k: "Timeline", v: "May 2025 — now" },
      { k: "Platform", v: "iOS & Android" },
      { k: "Status", v: "Live on App Store & Google Play" },
    ],
    live: "https://play.google.com/store/apps/details?id=com.rexinsure.rexverse",
    liveLabel: "Google Play",
    live2: "https://apps.apple.com/ng/app/rexverse/id6762462868",
    live2Label: "App Store",
    cover: "rex-cover-clean.jpg",
    sections: [
      {
        label: "Overview",
        title: "Insurance people can run themselves",
        blocks: [
          {
            type: "text",
            body: [
              "Most people deal with their insurer twice: when they buy cover and when something goes wrong. Both moments used to be paper-heavy and routed through an agent on the phone.",
              "Rex already had an app when I joined, but it didn't do what the business needed: the UI was outdated and the experience got in the way. I redesigned it end to end within Rex's existing brand guide, covering onboarding, policy purchase, claims and account management, alongside a redesign of the public website.",
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
        label: "Research",
        title: "Asking the people who talk to customers",
        blocks: [
          {
            type: "text",
            body: [
              "My first drafts came from design principles. After every iteration we took the flows to the teams who deal with customers every day, underwriting, claims and customer support, and asked how their work actually runs. What they told us reshaped the purchase, claims-tracking and onboarding flows.",
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
              { image: "rex-insurance-policy-details.png", caption: "Policy detail: cover dates, one-tap renew, support or claim, and the insured vehicle." },
              { image: "rex-insurance-payment.png", caption: "Payments: history, premium breakdown and references." },
              { image: "rex-insurance-track-claims.png", caption: "Claim tracking with a timeline and incident details." },
              { image: "rex-insurance-sign-up.png", caption: "Log in: two fields, remember me, and a clear route to sign up." },
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
              { title: "Fewer steps to buy", body: "Underwriting showed us steps customers didn't need, so we merged them, and the app pulls customer details from their NIN instead of asking them to type everything." },
              { title: "A separate path for existing customers", body: "People who already hold Rex policies can't be onboarded like strangers. Their policies are found and brought into the app, so day one starts with what they already own." },
              { title: "Feedback and rewards", body: "Stakeholders asked for in-app feedback and a reward for every purchase. Both went in, placed so they never compete with active cover on the home screen." },
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
              { value: "+30%", label: "Completed transactions on the redesigned public website" },
              { value: "−25%", label: "Drop-off on the redesigned public website" },
              { value: "WCAG 2.1", label: "Accessibility applied across product screens" },
            ],
          },
          {
            type: "text",
            body: [
              "How the website numbers were measured: Google Analytics, comparing the last month of the old website with the first month after the new one launched in October. A transaction is a retail policy (motor and other standard cover) bought end to end through the new purchase flow; quoted products still go through customer care. One month is an early read, and I'm tracking it as more data comes in.",
              "The app is live on the App Store and Google Play. It shipped with a design system and a full documentation set: feature list, user guide, feature deck and annotated screens. The development team uses the design system as the source of truth for everything built on the platform.",
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
              "Design isn't what's in my head. It's what the people who use it, and the teams who serve them, need. The underwriting, claims and support teams changed more of this app than any principle I started with.",
              "Trust in a mobile app is built through tone as much as flow. One reassuring sentence in the claim wizard does more than visual polish.",
              "Next, I'd test how the app behaves when someone has several claims open at once, and how it connects with the tools customers already use, like WhatsApp.",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "losode",
    outcome: "~70% more designers onboarded after the rebuild",
    title: "Losode",
    year: "2022 — 2024",
    category: "Marketplace · Web",
    summary:
      "A full rebuild of losode.com, a pan-African fashion marketplace. Every buyer page and seller tool, desktop and mobile.",
    headline:
      "A marketplace for African fashion, rebuilt to feel as considered as the best global platforms while staying rooted in an African context.",
    glance: {
      challenge:
        "A live marketplace with wildly inconsistent vendor photos and data had to feel premium and trustworthy to buyers at home and in the diaspora.",
      role: "Lead designer across 30+ buyer and seller screens and the component system behind them, working directly with the founder and dev team.",
      impact: "Shipped at losode.com. About 70% more designers onboarded after the rebuild, each into a templated storefront instead of bespoke design work.",
    },
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
              { title: "Mobile is the product", body: "Buyers browse and pay on their phones, so every flow is designed phone-first." },
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
              { image: "losode-home-mobile.jpg", caption: "Home, mobile" },
              { image: "losode-new-in-mobile.jpg", caption: "New In: filters, sort and an item count up front" },
              { image: "losode-storefront-mobile.jpg", caption: "Designer storefront: each label's own banner, logo and catalogue" },
            ],
          },
          {
            type: "images",
            layout: "phones",
            items: [
              { image: "losode-product-mobile.jpg", caption: "Product detail, mobile" },
              { image: "losode-cart-mobile.jpg", caption: "Shopping bag, grouped by designer" },
              { image: "losode-checkout-mobile.jpg", caption: "Single-screen checkout" },
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
              { value: "~70%", label: "More designers onboarded after the rebuild" },
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
              "It also taught me my biggest lesson. Early on I designed features with nowhere for their data to come from, like a count of items that no part of the platform actually recorded. Losode has four connected products: the customer app, the seller app and an admin for each. Nothing works in isolation. What a customer does has to feed the admin, so I now map where every number comes from before I design the screen that shows it.",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "divvy",
    outcome: "6 of 6 testers created a split in under 35 seconds",
    title: "Divvy",
    year: "2025",
    category: "Fintech · Mobile",
    summary:
      "A payment-splitting app for how Nigerians actually share bills. Less awkward asking, clearer balances.",
    headline: "Turning awkward money conversations into clear taps, built for how Nigerians share bills.",
    glance: {
      challenge:
        "Splitting bills in Nigeria runs on screenshots, calculator apps and awkward reminders, and global tools feel foreign.",
      role: "Self-initiated: research, flows, UI and a money-direction colour system, then informal usability tests with six people.",
      impact: "All six testers created a split in under 35 seconds; five of six preferred Divvy's 'settle up' language to Splitwise.",
    },
    scope: ["UX research", "Mobile app", "Visual system"],
    tags: ["UX", "UI", "Fintech", "Concept"],
    meta: [
      { k: "Role", v: "Product designer" },
      { k: "Type", v: "Self-initiated concept" },
      { k: "Timeline", v: "8 weeks" },
      { k: "Platform", v: "iOS & Android" },
      { k: "Tools", v: "Figma, FigJam, Maze" },
    ],
    cover: "divvy-cover-clean.jpg",
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
