import Link from "next/link";

// Change this one line when the custom domain is live.
export const SITE_URL = "https://olibyte.vercel.app";
export const TULAY_URL = "https://tulay-two.vercel.app/";
// TODO: replace with the real Facebook Page handle and inbox before launch.
export const MESSENGER_URL = "https://m.me/OliByteSoftwareAIServices";
export const EMAIL = "olibyte.systems@gmail.com";
export const MAILTO = `mailto:${EMAIL}?subject=${encodeURIComponent("New Project: OliByte")}`;
// shortcut: emails a meeting request; swap for a Cal.com or Calendly link once one exists.
export const BOOKING_URL = `mailto:${EMAIL}?subject=${encodeURIComponent("Meeting Request: OliByte")}`;

export const rule = "border-[#F8FAFC]/15";
export const mono = "font-mono uppercase tracking-[0.08em] tabular-nums";
export const wrap = "mx-auto w-full max-w-7xl px-6 sm:px-10";
export const display = "font-semibold tracking-[-0.04em] leading-[0.95]";
export const btnPrimary = "inline-block bg-[#10B981] px-7 py-4 font-semibold text-[#111827] hover:bg-[#F8FAFC]";
export const btnSecondary =
  "inline-block border border-[#F8FAFC]/30 px-7 py-4 text-[#F8FAFC] hover:border-[#F8FAFC]";

// 3×3 grid minus the center = 8 bits = 1 byte. Index 2 is top-right.
export function LogoMark({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 256 256" aria-hidden="true" className="max-w-full h-auto">
      {[0, 1, 2, 3, 5, 6, 7, 8].map((i) => (
        <rect
          key={i}
          x={(i % 3) * 92}
          y={Math.floor(i / 3) * 92}
          width="72"
          height="72"
          rx="12"
          fill={i === 2 ? "#10B981" : "#F8FAFC"}
        />
      ))}
    </svg>
  );
}

export function Label({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <p className={`${mono} text-xs text-[#94A3B8] ${className}`}>{children}</p>;
}


const navLinks = [
  ["/what-we-do", "What We Do"],
  ["/projects", "Projects & Clients"],
  ["/about", "About"],
  ["/contact", "Contact"],
];

export function SiteHeader() {
  return (
    <header className={`border-b ${rule} py-6`}>
      <div className={`${wrap} flex flex-wrap items-center justify-between gap-6`}>
        <Link href="/" className="flex items-center gap-4">
          <LogoMark />
          <span className="flex flex-col">
            <span className="text-2xl font-bold leading-none tracking-[-0.03em]">OliByte</span>
            <span className={`${mono} mt-1.5 text-[0.6rem] font-bold tracking-[0.18em] text-[#10B981]`}>
              Software &amp; AI Services
            </span>
          </span>
        </Link>
        <nav className={`${mono} -my-2.5 flex flex-wrap items-center gap-x-6 text-xs`}>
          {navLinks.map(([href, text]) => (
            <Link key={href} href={href} className="py-2.5 hover:text-[#10B981]">
              {text}
            </Link>
          ))}
          <a href={BOOKING_URL} className="py-2.5 text-[#10B981] hover:text-[#F8FAFC]">Book a Meeting →</a>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className={`border-t ${rule} py-6`}>
      <div className={`${wrap} ${mono} flex flex-wrap justify-between gap-4 text-xs text-[#94A3B8]`}>
        <p>© 2026 OliByte Software &amp; AI Services • Las Piñas, Metro Manila, Philippines</p>
        <nav className="-my-2.5 flex gap-6">
          <Link href="/privacy" className="py-2.5 hover:text-[#F8FAFC]">Privacy Policy</Link>
          <Link href="/terms" className="py-2.5 hover:text-[#F8FAFC]">Terms &amp; Conditions</Link>
        </nav>
      </div>
    </footer>
  );
}
