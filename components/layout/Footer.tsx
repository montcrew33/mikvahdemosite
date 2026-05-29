import Image from "next/image";

const LOGO_URL = "https://i.imgur.com/mFubCKO.png";

export function Footer() {
  return (
    <footer className="bg-[#1A2B38] text-[#A0B0BC]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">

          {/* Logo + tagline */}
          <div>
            <Image
              src={LOGO_URL}
              alt="Living Waters — Mikvah Laurentian"
              width={200}
              height={66}
              className="h-14 w-auto object-contain mb-4 brightness-0 invert"
              unoptimized
            />
            <p className="text-sm text-[#7A9AA8] max-w-xs leading-relaxed">
              A sacred space for taharah, renewal, and generations of Jewish family life in the Laurentian community.
            </p>
          </div>

          {/* Nav links */}
          <div className="flex flex-col sm:flex-row gap-8 text-sm">
            <div>
              <p className="text-white mb-3 font-medium tracking-wide">Campaign</p>
              <ul className="space-y-2">
                {["#vision", "#campaign", "#dedications", "#wall-of-honor", "#updates"].map((href) => (
                  <li key={href}>
                    <a href={href} className="hover:text-[#5BC8C8] transition-colors capitalize">
                      {href.replace("#", "").replace(/-/g, " ")}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-white mb-3 font-medium tracking-wide">Contact</p>
              <ul className="space-y-2">
                <li>
                  <a href="mailto:campaign@mikvahlaurentian.org" className="hover:text-[#5BC8C8] transition-colors">
                    campaign@mikvahlaurentian.org
                  </a>
                </li>
                <li className="text-[#7A9AA8]">Laurentian Jewish Community</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[#2A4A58] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#5A7080]">
          <p>© {new Date().getFullYear()} Mikvah Laurentian. All rights reserved.</p>
          <p className="font-serif italic text-[#4A7080]">"מי חנה — Living Waters"</p>
        </div>
      </div>
    </footer>
  );
}
