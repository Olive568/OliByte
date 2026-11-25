import type { Metadata } from "next";
import { BOOKING_URL, EMAIL, MAILTO, MESSENGER_URL, display, mono, wrap } from "../site";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = { title: "Contact" };

const link = "text-[#F8FAFC] underline hover:text-[#10B981]";

export default function Contact() {
  return (
    <section className={`${wrap} grid gap-16 py-16 sm:py-36 lg:grid-cols-[2fr_3fr] lg:gap-20`}>
      <div>
        <h1 className={`${display} text-4xl sm:text-5xl`}>
          Have a product to build or a process to automate? Let’s talk.
        </h1>
        <p className="mt-8 text-lg text-[#94A3B8]">
          Tell us what you need and we’ll get back to you by email. We work with SMEs and startups in
          the Philippines and remotely worldwide.
        </p>
        <ul className={`${mono} mt-12 space-y-6 text-xs text-[#94A3B8]`}>
          <li>Prefer to talk? <a href={BOOKING_URL} className={link}>Book a meeting</a></li>
          <li>Message us on <a href={MESSENGER_URL} className={link}>Facebook Messenger</a></li>
          <li>Email <a href={MAILTO} className={`${link} normal-case`}>{EMAIL}</a></li>
        </ul>
      </div>
      <ContactForm />
    </section>
  );
}
