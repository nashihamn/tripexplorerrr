import { useParams, useNavigate, Link } from "react-router-dom";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Star, ChevronLeft, ChevronRight, Check, X, Minus, Plus,
  MapPin, Clock, Users, Quote, CalendarDays, ArrowLeft,
  ChevronDown
} from "lucide-react";
import { packages, type Package } from "@/data/packages";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";

// ─── Helpers ──────────────────────────────────────────
function formatRupiah(n: number) {
  return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(n);
}

// Generate 60-day availability from today
function generateAvailability(pkg: Package) {
  const today = new Date();
  const days: { date: Date; available: boolean; quota: number; booked: number }[] = [];
  for (let i = 0; i < 60; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    const isFull = Math.random() < 0.15; // ~15% full
    const quota = 20;
    const booked = isFull ? quota : Math.floor(Math.random() * (quota - 2));
    days.push({ date: d, available: !isFull, quota, booked });
  }
  return days;
}

// ─── Main Component ───────────────────────────────────
export default function PaketDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const pkg = packages.find((p) => p.slug === slug);

  if (!pkg) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-black text-foreground mb-4">Paket Tidak Ditemukan</h1>
          <Button onClick={() => navigate("/")}>Kembali ke Beranda</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <PhotoCarousel photos={pkg.photos} name={pkg.name} />
        <div className="container mx-auto px-4 sm:px-6 py-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link to="/" className="hover:text-primary transition-colors">Beranda</Link>
            <span>/</span>
            <Link to="/#paket-wisata" className="hover:text-primary transition-colors">Paket Wisata</Link>
            <span>/</span>
            <span className="text-foreground font-medium">{pkg.name}</span>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            {/* Left column — info */}
            <div className="lg:col-span-2 space-y-10">
              <PackageHeader pkg={pkg} />
              <ItineraryAccordion itinerary={pkg.itinerary} />
              <FacilitiesList includes={pkg.includes} excludes={pkg.excludes} />
              <PackageTestimonials testimonials={pkg.testimonials} />
            </div>

            {/* Right column — sticky sidebar */}
            <div className="lg:col-span-1">
              <BookingSidebar pkg={pkg} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

// ─── Photo Carousel ───────────────────────────────────
function PhotoCarousel({ photos, name }: { photos: string[]; name: string }) {
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx((i) => (i - 1 + photos.length) % photos.length);
  const next = () => setIdx((i) => (i + 1) % photos.length);

  return (
    <div className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden bg-muted">
      <AnimatePresence mode="wait">
        <motion.img
          key={idx}
          src={photos[idx]}
          alt={`${name} - foto ${idx + 1}`}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full object-cover"
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />

      {/* Nav buttons */}
      <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur flex items-center justify-center text-foreground hover:bg-background transition-all">
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur flex items-center justify-center text-foreground hover:bg-background transition-all">
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Thumbnails */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {photos.map((p, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            className={`w-16 h-12 rounded-lg overflow-hidden border-2 transition-all ${
              i === idx ? "border-primary scale-105" : "border-transparent opacity-70 hover:opacity-100"
            }`}
          >
            <img src={p} alt="" className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}

// ─── Package Header ───────────────────────────────────
function PackageHeader({ pkg }: { pkg: Package }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <div className="flex flex-wrap items-center gap-2 mb-3">
        {pkg.badge && (
          <Badge className="gradient-primary text-primary-foreground border-0 font-bold text-xs">
            {pkg.badge}
          </Badge>
        )}
        <Badge variant="outline" className="border-secondary text-secondary font-medium">
          <MapPin className="w-3 h-3 mr-1" /> {pkg.destination}
        </Badge>
      </div>

      <h1 className="text-3xl md:text-4xl font-black text-foreground mb-3">{pkg.name}</h1>
      <p className="text-muted-foreground text-lg leading-relaxed mb-5">{pkg.description}</p>

      <div className="flex flex-wrap gap-4 text-sm">
        <div className="flex items-center gap-1.5 text-foreground">
          <Clock className="w-4 h-4 text-primary" />
          <span className="font-semibold">{pkg.duration}</span>
        </div>
        <div className="flex items-center gap-1.5 text-foreground">
          <Star className="w-4 h-4 fill-primary text-primary" />
          <span className="font-semibold">{pkg.rating}</span>
          <span className="text-muted-foreground">({pkg.reviewCount} ulasan)</span>
        </div>
        <div className="flex items-center gap-1.5 text-foreground">
          <Users className="w-4 h-4 text-secondary" />
          <span className="font-semibold">Min. 2 orang</span>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Itinerary Accordion ──────────────────────────────
function ItineraryAccordion({ itinerary }: { itinerary: Package["itinerary"] }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
      <h2 className="text-2xl font-black text-foreground mb-5 flex items-center gap-2">
        <CalendarDays className="w-6 h-6 text-primary" />
        Itinerary Perjalanan
      </h2>
      <Accordion type="single" collapsible defaultValue="day-1" className="space-y-3">
        {itinerary.map((day) => (
          <AccordionItem
            key={day.day}
            value={`day-${day.day}`}
            className="border border-border rounded-xl overflow-hidden bg-card px-5"
          >
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-full gradient-primary text-primary-foreground flex items-center justify-center text-sm font-black shrink-0">
                  D{day.day}
                </span>
                <div className="text-left">
                  <div className="font-bold text-foreground">{day.title}</div>
                  <div className="text-sm text-muted-foreground">{day.description}</div>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-2 pl-14">
                {day.activities.map((a, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    {a}
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </motion.div>
  );
}

// ─── Facilities ───────────────────────────────────────
function FacilitiesList({ includes, excludes }: { includes: string[]; excludes: string[] }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
      <h2 className="text-2xl font-black text-foreground mb-5">Fasilitas</h2>
      <div className="grid sm:grid-cols-2 gap-6">
        <div className="bg-accent/10 rounded-xl p-5 border border-accent/20">
          <h3 className="font-bold text-accent flex items-center gap-2 mb-4">
            <Check className="w-5 h-5" /> Termasuk
          </h3>
          <ul className="space-y-2.5">
            {includes.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-destructive/5 rounded-xl p-5 border border-destructive/20">
          <h3 className="font-bold text-destructive flex items-center gap-2 mb-4">
            <X className="w-5 h-5" /> Tidak Termasuk
          </h3>
          <ul className="space-y-2.5">
            {excludes.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                <X className="w-4 h-4 text-destructive/70 shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Testimonials ─────────────────────────────────────
function PackageTestimonials({ testimonials }: { testimonials: Package["testimonials"] }) {
  if (!testimonials.length) return null;
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
      <h2 className="text-2xl font-black text-foreground mb-5 flex items-center gap-2">
        <Quote className="w-6 h-6 text-primary" />
        Ulasan Wisatawan
      </h2>
      <div className="space-y-4">
        {testimonials.map((t) => (
          <div key={t.id} className="bg-card rounded-xl border border-border p-5 shadow-card-tropical">
            <div className="flex items-center gap-3 mb-3">
              <img src={t.photo} alt={t.name} className="w-10 h-10 rounded-full object-cover border-2 border-primary/20" />
              <div>
                <div className="font-bold text-foreground text-sm">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.date}</div>
              </div>
              <div className="ml-auto flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-primary text-primary" />
                ))}
              </div>
            </div>
            <p className="text-sm text-foreground leading-relaxed">"{t.comment}"</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

// ─── Booking Sidebar ──────────────────────────────────
function BookingSidebar({ pkg }: { pkg: Package }) {
  const navigate = useNavigate();
  const [people, setPeople] = useState(2);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const availability = useMemo(() => generateAvailability(pkg), [pkg.id]);
  const totalPrice = pkg.price * people;

  const [calendarMonth, setCalendarMonth] = useState(() => {
    const d = new Date();
    return { month: d.getMonth(), year: d.getFullYear() };
  });

  const daysInMonth = new Date(calendarMonth.year, calendarMonth.month + 1, 0).getDate();
  const firstDayOfWeek = new Date(calendarMonth.year, calendarMonth.month, 1).getDay();

  const monthNames = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];

  const prevMonth = () => {
    setCalendarMonth((m) => {
      if (m.month === 0) return { month: 11, year: m.year - 1 };
      return { ...m, month: m.month - 1 };
    });
  };
  const nextMonth = () => {
    setCalendarMonth((m) => {
      if (m.month === 11) return { month: 0, year: m.year + 1 };
      return { ...m, month: m.month + 1 };
    });
  };

  const getAvailability = (day: number) => {
    const date = new Date(calendarMonth.year, calendarMonth.month, day);
    return availability.find((a) => a.date.toDateString() === date.toDateString());
  };

  const isSameDay = (a: Date, b: Date) => a.toDateString() === b.toDateString();

  return (
    <div className="lg:sticky lg:top-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-card rounded-2xl border border-border shadow-card-tropical p-6 space-y-6"
      >
        {/* Price */}
        <div>
          <div className="text-sm text-muted-foreground mb-1">Harga mulai dari</div>
          <div className="text-3xl font-black text-gradient-primary">{formatRupiah(pkg.price)}</div>
          <div className="text-sm text-muted-foreground">/ orang</div>
        </div>

        {/* People counter */}
        <div>
          <label className="text-sm font-semibold text-foreground block mb-2">Jumlah Peserta</label>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setPeople((p) => Math.max(1, p - 1))}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground hover:border-primary hover:text-primary transition-all"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="text-2xl font-black text-foreground w-10 text-center">{people}</span>
            <button
              onClick={() => setPeople((p) => Math.min(20, p + 1))}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground hover:border-primary hover:text-primary transition-all"
            >
              <Plus className="w-4 h-4" />
            </button>
            <span className="text-sm text-muted-foreground">orang</span>
          </div>
        </div>

        {/* Availability Calendar */}
        <div>
          <label className="text-sm font-semibold text-foreground block mb-2">Ketersediaan Tanggal</label>
          <div className="bg-muted/50 rounded-xl p-3">
            {/* Month nav */}
            <div className="flex items-center justify-between mb-3">
              <button onClick={prevMonth} className="p-1 hover:text-primary transition-colors"><ChevronLeft className="w-4 h-4" /></button>
              <span className="text-sm font-bold text-foreground">{monthNames[calendarMonth.month]} {calendarMonth.year}</span>
              <button onClick={nextMonth} className="p-1 hover:text-primary transition-colors"><ChevronRight className="w-4 h-4" /></button>
            </div>
            {/* Day headers */}
            <div className="grid grid-cols-7 gap-1 text-center mb-1">
              {["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"].map((d) => (
                <span key={d} className="text-[10px] font-semibold text-muted-foreground">{d}</span>
              ))}
            </div>
            {/* Days */}
            <div className="grid grid-cols-7 gap-1">
              {Array.from({ length: firstDayOfWeek }).map((_, i) => <div key={`e-${i}`} />)}
              {Array.from({ length: daysInMonth }).map((_, i) => {
                const day = i + 1;
                const avail = getAvailability(day);
                const date = new Date(calendarMonth.year, calendarMonth.month, day);
                const isPast = date < new Date(new Date().toDateString());
                const isSelected = selectedDate && isSameDay(selectedDate, date);

                return (
                  <button
                    key={day}
                    disabled={isPast || !avail?.available}
                    onClick={() => avail?.available && setSelectedDate(date)}
                    className={`h-8 rounded-md text-xs font-medium transition-all ${
                      isSelected
                        ? "gradient-primary text-primary-foreground font-bold"
                        : isPast
                          ? "text-muted-foreground/40 cursor-not-allowed"
                          : avail?.available
                            ? "bg-accent/15 text-accent hover:bg-accent/25 cursor-pointer"
                            : "bg-destructive/10 text-destructive/50 cursor-not-allowed"
                    }`}
                  >
                    {day}
                  </button>
                );
              })}
            </div>
            {/* Legend */}
            <div className="flex gap-4 mt-3 text-[10px] text-muted-foreground">
              <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-sm bg-accent/20" /> Tersedia</span>
              <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-sm bg-destructive/20" /> Penuh</span>
            </div>
          </div>
        </div>

        {/* Total */}
        <div className="border-t border-border pt-4">
          <div className="flex justify-between items-center mb-1">
            <span className="text-sm text-muted-foreground">{formatRupiah(pkg.price)} × {people} orang</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-bold text-foreground">Total</span>
            <span className="text-2xl font-black text-gradient-primary">{formatRupiah(totalPrice)}</span>
          </div>
        </div>

        {/* CTA */}
        <Button
          size="lg"
          className="w-full gradient-primary text-primary-foreground font-bold text-base shadow-btn-tropical hover:opacity-90 transition-opacity"
          onClick={() => {
            const dateParam = selectedDate ? `&date=${selectedDate.toISOString().slice(0, 10)}` : "";
            navigate(`/booking/${pkg.id}?people=${people}${dateParam}`);
          }}
        >
          Pesan Sekarang
        </Button>

        <p className="text-xs text-center text-muted-foreground">
          Belum ada pembayaran. Konfirmasi dulu, baru bayar.
        </p>
      </motion.div>
    </div>
  );
}
