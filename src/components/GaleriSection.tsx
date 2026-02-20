import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { galleryImages } from "@/data/packages";

const destinations = ["Semua", "Bromo", "Ijen", "Jogja", "Labuan Bajo", "Bali"];

export default function GaleriSection() {
  const [activeTab, setActiveTab] = useState("Semua");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered =
    activeTab === "Semua"
      ? galleryImages
      : galleryImages.filter((img) => img.destination === activeTab);

  const prev = () =>
    setLightbox((i) => (i !== null ? (i - 1 + filtered.length) % filtered.length : null));
  const next = () =>
    setLightbox((i) => (i !== null ? (i + 1) % filtered.length : null));

  return (
    <section id="galeri" className="py-16 md:py-24 bg-muted/40">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="inline-block text-secondary font-bold text-sm uppercase tracking-widest mb-3">
            Galeri Foto
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
            Keindahan{" "}
            <span className="text-gradient-primary">Nusantara</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Intip keindahan destinasi yang menanti kamu jelajahi.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {destinations.map((d) => (
            <button
              key={d}
              onClick={() => setActiveTab(d)}
              className={`text-sm font-semibold px-4 py-2 rounded-full border transition-all ${
                activeTab === d
                  ? "gradient-teal text-secondary-foreground border-transparent shadow-btn-tropical"
                  : "border-border text-muted-foreground hover:border-secondary hover:text-secondary bg-card"
              }`}
            >
              {d}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <motion.div
          layout
          className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4"
        >
          <AnimatePresence>
            {filtered.map((img, i) => (
              <motion.div
                key={img.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35 }}
                className="break-inside-avoid cursor-pointer group relative rounded-xl overflow-hidden"
                onClick={() => setLightbox(i)}
              >
                <img
                  src={img.url}
                  alt={img.caption}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end p-3">
                  <span className="text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {img.caption}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-4 right-4 text-white/80 hover:text-white"
              onClick={() => setLightbox(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full"
              onClick={(e) => { e.stopPropagation(); prev(); }}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <motion.img
              key={lightbox}
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              src={filtered[lightbox].url}
              alt={filtered[lightbox].caption}
              className="max-w-full max-h-[85vh] rounded-xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full"
              onClick={(e) => { e.stopPropagation(); next(); }}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-sm font-medium">
              {filtered[lightbox].caption} — {lightbox + 1}/{filtered.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
