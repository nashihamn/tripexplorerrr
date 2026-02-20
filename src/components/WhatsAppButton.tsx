import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

const WA_NUMBER = "6281234567890";
const WA_MESSAGE = "Halo Nusantara Trip! Saya ingin informasi lebih lanjut tentang paket wisata. 🌴";

export default function WhatsAppButton() {
  const [tooltip, setTooltip] = useState(true);

  const href = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_MESSAGE)}`;

  return (
    <div className="fixed bottom-6 right-5 z-50 flex flex-col items-end gap-2">
      {/* Tooltip */}
      <AnimatePresence>
        {tooltip && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.9 }}
            className="relative bg-card border border-border rounded-xl px-4 py-3 shadow-xl max-w-[220px] mr-1"
          >
            <button
              onClick={() => setTooltip(false)}
              className="absolute -top-2 -right-2 w-5 h-5 bg-muted-foreground text-white rounded-full flex items-center justify-center"
            >
              <X className="w-3 h-3" />
            </button>
            <p className="text-foreground font-semibold text-sm">
              Butuh bantuan? 👋
            </p>
            <p className="text-muted-foreground text-xs mt-0.5">
              Chat kami di WhatsApp!
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Button */}
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, type: "spring", stiffness: 300 }}
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.93 }}
        aria-label="Chat WhatsApp"
        className="relative w-14 h-14 rounded-full flex items-center justify-center shadow-2xl"
        style={{ background: "hsl(142 70% 45%)" }}
        onClick={() => setTooltip(false)}
      >
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full animate-ping opacity-25" style={{ background: "hsl(142 70% 45%)" }} />
        <MessageCircle className="w-7 h-7 text-white" strokeWidth={2} />
      </motion.a>
    </div>
  );
}
