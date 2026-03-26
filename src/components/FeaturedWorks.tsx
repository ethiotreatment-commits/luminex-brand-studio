import { useState, useRef } from "react";
import { X, ArrowRight, Calendar, Wrench, Building2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import luminexLogo from "@/assets/luminex-logo.png";

// Featured project images
import featured1 from "@/assets/portfolio/featured-1.jpg";
import featured2 from "@/assets/portfolio/featured-2.png";
import featured3 from "@/assets/portfolio/featured-3.jpg";
import featured4 from "@/assets/portfolio/featured-4.jpg";
import featured5 from "@/assets/portfolio/featured-5.jpg";
import featured6 from "@/assets/portfolio/featured-6.png";

// All projects images
import all1 from "@/assets/portfolio/all-1.png";
import all2 from "@/assets/portfolio/all-2.png";
import all3 from "@/assets/portfolio/all-3.png";
import all4 from "@/assets/portfolio/all-4.png";
import project1 from "@/assets/portfolio/project-1.jpg";
import project2 from "@/assets/portfolio/project-2.jpg";
import project3 from "@/assets/portfolio/project-3.jpg";
import project4 from "@/assets/portfolio/project-4.jpg";
import project5 from "@/assets/portfolio/project-5.jpg";
import project6 from "@/assets/portfolio/project-6.jpg";
import project7 from "@/assets/portfolio/project-7.jpg";
import project8 from "@/assets/portfolio/project-8.jpg";

type Project = {
  id: number;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  gallery?: string[];
  category: string;
  tags: string[];
  client: string;
  year: string;
  tools: string;
  featured?: boolean;
};

const featuredProjects: Project[] = [
  {
    id: 1,
    title: "Hud Hud Express Campaign",
    shortDescription: "Bold delivery service branding with dynamic visual storytelling",
    fullDescription: "A comprehensive brand campaign for Hud Hud Express delivery service, featuring vibrant orange themes, 3D elements, and dynamic compositions that communicate speed and reliability. The campaign included social media assets, print materials, and digital advertisements.",
    image: featured1,
    gallery: [featured1],
    category: "Branding",
    tags: ["Branding", "Digital", "Print"],
    client: "Hud Hud Express",
    year: "2025",
    tools: "Photoshop, Illustrator, After Effects",
    featured: true,
  },
  {
    id: 2,
    title: "Ethio Real Estate Award 2026",
    shortDescription: "Premium award ceremony visual identity and promotional design",
    fullDescription: "Designed the complete visual identity for the Ethio Real Estate Award 2026, featuring luxurious gold 3D trophy renders, dramatic lighting, and bilingual typography. The campaign conveyed prestige and excellence across all touchpoints.",
    image: featured2,
    gallery: [featured2],
    category: "Branding",
    tags: ["Branding", "Digital"],
    client: "Ethio Real Estate",
    year: "2026",
    tools: "Blender, Photoshop, Illustrator",
    featured: true,
  },
  {
    id: 3,
    title: "Ethio Cup Sports Campaign",
    shortDescription: "High-energy sports branding with architectural elements",
    fullDescription: "A bold sports marketing campaign combining athletic energy with urban architecture, creating a unique visual narrative that celebrates Ethiopian sports culture. The design featured dynamic compositions with soccer imagery and modern cityscapes.",
    image: featured3,
    gallery: [featured3],
    category: "Digital",
    tags: ["Digital", "Branding"],
    client: "Ethio Cup",
    year: "2025",
    tools: "Photoshop, Lightroom, Illustrator",
    featured: true,
  },
  {
    id: 4,
    title: "Commercepal Delivery Rebrand",
    shortDescription: "Modern e-commerce delivery brand with vintage-inspired aesthetics",
    fullDescription: "Complete rebranding for Commercepal's delivery service, blending vintage-inspired purple aesthetics with modern e-commerce functionality. The campaign emphasized speed and reliability through creative visual metaphors including retro scooters and timepieces.",
    image: featured4,
    gallery: [featured4],
    category: "Branding",
    tags: ["Branding", "Print", "Digital"],
    client: "Commercepal",
    year: "2025",
    tools: "Photoshop, Illustrator, Figma",
    featured: true,
  },
  {
    id: 5,
    title: "Beton Group Exhibition",
    shortDescription: "Immersive VR-themed exhibition campaign for construction leader",
    fullDescription: "Created an innovative exhibition campaign for Beton Group at FINTEX, featuring VR-themed visuals that showcase the company's forward-thinking approach to construction and real estate. The design merged technology with tradition.",
    image: featured5,
    gallery: [featured5],
    category: "Digital",
    tags: ["Digital", "Print", "Branding"],
    client: "Beton Group",
    year: "2025",
    tools: "Photoshop, Cinema 4D, After Effects",
    featured: true,
  },
  {
    id: 6,
    title: "Zota Furniture Kitchen Line",
    shortDescription: "Elegant product visualization for premium furniture brand",
    fullDescription: "Designed a creative product campaign for Zota Furniture's kitchen line, using miniature world concepts to showcase kitchen designs in an engaging and memorable way. The campaign stood out with its unique perspective and warm color palette.",
    image: featured6,
    gallery: [featured6],
    category: "Print",
    tags: ["Print", "Photography", "Branding"],
    client: "Zota Furniture",
    year: "2025",
    tools: "Photoshop, Lightroom, Illustrator",
    featured: true,
  },
];

const allProjects: Project[] = [
  {
    id: 101,
    title: "JL Furniture Space Concept",
    shortDescription: "Surreal space-themed brand storytelling",
    fullDescription: "A surreal space-themed concept art piece for JL Furniture, placing their products in an otherworldly lunar setting to highlight comfort anywhere in the universe.",
    image: all1,
    category: "Branding",
    tags: ["Branding", "Digital"],
    client: "JL Furniture",
    year: "2024",
    tools: "Photoshop, Blender",
  },
  {
    id: 102,
    title: "Wersi Coffee Brand Identity",
    shortDescription: "Bold coffee brand with military-inspired concept",
    fullDescription: "A striking brand campaign for Wersi Coffee using military-inspired imagery to convey the boldness and strength of Ethiopian coffee culture.",
    image: all2,
    category: "Branding",
    tags: ["Branding", "Print"],
    client: "Wersi Buna",
    year: "2024",
    tools: "Photoshop, Illustrator",
  },
  {
    id: 103,
    title: "Holland Yoghurt Natural",
    shortDescription: "Fresh organic product visualization",
    fullDescription: "A fresh and natural product visualization for Holland Yoghurt, using miniature farm elements to emphasize the organic and natural qualities of the product.",
    image: all3,
    category: "Print",
    tags: ["Print", "Photography"],
    client: "Holland Yoghurt",
    year: "2025",
    tools: "Photoshop, Lightroom",
  },
  {
    id: 104,
    title: "UNV Ethiopia Security",
    shortDescription: "Tech product promotion with night-sky aesthetic",
    fullDescription: "A dramatic nighttime promotional design for UNV Ethiopia security cameras, emphasizing clarity and 360° coverage with celestial imagery.",
    image: all4,
    category: "Digital",
    tags: ["Digital", "Print"],
    client: "Team Y Trading",
    year: "2025",
    tools: "Photoshop, Illustrator",
  },
  {
    id: 105,
    title: "Book Launch Promotion",
    shortDescription: "Eye-catching book promotional design",
    fullDescription: "Eye-catching promotional graphic for a book launch with bold typography and creative visual elements that capture attention.",
    image: project1,
    category: "Print",
    tags: ["Print", "Digital"],
    client: "Publishing House",
    year: "2024",
    tools: "Photoshop, InDesign",
  },
  {
    id: 106,
    title: "Education Awareness Campaign",
    shortDescription: "Informative and engaging campaign design",
    fullDescription: "Informative and visually engaging graphic design for an educational awareness campaign targeting youth audiences.",
    image: project2,
    category: "Digital",
    tags: ["Digital", "Print"],
    client: "Education Ministry",
    year: "2024",
    tools: "Illustrator, Photoshop",
  },
  {
    id: 107,
    title: "JL Furniture Cloud Series",
    shortDescription: "Dreamlike brand campaign for furniture",
    fullDescription: "Creative brand campaign featuring dreamlike cloud imagery for a furniture company, evoking comfort and luxury.",
    image: project3,
    category: "Branding",
    tags: ["Branding", "Digital"],
    client: "JL Furniture",
    year: "2024",
    tools: "Photoshop, Cinema 4D",
  },
  {
    id: 108,
    title: "Suhan Travel Adventures",
    shortDescription: "Vibrant travel agency promotional design",
    fullDescription: "Vibrant travel agency promotional design featuring world landmarks and compelling calls-to-action for adventure seekers.",
    image: project5,
    category: "Digital",
    tags: ["Digital", "Print"],
    client: "Suhan Travel",
    year: "2025",
    tools: "Photoshop, Illustrator",
  },
  {
    id: 109,
    title: "Security Solutions Campaign",
    shortDescription: "Compelling security product visuals",
    fullDescription: "Creative promotional design for security camera products with compelling visuals that highlight technology and reliability.",
    image: project7,
    category: "Digital",
    tags: ["Digital", "Print"],
    client: "Security Solutions",
    year: "2024",
    tools: "Photoshop, Illustrator",
  },
  {
    id: 110,
    title: "Amibara Properties",
    shortDescription: "Modern real estate promotional design",
    fullDescription: "Modern real estate promotional design for Amibara Properties featuring architectural visualization and premium aesthetics.",
    image: project8,
    category: "Branding",
    tags: ["Branding", "Print"],
    client: "Amibara Properties",
    year: "2025",
    tools: "Photoshop, SketchUp",
  },
  {
    id: 111,
    title: "HASED Holiday Greeting",
    shortDescription: "Festive real estate holiday campaign",
    fullDescription: "Holiday greeting design for HASED Real Estate with powerful imagery and brand messaging that resonates with clients.",
    image: project4,
    category: "Print",
    tags: ["Print", "Branding"],
    client: "HASED Real Estate",
    year: "2024",
    tools: "Photoshop, Illustrator",
  },
  {
    id: 112,
    title: "UNV Motivational Series",
    shortDescription: "Bold motivational design series",
    fullDescription: "Powerful motivational design series for UNV Ethiopia featuring bold typography and dynamic imagery that inspires action.",
    image: project6,
    category: "Digital",
    tags: ["Digital", "Branding"],
    client: "UNV Ethiopia",
    year: "2025",
    tools: "Photoshop, Illustrator",
  },
];

const filterCategories = ["All", "Branding", "Digital", "Print", "Photography"];

const FeaturedWorks = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState("All");
  const allProjectsRef = useRef<HTMLDivElement>(null);

  const filteredAll = activeFilter === "All"
    ? allProjects
    : allProjects.filter(p => p.tags.includes(activeFilter) || p.category === activeFilter);

  const scrollToAllProjects = () => {
    setSelectedProject(null);
    setTimeout(() => {
      allProjectsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 300);
  };

  return (
    <>
      {/* Featured Works Section */}
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

          {/* Featured Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative rounded-2xl overflow-hidden cursor-pointer bg-card border border-border"
                style={{ boxShadow: "0 0 0 0 rgba(255,153,0,0)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 8px 40px -8px rgba(255,153,0,0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "0 0 0 0 rgba(255,153,0,0)";
                }}
                onClick={() => setSelectedProject(project)}
              >
                {/* Image */}
                <div className="aspect-square overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Luminex logo badge */}
                  <div className="absolute top-3 right-3 z-10 w-10 h-10 rounded-full bg-background/60 backdrop-blur-sm flex items-center justify-center">
                    <img src={luminexLogo} alt="" className="w-7 h-7 object-contain mix-blend-lighten" />
                  </div>
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-semibold uppercase tracking-wider text-primary/80 bg-primary/10 px-2 py-0.5 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-foreground font-bold text-lg leading-tight mb-1">{project.title}</h3>
                  <p className="text-muted-foreground text-sm line-clamp-2">{project.shortDescription}</p>
                  <div className="mt-4 flex items-center gap-2 text-primary text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    View Project <ArrowRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Border glow */}
                <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/40 rounded-2xl transition-all duration-500 pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects Section */}
      <section ref={allProjectsRef} className="py-24 relative scroll-mt-24">
        <div className="container mx-auto px-6 relative">
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

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filterCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={cn(
                  "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300",
                  activeFilter === cat
                    ? "bg-primary text-primary-foreground shadow-[0_0_20px_rgba(255,153,0,0.3)]"
                    : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/50"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* All Projects Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredAll.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                whileHover={{ y: -4 }}
                className="group relative rounded-xl overflow-hidden cursor-pointer bg-card border border-border"
                onClick={() => setSelectedProject(project)}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <div className="flex flex-wrap gap-1 mb-1">
                    {project.tags.slice(0, 2).map(tag => (
                      <span key={tag} className="text-[9px] font-semibold uppercase tracking-wider text-primary/70">
                        {tag}
                        {project.tags.indexOf(tag) < Math.min(project.tags.length, 2) - 1 && " •"}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-foreground font-bold text-sm leading-tight">{project.title}</h3>
                </div>
                <div className="absolute inset-0 border border-primary/0 group-hover:border-primary/30 rounded-xl transition-all duration-300 pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/95 backdrop-blur-xl"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-card border border-border rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:text-primary transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Hero image */}
              <div className="relative aspect-video md:aspect-[16/10] overflow-hidden rounded-t-2xl">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 -mt-16 relative">
                <div className="flex flex-wrap gap-2 mb-3">
                  {selectedProject.tags.map(tag => (
                    <span key={tag} className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {selectedProject.title}
                </h2>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  {selectedProject.fullDescription}
                </p>

                {/* Meta info */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                  <div className="flex items-center gap-3 bg-background/50 rounded-xl p-4 border border-border">
                    <Building2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">Client</p>
                      <p className="text-foreground font-semibold text-sm">{selectedProject.client}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-background/50 rounded-xl p-4 border border-border">
                    <Calendar className="w-5 h-5 text-primary flex-shrink-0" />
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">Year</p>
                      <p className="text-foreground font-semibold text-sm">{selectedProject.year}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-background/50 rounded-xl p-4 border border-border">
                    <Wrench className="w-5 h-5 text-primary flex-shrink-0" />
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">Tools</p>
                      <p className="text-foreground font-semibold text-sm">{selectedProject.tools}</p>
                    </div>
                  </div>
                </div>

                {/* View More Projects */}
                <div className="text-center">
                  <Button variant="glowOutline" size="lg" onClick={scrollToAllProjects}>
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
