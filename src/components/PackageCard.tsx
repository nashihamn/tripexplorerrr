import { motion } from "framer-motion";
import { Star, Clock, Users, ArrowRight, MapPin } from "lucide-react";
import type { Package } from "@/data/packages";
import { Link } from "react-router-dom";

interface PackageCardProps {
  pkg: Package;
  index?: number;
}

export function formatPrice(price: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(price);
}

const badgeColors: Record<string, string> = {
  "Best Seller": "bg-primary text-primary-foreground",
  Populer: "bg-secondary text-secondary-foreground",
  Terjangkau: "bg-accent text-accent-foreground",
  Premium: "bg-foreground text-background",
  Terbaru: "bg-secondary-light text-secondary-foreground",
};

export default function PackageCard({ pkg, index = 0 }: PackageCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="group"
    >
      <Link to={`/paket/${pkg.slug}`} className="block">
        <div className="bg-card rounded-2xl overflow-hidden shadow-card-tropical hover:shadow-xl transition-all duration-300 border border-border/50">
          {/* Image */}
          <div className="relative aspect-[4/3] overflow-hidden">
            <img
              src={pkg.coverPhoto}
              alt={pkg.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
              style={{ transform: "scale(1)" }}
              loading="lazy"
            />
            <div className="absolute inset-0 gradient-card" />

            {/* Badge */}
            {pkg.badge && (
              <span
                className={`absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full ${
                  badgeColors[pkg.badge] || "bg-primary text-white"
                }`}
              >
                {pkg.badge}
              </span>
            )}

            {/* Rating */}
            <div className="absolute top-3 right-3 flex items-center gap-1 bg-white/20 backdrop-blur-md text-white text-xs font-bold px-2.5 py-1 rounded-full border border-white/20">
              <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
              {pkg.rating}
            </div>

            {/* Destination badge on photo */}
            <div className="absolute bottom-3 left-3 flex items-center gap-1.5">
              <span className="flex items-center gap-1.5 bg-black/40 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full border border-white/15">
                <MapPin className="w-3 h-3" />
                {pkg.destination}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-5">
            <h3 className="font-bold text-foreground text-lg leading-snug mb-2 group-hover:text-primary transition-colors">
              {pkg.name}
            </h3>

            <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
              {pkg.description}
            </p>

            {/* Meta */}
            <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-secondary" />
                {pkg.duration}
              </span>
              <span className="flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-accent" />
                {pkg.reviewCount} ulasan
              </span>
            </div>

            {/* Price + CTA */}
            <div className="flex items-end justify-between">
              <div>
                <div className="text-xs text-muted-foreground mb-0.5">Mulai dari</div>
                <div className="text-xl font-black text-primary">
                  {formatPrice(pkg.price)}
                </div>
                <div className="text-xs text-muted-foreground">/ orang</div>
              </div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="gradient-primary text-white text-sm font-bold px-4 py-2.5 rounded-xl flex items-center gap-1.5 shadow-btn-tropical"
              >
                Lihat Detail
                <ArrowRight className="w-4 h-4" />
              </motion.div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
