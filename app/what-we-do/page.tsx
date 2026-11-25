import type { Metadata } from "next";
import Link from "next/link";
import { BOOKING_URL, Label, btnPrimary, btnSecondary, display, mono, rule, wrap } from "../site";

export const metadata: Metadata = { title: "What We Do" };

// TODO: confirm timelines and engagement types match how OliByte actually sells work.
const paths = [
  ["Prototype", "A working prototype of your idea, so you can see and test it before committing to a full build."],
  ["Project build", "A defined app or automation, with scope, price, and timeline agreed in writing up front."],
  ["Take over", "A review of an existing or stalled project, then a plan to continue, improve, or rebuild it."],
];

const systems = [
  ["POS systems", "Point-of-sale for shops and restaurants: sales, receipts, discounts, and end-of-day reports."],
  ["CRM systems", "One place for your customers, leads, deals, and follow-ups, instead of scattered chats and sheets."],
  ["Inventory management", "Stock levels, suppliers, purchase orders, and low-stock alerts across one or more branches."],
  ["CRUD apps & admin panels", "Internal tools to add, view, edit, and track any records your team works with."],
  ["Booking & scheduling", "Online appointments and reservations with reminders, calendars, and staff schedules."],
  ["Client portals", "A login area where customers see their orders, files, invoices, and project status."],
  ["Dashboards & reports", "Live sales, operations, and finance numbers pulled from your systems into one screen."],
  ["Workflow automations", "Connect your apps so orders, forms, invoices, and messages move without copy-pasting."],
  ["AI chatbots & assistants", "Answer customer FAQs, take bookings, and qualify leads on your site or Messenger, any hour."],
];

const tech = [
  {
    title: "Large language models (LLMs)",
    text: "Text and code generation through LLM APIs, wired into the tools your team already uses.",
    delivers: ["Chatbots for bookings and FAQs", "Drafting documents and replies", "Natural-language search and commands"],
  },
  {
    title: "Retrieval (RAG) and vector search",
    text: "Answers grounded in your own documents and data, not in what a model happens to remember.",
    delivers: ["Search over manuals, policies, and records", "Assistants that cite their sources", "Knowledge bases that stay current"],
  },
  {
    title: "Computer vision",
    text: "Image and video processing with OpenCV and ONNX Runtime, running on your servers or devices.",
    delivers: ["Detection and counting", "Document and photo checks", "Fast on-device inference"],
  },
  {
    title: "Web apps, backends, and automation",
    text: "Next.js and TypeScript front ends on Python, Node.js, Supabase, and PostgreSQL, with REST APIs and webhooks.",
    delivers: ["Internal tools that replace spreadsheets", "Customer portals and dashboards", "Integrations between your systems"],
  },
];

const benefits = [
  "Less manual work: repetitive tasks in chats and spreadsheets are automated.",
  "Better decisions: your data is collected in one place and easy to search.",
  "Faster responses: customers get answers at any hour.",
  "Room to grow: systems that handle more users without more staff.",
];

const steps = [
  ["Discovery", "We start from the business problem, not the technology, and check whether AI is the right fit at all."],
  ["Proof of concept", "A small working version tested on your real data, so you see results before the full build."],
  ["Production", "Tested, monitored deployment on Vercel or Render, with Playwright tests and GitHub Actions CI."],
  ["Handover", "Code in your repository, accounts in your name, and plain documentation for your team."],
];

const faqs = [
  [
    "Does my problem actually need AI?",
    "Not always. If a simple form, database, or script solves it, we will say so and build that instead.",
  ],
  [
    "How is a project priced?",
    "After a free first meeting we agree scope, price, and timeline in writing before any work starts.",
  ],
  [
    "Do you use AI in your own work?",
    "Yes. We use AI to draft code, review changes, and write tests. An engineer reviews every change before it ships.",
  ],
  [
    "Who owns the code?",
    "You do. We work in your repository and deploy to platforms you control.",
  ],
  [
    "Do you support projects after launch?",
    "Yes. We offer maintenance, monitoring, model updates, and new features on a schedule that suits you.",
  ],
];

const band = `border-t ${rule} py-16 sm:py-32`;
const h2 = `${display} mt-6 text-4xl sm:text-5xl`;

export default function WhatWeDo() {
  return (
    <>
      {/* Hero */}
      <section className={`${wrap} py-16 sm:py-36`}>
        <Label>What we do // AI software</Label>
        <h1 className={`${display} mt-8 max-w-5xl text-5xl sm:text-7xl`}>
          The software you’ve been putting off is now within reach.
        </h1>
        <p className="mt-10 max-w-2xl text-xl text-[#94A3B8]">
          AI has made custom software faster and cheaper to build. A CRM, a client portal, or a replacement for
          the spreadsheet your team lives in can be back on the table. Tell us what you would build.
        </p>
        <div className="mt-12 flex flex-wrap gap-4">
          <a href={BOOKING_URL} className={btnPrimary}>Book a Meeting →</a>
          <Link href="/contact" className={btnSecondary}>Contact Us</Link>
        </div>
      </section>

      {/* Starting points */}
      <section className={band}>
        <div className={wrap}>
          <Label>01 // Starting points</Label>
          <h2 className={h2}>Start where you are. Move fast from there.</h2>
          <ol className="mt-14 grid gap-6 lg:grid-cols-3">
            {paths.map(([title, text], i) => (
              <li key={title} className="border border-[#F8FAFC]/15 p-8 hover:border-[#10B981]">
                <p className={`${mono} text-xs text-[#10B981]`}>Option {i + 1}</p>
                <h3 className="mt-6 text-2xl font-semibold tracking-[-0.02em]">{title}</h3>
                <p className="mt-4 text-[#94A3B8]">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Systems */}
      <section className={band}>
        <div className={wrap}>
          <Label>02 // Systems</Label>
          <h2 className={h2}>Systems we build</h2>
          <p className="mt-6 max-w-2xl text-lg text-[#94A3B8]">
            Everyday software that runs a business, built around how your team already works.
          </p>
          <dl className={`mt-14 grid border-t ${rule} sm:grid-cols-2 lg:grid-cols-3`}>
            {systems.map(([title, text]) => (
              <div key={title} className={`border-b ${rule} py-8 sm:pr-10`}>
                <dt className="text-xl font-semibold">{title}</dt>
                <dd className="mt-3 text-[#94A3B8]">{text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Technologies */}
      <section className={band}>
        <div className={wrap}>
          <Label>03 // Technologies</Label>
          <h2 className={h2}>What we build with</h2>
          <p className="mt-6 max-w-2xl text-lg text-[#94A3B8]">
            Every solution is reviewed and tested by an engineer, whatever model or tool is behind it.
          </p>
          <div className={`mt-14 border-t ${rule}`}>
            {tech.map(({ title, text, delivers }) => (
              <details key={title} className={`group border-b ${rule} py-8`}>
                <summary className="flex cursor-pointer list-none flex-col gap-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                  <span>
                    <span className="block text-2xl font-semibold tracking-[-0.02em]">{title}</span>
                    <span className="mt-3 block text-[#94A3B8]">{text}</span>
                  </span>
                  <span className={`${mono} shrink-0 text-xs text-[#10B981]`}>
                    <span className="group-open:hidden">Read more +</span>
                    <span className="hidden group-open:inline">Show less −</span>
                  </span>
                </summary>
                <Label className="mt-6">What this delivers</Label>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-lg">
                  {delivers.map((d) => <li key={d}>{d}</li>)}
                </ul>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className={band}>
        <div className={`${wrap} grid gap-12 lg:grid-cols-2`}>
          <div>
            <Label>04 // Results</Label>
            <h2 className={h2}>What AI software delivers for your business</h2>
          </div>
          <ul className="space-y-6 text-lg text-[#94A3B8]">
            {benefits.map((b) => (
              <li key={b} className="border-l-2 border-[#10B981] pl-6">{b}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Approach */}
      <section className={band}>
        <div className={wrap}>
          <Label>05 // Approach</Label>
          <h2 className={h2}>How we build it</h2>
          <ol className={`mt-14 grid border-t ${rule} sm:grid-cols-2 lg:grid-cols-4`}>
            {steps.map(([title, text], i) => (
              <li key={title} className={`border-b ${rule} py-8 sm:pr-10`}>
                <p className={`${mono} text-xs text-[#10B981]`}>Step {i + 1}</p>
                <h3 className="mt-4 text-xl font-semibold">{title}</h3>
                <p className="mt-3 text-[#94A3B8]">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className={band}>
        <div className={wrap}>
          <Label>06 // FAQ</Label>
          <h2 className={h2}>Commonly asked questions</h2>
          <div className={`mt-14 border-t ${rule}`}>
            {faqs.map(([q, a]) => (
              <details key={q} className={`group border-b ${rule} py-6`}>
                <summary className="flex cursor-pointer list-none justify-between gap-6 text-xl font-semibold">
                  {q}
                  <span aria-hidden="true" className="text-[#10B981] group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 max-w-3xl text-[#94A3B8]">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={`border-t ${rule} bg-[#10B981] py-16 text-[#111827] sm:py-32`}>
        <div className={`${wrap} text-center`}>
          <h2 className={`${display} mx-auto max-w-3xl text-4xl sm:text-5xl`}>Ready to explore AI for your business?</h2>
          <p className="mt-6 text-lg">A first meeting is free, with no commitment.</p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href={BOOKING_URL} className="inline-block bg-[#111827] px-7 py-4 font-semibold text-[#F8FAFC] hover:bg-[#1F2937]">
              Book a Meeting →
            </a>
            <Link href="/contact" className="inline-block border border-[#111827] px-7 py-4 font-semibold hover:bg-[#111827]/10">
              Send a Message
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
