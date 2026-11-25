import type { Metadata } from "next";
import { PageHead, TULAY_URL, btnSecondary, mono, rule, wrap } from "../site";

export const metadata: Metadata = { title: "Projects & Clients" };

export default function Projects() {
  return (
    <section className={`${wrap} py-16 sm:py-36`}>
      <PageHead title="Founding Client Spotlight: Tulay" />
      <p className="mt-8 max-w-2xl text-xl text-[#94A3B8]">
        Tulay is a B2B marketplace for the Philippines that connects business buyers with verified suppliers.
        Buyers browse products, post requests for quotes, and compare offers in one place.
      </p>
      <a href={TULAY_URL} target="_blank" rel="noopener noreferrer" className={`${btnSecondary} mt-10`}>
        Visit Tulay ↗
      </a>
      <dl className={`mt-16 grid border-y ${rule} sm:grid-cols-3`}>
        {[
          ["Client", "Tulay"],
          ["Engagement", "Backend & Deployment Audit"],
          ["Status", "Active"],
        ].map(([k, v], i) => (
          <div key={k} className={`py-6 sm:px-6 ${i > 0 ? `border-t sm:border-t-0 sm:border-l ${rule}` : "sm:pl-0"}`}>
            <dt className={`${mono} text-xs text-[#94A3B8]`}>{k}</dt>
            <dd className={`${mono} mt-2 text-sm ${k === "Status" ? "text-[#10B981]" : ""}`}>
              {k === "Status" && "● "}
              {v}
            </dd>
          </div>
        ))}
      </dl>
      {/* TODO: add the founder's 2-sentence quote and audit outcome once the engagement closes. */}
    </section>
  );
}
