import Image from "next/image";

const LOGO_URL = "https://i.imgur.com/mFubCKO.png";

export function Footer() {
  return (
    <footer className="bg-[#1C1917] text-[#A8A29E]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">

          {/* Logo + tagline */}
          <div>
            <Image
              src={LOGO_URL}
              alt="Living Waters — Mikvah Laurentian"
              width={200} height={66}
              className="h-12 sm:h-14 w-auto object-contain mb-4 brightness-0 invert"
              unoptimized
            />
            <p className="text-sm text-[#78716C] max-w-xs leading-relaxed">
              A sacred space for taharah, renewal, and generations of Jewish
              family life in the Laurentian community.
            </p>
          </div>

          {/* Nav links */}
          <div className="flex flex-col sm:flex-row gap-8 text-sm">
            <div>
              <p className="text-white mb-3 font-medium tracking-wide text-xs uppercase">Campaign</p>
              <ul className="space-y-2">
                {[
                  { label: "Vision",        href: "#vision" },
                  { label: "Heritage",      href: "#heritage" },
                  { label: "Our Story",     href: "/history" },
                  { label: "Dedications",   href: "#dedications" },
                  { label: "Wall of Honor", href: "#wall-of-honor" },
                ].map((item) => (
                  <li key={item.href}>
                    <a href={item.href} className="hover:text-[#B59A5A] transition-colors">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-white mb-3 font-medium tracking-wide text-xs uppercase">Contact</p>
              <ul className="space-y-2">
                <li>
                  <a
                    href="mailto:campaign@mikvahlaurentian.org"
                    className="hover:text-[#B59A5A] transition-colors"
                  >
                    campaign@mikvahlaurentian.org
                  </a>
                </li>
                <li className="text-[#78716C]">Laurentian Jewish Community</li>
                <li className="text-[#78716C]">Sainte-Agathe-des-Monts, QC</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[#2A2420] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#5A5248]">
          <p>© {new Date().getFullYear()} Mikvah Laurentian. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[#A8A29E] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#A8A29E] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
