"use client";

import Link from "next/link";
import { useActionState, useState } from "react";
import { sendContact, type ContactState } from "./actions";

const field =
  "w-full bg-[#F8FAFC] px-4 py-4 text-[#111827] placeholder:text-[#64748B] focus:outline-2 focus:outline-offset-2 focus:outline-[#10B981]";

export function ContactForm() {
  const [state, action, pending] = useActionState<ContactState, FormData>(sendContact, {});
  const [fileName, setFileName] = useState("");
  const v = state.values;

  if (state.ok)
    return (
      <div role="status" className="border-l-2 border-[#10B981] pl-6">
        <p className="text-2xl font-semibold">Thanks, your message is in.</p>
        <p className="mt-3 text-[#94A3B8]">We’ll reply to the email address you gave us.</p>
      </div>
    );

  return (
    <form action={action} className="space-y-5">
      <input name="name" required maxLength={120} placeholder="Your name *" aria-label="Your name" autoComplete="name" defaultValue={v?.name} className={field} />
      <div className="grid gap-5 sm:grid-cols-2">
        <input name="email" type="email" required maxLength={200} placeholder="Your email *" aria-label="Your email" autoComplete="email" defaultValue={v?.email} className={field} />
        <input name="phone" type="tel" required maxLength={40} placeholder="Your contact no. *" aria-label="Your contact number" autoComplete="tel" defaultValue={v?.phone} className={field} />
      </div>
      <textarea name="message" required maxLength={5000} rows={5} placeholder="How can we help you? *" aria-label="How can we help you?" defaultValue={v?.message} className={field} />

      <div>
        <label className="relative flex cursor-pointer items-center justify-center gap-2 border-2 border-dashed border-[#F8FAFC]/40 px-4 py-6 text-center hover:border-[#10B981] focus-within:border-[#10B981]">
          <span aria-hidden="true">↑</span>
          <span>
            {fileName || (
              <>
                <span className="font-semibold underline">Choose a file</span> or drag it here (max 4 MB)
              </>
            )}
          </span>
          {/* Stretched over the box so dropping a file onto it works natively. */}
          <input
            name="file"
            type="file"
            accept=".pdf,.doc,.docx"
            aria-label="Attach a file (optional)"
            onChange={(e) => setFileName(e.target.files?.[0]?.name ?? "")}
            className="absolute inset-0 cursor-pointer opacity-0"
          />
        </label>
        <p className="mt-2 text-xs text-[#94A3B8]">Optional. Only PDF and Word files are accepted.</p>
      </div>

      {/* Honeypot for bots; hidden from people and screen readers. */}
      <input name="company_website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

      <label className="flex items-start gap-3 text-sm text-[#94A3B8]">
        <input name="consent" type="checkbox" required className="mt-0.5 size-5 shrink-0 accent-[#10B981]" />
        <span>
          I agree to OliByte’s{" "}
          <Link href="/privacy" target="_blank" className="text-[#F8FAFC] underline">Privacy Policy</Link> and{" "}
          <Link href="/terms" target="_blank" className="text-[#F8FAFC] underline">Terms &amp; Conditions</Link>. *
        </span>
      </label>

      {state.error && (
        <p role="alert" className="text-sm text-[#F87171]">{state.error}</p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="w-full bg-[#10B981] px-7 py-4 font-semibold text-[#111827] hover:bg-[#F8FAFC] disabled:opacity-60"
      >
        {pending ? "Sending…" : "Submit"}
      </button>
    </form>
  );
}
