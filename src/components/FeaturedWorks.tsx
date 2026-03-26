import { useState, useRef } from "react";
import { X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

// Featured images
import img1 from "@/assets/portfolio/new-1.jpg";
import img2 from "@/assets/portfolio/new-2.jpg";
import img3 from "@/assets/portfolio/new-3.jpg";
import img4 from "@/assets/portfolio/new-4.jpg";
import img5 from "@/assets/portfolio/new-5.jpg";
import img6 from "@/assets/portfolio/new-6.jpg";

// All projects images
import img7 from "@/assets/portfolio/new-7.jpg";
import img8 from "@/assets/portfolio/new-8.jpg";
import img9 from "@/assets/portfolio/new-9.jpg";
import img10 from "@/assets/portfolio/new-10.jpg";
import img11 from "@/assets/portfolio/new-11.jpg";
import img12 from "@/assets/portfolio/new-12.jpg";
import imgOld1 from "@/assets/portfolio/project-1.jpg";
import imgOld2 from "@/assets/portfolio/project-2.jpg";

type Project = {
  id: number;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
};

const featured: Project[] = [
  { id: 1, title: "Luxury Packaging Design", shortDesc: "Premium brand identity with gold foil finishes", fullDesc: "A comprehensive luxury packaging project featuring embossed gold finishes on dark marble surfaces. The design conveys premium quality and exclusivity through sophisticated material choices and elegant typography.", image: img1 },
  { id: 2, title: "Social Media Campaign", shortDesc: "Vibrant digital campaign with bold gradients", fullDesc: "A high-energy social media campaign featuring bold typography overlaid on colorful abstract gradients. Designed to capture attention across Instagram, Facebook, and TikTok with scroll-stopping visuals.", image: img2 },
  { id: 3, title: "Artisan Coffee Branding", shortDesc: "Dark roast packaging with heritage aesthetics", fullDesc: "Complete brand identity for a premium artisan coffee brand, featuring rich dark tones with gold accents. The packaging design communicates tradition, quality, and the craft of Ethiopian coffee culture.", image: img3 },
  { id: 4, title: "Award Ceremony Visual", shortDesc: "Golden stage design for prestigious event", fullDesc: "Dramatic visual identity for a major award ceremony, featuring golden spotlight effects and cinematic typography. The design captures the prestige and glamour of a red-carpet event.", image: img4 },
  { id: 5, title: "Real Estate Campaign", shortDesc: "Modern architectural branding with sunset tones", fullDesc: "An elegant real estate marketing campaign featuring contemporary architecture bathed in golden sunset light. The minimalist approach highlights the premium quality of the property.", image: img5 },
  { id: 6, title: "Beauty Brand Identity", shortDesc: "Rose gold cosmetics product visualization", fullDesc: "A luxurious beauty brand identity featuring rose gold product photography with soft, elegant lighting. The cohesive product line design communicates sophistication and modern femininity.", image: img6 },
];

const allProjects: Project[] = [
  { id: 101, title: "Restaurant Menu Design", shortDesc: "Elegant dining brand identity", fullDesc: "A premium restaurant menu design featuring sophisticated food photography on a dark background. The layout balances elegance with readability for an upscale dining experience.", image: img7 },
  { id: 102, title: "Fashion Lookbook", shortDesc: "Editorial fashion photography layout", fullDesc: "A striking fashion lookbook cover with minimalist black and white editorial design. The silhouette-based approach creates a dramatic and memorable visual statement.", image: img8 },
  { id: 103, title: "Wine Label Collection", shortDesc: "Premium vineyard branding series", fullDesc: "An artisan wine label collection featuring hand-illustrated mountain landscapes with gold foil accents. Each label tells the story of the vineyard's heritage.", image: img9 },
  { id: 104, title: "Tech Startup Branding", shortDesc: "Clean corporate identity system", fullDesc: "A modern corporate identity system for a tech startup, featuring clean blue and white geometric patterns across stationery, business cards, and digital assets.", image: img10 },
  { id: 105, title: "Juice Brand Packaging", shortDesc: "Vibrant tropical product design", fullDesc: "A colorful juice brand packaging design that captures the freshness of tropical fruits. The vibrant color palette and playful typography appeal to health-conscious consumers.", image: img11 },
  { id: 106, title: "Hotel Brand Campaign", shortDesc: "Five-star hospitality visual", fullDesc: "A luxurious hotel brand campaign showcasing the grand lobby with crystal chandeliers and warm golden lighting. The photography conveys the five-star experience.", image: img12 },
  { id: 107, title: "Book Launch Poster", shortDesc: "Eye-catching promotional graphic", fullDesc: "A bold book launch promotional design with creative typography and compelling visual elements designed to generate buzz and drive pre-orders.", image: imgOld1 },
  { id: 108, title: "Education Campaign", shortDesc: "Informative awareness design", fullDesc: "An engaging educational awareness campaign design targeting youth audiences with informative and visually appealing graphics.", image: imgOld2 },
];

const FeaturedWorks = () => {
  const [selected, setSelected] = useState<Project | null>(null);
  const allRef = useRef<HTMLDivElement>(null);

  const scrollToAll = () => {
    setSelected(null);
    setTimeout(() => {
      allRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 300);
  };

  return (
    <>
      {/* ── Featured Works ── */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block text-primary text-sm font-semibold uppercase tracking-[0.2em] mb-4"
            >
              Our Work
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground"
            >
              Featured Works
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto"
            >
              Ideas brought to life through bold design and creative excellence.
            </motion.p>
          </div>

          {/* 2-col grid on desktop, 1-col on mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featured.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative rounded-2xl overflow-hidden cursor-pointer"
                style={{ boxShadow: "0 0 0 0 rgba(255,153,0,0)" }}
                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 8px 40px -8px rgba(255,153,0,0.35)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "0 0 0 0 rgba(255,153,0,0)"; }}
                onClick={() => setSelected(p)}
              >
                {/* Large image */}
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Bottom overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white font-bold text-xl md:text-2xl leading-tight mb-1 drop-shadow-lg">
                    {p.title}
                  </h3>
                  <p className="text-white/70 text-sm">{p.shortDesc}</p>
                </div>

                {/* Gold border on hover */}
                <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/40 rounded-2xl transition-all duration-500 pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── All Projects ── */}
      <section ref={allRef} className="py-24 relative scroll-mt-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4"
            >
              All Projects
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground text-lg"
            >
              Explore our full creative portfolio
            </motion.p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {allProjects.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                whileHover={{ y: -4 }}
                className="group relative rounded-xl overflow-hidden cursor-pointer"
                onClick={() => setSelected(p)}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    width={1024}
                    height={1024}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <h3 className="text-white font-bold text-sm leading-tight drop-shadow-md">
                    {p.title}
                  </h3>
                </div>
                <div className="absolute inset-0 border border-primary/0 group-hover:border-primary/30 rounded-xl transition-all duration-300 pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Detail Modal ── */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/95 backdrop-blur-xl"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-3xl w-full max-h-[90vh] overflow-y-auto bg-card border border-border rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:text-primary transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="aspect-video overflow-hidden rounded-t-2xl">
                <img src={selected.image} alt={selected.title} className="w-full h-full object-cover" />
              </div>

              <div className="p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">{selected.title}</h2>
                <p className="text-muted-foreground leading-relaxed mb-8">{selected.fullDesc}</p>

                <div className="text-center">
                  <Button variant="glowOutline" size="lg" onClick={scrollToAll}>
                    View More Projects
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FeaturedWorks;
