import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MapPin, Phone } from "lucide-react";

const navLinks = [
  { label: "Paket", href: "#paket" },
  { label: "Galeri", href: "#galeri" },
  { label: "Blog", href: "#blog" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-nav"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <motion.a
              href="/"
              className="flex items-center gap-2.5"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <div className="w-9 h-9 rounded-xl gradient-primary flex items-center justify-center shadow-btn-tropical">
                <MapPin className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <div className="flex flex-col leading-none">
                <span
                  className={`font-extrabold text-lg tracking-tight transition-colors ${
                    isScrolled ? "text-foreground" : "text-white"
                  }`}
                >
                  Nusantara
                </span>
                <span
                  className={`text-xs font-semibold tracking-widest uppercase transition-colors ${
                    isScrolled ? "text-primary" : "text-primary-light"
                  }`}
                >
                  Trip
                </span>
              </div>
            </motion.a>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className={`font-semibold text-sm transition-colors hover:text-primary ${
                    isScrolled ? "text-foreground/80" : "text-white/90"
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <a
                href="tel:+6281234567890"
                className={`hidden lg:flex items-center gap-1.5 text-sm font-medium transition-colors ${
                  isScrolled ? "text-foreground/70" : "text-white/80"
                }`}
              >
                <Phone className="w-4 h-4" />
                <span>+62 812-3456-7890</span>
              </a>

              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => handleNavClick("#paket")}
                className="hidden md:inline-flex items-center gap-2 gradient-primary text-white font-bold text-sm px-5 py-2.5 rounded-xl shadow-btn-tropical transition-all hover:opacity-90"
              >
                Pesan Sekarang
              </motion.button>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMobileMenuOpen((v) => !v)}
                className={`md:hidden p-2 rounded-lg transition-colors ${
                  isScrolled
                    ? "text-foreground hover:bg-muted"
                    : "text-white hover:bg-white/10"
                }`}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="md:hidden bg-white/98 backdrop-blur-lg border-t border-border overflow-hidden"
            >
              <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.label}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.07 }}
                    onClick={() => handleNavClick(link.href)}
                    className="text-left font-semibold text-foreground/80 hover:text-primary py-3 px-3 rounded-lg hover:bg-muted transition-colors"
                  >
                    {link.label}
                  </motion.button>
                ))}
                <motion.button
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: navLinks.length * 0.07 }}
                  onClick={() => handleNavClick("#paket")}
                  className="mt-2 gradient-primary text-white font-bold py-3 px-4 rounded-xl shadow-btn-tropical"
                >
                  Pesan Sekarang
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
