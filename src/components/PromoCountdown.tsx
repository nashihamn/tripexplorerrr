import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Copy, Check, Zap, Tag } from "lucide-react";

// Promo ends 30 days from now
const PROMO_END = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);

function getTimeLeft() {
  const diff = PROMO_END.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function TimeUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <motion.div
        key={value}
        initial={{ rotateX: -90, opacity: 0 }}
        animate={{ rotateX: 0, opacity: 1 }}
        transition={{ duration: 0.35 }}
        className="w-16 h-16 md:w-20 md:h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg border border-white/25"
      >
        <span className="text-2xl md:text-3xl font-black text-white tabular-nums">
          {String(value).padStart(2, "0")}
        </span>
      </motion.div>
      <span className="text-white/70 text-xs font-semibold mt-2 uppercase tracking-wider">
        {label}
      </span>
    </div>
  );
}

export default function PromoCountdown() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText("NUSA20").then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  }, []);

  return (
    <section className="py-14 md:py-20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden"
          style={{ background: "var(--gradient-promo)" }}
        >
          {/* Decorative circles */}
          <div className="absolute -top-12 -right-12 w-56 h-56 bg-white/10 rounded-full blur-2xl" />
          <div className="absolute -bottom-16 -left-16 w-72 h-72 bg-black/10 rounded-full blur-3xl" />
          <div className="absolute top-4 left-1/3 w-32 h-32 bg-white/5 rounded-full" />

          <div className="relative z-10 px-6 py-10 md:px-16 md:py-14">
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
              {/* Left: Text & Voucher */}
              <div className="flex-1 text-center lg:text-left">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white text-sm font-bold px-4 py-1.5 rounded-full mb-5 border border-white/25">
                  <Zap className="w-4 h-4 text-yellow-300" />
                  Promo Terbatas!
                </div>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-3">
                  Hemat 20% untuk
                  <br />
                  Paket Apa Pun!
                </h2>

                <p className="text-white/80 text-base md:text-lg mb-8 max-w-md">
                  Gunakan kode voucher eksklusif ini untuk mendapatkan diskon 20% di
                  semua paket wisata. Berlaku untuk pemesanan hingga batas waktu!
                </p>

                {/* Voucher Code */}
                <div className="inline-flex items-center gap-3 bg-white/15 backdrop-blur-md border border-white/30 rounded-2xl p-1 pl-5">
                  <Tag className="w-5 h-5 text-primary-light" />
                  <span className="text-white font-black text-xl md:text-2xl tracking-[0.2em]">
                    NUSA20
                  </span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleCopy}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-sm transition-all ${
                      copied
                        ? "bg-accent text-accent-foreground"
                        : "bg-white text-primary hover:bg-white/90"
                    }`}
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4" />
                        Tersalin!
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        Salin Kode
                      </>
                    )}
                  </motion.button>
                </div>

                <p className="text-white/50 text-xs mt-3">
                  * Minimum pemesanan Rp 500.000. Tidak dapat digabung dengan promo lain.
                </p>
              </div>

              {/* Right: Countdown */}
              <div className="flex flex-col items-center">
                <p className="text-white/70 text-sm font-semibold uppercase tracking-widest mb-5">
                  Berakhir Dalam
                </p>
                <div className="flex items-start gap-3 md:gap-4">
                  <TimeUnit value={timeLeft.days} label="Hari" />
                  <span className="text-white/50 text-3xl font-black mt-3">:</span>
                  <TimeUnit value={timeLeft.hours} label="Jam" />
                  <span className="text-white/50 text-3xl font-black mt-3">:</span>
                  <TimeUnit value={timeLeft.minutes} label="Menit" />
                  <span className="text-white/50 text-3xl font-black mt-3">:</span>
                  <TimeUnit value={timeLeft.seconds} label="Detik" />
                </div>

                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => {
                    document.getElementById("paket")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="mt-8 bg-white text-primary font-black px-8 py-3.5 rounded-xl shadow-lg hover:bg-white/95 transition-all text-sm"
                >
                  Gunakan Sekarang →
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
