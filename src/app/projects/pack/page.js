import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "../../Component/Icons";

const sections = [
  {
    label: "ABOUT",
    title: "Overview",
    details: [
      {
        title: "Tiger Snack Box",
        paragraphs: [
          "Tiger Snack Box is an ecommerce platform focused on delivering international Asian snack boxes to customers worldwide, with popular snacks from Korea, Japan, and China.",
        ],
      },
      {
        title: "Context",
        paragraphs: [
          "The company set out to create a mobile puzzle game to increase brand engagement and customer retention. A co-designer and I were hired to lead the game’s UI/UX design. It was planned for iOS and Android, for casual puzzle players interested in Asian culture.",
        ],
      },
    ],
  },
  {
    label: "DISCOVER",
    title: "Constraints, problem, and competitive analysis",
    details: [
      {
        title: "Constraints & guidelines",
        paragraphs: [
          "The shareholder supplied a mobile-only puzzle game with levels of increasing difficulty. It needed to feel cozy and friendly, and generate revenue through paid features, ads, or purchases connected to real-world snack boxes. The visual identity had to reflect Tiger Snack Box’s red, orange, and yellow brand and pay homage to Asian culture. The three-month timeline had a hard deadline so development could begin.",
        ],
        render: "constraints",
      },
      {
        title: "Problem statement & success metric",
        paragraphs: [
          "How can we design a mobile puzzle game that engages users and reflects Tiger Snack Box’s brand identity while respecting business requirements, fixed gameplay mechanics, and the three-month deadline?",
          "Success meant delivering a PACK! prototype ready for developers to turn into a playable game.",
        ],
      },
      {
        title: "Market research & competitive analysis",
        paragraphs: [
          "To understand the mobile puzzle market, we compared Puzzles & Dragons for its progressive gameplay and collectible characters, Cats & Soup for its cozy hand-drawn presentation and rewarded-ad model, and Candy Crush for its animations, haptics, and ergonomic interaction patterns.",
          "We reviewed the 100 most recent App Store reviews for each game and aggregated responses into a stat box. The app was the independent variable and review responses were the dependent variable; the source and collection method were controlled by using the same 100 most recent App Store reviews. Since all three games were available on both platforms, platform was not expected to confound the comparison.",
        ],
        render: "competitiveAnalysis",
      },
    ],
  },
  {
    label: "DEFINE",
    title: "From findings to answer statement",
    details: [
      {
        title: "Market analysis",
        paragraphs: [
          "The review data showed what players valued and where friction appeared: the cozy, illustrative style of Cats & Soup, reduced frustration when monetization stays optional, and progressive mechanics that continue to evolve.",
        ],
        render: "researchMetrics",
      },
      {
        title: "Design recommendations",
        paragraphs: [
          "We translated those findings into four directions for PACK!: preserve a cozy, approachable look; choose rewarded ads rather than interruptive interstitials; connect in-game rewards with real-world snack-box coupons; and make progression engaging by evolving difficulty and mechanics over time.",
        ],
        render: "recommendations",
      },
      {
        title: "User personas",
        paragraphs: [
          "We used four personas to turn the research themes into recognizable player needs.",
        ],
        render: "personas",
      },
      {
        title: "Answer statement",
        paragraphs: [
          "We can create an effective mobile puzzle game by engaging users through progressive play with the given mechanics; building a soft, pastel visual identity from colors, textures, and design tokens that still reflects the brand; and supporting app revenue and real-world snack-box sales through rewarded ads, in-app purchases, and discount challenges.",
        ],
      },
    ],
  },
  {
    label: "DEVELOP",
    title: "Flows, wireframes, and visual system",
    details: [
      {
        title: "User flows",
        paragraphs: [
          "Before designing screens, we mapped the user’s journey through login, tutorial, gameplay, app navigation, shop, and settings. Registration was also part of the broader flow work. Mapping the journeys first helped us understand how the screens connected.",
        ],
      },
      {
        title: "Low-fidelity wireframes",
        paragraphs: [
          "With the user flows established, we created low-fidelity wireframes to test whether the journeys were valid. We explored different screen variations and focused on understanding the app’s structure before adding visual polish.",
        ],
      },
      {
        title: "Design tokens",
        paragraphs: [
          "Once flows and low-fidelity wireframes were in place, we moved into Figma. The token board brought together the typeface, mobile type scale, brand palette, and four-point spacing system.",
        ],
        render: "designTokens",
      },
      {
        title: "High-fidelity wireframes & visual language",
        paragraphs: [
          "After defining the design tokens, we applied them to high-fidelity wireframes. Texture, noise, and gradient strokes helped create an illustrative, hand-drawn feel.",
        ],
      },
      {
        title: "User-flow prototypes",
        paragraphs: [
          "With the high-fidelity wireframes finished, we returned to the user flows and created Figma prototypes for each flow, connecting the screens into experiences that could be reviewed and handed off.",
        ],
      },
    ],
  },
  {
    label: "DELIVER",
    title: "Final preview & developer handoff",
    details: [
      {
        title: "Final preview",
        paragraphs: [
          "The final preview showcases the app’s visual design, gameplay mechanics, and user experience. We handed off both wireframes and prototypes to the development team to begin building a playable game.",
        ],
      },
    ],
  },
  {
    label: "INSIGHTS",
    title: "What now?",
    details: [
      {
        title: "An ongoing product collaboration",
        paragraphs: [
          "PACK! is not a finished game. We continue working with the developers and iterating through the design process toward a more complete version of the game.",
        ],
      },
    ],
  },
];

const process = [
  {
    step: "01",
    title: "Discover",
    text: "Build a grounded view of the market, players, and constraints.",
    activities: "Compared three puzzle games for interface ideas and mechanics, reviewed the 100 most recent App Store reviews for each, then brought the findings together in a market analysis.",
    output: "Market analysis",
  },
  {
    step: "02",
    title: "Define",
    text: "Turn research into a shared audience and product direction.",
    activities: "Turned the research into user personas and a shared product direction: progressive gameplay, a soft visual identity tied to the brand, and monetization that connects in-game rewards with snack-box discounts.",
    output: "Personas + answer statement",
  },
  {
    step: "03",
    title: "Develop",
    text: "Validate journeys first, then shape the visual system and prototype.",
    activities: "Mapped the login, tutorial, gameplay, navigation, shop, and settings flows. We tested those journeys in low-fidelity wireframes, then applied the Figma design tokens to high-fidelity screens and interactive prototypes.",
    output: "Flows + Figma prototypes",
  },
  {
    step: "04",
    title: "Deliver",
    text: "Hand off a connected design foundation for development.",
    activities: "Shared the wireframes and prototypes with developers as the foundation for a playable game, then continued iterating with the team after handoff.",
    output: "Developer-ready design handoff",
  },
];

const competitorResearch = [
  {
    name: "Puzzles & Dragons",
    rating: "4.2/5",
    mark: "P&D",
    avatar: "bg-cyan-100 text-fuchsia-700",
    pros: [
      "Scenes — Idle scenes play above the puzzle game, making the experience feel like it is constantly flowing.",
      "Unique characters — Players love the characters and save currency to roll for them (gacha mechanics), creating a consistent revenue stream without ruining the user experience.",
    ],
    cons: [
      "Endgame — The game ends after a certain number of levels; users report that it gets stale when they reach this stage.",
      "Co-dependent gameplay — Many levels require cooperation with other players to progress. The number of players who can join is limited by a paywall.",
    ],
  },
  {
    name: "Cats & Soup",
    rating: "4.8/5",
    mark: "C+S",
    avatar: "bg-amber-100 text-amber-800",
    pros: [
      "Charming visuals — Hand-drawn textures with inconsistent strokes and extremely pastel colors make the game very approachable.",
      "Lack of pop-up ads — Users like that there are no interruptive ads and that the game uses rewarded ads for revenue.",
      "Environment — Users like leaving the game open and playing in their free time because of its calming, cozy nature.",
    ],
    cons: [
      "Cluttered UI — The game has many UI elements that can be overwhelming for some users.",
      "Repetitive gameplay — The game stays at a consistent difficulty level, and users say they get bored quickly.",
      "Misclicks — Users report misclicks that lead to accidental purchases and actions they did not intend.",
    ],
  },
  {
    name: "Candy Crush",
    rating: "4.7/5",
    mark: "CC",
    avatar: "bg-red-100 text-red-700",
    pros: [
      "Animations & haptic feedback — Animations and haptics make the game feel more engaging and interactive.",
      "Ergonomic design — The game is designed to be easy to use and navigate, with a focus on hand ergonomics and sizing.",
    ],
    cons: [
      "Interstitial ads — Users report that interruptive ads make the game unenjoyable and sometimes unplayable.",
      "Pay to win — Many users report that later levels become extremely difficult and require paid boosters to progress.",
    ],
  },
];

const researchMetrics = [
  { value: "78%", text: "Loved the illustrative and cozy feel of Cats & Soup." },
  { value: "40%", text: "Heavily disliked the interstitial ads in Candy Crush." },
  { value: "36%", text: "Heavily disliked Candy Crush’s pay-to-win mechanics that stopped progress at harder levels." },
  { value: "34%", text: "Loved the progressive and constantly updating gameplay mechanics in Puzzles & Dragons." },
];

const constraints = [
  { title: "Gameplay", text: "The gameplay was given to us by the shareholder: a puzzle game with levels of increasing difficulty. It is a mobile-only experience and needed a cozy, friendly vibe and aesthetic." },
  { title: "Business", text: "The game needed a way to generate revenue, whether through paid features, ads, or purchases through real-world snack boxes." },
  { title: "Aesthetics", text: "The game needed to strongly reflect Tiger Snack Box’s current brand identity (red, orange, yellow) and pay homage to Asian culture." },
  { title: "Time", text: "This was a three-month project with a hard deadline to get development started." },
];

const guidelines = [
  { title: "Gameplay", text: "Create a mobile-only experience; keep hand ergonomics and sizing in mind. The game will be touch- and swipe-based." },
  { title: "Business", text: "Revenue would be generated through increased game revenue or increased sales of real-world snack boxes." },
  { title: "Visual design", text: "Create a visual identity that satisfies both the playful feel required and the Tiger Snack Box brand identity." },
  { title: "Time", text: "Separate design into sprints to allow feedback and timely delivery." },
];

const recommendations = [
  {
    title: "Use hand-drawn textures and pastel colors",
    text: "Users preferred hand-drawn textures and pastel colors because they feel more approachable and engaging than other colors.",
  },
  {
    title: "Stay away from interstitial ads; use rewarded ads instead",
    text: "Users preferred rewarded ads because they are less intrusive and more engaging than interstitial ads.",
  },
  {
    title: "Rewards, in-app purchases, and coupons for real-world snack boxes",
    text: "Offer in-game customization, purchases for currency and gems, and challenges that give discounts on real-world snack boxes.",
  },
  {
    title: "Progressive gameplay mechanics",
    text: "Increase difficulty as users progress by making the game faster, increasing penalties, and manipulating game mechanics in interesting ways over time.",
  },
];

const personas = [
  {
    name: "Sarah Chen",
    age: 16,
    gender: "Female",
    initials: "SC",
    color: "bg-rose-100 text-rose-800",
    text: "Sarah loves cozy idle games like Cats & Soup. She prefers hand-drawn visuals and soft colors, and often keeps games open while listening to music. She avoids intrusive ads and gets attached to charming characters or collectibles.",
  },
  {
    name: "Steven Jackson",
    age: 17,
    gender: "Male",
    initials: "SJ",
    color: "bg-sky-100 text-sky-800",
    text: "Steven plays games like Candy Crush and Puzzles & Dragons to challenge himself. He enjoys games that reward skill and persistence, but dislikes difficulty spikes or monetization that blocks progress.",
  },
  {
    name: "James Smith",
    age: 20,
    gender: "Male",
    initials: "JS",
    color: "bg-amber-100 text-amber-900",
    text: "James values visually minimal, intuitive games that don’t demand constant attention. He enjoys background play loops and appreciates rewarded ads when they feel optional and balanced.",
  },
  {
    name: "Emily Johnson",
    age: 18,
    gender: "Female",
    initials: "EJ",
    color: "bg-violet-100 text-violet-800",
    text: "Emily gravitates toward games with a strong visual identity and personality. She enjoys discovering how design connects to brand storytelling.",
  },
];

function ResearchCards({ items, columns = "md:grid-cols-2" }) {
  return (
    <div className={`mt-[20px] grid gap-[16px] ${columns}`}>
      {items.map((item) => (
        <article key={item.title} className="rounded-[16px] border border-black/10 bg-white p-[20px] md:p-[24px]">
          <h4 className="mb-[10px] text-[16px] font-semibold">{item.title}</h4>
          <p className="text-[14px] leading-relaxed text-black/70">{item.text}</p>
        </article>
      ))}
    </div>
  );
}

function CompetitiveAnalysis() {
  return (
    <div className="mt-[20px] grid gap-[16px] lg:grid-cols-2">
      {competitorResearch.map((game) => (
        <article key={game.name} className="rounded-[4px] border border-black/10 bg-white p-[20px] md:p-[24px]">
          <header className="mb-[4px] flex items-center gap-[10px] border-b border-black/10 pb-[12px]">
            <span aria-hidden="true" className={`flex h-[42px] w-[42px] items-center justify-center rounded-full border border-black/10 text-[11px] font-bold ${game.avatar}`}>{game.mark}</span>
            <h4 className="font-semibold">{game.name} <span className="font-normal italic text-black/65">| {game.rating} Rating</span></h4>
          </header>
          <div className="grid grid-cols-[62px_1fr] border-b border-black/10">
            <h5 className="border-r border-black/5 px-[10px] py-[10px] text-[14px] font-medium">Pros</h5>
            <ul className="space-y-[12px] px-[12px] py-[10px] text-[14px] leading-relaxed text-black/75">
              {game.pros.map((point) => <li key={point}>{point}</li>)}
            </ul>
          </div>
          <div className="grid grid-cols-[62px_1fr]">
            <h5 className="border-r border-black/5 px-[10px] py-[10px] text-[14px] font-medium">Cons</h5>
            <ul className="space-y-[12px] px-[12px] py-[10px] text-[14px] leading-relaxed text-black/75">
              {game.cons.map((point) => <li key={point}>{point}</li>)}
            </ul>
          </div>
        </article>
      ))}
    </div>
  );
}

function DesignTokenBoard() {
  return (
    <figure className="mt-[20px] overflow-hidden rounded-[16px] border border-[#1E1E35]/10 bg-[#f6f6f6] p-[8px] md:rounded-[20px] md:p-[16px]">
      <Image
        src="/Pack/article/13-design-tokens.png"
        alt="Original PACK! design-token board showing the Forta typeface and type scale, primary and secondary color palette, and four-point spacing system"
        width={1024}
        height={856}
        sizes="(max-width: 768px) 100vw, 1100px"
        className="h-auto w-full rounded-[10px] object-contain"
      />
      <figcaption className="px-[8px] pb-[4px] pt-[12px] text-[12px] leading-relaxed text-black/55 md:px-[12px]">
        Original Figma design-token board: FORTA typography, brand colors, and the four-point spacing system.
      </figcaption>
    </figure>
  );
}

export default function PackCaseStudy() {
  return (
    <main className="page-grain mx-auto min-h-screen w-full max-w-[1440px] bg-[#E3E5F6] p-[8px] text-[#1E1E35] md:p-[12px] lg:p-[16px] xl:p-[24px]">
      <div className="overflow-hidden rounded-[8px] bg-white md:rounded-[12px]">
      <header className="mx-auto flex w-full max-w-[1280px] items-center justify-between gap-[16px] px-[24px] py-[24px] sm:px-[32px] md:px-[48px] xl:px-[64px]">
        <Link href="/#projects" className="group flex shrink-0 items-center gap-[10px] py-[8px] text-[14px] font-medium text-[#1E1E35] transition-colors hover:text-[#5A56A2]">
          <span className="rotate-180 transition-transform group-hover:-translate-x-1">
            <ArrowRight />
          </span>
          Back to projects
        </Link>
        <span className="text-right text-[10px] uppercase tracking-[0.12em] text-black/55 sm:text-[12px] sm:tracking-[0.18em]">Case Study · 2025</span>
      </header>

      <section className="mx-auto grid w-full max-w-[1280px] gap-[40px] px-[32px] pb-[64px] pt-[24px] md:grid-cols-[1fr_0.8fr] md:items-center md:pb-[80px] lg:px-[64px] xl:px-[64px]">
        <div className="flex flex-col items-start gap-[24px]">
          <span className="rounded-full border border-[#1E1E35]/15 px-[14px] py-[8px] text-[12px]">Tiger Snack Box · Mobile Game</span>
          <h1 className="text-[64px] font-bold leading-[0.95] md:text-[96px]">PACK!</h1>
          <p className="max-w-[600px] text-[16px] leading-relaxed text-black/70">
            Shaping a playful mobile puzzle game—from market research and product strategy to user flows and developer-ready prototypes.
          </p>
          <div className="flex flex-wrap gap-[8px]">
            {["Product Strategy", "UX Research", "UI/UX Design", "Prototyping"].map((tag) => (
              <span key={tag} className="rounded-full bg-white/70 px-[14px] py-[8px] text-[12px]">{tag}</span>
            ))}
          </div>
          <dl className="grid w-full max-w-[600px] grid-cols-3 gap-[12px] border-t border-[#1E1E35]/10 pt-[20px]">
            <div><dt className="text-[11px] uppercase tracking-[0.12em] text-black/50">Timeline</dt><dd className="mt-[4px] text-[14px] font-medium">3 months</dd></div>
            <div><dt className="text-[11px] uppercase tracking-[0.12em] text-black/50">Team</dt><dd className="mt-[4px] text-[14px] font-medium">2 designers</dd></div>
            <div><dt className="text-[11px] uppercase tracking-[0.12em] text-black/50">Platforms</dt><dd className="mt-[4px] text-[14px] font-medium">iOS + Android</dd></div>
          </dl>
        </div>
        <div className="relative aspect-[16/9] overflow-hidden rounded-[20px] border border-[#1E1E35]/10 bg-[#f5c2d5] shadow-lg">
          <Image src="/Pack/article/01-overview.png" alt="PACK! mobile game overview visual" fill priority sizes="(max-width: 768px) 100vw, 45vw" className="object-cover" />
        </div>
      </section>

      <section className="mx-[16px] rounded-[12px] bg-[#1E1E35] px-[24px] py-[40px] text-white md:mx-[32px] md:px-[48px] md:py-[56px]">
        <div className="mx-auto grid max-w-[1100px] gap-[24px] md:grid-cols-[0.7fr_1.3fr]">
          <p className="text-[12px] font-semibold tracking-[0.2em] text-[#BEBBEA]">THE CHALLENGE</p>
          <div>
            <h2 className="mb-[16px] text-[28px] font-semibold leading-tight md:text-[40px]">Make a new game feel unmistakably like Tiger Snack Box.</h2>
            <p className="max-w-[700px] leading-relaxed text-white/70">Create an engaging puzzle experience that connects the brand with players, while balancing fixed mechanics, business requirements, and a three-month timeline. The design needed to work for casual players with an interest in Asian culture and support both iOS and Android.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-[24px] py-[56px] md:px-[32px] md:py-[72px] lg:px-[48px] xl:px-[64px]">
        <div className="mb-[32px] max-w-[640px]">
          <p className="mb-[12px] text-[12px] font-semibold tracking-[0.2em] text-[#5A56A2]">HOW I APPROACHED IT</p>
          <h2 className="text-[32px] font-bold leading-none xl:text-[64px]">A connected path from insight to handoff</h2>
        </div>
        <div className="grid items-stretch gap-[16px] md:grid-cols-2 xl:grid-cols-4">
          {process.map((item) => (
            <article key={item.step} className="flex h-full flex-col rounded-[12px] border border-[#1E1E35]/10 bg-[#E3E5F6]/30 p-[20px] md:p-[24px]">
              <div className="mb-[20px] flex items-center gap-[12px]">
                <span className="flex h-[36px] w-[36px] items-center justify-center rounded-full bg-[#5A56A2]/10 text-[12px] font-semibold text-[#5A56A2]">{item.step}</span>
                <h3 className="text-[20px] font-semibold">{item.title}</h3>
              </div>
              <p className="mb-[12px] text-[14px] font-semibold leading-relaxed text-[#1E1E35]/80">{item.text}</p>
              <p className="text-[14px] leading-relaxed text-black/65">{item.activities}</p>
              <p className="mt-auto min-h-[56px] border-t border-black/10 pt-[20px] text-[12px] font-medium text-[#5A56A2]"><span className="mr-[6px] uppercase tracking-[0.12em] text-black/45">Output</span>{item.output}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-[32px] py-[64px] md:py-[80px] lg:px-[64px] xl:px-[128px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-[28px] flex flex-col gap-[12px] md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-[10px] text-[12px] font-semibold tracking-[0.2em] text-[#5A56A2]">PROJECT DETAILS</p>
              <h2 className="text-[32px] font-bold leading-none xl:text-[64px]">Inside the process</h2>
            </div>
            <nav aria-label="Case study sections" className="flex flex-wrap gap-[8px]">
              {sections.map((section) => <a key={section.label} href={`#${section.label.toLowerCase()}`} className="rounded-full border border-[#1E1E35]/10 bg-white/75 px-[14px] py-[8px] text-[11px] font-medium transition-colors hover:bg-[#1E1E35] hover:text-white">{section.label}</a>)}
            </nav>
          </div>
          <div className="space-y-[24px]">
          {sections.map((section) => (
            <section id={section.label.toLowerCase()} key={section.label} className="rounded-[12px] border border-[#1E1E35]/10 bg-[#E3E5F6]/25 p-[24px] md:p-[40px]">
              <p className="mb-[10px] text-[11px] font-semibold tracking-[0.18em] text-[#5A56A2]">{section.label}</p>
              <h2 className="mb-[32px] text-[24px] font-semibold leading-tight md:text-[32px]">{section.title}</h2>
              <div className="space-y-[32px]">
                {section.details.map((detail) => (
                  <article key={detail.title}>
                    <h3 className="mb-[10px] text-[18px] font-semibold">{detail.title}</h3>
                    <div className="max-w-[800px] space-y-[12px] text-[16px] leading-relaxed text-black/70">
                      {detail.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                    </div>
                    {detail.render === "competitiveAnalysis" && <CompetitiveAnalysis />}
                    {detail.render === "constraints" && <div className="mt-[20px] grid gap-[16px] md:grid-cols-2">{[{ title: "Constraints", items: constraints }, { title: "Guidelines", items: guidelines }].map((column) => <section key={column.title} className="rounded-[16px] border border-black/10 bg-white p-[20px]"><h4 className="mb-[12px] border-b border-black/10 pb-[10px] text-[16px] font-semibold">{column.title}</h4><div className="divide-y divide-black/10">{column.items.map((item) => <article key={item.title} className="py-[12px] first:pt-0 last:pb-0"><h5 className="mb-[5px] text-[14px] font-medium">{item.title}</h5><p className="text-[13px] leading-relaxed text-black/70">{item.text}</p></article>)}</div></section>)}</div>}
                    {detail.render === "researchMetrics" && <div className="mt-[20px] grid gap-[12px] sm:grid-cols-2">{researchMetrics.map((metric) => <article key={metric.value} className="rounded-[16px] border border-black/10 bg-white p-[20px]"><p className="text-[36px] font-bold text-[#aaa]">{metric.value}</p><p className="text-[14px] leading-relaxed text-black/70">{metric.text}</p></article>)}</div>}
                    {detail.render === "recommendations" && <div className="mt-[20px] grid gap-[12px] md:grid-cols-2">{recommendations.map((item) => <article key={item.title} className="rounded-[16px] border border-black/10 bg-white p-[20px]"><h4 className="mb-[8px] text-[15px] font-semibold">{item.title}</h4><p className="text-[14px] leading-relaxed text-black/70">{item.text}</p></article>)}</div>}
                    {detail.render === "personas" && <div className="mt-[20px] grid gap-[12px] md:grid-cols-2">{personas.map((persona) => <article key={persona.name} className="rounded-[16px] border border-black/10 bg-white p-[20px]"><div className="mb-[12px] flex items-center gap-[12px]"><span className={`flex h-[44px] w-[44px] items-center justify-center rounded-full text-[13px] font-semibold ${persona.color}`}>{persona.initials}</span><div><h4 className="text-[15px] font-semibold">{persona.name}</h4><p className="text-[12px] italic text-black/55">Age {persona.age} · {persona.gender}</p></div></div><p className="text-[14px] leading-relaxed text-black/70">{persona.text}</p></article>)}</div>}
                    {detail.render === "designTokens" && <DesignTokenBoard />}
                    {detail.figures && (
                      <div className="mt-[20px] grid gap-[16px] md:grid-cols-2">
                        {detail.figures.map((figure) => (
                          <figure key={figure.src} className="overflow-hidden rounded-[12px] border border-[#1E1E35]/10 bg-[#f7f7f7]">
                            <Image src={figure.src} alt={figure.alt} width={figure.width} height={figure.height} sizes="(max-width: 768px) 100vw, 50vw" className="h-auto w-full object-contain" />
                            <figcaption className="px-[16px] py-[12px] text-[12px] leading-relaxed text-black/55">{figure.caption}</figcaption>
                          </figure>
                        ))}
                      </div>
                    )}
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
        </div>
      </section>

      <footer className="mx-auto flex max-w-[1200px] flex-col gap-[20px] border-t border-[#1E1E35]/10 px-[32px] py-[36px] md:flex-row md:items-center md:justify-between lg:px-[64px] xl:px-[128px]">
        <p className="text-[14px] text-black/60">PACK! · Product design, research, and prototyping</p>
        <Link href="/#projects" className="group flex items-center gap-[8px] text-[14px] font-medium">
          Explore more projects <ArrowRight className="transition-transform group-hover:translate-x-1" />
        </Link>
      </footer>
      </div>
    </main>
  );
}
