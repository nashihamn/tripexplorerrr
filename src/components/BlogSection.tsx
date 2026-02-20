import { motion } from "framer-motion";
import { Clock, ArrowRight, Calendar } from "lucide-react";
import { blogPosts } from "@/data/packages";
import { format } from "date-fns";
import { id as idLocale } from "date-fns/locale";

export default function BlogSection() {
  return (
    <section id="blog" className="py-16 md:py-24 bg-muted/40">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-secondary font-bold text-sm uppercase tracking-widest mb-3">
            Tips & Inspirasi
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
            Blog <span className="text-gradient-primary">Perjalanan</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Tips perjalanan, panduan destinasi, dan cerita inspiratif dari petualang Nusantara.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {blogPosts.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group"
            >
              <div className="bg-card rounded-2xl overflow-hidden border border-border shadow-card-tropical hover:shadow-xl transition-all duration-300">
                {/* Thumbnail */}
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src={post.thumbnail}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="p-5">
                  {/* Meta */}
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {format(new Date(post.publishedAt), "d MMM yyyy", {
                        locale: idLocale,
                      })}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime} baca
                    </span>
                  </div>

                  <h3 className="font-bold text-foreground text-lg leading-snug mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>

                  <a
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all"
                  >
                    Baca Selengkapnya
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <a
            href="/blog"
            className="inline-flex items-center gap-2 text-secondary font-bold text-sm hover:underline"
          >
            Lihat Semua Artikel →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
