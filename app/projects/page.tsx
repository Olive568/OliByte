import type { Metadata } from "next";
import Image from "next/image";
import { TULAY_URL, btnSecondary, display, mono, rule, wrap } from "../site";

export const metadata: Metadata = {
  title: "Projects & Clients: Tulay B2B Marketplace",
  description:
    "OliByte builds and runs Tulay, a Philippine B2B marketplace connecting business buyers with verified suppliers: frontend, backend, and deployment.",
};

export default function Projects() {
  return (
    <section className={`${wrap} py-16 sm:py-36`}>
      <Image src="/tulay-logo.png" alt="Tulay" width={299} height={71} priority />
      <h1 className={`${display} mt-10 max-w-4xl text-4xl sm:text-5xl`}>
        Tulay: a B2B marketplace for the Philippines
      </h1>
      <p className="mt-8 max-w-2xl text-xl text-[#94A3B8]">
        Tulay connects business buyers with verified suppliers. Buyers browse products, post requests for quotes,
        and compare offers in one place. OliByte builds and runs the whole platform: frontend, backend, and
        deployment.
      </p>
      <a href={TULAY_URL} target="_blank" rel="noopener noreferrer" className={`${btnSecondary} mt-10`}>
        Visit Tulay ↗
      </a>
      <dl className={`mt-16 grid border-y ${rule} sm:grid-cols-3`}>
        {[
          ["Client", "Tulay"],
          ["Engagement", "Full build: frontend, backend & deployment"],
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
      {/* TODO: add the founder's 2-sentence quote and key results. */}
    </section>
  );
}
