import { useState } from "react";
import { motion, type Variants, type Easing } from "framer-motion";
import { Search, Calendar, Users, ChevronDown, MapPin, Sparkles } from "lucide-react";
import { format } from "date-fns";
import { id as idLocale } from "date-fns/locale";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarUI } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";

const destinations = ["Semua Destinasi", "Bromo", "Ijen", "Jogja", "Labuan Bajo", "Bali"];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const easeOut: Easing = "easeOut";

const itemVariants: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: easeOut } },
};

export default function HeroSection() {
  const [destination, setDestination] = useState("Semua Destinasi");
  const [date, setDate] = useState<Date | undefined>();
  const [people, setPeople] = useState(2);
  const [destOpen, setDestOpen] = useState(false);

  const handleSearch = () => {
    const section = document.getElementById("paket");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=1920&q=80')",
        }}
      />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-transparent to-secondary/30" />

      {/* Floating decorative elements */}
      <motion.div
        animate={{ y: [-8, 8, -8] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-32 left-8 md:left-16 w-16 h-16 rounded-2xl gradient-primary opacity-30 blur-sm"
      />
      <motion.div
        animate={{ y: [8, -8, 8] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-48 right-8 md:right-20 w-10 h-10 rounded-xl gradient-teal opacity-25 blur-sm"
      />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 pt-24 pb-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto"
        >
          {/* Tag */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-6">
            <span className="bg-white/15 backdrop-blur-sm text-white text-sm font-semibold px-4 py-2 rounded-full border border-white/25 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-primary-light" />
              Jelajahi Keajaiban Nusantara
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-5 tracking-tight"
          >
            Petualangan{" "}
            <span className="text-gradient-primary">Impianmu</span>
            <br />
            Dimulai di Sini
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Dari sunrise Bromo hingga api biru Ijen — kami siapkan perjalanan terbaik
            dengan harga terjangkau dan pengalaman tak terlupakan.
          </motion.p>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-8 md:gap-16 mb-10"
          >
            {[
              { value: "5.000+", label: "Wisatawan" },
              { value: "50+", label: "Destinasi" },
              { value: "4.9★", label: "Rating" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-black text-white">
                  {stat.value}
                </div>
                <div className="text-white/60 text-xs md:text-sm font-medium mt-0.5">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Search Bar */}
          <motion.div
            variants={itemVariants}
            className="bg-white/95 backdrop-blur-md rounded-2xl p-2 shadow-2xl max-w-3xl mx-auto"
          >
            <div className="flex flex-col sm:flex-row gap-2">
              {/* Destination */}
              <div className="relative flex-1">
                <button
                  onClick={() => setDestOpen((v) => !v)}
                  className="w-full flex items-center gap-3 px-4 py-3.5 rounded-xl hover:bg-muted transition-colors text-left"
                >
                  <MapPin className="w-5 h-5 text-primary shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-muted-foreground font-medium mb-0.5">
                      Destinasi
                    </div>
                    <div className="text-sm font-semibold text-foreground truncate">
                      {destination}
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-muted-foreground transition-transform ${
                      destOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {destOpen && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-xl shadow-xl border border-border z-50 overflow-hidden">
                    {destinations.map((d) => (
                      <button
                        key={d}
                        onClick={() => {
                          setDestination(d);
                          setDestOpen(false);
                        }}
                        className={`w-full text-left px-4 py-3 text-sm hover:bg-muted transition-colors ${
                          destination === d
                            ? "text-primary font-semibold bg-primary/5"
                            : "text-foreground"
                        }`}
                      >
                        {d}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="hidden sm:block w-px bg-border self-stretch my-2" />

              {/* Date Picker */}
              <Popover>
                <PopoverTrigger asChild>
                  <button className="flex-1 flex items-center gap-3 px-4 py-3.5 rounded-xl hover:bg-muted transition-colors text-left">
                    <Calendar className="w-5 h-5 text-secondary shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="text-xs text-muted-foreground font-medium mb-0.5">
                        Tanggal
                      </div>
                      <div
                        className={cn(
                          "text-sm font-semibold truncate",
                          date ? "text-foreground" : "text-muted-foreground"
                        )}
                      >
                        {date
                          ? format(date, "d MMM yyyy", { locale: idLocale })
                          : "Pilih tanggal"}
                      </div>
                    </div>
                  </button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 z-50" align="start">
                  <CalendarUI
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    disabled={(d) => d < new Date()}
                    initialFocus
                    className={cn("p-3 pointer-events-auto")}
                  />
                </PopoverContent>
              </Popover>

              <div className="hidden sm:block w-px bg-border self-stretch my-2" />

              {/* People Counter */}
              <div className="flex items-center gap-3 px-4 py-3.5 rounded-xl">
                <Users className="w-5 h-5 text-accent shrink-0" />
                <div className="flex-1">
                  <div className="text-xs text-muted-foreground font-medium mb-0.5">
                    Peserta
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setPeople((p) => Math.max(1, p - 1))}
                      className="w-7 h-7 rounded-lg bg-muted hover:bg-border text-foreground font-bold text-lg flex items-center justify-center transition-colors"
                    >
                      −
                    </button>
                    <span className="text-sm font-bold text-foreground w-4 text-center">
                      {people}
                    </span>
                    <button
                      onClick={() => setPeople((p) => Math.min(20, p + 1))}
                      className="w-7 h-7 rounded-lg gradient-primary text-white font-bold text-lg flex items-center justify-center transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* Search Button */}
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleSearch}
                className="gradient-primary text-white font-bold px-6 py-3.5 rounded-xl shadow-btn-tropical flex items-center gap-2 justify-center whitespace-nowrap"
              >
                <Search className="w-5 h-5" />
                Cari Paket
              </motion.button>
            </div>
          </motion.div>

          {/* Popular Tags */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-2 mt-6"
          >
            <span className="text-white/50 text-sm">Populer:</span>
            {["Bromo Sunrise", "Kawah Ijen", "Labuan Bajo", "Bali Ubud"].map((tag) => (
              <button
                key={tag}
                onClick={handleSearch}
                className="text-white/80 hover:text-white text-sm bg-white/10 hover:bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm transition-all border border-white/15"
              >
                {tag}
              </button>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2.5 bg-white/60 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
