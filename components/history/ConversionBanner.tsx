export function ConversionBanner() {
  return (
    <section
      aria-label="Invitation to join the campaign"
      className="py-20 lg:py-28"
      style={{ background: "#FAF7F2", borderTop: "1px solid #DDD8CF" }}
    >
      <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">

        {/* Ornament */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-12 bg-[#B59A5A]/45" />
          <span className="text-[#B59A5A]" aria-hidden="true">✦</span>
          <div className="h-px w-12 bg-[#B59A5A]/45" />
        </div>

        {/* Headline */}
        <p className="text-[10px] tracking-[0.28em] uppercase text-[#B59A5A] font-sans font-medium mb-5">
          Join the Campaign
        </p>

        <h2
          className="font-serif text-[#1C1917] leading-[1.18] mb-6"
          style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
        >
          You are the next chapter
          <br />
          of this living history.
        </h2>

        <p className="text-[#78716C] leading-relaxed max-w-xl mx-auto mb-10 text-[1.05rem]">
          Three thousand years of unbroken tradition have led to this moment,
          in these mountains, for this community. Mikvah Laurentian needs you
          to write the next line.
        </p>

        {/* Primary CTA */}
        <a
          href="/"
          className="inline-flex items-center gap-2 px-8 py-4 bg-[#1C1917] text-[#FCFBF8] font-semibold text-sm tracking-wide hover:bg-[#3D3830] transition-colors"
        >
          View Dedication Opportunities
          <span aria-hidden="true">→</span>
        </a>

        {/* Secondary link */}
        <div className="mt-6">
          <a
            href="/"
            className="text-sm text-[#A8A29E] hover:text-[#78716C] transition-colors underline underline-offset-4"
          >
            ← Return to Mikvah Laurentian
          </a>
        </div>

      </div>
    </section>
  );
}
