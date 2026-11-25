export default function LegalLayout({ children }: LayoutProps<"/">) {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-20 text-[#94A3B8] sm:px-10 [&_a]:text-[#10B981] [&_a]:underline [&_h1]:text-4xl [&_h1]:font-semibold [&_h1]:tracking-[-0.03em] [&_h1]:text-[#F8FAFC] [&_h2]:mt-12 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-[#F8FAFC] [&_li]:mt-2 [&_p]:mt-4 [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:pl-6">
      {children}
    </div>
  );
}
