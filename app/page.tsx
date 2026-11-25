import Link from "next/link";
import { BOOKING_URL, Label, MAILTO, MESSENGER_URL, btnPrimary, btnSecondary, display, rule, wrap } from "./site";

const sections = [
  ["/about", "About", "Who we are and how we work."],
  ["/projects", "Projects", "Client work, starting with our founding client."],
  ["/what-we-do", "What We Do", "AI software, the tools we build with, and how we work."],
  ["/contact", "Contact", "Book a meeting, message us, or send an email."],
];

export default function Home() {
  return (
    <>
      <section className={`${wrap} py-16 sm:py-36`}>
        <Label>Las Piñas, Metro Manila // Remote Worldwide</Label>
        <h1 className={`${display} mt-10 text-5xl sm:text-7xl lg:text-[6.5rem]`}>AI-native software and IT services.</h1>
        <p className="mt-10 max-w-2xl text-xl text-[#94A3B8] sm:text-2xl">
          We design, build, and run web apps, backends, and AI automations for SMEs and startups,
          with AI built into how we engineer, test, and deploy.
        </p>
        <div className="mt-12 flex flex-wrap gap-4">
          <a href={BOOKING_URL} className={btnPrimary}>Book a Meeting →</a>
          <a href={MESSENGER_URL} className={btnSecondary}>Message on Messenger</a>
          <a href={MAILTO} className={btnSecondary}>Email Us</a>
        </div>
      </section>

      <section className={`border-t ${rule}`}>
        <ul className={wrap}>
          {sections.map(([href, title, blurb]) => (
            <li key={href} className={`border-b ${rule} last:border-b-0`}>
              <Link href={href} className="group flex flex-wrap items-baseline justify-between gap-4 py-10">
                <span className="text-3xl font-semibold tracking-[-0.02em] group-hover:text-[#10B981] sm:text-4xl">
                  {title} →
                </span>
                <span className="text-[#94A3B8]">{blurb}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
