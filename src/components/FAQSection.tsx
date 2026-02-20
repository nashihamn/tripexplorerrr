import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { faqs } from "@/data/packages";

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>("faq1");

  return (
    <section id="faq" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block text-primary font-bold text-sm uppercase tracking-widest mb-3">
              Pertanyaan Umum
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
              Ada yang Ingin{" "}
              <span className="text-gradient-primary">Kamu Tanyakan?</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Kami siap menjawab semua pertanyaanmu. Tidak ada pertanyaan yang terlalu kecil!
            </p>
          </motion.div>

          {/* FAQ Items */}
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className={`rounded-2xl border overflow-hidden transition-all ${
                  openId === faq.id
                    ? "border-primary/30 shadow-card-tropical"
                    : "border-border bg-card"
                }`}
              >
                <button
                  onClick={() =>
                    setOpenId(openId === faq.id ? null : faq.id)
                  }
                  className="w-full flex items-center gap-4 px-5 py-4.5 text-left"
                  aria-expanded={openId === faq.id}
                >
                  <HelpCircle
                    className={`w-5 h-5 shrink-0 transition-colors ${
                      openId === faq.id ? "text-primary" : "text-muted-foreground"
                    }`}
                  />
                  <span
                    className={`flex-1 font-semibold text-base transition-colors ${
                      openId === faq.id ? "text-primary" : "text-foreground"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openId === faq.id ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <ChevronDown
                      className={`w-5 h-5 shrink-0 transition-colors ${
                        openId === faq.id ? "text-primary" : "text-muted-foreground"
                      }`}
                    />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openId === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 pt-0">
                        <div className="ml-9 pl-0 border-l-2 border-primary/20 pl-4">
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Still have questions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-6 text-center border border-border"
          >
            <h3 className="font-bold text-foreground mb-2">
              Masih ada pertanyaan lain?
            </h3>
            <p className="text-muted-foreground text-sm mb-4">
              Tim kami siap membantu kamu 24/7 melalui WhatsApp.
            </p>
            <a
              href="https://wa.me/6281234567890?text=Halo%20Nusantara%20Trip!%20Saya%20punya%20pertanyaan."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 gradient-primary text-primary-foreground font-bold px-6 py-3 rounded-xl shadow-btn-tropical hover:opacity-90 transition-opacity"
            >
              Chat WhatsApp Sekarang
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
