import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HistoryHero } from "@/components/history/HistoryHero";
import { DiagramPlaceholder } from "@/components/history/DiagramPlaceholder";
import { PullQuote } from "@/components/history/PullQuote";
import { ConversionBanner } from "@/components/history/ConversionBanner";

export const metadata: Metadata = {
  title: "The Enduring Legacy of the Mikvah | Mikvah Laurentian",
  description:
    "A deep-dive into the ancient origins of the mikvah — from its Biblical roots in Living Waters (Mayim Chayyim) to its role as the foundational institution of every Jewish community, including the Sainte-Agathe Jewish Community.",
  keywords: [
    "history of the mikvah",
    "mikvah antiquity",
    "Living Waters Mayim Chayyim",
    "Taharah history",
    "Family Purity tradition",
    "Laurentians Mikvah heritage",
    "Sainte-Agathe Jewish Community",
    "mikvah halacha",
  ],
  openGraph: {
    title: "The Enduring Legacy of the Mikvah",
    description:
      "An editorial history of the mikvah — from ancient rainwater catchment systems to the living, breathing heart of the Jewish community.",
    locale: "en_CA",
    type: "article",
  },
};

export default function HistoryPage() {
  return (
    <>
      <Header />

      <main className="bg-[#FCFBF8]">
        <article>

          {/* ── 1. CINEMAGRAPH HERO ── */}
          <HistoryHero />

          {/* ── 2. EDITORIAL READING COLUMN ── */}
          <div className="max-w-3xl mx-auto px-6 lg:px-8 py-16 lg:py-24">

            {/* Opening eyebrow */}
            <div className="flex items-center gap-3 mb-10">
              <div className="h-px w-8 bg-[#B59A5A]" />
              <p className="text-[10px] tracking-[0.28em] uppercase text-[#B59A5A] font-sans font-medium">
                A Living Tradition
              </p>
            </div>

            {/* ── OPENING PARAGRAPH with Drop Cap ── */}
            <p
              className="text-[#3D3830] leading-[1.9] text-[1.08rem]"
              style={{ marginBottom: "2rem" }}
            >
              {/* Drop cap: the first letter floats left as an oversized serif initial */}
              <span
                aria-hidden="true"
                className="float-left font-serif text-[#1C1917] leading-[0.78] pr-2 select-none"
                style={{ fontSize: "5.2rem", fontWeight: 500, marginTop: "0.12em" }}
              >
                T
              </span>
              he mikvah — from the Hebrew{" "}
              <span className="font-serif italic">מִקְוֶה</span>, meaning{" "}
              <em>&ldquo;a gathering of waters&rdquo;</em> — stands as one of the
              oldest continuously observed rituals in all of human civilization.
              For more than three thousand years, across every continent where
              Jews have lived, the mikvah has been built first: before the
              synagogue, before the Torah scroll, before the communal hall.
              It is not an amenity of Jewish life. It is the root from which all
              other Jewish life grows.
            </p>

            <p className="text-[#78716C] leading-[1.9] text-[1.05rem] mb-10 clear-both">
              To understand the mikvah is to understand something fundamental
              about how Judaism conceives of the human body, of time, of purity
              and renewal, and of the sacred relationship between husband and
              wife. It is a story that begins not in a synagogue but in the
              natural world itself — in rain, in rivers, in the sea.
            </p>

            {/* ── SECTION 1 ── */}
            <h2 className="font-serif text-[2rem] lg:text-[2.4rem] text-[#1C1917] leading-snug mt-14 mb-6">
              Ancient Roots in Antiquity
            </h2>

            <div className="w-8 h-px bg-[#DDD8CF] mb-8" />

            <p className="text-[#78716C] leading-[1.9] text-[1.05rem] mb-6">
              Archaeological excavations throughout the Land of Israel have
              uncovered more than three hundred mikvaot dating to the Second
              Temple period — roughly the first century BCE through the first
              century CE. These were not improvised pools. They were precisely
              engineered structures, carved into bedrock, following exact
              specifications that halachic literature would later codify:
              a minimum volume of forty <em>se&apos;ah</em> of water, a specific
              inlet design, and in many cases a connected <em>bor</em> —
              a sealed reservoir holding a reserve of rainwater.
            </p>

            <p className="text-[#78716C] leading-[1.9] text-[1.05rem] mb-6">
              Mikvaot have been found at Masada, at Jericho, beneath the
              southern steps of the Temple Mount itself. The Bar Kokhba letters,
              written in the second century CE amid the desperate conditions of
              the Jewish revolt, include a request for water to be prepared for
              purification. Even in the extremity of war, the mikvah was not
              abandoned. It was, if anything, the thing most carefully preserved.
            </p>

            <p className="text-[#78716C] leading-[1.9] text-[1.05rem]">
              When Rome destroyed the Temple in 70 CE and scattered the Jewish
              people, the entire sacrificial system of priestly purity fell
              silent. But the mikvah endured. Wherever Jews settled — Babylon,
              Spain, Poland, Yemen, the shtetls of Eastern Europe, the new
              cities of North America — the first communal act was always the
              same: they built a mikvah.
            </p>

          </div>{/* end reading column, section 1 */}

          {/* ── WIDE DIAGRAM PLACEHOLDER (breaks out of reading column) ── */}
          <DiagramPlaceholder />

          {/* ── READING COLUMN continued ── */}
          <div className="max-w-3xl mx-auto px-6 lg:px-8 pb-16 lg:pb-24">

            {/* ── SECTION 2 ── */}
            <h2 className="font-serif text-[2rem] lg:text-[2.4rem] text-[#1C1917] leading-snug mt-14 mb-6">
              The Concept of Living Waters
            </h2>

            <div className="w-8 h-px bg-[#DDD8CF] mb-8" />

            <p className="text-[#78716C] leading-[1.9] text-[1.05rem] mb-6">
              The Torah uses a specific phrase to describe the water required
              for certain forms of purification:{" "}
              <span className="font-serif italic text-[#3D3830]">mayim chayyim</span>{" "}
              — <em>living waters</em>. Not still water. Not water drawn from a
              cistern or poured from a vessel by human hands. Living water:
              water connected to its source, water that has not been severed
              from the earth that bore it.
            </p>

            <p className="text-[#78716C] leading-[1.9] text-[1.05rem] mb-6">
              A spring is living. Rainwater that falls directly into a vessel
              is living. A river fed by mountain snowmelt is living. The ocean
              is living. What they share is an unbroken chain from sky to earth
              to pool — a continuity between the water and its origin in creation.
              When a person descends into such water, they are touching something
              older than any human institution. They are touching the elemental
              world as it was on the third day of creation, when the waters were
              gathered together.
            </p>

            {/* ── PULL QUOTE ── */}
            <PullQuote>
              Before there is a sanctuary for prayer, there must be a sanctuary
              for the soul. The mikvah is Judaism&rsquo;s oldest house of
              worship — and its waters have never stopped flowing.
            </PullQuote>

            <p className="text-[#78716C] leading-[1.9] text-[1.05rem] mb-6">
              This is why the technical requirements of a mikvah are not
              bureaucratic hurdles but a theological statement. The minimum
              forty <em>se&apos;ah</em> — approximately two hundred gallons — must
              be comprised of water that qualifies as <em>mayim chayyim</em>,
              or drawn rainwater, or a combination thereof carefully governed
              by the connected <em>bor</em> system. It must be large enough
              for a person to immerse completely, with nothing interposing
              between skin and water.
            </p>

            <p className="text-[#78716C] leading-[1.9] text-[1.05rem]">
              The immersion itself takes only a moment. A woman descends the
              steps, speaks a blessing, and submerges entirely — every strand
              of hair, every fingertip. For that single suspended instant,
              she is held by the same waters that held the world at its beginning.
              She emerges renewed: not merely clean, but transformed. The
              rabbis compare immersion to birth itself — one emerges from
              the waters into a new state of being.
            </p>

            {/* ── SECTION 3 ── */}
            <h2 className="font-serif text-[2rem] lg:text-[2.4rem] text-[#1C1917] leading-snug mt-16 mb-6">
              The Foundation of the Community
            </h2>

            <div className="w-8 h-px bg-[#DDD8CF] mb-8" />

            <p className="text-[#78716C] leading-[1.9] text-[1.05rem] mb-6">
              Halachic literature is unambiguous on the question of priority.
              A community that needs both a synagogue and a mikvah is required
              to build the mikvah first. If the community must choose between
              selling a Torah scroll and building a mikvah, and if the purpose
              of the sale is the mikvah, the sale is permitted. The mikvah
              outranks the synagogue. It outranks the Torah scroll. In the
              hierarchy of Jewish communal needs, nothing comes before it.
            </p>

            <p className="text-[#78716C] leading-[1.9] text-[1.05rem] mb-6">
              This halachic priority is not an accident of law. It reflects a
              deep understanding of how Jewish continuity actually works. The
              synagogue is where Jews pray together. The Torah scroll is where
              they encounter the divine word together. But the mikvah is where
              the Jewish marriage is renewed — where the rhythms of intimacy
              and separation, of distance and return, are given sacred structure.
              Without this structure, the foundation weakens. With it, every
              marriage carries within it a kind of built-in renewal, a recurring
              invitation to return to each other as if for the first time.
            </p>

            <p className="text-[#78716C] leading-[1.9] text-[1.05rem] mb-6">
              The Sainte-Agathe Jewish Community understands this. In a
              region with a growing, committed Jewish population — people who
              have chosen to build their lives here, in the beauty of the
              Laurentians — the absence of a mikvah is not merely an
              inconvenience. It is a gap at the very center of communal
              possibility. Mikvah Laurentian exists to close that gap.
            </p>

            <p className="text-[#78716C] leading-[1.9] text-[1.05rem]">
              We are building a mikvah worthy of this history. Worthy of the
              three thousand years of women and men who preserved this practice
              through exile, through poverty, through persecution, through
              everything the world could throw at a small and stubborn people.
              What they built in caves and basements and borrowed buildings,
              we will build with stone and care and the full investment of a
              community that intends to be here for a very long time.
            </p>

            {/* Closing ornament */}
            <div className="flex items-center gap-4 mt-14">
              <div className="h-px flex-1 bg-[#DDD8CF]" />
              <span className="text-[#B59A5A] text-sm" aria-hidden>✦</span>
              <div className="h-px flex-1 bg-[#DDD8CF]" />
            </div>

          </div>{/* end reading column */}

          {/* ── CONVERSION BANNER ── */}
          <ConversionBanner />

        </article>
      </main>

      <Footer />
    </>
  );
}
