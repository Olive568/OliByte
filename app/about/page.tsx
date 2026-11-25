import type { Metadata } from "next";
import Link from "next/link";
import { BOOKING_URL, Label, btnPrimary, btnSecondary, display, mono, rule, wrap } from "../site";

export const metadata: Metadata = { title: "About" };

const explore = [
  ["/projects", "Projects"],
  ["/what-we-do", "What We Do"],
  ["/contact", "Contact"],
  ["/privacy", "Privacy Policy"],
];

const services = [
  ["Web apps", "Customer-facing sites and internal tools built with Next.js and TypeScript."],
  ["Backends & APIs", "Databases, REST APIs, and webhooks on Supabase, PostgreSQL, Python, and Node.js."],
  ["AI automations", "Booking and FAQ chatbots, and workflows that replace manual spreadsheets and chats."],
  ["Document search", "Retrieval (RAG) and vector search over your own documents and data."],
  ["Computer vision", "Image and video processing with OpenCV and ONNX Runtime."],
  ["QA & deployment", "Playwright end-to-end tests, GitHub Actions CI, and deploys to Vercel or Render."],
];

// TODO: confirm these engagement types match how OliByte actually sells work.
const engagements = [
  ["Audit", "A review of your codebase, security, and deployment, with a prioritized list of fixes."],
  ["Project build", "A defined product or automation, with scope, price, and timeline agreed in writing up front."],
  ["Ongoing support", "Maintenance, monitoring, and new features after launch, on a schedule that suits you."],
];

const principles = [
  ["Scope first", "Scope, price, and timeline are agreed in writing before any work starts."],
  ["Your code, your accounts", "We work in your repository and deploy to platforms you control."],
  ["Tested by default", "Automated tests and CI come with every build, so changes don't break what already works."],
  ["Plain updates", "Progress reports in plain language over Messenger or email."],
];

const band = `border-t ${rule} py-16 sm:py-32`;
const h2 = `${display} mt-6 text-4xl sm:text-5xl`;

export default function About() {
  return (
    <>
      {/* Hero: intro on the left, quick links on the right. */}
      <section className={`${wrap} grid gap-16 py-16 sm:py-36 lg:grid-cols-[3fr_1fr]`}>
        <div>
          <Label>About // OliByte</Label>
          <h1 className={`${display} mt-8 max-w-4xl text-5xl sm:text-7xl`}>
            Software and IT, built with AI from the start.
          </h1>
          <p className="mt-10 max-w-2xl text-xl text-[#94A3B8]">
            OliByte Software &amp; AI Services is a software and IT company based in Las Piñas, Metro Manila,
            working with SMEs and startups in the Philippines and remotely worldwide.
          </p>
          <div className="mt-12 flex flex-wrap gap-4">
            <a href={BOOKING_URL} className={btnPrimary}>Book a Meeting →</a>
            <Link href="/contact" className={btnSecondary}>Contact Us</Link>
          </div>
        </div>
        <nav aria-label="Explore" className="lg:pt-24">
          <Label>Explore</Label>
          <ul className={`mt-6 border-t ${rule}`}>
            {explore.map(([href, text]) => (
              <li key={href} className={`border-b ${rule}`}>
                <Link href={href} className="flex justify-between py-4 hover:text-[#10B981]">
                  {text} <span aria-hidden="true">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </section>

      {/* Story */}
      <section className={band}>
        <div className={`${wrap} grid gap-12 lg:grid-cols-2`}>
          <div>
            <Label>01 // Our story</Label>
            <h2 className={h2}>Why we started OliByte</h2>
          </div>
          <div className="space-y-6 text-lg text-[#94A3B8]">
            <p>
              Small businesses and startups want what AI can do for them, but often lack the engineers to
              build it properly. We started OliByte to build software and automations for them that hold up in
              production.
            </p>
            {/* TODO: add founding year, founder background, and first client story. */}
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className={band}>
        <div className={wrap}>
          <Label>02 // What we do</Label>
          <h2 className={h2}>Services</h2>
          <dl className={`mt-14 grid border-t ${rule} sm:grid-cols-2 lg:grid-cols-3`}>
            {services.map(([title, text]) => (
              <div key={title} className={`border-b ${rule} py-8 sm:pr-10`}>
                <dt className="text-xl font-semibold">{title}</dt>
                <dd className="mt-3 text-[#94A3B8]">{text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Engagement models */}
      <section className={band}>
        <div className={wrap}>
          <Label>03 // Working together</Label>
          <h2 className={h2}>Three ways to work with us</h2>
          <ol className="mt-14 grid gap-6 lg:grid-cols-3">
            {engagements.map(([title, text], i) => (
              <li key={title} className="border border-[#F8FAFC]/15 p-8 hover:border-[#10B981]">
                <p className={`${mono} text-xs text-[#10B981]`}>Option {i + 1}</p>
                <h3 className="mt-6 text-2xl font-semibold tracking-[-0.02em]">{title}</h3>
                <p className="mt-4 text-[#94A3B8]">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* AI usage */}
      <section className={band}>
        <div className={`${wrap} grid gap-12 lg:grid-cols-2`}>
          <div>
            <Label>04 // AI-native</Label>
            <h2 className={h2}>How we use AI</h2>
          </div>
          <div className="space-y-6 text-lg text-[#94A3B8]">
            <p>
              We use AI throughout our own engineering: to draft code, review changes, and write tests.
            </p>
            <p>
              Every change is still reviewed by an engineer and checked by automated tests before it reaches
              your users. We also build AI into what we deliver, using it where it saves your team real time.
            </p>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className={band}>
        <div className={wrap}>
          <Label>05 // Principles</Label>
          <h2 className={h2}>How we work</h2>
          <dl className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2">
            {principles.map(([title, text]) => (
              <div key={title} className="border-l-2 border-[#10B981] pl-6">
                <dt className="text-2xl font-semibold tracking-[-0.02em]">{title}</dt>
                <dd className="mt-3 text-[#94A3B8]">{text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* CTA */}
      <section className={`border-t ${rule} bg-[#10B981] py-16 text-[#111827] sm:py-32`}>
        <div className={`${wrap} text-center`}>
          <h2 className={`${display} mx-auto max-w-3xl text-4xl sm:text-5xl`}>Let’s talk about your project.</h2>
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
