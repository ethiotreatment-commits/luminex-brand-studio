import { useState, useRef } from "react";
import { X, ArrowRight, Play, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

// Featured images
import img1 from "@/assets/portfolio/project-1.jpg";
import img2 from "@/assets/portfolio/project-2.jpg";
import img3 from "@/assets/portfolio/project-3.jpg";
import img4 from "@/assets/portfolio/project-4.jpg";
import img5 from "@/assets/portfolio/project-5.jpg";
import img6 from "@/assets/portfolio/project-6.jpg";

// All projects images
import img7 from "@/assets/portfolio/project-7.jpg";
import img8 from "@/assets/portfolio/project-8.jpg";
import img9 from "@/assets/portfolio/project-9.jpg";
import img10 from "@/assets/portfolio/project-10.jpg";

type Project = {
  id: number;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
};

const featured: Project[] = [
  { id: 1, title: "Zota Furniture Campaign", shortDesc: "Creative kitchen branding with miniature concept", fullDesc: "A stunning creative concept for Zota Furniture featuring a miniature kitchen on a plate, blending culinary and furniture aesthetics in a memorable visual metaphor.", image: img1 },
  { id: 2, title: "Holland Yoghurt Branding", shortDesc: "Natural dairy product visual identity", fullDesc: "A fresh and organic product visualization for Holland Yoghurt, featuring pastoral imagery with grazing cows and lush greenery to communicate natural goodness.", image: img2 },
  { id: 3, title: "Leyu Tour Travel Campaign", shortDesc: "Ethiopian tourism suitcase concept art", fullDesc: "An imaginative travel campaign for Leyu Tour featuring a suitcase filled with Ethiopian landscapes, wildlife, and adventure — inviting travelers to discover Ras Dashen.", image: img3 },
  { id: 4, title: "Coffee Brand Identity", shortDesc: "Bold artisan coffee packaging design", fullDesc: "A powerful coffee brand campaign featuring a military helmet made of coffee beans, communicating strength and boldness of the Ethiopian coffee culture.", image: img4 },
  { id: 5, title: "JL Furniture Heritage Design", shortDesc: "Ethiopian-inspired furniture brand visual", fullDesc: "A rich and cultural furniture brand campaign blending traditional Ethiopian art with modern interior design, featuring warm tones and cultural motifs.", image: img5 },
  { id: 6, title: "UNV Security Campaign", shortDesc: "Night vision security product promo", fullDesc: "A dramatic product campaign for UNV Ethiopia security cameras, featuring moonlit nightscapes and bold typography emphasizing crystal-clear surveillance.", image: img6 },
];

const allProjects: Project[] = [
  { id: 101, title: "Leyu Tour Flight Campaign", shortDesc: "Aviation-themed travel visual", fullDesc: "An ethereal travel campaign featuring an airplane window revealing Ethiopian waterfalls and lush landscapes, combining flight imagery with natural wonder.", image: img7 },
  { id: 102, title: "JL Furniture Space Concept", shortDesc: "Astronaut-themed furniture art", fullDesc: "A surreal and creative furniture brand concept featuring an astronaut relaxing on a leather sofa on the moon, with Earth visible through a golden frame.", image: img8 },
  { id: 103, title: "HudHud Express Delivery", shortDesc: "Vibrant logistics brand campaign", fullDesc: "A high-energy delivery service campaign for HudHud Express featuring bold orange branding, dynamic road imagery, and a compelling call-to-action.", image: img9 },
  { id: 104, title: "Beton Group VR Campaign", shortDesc: "Construction expo promotional design", fullDesc: "An innovative expo campaign for Beton Group featuring VR technology showcase, highlighting their architectural portfolio in a futuristic presentation.", image: img10 },
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
