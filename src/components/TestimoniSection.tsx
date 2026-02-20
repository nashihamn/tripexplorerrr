import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/data/packages";

export default function TestimoniSection() {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const list = testimonials.slice(0, 8);

  useEffect(() => {
    if (!autoplay) return;
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % list.length);
    }, 4500);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [autoplay, list.length]);

  const prev = () => {
    setAutoplay(false);
    setCurrent((c) => (c - 1 + list.length) % list.length);
  };
  const next = () => {
    setAutoplay(false);
    setCurrent((c) => (c + 1) % list.length);
  };

  // Show 3 cards on desktop, 1 on mobile
  const visible = [
    list[(current - 1 + list.length) % list.length],
    list[current],
    list[(current + 1) % list.length],
  ];

  return (
    <section id="testimoni" className="py-16 md:py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-accent font-bold text-sm uppercase tracking-widest mb-3">
            Kata Mereka
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
            Ribuan Wisatawan{" "}
            <span className="text-gradient-primary">Puas Bersama Kami</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Bukan hanya janji — ini pengalaman nyata dari pelanggan setia kami.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          {/* Desktop: 3 cards */}
          <div className="hidden md:flex gap-5 items-center justify-center">
            {visible.map((t, i) => (
              <motion.div
                key={t.id + i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{
                  opacity: i === 1 ? 1 : 0.6,
                  scale: i === 1 ? 1 : 0.92,
                }}
                transition={{ duration: 0.4 }}
                className={`bg-card rounded-2xl border p-6 shadow-card-tropical flex-shrink-0 w-80 ${
                  i === 1 ? "border-primary/30 shadow-xl z-10" : "border-border"
                }`}
              >
                <TestimonialCard t={t} />
              </motion.div>
            ))}
          </div>

          {/* Mobile: single card */}
          <div className="md:hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={list[current].id}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.35 }}
                className="bg-card rounded-2xl border border-primary/20 p-6 shadow-xl"
              >
                <TestimonialCard t={list[current]} />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-border text-muted-foreground hover:border-primary hover:text-primary flex items-center justify-center transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-1.5">
              {list.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setAutoplay(false); setCurrent(i); }}
                  className={`transition-all rounded-full ${
                    i === current
                      ? "w-6 h-2 gradient-primary"
                      : "w-2 h-2 bg-border hover:bg-muted-foreground"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-border text-muted-foreground hover:border-primary hover:text-primary flex items-center justify-center transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ t }: { t: typeof testimonials[0] }) {
  return (
    <>
      <Quote className="w-8 h-8 text-primary/20 mb-3" />
      <p className="text-foreground text-sm leading-relaxed mb-5">"{t.comment}"</p>
      <div className="flex items-center gap-3">
        <img
          src={t.photo}
          alt={t.name}
          className="w-11 h-11 rounded-full object-cover border-2 border-primary/20"
        />
        <div>
          <div className="font-bold text-foreground text-sm">{t.name}</div>
          {"packageName" in t && (
            <div className="text-xs text-muted-foreground">{(t as { packageName?: string }).packageName}</div>
          )}
        </div>
        <div className="ml-auto flex gap-0.5">
          {Array.from({ length: t.rating }).map((_, i) => (
            <Star key={i} className="w-3.5 h-3.5 fill-primary text-primary" />
          ))}
        </div>
      </div>
    </>
  );
}
