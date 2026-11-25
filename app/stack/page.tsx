import type { Metadata } from "next";
import { PageHead, mono, rule, wrap } from "../site";

export const metadata: Metadata = { title: "Stack" };

const stack = [
  ["FRONTEND & FULL-STACK", "Next.js (App Router), TypeScript, Tailwind CSS"],
  ["BACKEND & DATABASES", "Python, Node.js, Supabase, PostgreSQL, REST APIs & Webhooks"],
  ["CLOUD, DEVOPS & QA", "Render, Vercel, GitHub Actions, Playwright"],
  ["AI & INFERENCE", "LLM API Integrations, RAG / Vector Search, ONNX Runtime, OpenCV"],
];

export default function Stack() {
  return (
    <section className={`${wrap} py-28 sm:py-36`}>
      <PageHead label="Stack // Index" title="Technical Stack" />
      <dl className={`mt-16 border-t ${rule}`}>
        {stack.map(([k, v]) => (
          <div key={k} className={`grid gap-3 border-b ${rule} py-8 lg:grid-cols-[20rem_1fr]`}>
            <dt className={`${mono} text-xs text-[#10B981]`}>{k}</dt>
            <dd className="text-xl sm:text-2xl">{v}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
