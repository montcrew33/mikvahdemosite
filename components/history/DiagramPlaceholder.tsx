/*
 * DIAGRAM PLACEHOLDER
 *
 * This wide figure is designed to hold an elegant line-art architectural
 * rendering of a historical bor (rainwater catchment system) and mikvah pool.
 *
 * Recommended asset: a detailed cross-section illustration showing:
 *   — the bor (sealed rainwater reservoir) on the left
 *   — the hashaka connection pipe
 *   — the main mikvah pool with steps
 *   — water level indicators and dimensions
 *   — rendered in warm charcoal line-art on cream/linen background
 *
 * Replace the placeholder contents with an <Image> or <img> tag when ready.
 */

export function DiagramPlaceholder() {
  return (
    <figure
      className="my-0 py-12 lg:py-16"
      style={{ background: "#F5F3EE", borderTop: "1px solid #DDD8CF", borderBottom: "1px solid #DDD8CF" }}
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-10">

        {/* Caption label */}
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px w-6 bg-[#B59A5A]" />
          <p className="text-[10px] tracking-[0.28em] uppercase text-[#B59A5A] font-sans font-medium">
            Historical Reference
          </p>
        </div>

        {/* Placeholder frame */}
        <div
          className="w-full flex flex-col items-center justify-center"
          style={{
            aspectRatio: "16/7",
            background: "#FCFBF8",
            border: "1px solid #DDD8CF",
          }}
        >
          {/* Simulated line-art diagram using SVG shapes */}
          <svg
            viewBox="0 0 800 350"
            className="w-full h-full max-h-[420px]"
            style={{ opacity: 0.38 }}
            aria-label="Architectural cross-section of a traditional mikvah and bor system"
          >
            {/* Ground line */}
            <line x1="40" y1="90" x2="760" y2="90" stroke="#1C1917" strokeWidth="1.5" />

            {/* Bor — left reservoir */}
            <rect x="80" y="90" width="180" height="210" fill="none" stroke="#1C1917" strokeWidth="1.2" strokeDasharray="4 3" />
            <text x="170" y="200" textAnchor="middle" fontFamily="Georgia, serif" fontSize="13" fill="#1C1917">בּוֹר</text>
            <text x="170" y="220" textAnchor="middle" fontFamily="Georgia, serif" fontSize="10" fill="#78716C">Bor — Rainwater</text>
            <text x="170" y="234" textAnchor="middle" fontFamily="Georgia, serif" fontSize="10" fill="#78716C">Reservoir</text>

            {/* Water level in bor */}
            <rect x="80" y="165" width="180" height="135" fill="#DDD8CF" opacity="0.4" />

            {/* Hashaka pipe */}
            <rect x="260" y="225" width="80" height="12" fill="none" stroke="#1C1917" strokeWidth="1" />
            <text x="300" y="254" textAnchor="middle" fontFamily="Georgia, serif" fontSize="9" fill="#78716C">Hashaka</text>

            {/* Main Mikvah pool */}
            <rect x="340" y="90" width="260" height="240" fill="none" stroke="#1C1917" strokeWidth="1.5" />

            {/* Steps descending */}
            <line x1="340" y1="180" x2="395" y2="180" stroke="#1C1917" strokeWidth="1" />
            <line x1="340" y1="205" x2="415" y2="205" stroke="#1C1917" strokeWidth="1" />
            <line x1="340" y1="230" x2="435" y2="230" stroke="#1C1917" strokeWidth="1" />
            <line x1="395" y1="180" x2="395" y2="205" stroke="#1C1917" strokeWidth="1" />
            <line x1="415" y1="205" x2="415" y2="230" stroke="#1C1917" strokeWidth="1" />
            <line x1="435" y1="230" x2="435" y2="330" stroke="#1C1917" strokeWidth="1" />

            {/* Water in main pool */}
            <rect x="340" y="200" width="260" height="130" fill="#DDD8CF" opacity="0.35" />

            <text x="470" y="270" textAnchor="middle" fontFamily="Georgia, serif" fontSize="13" fill="#1C1917">מִקְוֶה</text>
            <text x="470" y="290" textAnchor="middle" fontFamily="Georgia, serif" fontSize="10" fill="#78716C">Main Pool</text>
            <text x="470" y="306" textAnchor="middle" fontFamily="Georgia, serif" fontSize="10" fill="#78716C">40 Se&apos;ah minimum</text>

            {/* Rain indicators */}
            <text x="170" y="68" textAnchor="middle" fontFamily="Georgia, serif" fontSize="10" fill="#78716C">↓ Rainwater</text>
            <text x="470" y="68" textAnchor="middle" fontFamily="Georgia, serif" fontSize="10" fill="#78716C">↓ Spring Connection</text>

            {/* Dimension arrow */}
            <line x1="620" y1="90" x2="620" y2="330" stroke="#B59A5A" strokeWidth="0.8" markerEnd="url(#arrow)" />
            <text x="650" y="215" fontFamily="Georgia, serif" fontSize="10" fill="#B59A5A">≥ 40</text>
            <text x="650" y="228" fontFamily="Georgia, serif" fontSize="10" fill="#B59A5A">Se&apos;ah</text>

            {/* Person silhouette (simplified) */}
            <ellipse cx="500" cy="148" rx="14" ry="14" fill="none" stroke="#1C1917" strokeWidth="1" opacity="0.5" />
            <line x1="500" y1="162" x2="500" y2="195" stroke="#1C1917" strokeWidth="1" opacity="0.5" />
            <line x1="476" y1="178" x2="524" y2="178" stroke="#1C1917" strokeWidth="1" opacity="0.5" />
            <line x1="500" y1="195" x2="484" y2="218" stroke="#1C1917" strokeWidth="1" opacity="0.5" />
            <line x1="500" y1="195" x2="516" y2="218" stroke="#1C1917" strokeWidth="1" opacity="0.5" />
          </svg>
        </div>

        {/* Figcaption */}
        <figcaption className="mt-4 text-center">
          <p className="text-xs text-[#A8A29E] font-sans italic">
            Cross-section of a traditional <em>bor</em> and mikvah pool system — the foundational
            architecture of ritual purity used continuously since the Second Temple period.
          </p>
          <p className="text-[10px] text-[#C4BFB8] mt-1 tracking-wide uppercase font-sans">
            Line-art diagram — replace with commissioned architectural illustration
          </p>
        </figcaption>

      </div>
    </figure>
  );
}
