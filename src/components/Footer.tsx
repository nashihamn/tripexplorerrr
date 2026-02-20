import { MapPin, Instagram, Facebook, Youtube, Mail, Phone, Navigation } from "lucide-react";

const footerLinks = {
  "Destinasi": [
    { label: "Bromo Sunrise", href: "/paket/bromo-sunrise-2d1n" },
    { label: "Kawah Ijen", href: "/paket/banyuwangi-ijen-3d2n" },
    { label: "Jogja Heritage", href: "/paket/jogja-heritage-2d1n" },
    { label: "Labuan Bajo", href: "/paket/labuan-bajo-premium-4d3n" },
    { label: "Bali Ubud", href: "/paket/bali-ubud-escape-3d2n" },
  ],
  "Layanan": [
    { label: "Paket Wisata", href: "#paket" },
    { label: "Galeri Foto", href: "#galeri" },
    { label: "Blog", href: "#blog" },
    { label: "FAQ", href: "#faq" },
    { label: "Hubungi Kami", href: "#" },
  ],
  "Informasi": [
    { label: "Tentang Kami", href: "#" },
    { label: "Kebijakan Privasi", href: "#" },
    { label: "Syarat & Ketentuan", href: "#" },
    { label: "Kebijakan Refund", href: "#" },
  ],
};

const socials = [
  { icon: Instagram, label: "Instagram", href: "https://instagram.com" },
  { icon: Facebook, label: "Facebook", href: "https://facebook.com" },
  { icon: Youtube, label: "YouTube", href: "https://youtube.com" },
  {
    icon: () => (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15.3a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.86 4.86 0 0 1-1.02-.07z" />
      </svg>
    ),
    label: "TikTok",
    href: "https://tiktok.com",
  },
];

export default function Footer() {
  return (
    <footer className="bg-foreground text-background/80 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl gradient-primary flex items-center justify-center">
                <MapPin className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <div>
                <div className="font-extrabold text-lg text-white leading-none">
                  Nusantara Trip
                </div>
                <div className="text-xs text-primary-light font-semibold tracking-widest uppercase">
                  Explore Indonesia
                </div>
              </div>
            </div>

            <p className="text-background/60 text-sm leading-relaxed mb-5 max-w-xs">
              Platform perjalanan terpercaya untuk menjelajahi keindahan alam dan budaya
              Nusantara dengan nyaman, aman, dan berkesan.
            </p>

            {/* Contact Info */}
            <div className="space-y-2 text-sm mb-5">
              <a
                href="tel:+6281234567890"
                className="flex items-center gap-2.5 text-background/60 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-primary" />
                +62 812-3456-7890
              </a>
              <a
                href="mailto:hello@nusantatrip.com"
                className="flex items-center gap-2.5 text-background/60 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-primary" />
                hello@nusantatrip.com
              </a>
              <div className="flex items-start gap-2.5 text-background/60">
                <Navigation className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>Jl. Wisata Nusantara No. 1, Jakarta Selatan, DKI Jakarta 12345</span>
              </div>
            </div>

            {/* Social */}
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-xl bg-white/10 hover:bg-primary flex items-center justify-center text-background/70 hover:text-white transition-all"
                >
                  <s.icon />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-background/60 hover:text-primary text-sm transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-background/40 text-xs">
            © {new Date().getFullYear()} Nusantara Trip. Hak cipta dilindungi undang-undang.
          </p>
          <div className="flex items-center gap-4 text-xs text-background/40">
            <span>Dibuat dengan ❤️ untuk Indonesia</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
