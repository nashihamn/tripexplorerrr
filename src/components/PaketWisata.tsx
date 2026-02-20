import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { SlidersHorizontal, ArrowUpDown, Filter } from "lucide-react";
import { packages } from "@/data/packages";
import PackageCard from "./PackageCard";
import { Slider } from "@/components/ui/slider";

const destinations = ["Semua", "Bromo", "Ijen", "Jogja", "Labuan Bajo", "Bali"];
const durations = ["Semua", "2 Hari", "3 Hari", "4+ Hari"];
const sortOptions = [
  { value: "popular", label: "Paling Populer" },
  { value: "cheapest", label: "Termurah" },
  { value: "newest", label: "Terbaru" },
  { value: "rating", label: "Rating Tertinggi" },
];

export default function PaketWisata() {
  const [activeDestination, setActiveDestination] = useState("Semua");
  const [activeDuration, setActiveDuration] = useState("Semua");
  const [priceRange, setPriceRange] = useState([0, 4000000]);
  const [sortBy, setSortBy] = useState("popular");
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    let result = [...packages];

    // Filter by destination
    if (activeDestination !== "Semua") {
      result = result.filter((p) => p.destination === activeDestination);
    }

    // Filter by duration
    if (activeDuration !== "Semua") {
      if (activeDuration === "2 Hari") result = result.filter((p) => p.durationDays === 2);
      else if (activeDuration === "3 Hari") result = result.filter((p) => p.durationDays === 3);
      else if (activeDuration === "4+ Hari") result = result.filter((p) => p.durationDays >= 4);
    }

    // Filter by price
    result = result.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    );

    // Sort
    if (sortBy === "cheapest") result.sort((a, b) => a.price - b.price);
    else if (sortBy === "rating") result.sort((a, b) => b.rating - a.rating);
    else if (sortBy === "newest") result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
    else result.sort((a, b) => b.reviewCount - a.reviewCount); // popular

    return result;
  }, [activeDestination, activeDuration, priceRange, sortBy]);

  const formatPrice = (v: number) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(v);

  return (
    <section id="paket" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-primary font-bold text-sm uppercase tracking-widest mb-3">
            Pilihan Terbaik
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-4">
            Paket Wisata{" "}
            <span className="text-gradient-primary">Nusantara</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Temukan perjalanan impianmu. Dari petualangan alam hingga wisata budaya,
            semua ada di sini dengan harga terbaik.
          </p>
        </motion.div>

        {/* Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mb-8"
        >
          {/* Top filter row */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            {/* Destination Pills */}
            <div className="flex flex-wrap gap-2">
              {destinations.map((d) => (
                <button
                  key={d}
                  onClick={() => setActiveDestination(d)}
                  className={`text-sm font-semibold px-4 py-2 rounded-full border transition-all ${
                    activeDestination === d
                      ? "gradient-primary text-primary-foreground border-transparent shadow-btn-tropical"
                      : "border-border text-muted-foreground hover:border-primary hover:text-primary bg-card"
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>

            <div className="flex-1" />

            {/* Filter toggle */}
            <button
              onClick={() => setShowFilters((v) => !v)}
              className={`flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full border transition-all ${
                showFilters
                  ? "gradient-primary text-primary-foreground border-transparent"
                  : "border-border text-muted-foreground hover:border-primary hover:text-primary bg-card"
              }`}
            >
              <Filter className="w-4 h-4" />
              Filter
              {showFilters ? " ▲" : " ▼"}
            </button>

            {/* Sort */}
            <div className="flex items-center gap-2 border border-border rounded-full px-3 py-2 bg-card">
              <ArrowUpDown className="w-4 h-4 text-muted-foreground" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="text-sm font-semibold text-foreground bg-transparent outline-none cursor-pointer"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Advanced Filters */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="bg-card rounded-2xl border border-border p-5 md:p-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Price Range */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <SlidersHorizontal className="w-4 h-4 text-primary" />
                    <span className="text-sm font-semibold text-foreground">
                      Rentang Harga
                    </span>
                  </div>
                  <Slider
                    min={0}
                    max={4000000}
                    step={100000}
                    value={priceRange}
                    onValueChange={(v) => setPriceRange(v)}
                    className="mb-3"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground font-medium">
                    <span>{formatPrice(priceRange[0])}</span>
                    <span>{formatPrice(priceRange[1])}</span>
                  </div>
                </div>

                {/* Duration */}
                <div>
                  <div className="text-sm font-semibold text-foreground mb-3">
                    Durasi Perjalanan
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {durations.map((d) => (
                      <button
                        key={d}
                        onClick={() => setActiveDuration(d)}
                        className={`text-sm font-medium px-4 py-2 rounded-lg border transition-all ${
                          activeDuration === d
                            ? "bg-secondary text-secondary-foreground border-transparent"
                            : "border-border text-muted-foreground hover:border-secondary hover:text-secondary bg-background"
                        }`}
                      >
                        {d}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Result count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-muted-foreground text-sm">
            Menampilkan{" "}
            <span className="font-bold text-foreground">{filtered.length}</span> paket
          </p>
          {(activeDestination !== "Semua" || activeDuration !== "Semua") && (
            <button
              onClick={() => {
                setActiveDestination("Semua");
                setActiveDuration("Semua");
                setPriceRange([0, 4000000]);
              }}
              className="text-sm text-primary font-semibold hover:underline"
            >
              Reset filter
            </button>
          )}
        </div>

        {/* Package Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-5xl mb-4">🔍</div>
            <h3 className="text-xl font-bold text-foreground mb-2">
              Tidak ada paket ditemukan
            </h3>
            <p className="text-muted-foreground">
              Coba ubah filter untuk melihat lebih banyak pilihan.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filtered.map((pkg, i) => (
              <PackageCard key={pkg.id} pkg={pkg} index={i} />
            ))}
          </div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://wa.me/6281234567890?text=Halo%20Nusantara%20Trip!%20Saya%20ingin%20tahu%20lebih%20lanjut%20tentang%20paket%20wisata."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-primary text-primary hover:gradient-primary hover:text-primary-foreground font-bold px-8 py-3.5 rounded-xl transition-all duration-300"
          >
            Butuh Paket Kustom? Hubungi Kami →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
