import Link from "next/link";
import { ContactForm } from "./contact/contact-form";
import { BOOKING_URL, LogoMark, MESSENGER_URL, btnPrimary, btnSecondary, display, mono, rule, wrap } from "./site";

// TODO: confirm these engagement types and promises match how OliByte actually sells work.
const offers = [
  {
    title: "AI automation",
    tagline: "Start with one manual process.",
    text: "We automate a single high-volume task first, such as replies, bookings, or data entry, and measure the time it saves.",
    points: ["Chatbots for FAQs and bookings", "Spreadsheet and chat workflows replaced", "Connected apps, no copy-pasting"],
    href: "/what-we-do",
  },
  {
    title: "Business systems",
    tagline: "Software built around how you work.",
    text: "POS, CRM, inventory, booking, and admin systems with scope, price, and timeline agreed in writing up front.",
    points: ["POS and inventory", "CRM and client portals", "Dashboards and reports"],
    href: "/what-we-do",
  },
  {
    title: "Audit & support",
    tagline: "Keep what you have running well.",
    text: "A review of your codebase, security, and deployment, then maintenance and new features after launch.",
    points: ["Prioritized list of fixes", "Tests and CI added", "Monitoring and updates"],
    href: "/what-we-do",
  },
];

const tiles = [
  ["Web apps", "Sites and internal tools in Next.js and TypeScript."],
  ["Prototypes", "A working version of your idea you can click through and test."],
  ["Backends & APIs", "Databases, REST APIs, and webhooks that connect your systems."],
];

const reasons = [
  ["Straight talk", "We tell you when AI isn’t the answer, or when a simpler tool will do."],
  ["Scope first", "Scope, price, and timeline are agreed in writing before work starts."],
  ["AI-native", "We use AI to draft, review, and test code. An engineer checks every change."],
  ["Your code, your accounts", "We work in your repository and deploy to platforms you control."],
  ["Tested by default", "Automated tests and CI come with every build."],
  ["Plain updates", "Progress reports in plain language over Messenger or email."],
];

const journey = [
  ["Idea", "You have something to build or a process to fix."],
  ["Prototype", "A working version you can see and test."],
  ["Learn", "Try it with real users and data, then adjust."],
  ["Build", "The production version, with tests and monitoring."],
  ["Evolve", "New features and model updates as you grow."],
];

const band = `border-t ${rule} py-16 sm:py-32`;
const h2 = `${display} text-4xl sm:text-5xl`;

export default function Home() {
  return (
    <>
      {/* Hero: copy left, brand mark right. */}
      <section className={`${wrap} grid items-center gap-16 py-16 sm:py-36 lg:grid-cols-[3fr_2fr]`}>
        <div>
          <h1 className={`${display} text-5xl sm:text-7xl`}>Software and AI your business can rely on.</h1>
          <p className="mt-8 max-w-2xl text-xl text-[#94A3B8]">
            OliByte builds AI automations, business systems, and web apps for SMEs and startups, with AI built
            into how we engineer, test, and deploy.
          </p>
          <div className="mt-12 flex flex-wrap gap-4">
            <a href="#start" className={btnPrimary}>Tell us what you’re building →</a>
            <Link href="/what-we-do" className={btnSecondary}>See what we do</Link>
          </div>
        </div>
        <div className="hidden justify-center lg:flex">
          <LogoMark size={320} />
        </div>
      </section>

      {/* Offers */}
      <section className={band}>
        <div className={wrap}>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <h2 className={h2}>Ways to work with us</h2>
            </div>
            <Link href="/what-we-do" className={`${mono} py-2.5 text-xs text-[#10B981] hover:text-[#F8FAFC]`}>
              See every service →
            </Link>
          </div>
          <ul className="mt-14 grid gap-6 lg:grid-cols-3">
            {offers.map(({ title, tagline, text, points, href }) => (
              <li key={title}>
                <Link href={href} className="flex h-full flex-col border border-[#F8FAFC]/15 p-8 hover:border-[#10B981]">
                  <h3 className="text-2xl font-semibold tracking-[-0.02em]">{title}</h3>
                  <p className="mt-2 text-[#10B981]">{tagline}</p>
                  <p className="mt-4 text-[#94A3B8]">{text}</p>
                  <ul className="mt-6 list-disc space-y-1 pl-5">
                    {points.map((p) => <li key={p}>{p}</li>)}
                  </ul>
                  <span className={`${mono} mt-auto pt-8 text-xs text-[#10B981]`}>Learn more →</span>
                </Link>
              </li>
            ))}
          </ul>
          <ul className="mt-6 grid gap-6 sm:grid-cols-3">
            {tiles.map(([title, text]) => (
              <li key={title}>
                <Link href="/what-we-do" className="block h-full border border-[#F8FAFC]/15 p-6 hover:border-[#10B981]">
                  <p className="font-semibold">{title} →</p>
                  <p className="mt-2 text-sm text-[#94A3B8]">{text}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Why */}
      <section className={band}>
        <div className={wrap}>
          <h2 className={h2}>Different in the ways that matter</h2>
          <dl className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map(([title, text]) => (
              <div key={title} className="border-l-2 border-[#10B981] pl-6">
                <dt className="text-xl font-semibold">{title}</dt>
                <dd className="mt-3 text-[#94A3B8]">{text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Journey */}
      <section className={band}>
        <div className={wrap}>
          <h2 className={h2}>From first idea to a system that keeps improving</h2>
          <ol className={`mt-14 grid border-t ${rule} sm:grid-cols-2 lg:grid-cols-5`}>
            {journey.map(([title, text], i) => (
              <li key={title} className={`border-b ${rule} py-8 sm:pr-8`}>
                <p className={`${mono} text-xs text-[#10B981]`}>0{i + 1}</p>
                <h3 className="mt-4 text-xl font-semibold">{title}</h3>
                <p className="mt-3 text-[#94A3B8]">{text}</p>
              </li>
            ))}
          </ol>
          <p className={`${mono} mt-10 text-xs text-[#94A3B8]`}>
            No throwaway work • No lost context • One team throughout
          </p>
        </div>
      </section>

      {/* Founding client */}
      <section className={band}>
        <div className={`${wrap} flex flex-wrap items-end justify-between gap-8`}>
          <div>
            <h2 className={h2}>Founding client: Tulay</h2>
            <p className="mt-6 max-w-2xl text-lg text-[#94A3B8]">Backend and deployment audit, currently active.</p>
          </div>
          <Link href="/projects" className={btnSecondary}>See our projects</Link>
        </div>
      </section>

      {/* Get started */}
      <section id="start" className={`${band} scroll-mt-8`}>
        <div className={`${wrap} grid gap-16 lg:grid-cols-[2fr_3fr] lg:gap-20`}>
          <div>
            <h2 className={h2}>Tell us what you want to build.</h2>
            <p className="mt-6 text-lg text-[#94A3B8]">A quick question or a detailed brief, both are welcome.</p>
            <ul className="mt-10 space-y-4 text-lg">
              <li className="border-l-2 border-[#10B981] pl-6">An honest answer on whether we’re the right fit</li>
              <li className="border-l-2 border-[#10B981] pl-6">Price agreed in writing before work starts</li>
              <li className="border-l-2 border-[#10B981] pl-6">A free first meeting, no sales pressure</li>
            </ul>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href={BOOKING_URL} className={btnPrimary}>Book a Meeting →</a>
              <a href={MESSENGER_URL} className={btnSecondary}>Messenger</a>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
