// TODO: replace with the real Facebook Page handle and inbox before launch.
const MESSENGER_URL = "https://m.me/OliByteSoftwareAIServices";
const EMAIL = "hello@olibyte.dev";
const MAILTO = `mailto:${EMAIL}?subject=${encodeURIComponent("Project Scope — OliByte Sprint")}`;

const rule = "border-[#F8FAFC]/15";
const mono = "font-mono uppercase tracking-[0.08em] tabular-nums";

const services = [
  {
    code: "DIAG-01",
    title: "System Diagnostic",
    price: "$149",
    note: "flat",
    scope:
      "Full inspection of backend architecture, Supabase/PostgreSQL Row-Level Security (RLS), exposed API keys, and Render/Vercel deployment setup.",
    deliverable: "Prioritized bug and security fix report delivered within 48 hours.",
  },
  {
    code: "RPR-02",
    title: "Emergency Repair",
    price: "$399",
    note: "flat",
    badge: "MOST REQUESTED",
    scope:
      "Hands-on debugging to unblock stuck deployments, broken auth or webhooks, and tangled AI-generated codebases (Cursor, Lovable, Bolt).",
    deliverable: "Clean pull request merged + live production verification.",
  },
  {
    code: "QA-03",
    title: "Preventative Maintenance & QA",
    price: "$299",
    note: "flat",
    scope:
      "Automated Playwright end-to-end regression suite covering critical user flows, wired directly into GitHub Actions.",
    deliverable:
      "Automated CI safety net that catches breaking AI prompt edits before they hit production.",
  },
  {
    code: "AUTO-04",
    title: "Custom AI & Workflow Automations",
    price: "Scoped Flat-Rate",
    scope:
      "Smart booking/FAQ bots, webhook integrations, and internal tools built to replace manual spreadsheets and repetitive customer chats for local SMEs and startups.",
  },
];

const stack = [
  ["FRONTEND & FULL-STACK", "Next.js (App Router), TypeScript, Tailwind CSS"],
  ["BACKEND & DATABASES", "Python, Node.js, Supabase, PostgreSQL, REST APIs & Webhooks"],
  ["CLOUD, DEVOPS & QA", "Render, Vercel, GitHub Actions, Playwright"],
  ["AI & INFERENCE", "LLM API Integrations, RAG / Vector Search, ONNX Runtime, OpenCV"],
];

// 3×3 grid minus the center = 8 bits = 1 byte. Index 2 is top-right.
function LogoMark() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden="true">
      {[0, 1, 2, 3, 5, 6, 7, 8].map((i) => (
        <rect
          key={i}
          x={(i % 3) * 10}
          y={Math.floor(i / 3) * 10}
          width="8"
          height="8"
          rx="1.5"
          fill={i === 2 ? "#10B981" : "#F8FAFC"}
        />
      ))}
    </svg>
  );
}

function Label({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <p className={`${mono} text-xs text-[#94A3B8] ${className}`}>{children}</p>;
}

const wrap = "mx-auto w-full max-w-7xl px-6 sm:px-10";
const display = "font-semibold tracking-[-0.04em] leading-[0.95]";
const btnPrimary = "inline-block bg-[#10B981] px-7 py-4 font-semibold text-[#111827] hover:bg-[#F8FAFC]";
const btnSecondary =
  "inline-block border border-[#F8FAFC]/30 px-7 py-4 text-[#F8FAFC] hover:border-[#F8FAFC]";

export default function Home() {
  return (
    <>
      <header className={`border-b ${rule} py-6`}>
        <div className={`${wrap} flex items-center justify-between gap-6`}>
          <a href="#" className="flex items-center gap-3">
            <LogoMark />
            <span className="text-xl font-bold tracking-[-0.02em]">OliByte</span>
            <span className={`${mono} hidden text-[0.65rem] text-[#94A3B8] sm:inline`}>
              Software &amp; AI Services
            </span>
          </a>
          <nav className={`${mono} flex gap-6 text-xs`}>
            <a href="#services" className="hover:text-[#10B981]">Services ↓</a>
            <a href={MESSENGER_URL} className="text-[#10B981] hover:text-[#F8FAFC]">Book Sprint →</a>
          </nav>
        </div>
      </header>

      <main>
        <section className={`${wrap} py-28 sm:py-36`}>
          <Label>Las Piñas, Metro Manila // Remote Worldwide — Weekend Engineering Sprints</Label>
          <h1 className={`${display} mt-10 text-5xl sm:text-7xl lg:text-[6.5rem]`}>We fix what AI broke.</h1>
          <p className="mt-10 max-w-2xl text-xl text-[#94A3B8] sm:text-2xl">
            Production backend rescues, security hardening, automated regression QA, and practical
            workflow automations—delivered on predictable, flat-rate weekend sprints.
          </p>
          <div className="mt-12 flex flex-wrap gap-4">
            <a href={MESSENGER_URL} className={btnPrimary}>Message on Messenger</a>
            <a href={MAILTO} className={btnSecondary}>Email Project Scope</a>
          </div>
        </section>

        <section id="services" className={`border-t ${rule} py-28 sm:py-36`}>
          <div className={wrap}>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <h2 className={`${display} text-4xl sm:text-6xl`}>Flat-Rate Services</h2>
              <Label>[Fixed Scope // No Hourly Bloat]</Label>
            </div>
            <ol className={`mt-16 border-t ${rule}`}>
              {services.map((s) => (
                <li
                  key={s.code}
                  className={`grid gap-6 border-b ${rule} py-12 lg:grid-cols-[10rem_1fr_16rem] lg:gap-10`}
                >
                  <p className={`${mono} text-sm text-[#10B981]`}>[{s.code}]</p>
                  <div>
                    <h3 className="text-2xl font-semibold tracking-[-0.02em] sm:text-3xl">
                      {s.title}
                      {s.badge && (
                        <span className={`${mono} ml-4 inline-block border border-[#10B981] px-2 py-1 align-middle text-[0.65rem] text-[#10B981]`}>
                          {s.badge}
                        </span>
                      )}
                    </h3>
                    <dl className="mt-6 max-w-2xl space-y-4 text-[#94A3B8]">
                      <div>
                        <dt className={`${mono} text-xs text-[#F8FAFC]`}>Scope</dt>
                        <dd className="mt-1">{s.scope}</dd>
                      </div>
                      {s.deliverable && (
                        <div>
                          <dt className={`${mono} text-xs text-[#F8FAFC]`}>Deliverable</dt>
                          <dd className="mt-1">{s.deliverable}</dd>
                        </div>
                      )}
                    </dl>
                  </div>
                  <p className="lg:text-right">
                    <span className={`${mono} block ${s.note ? "text-5xl sm:text-6xl" : "text-2xl"} font-semibold tracking-[-0.02em]`}>
                      {s.price}
                    </span>
                    {s.note && <span className={`${mono} mt-2 block text-xs text-[#94A3B8]`}>{s.note}</span>}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className={`border-t ${rule} py-28 sm:py-36`}>
          <div className={wrap}>
            <Label>Field Log // 001</Label>
            <h2 className={`${display} mt-8 max-w-4xl text-4xl sm:text-6xl`}>Founding Client Spotlight: Tulay</h2>
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
            {/* TODO: replace with the founder's 2-sentence quote and audit outcome. */}
            <figure className={`mt-16 border-l-2 border-[#10B981] pl-8 sm:pl-12`}>
              <blockquote className="max-w-4xl text-2xl leading-snug tracking-[-0.02em] sm:text-4xl">
                “Founder quote coming soon. Audit outcome to be published once the engagement closes.”
              </blockquote>
              <figcaption className={`${mono} mt-8 text-xs text-[#94A3B8]`}>— Founder, Tulay</figcaption>
            </figure>
          </div>
        </section>

        <section className={`border-t ${rule} py-28 sm:py-36`}>
          <div className={wrap}>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <h2 className={`${display} text-4xl sm:text-6xl`}>Technical Stack</h2>
              <Label>[Index]</Label>
            </div>
            <dl className={`mt-16 border-t ${rule}`}>
              {stack.map(([k, v]) => (
                <div key={k} className={`grid gap-3 border-b ${rule} py-8 lg:grid-cols-[20rem_1fr]`}>
                  <dt className={`${mono} text-xs text-[#10B981]`}>{k}</dt>
                  <dd className="text-xl sm:text-2xl">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      </main>

      <footer className={`border-t ${rule}`}>
        <div className={`${wrap} py-28 sm:py-36`}>
          <p className={`${display} max-w-5xl text-4xl sm:text-6xl`}>
            Stuck deployment or manual bottleneck? Let’s fix it this weekend.
          </p>
          <div className="mt-14 flex flex-wrap gap-4">
            <a href={MESSENGER_URL} className={btnPrimary}>Facebook Messenger →</a>
            <a href={MAILTO} className={btnSecondary}>{EMAIL}</a>
          </div>
          <p className={`${mono} mt-6 text-xs text-[#94A3B8]`}>Messenger: OliByte Software &amp; AI Services</p>
        </div>
        <div className={`border-t ${rule} py-6`}>
          <p className={`${wrap} ${mono} text-[0.65rem] text-[#94A3B8]`}>
            OliByte Software &amp; AI Systems • Las Piñas, Metro Manila, Philippines
          </p>
        </div>
      </footer>
    </>
  );
}
