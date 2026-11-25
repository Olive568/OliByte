import type { Metadata } from "next";
import { Label, PageHead, wrap } from "../site";

export const metadata: Metadata = { title: "About" };

const principles = [
  ["Scope first", "Scope, price, and timeline are agreed in writing before any work starts."],
  ["Your code, your accounts", "We work in your repository and deploy to platforms you control."],
  ["Tested by default", "Automated tests and CI come with every build, so changes don't break what already works."],
  ["Plain updates", "Progress reports in plain language over Messenger or email."],
];

export default function About() {
  return (
    <section className={`${wrap} py-28 sm:py-36`}>
      <PageHead label="About // OliByte" title="Software and IT, built with AI from the start." />
      <div className="mt-12 max-w-3xl space-y-6 text-xl text-[#94A3B8]">
        <p>
          OliByte Software &amp; AI Services is a software and IT agency based in Las Piñas, Metro Manila. We
          work with SMEs and startups in the Philippines and remotely worldwide.
        </p>
        <p>
          We build web apps, backends, and AI automations. AI is part of how we work: we use it to write,
          review, and test code, and we build it into what we deliver, from booking and FAQ chatbots to
          document search and computer vision.
        </p>
        {/* TODO: add a founder or team bio. */}
      </div>

      <Label className="mt-24">How we work</Label>
      <dl className="mt-8 grid gap-x-10 gap-y-12 sm:grid-cols-2">
        {principles.map(([title, text]) => (
          <div key={title} className="border-l-2 border-[#10B981] pl-6">
            <dt className="text-2xl font-semibold tracking-[-0.02em]">{title}</dt>
            <dd className="mt-3 text-[#94A3B8]">{text}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
