import { useState, useRef } from "react";
import { X, ExternalLink, Play } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

// Import portfolio images
import project1 from "@/assets/portfolio/project-1.jpg";
import project2 from "@/assets/portfolio/project-2.jpg";
import project3 from "@/assets/portfolio/project-3.jpg";
import project4 from "@/assets/portfolio/project-4.jpg";
import project5 from "@/assets/portfolio/project-5.jpg";
import project6 from "@/assets/portfolio/project-6.jpg";
import project7 from "@/assets/portfolio/project-7.jpg";
import project8 from "@/assets/portfolio/project-8.jpg";
import project9 from "@/assets/portfolio/project-9.jpg";

const categories = ["All", "Graphics", "Branding", "Digital Marketing", "Video"];

type PortfolioItem = {
  id: number;
  title: string;
  category: string;
  description: string;
  type: "image" | "video";
  image?: string;
  video?: string;
};

const portfolioItems: PortfolioItem[] = [
  { id: 1, title: "Book Promotional Design", category: "Graphics", type: "image", image: project1, description: "Eye-catching promotional graphic for a book launch with bold typography and creative visual elements." },
  { id: 2, title: "Educational Campaign Design", category: "Graphics", type: "image", image: project2, description: "Informative and visually engaging graphic design for an educational awareness campaign." },
  { id: 3, title: "JL Furniture Brand Campaign", category: "Branding", type: "image", image: project3, description: "Creative brand campaign featuring dreamlike cloud imagery for a furniture company." },
  { id: 4, title: "Furniture Brand Concept Art", category: "Branding", type: "image", image: project4, description: "Surreal space-themed concept art for JL Furniture showcasing creative brand storytelling." },
  { id: 5, title: "Suhan Travel Campaign", category: "Digital Marketing", type: "image", image: project5, description: "Vibrant travel agency promotional design featuring world landmarks and call-to-action." },
  { id: 6, title: "UNV Ethiopia Motivational", category: "Digital Marketing", type: "image", image: project6, description: "Powerful motivational design for UNV Ethiopia featuring bold typography and dynamic imagery." },
  { id: 7, title: "Security Camera Promo", category: "Digital Marketing", type: "image", image: project7, description: "Creative promotional design for security camera products with compelling visuals." },
  { id: 8, title: "Amibara Properties Campaign", category: "Branding", type: "image", image: project8, description: "Modern real estate promotional design for Amibara Properties featuring architectural visualization." },
  { id: 9, title: "HASED Real Estate Holiday", category: "Graphics", type: "image", image: project9, description: "Holiday greeting design for HASED Real Estate with powerful imagery and brand messaging." },
  // Video items
  { id: 10, title: "Brand Story — Luminex", category: "Video", type: "video", video: "/videos/1.mp4", description: "A cinematic brand story showcasing Luminex's creative journey and mission." },
  { id: 11, title: "Product Launch Campaign", category: "Video", type: "video", video: "/videos/2.mp4", description: "High-energy product launch ad designed to drive engagement and conversions." },
  { id: 12, title: "How It Works — Explainer", category: "Video", type: "video", video: "/videos/15-2.mp4", description: "Clear and engaging explainer video breaking down a complex service offering." },
  { id: 13, title: "Social Media Reel", category: "Video", type: "video", video: "/videos/8.mp4", description: "Scroll-stopping social media reel crafted for maximum reach and engagement." },
  { id: 14, title: "Event Recap — Annual Gala", category: "Video", type: "video", video: "/videos/6.mp4", description: "Beautifully captured highlights from a prestigious annual gala event." },
  { id: 15, title: "Brand Identity Reveal", category: "Video", type: "video", video: "/videos/17_1.mp4", description: "Dramatic reveal of a complete brand identity transformation." },
  { id: 16, title: "Digital Ad Campaign", category: "Video", type: "video", video: "/videos/14.mp4", description: "Performance-driven digital advertisement for a cross-platform campaign." },
  { id: 17, title: "Behind the Scenes", category: "Video", type: "video", video: "/videos/13_1.mp4", description: "Authentic behind-the-scenes content showing the creative process." },
  { id: 18, title: "Corporate Overview", category: "Video", type: "video", video: "/videos/16.mp4", description: "Professional corporate overview video for investor and partner presentations." },
  { id: 19, title: "Conference Highlights", category: "Video", type: "video", video: "/videos/18.mp4", description: "Dynamic highlights reel from a major industry conference." },
];

interface PortfolioGridProps {
  limit?: number;
  showFilters?: boolean;
  showViewMore?: boolean;
}

const PortfolioGrid = ({ limit, showFilters = true, showViewMore = false }: PortfolioGridProps) => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [showAllModal, setShowAllModal] = useState(false);

  const filteredItems = portfolioItems.filter(
    (item) => activeCategory === "All" || item.category === activeCategory
  );

  const displayItems = limit ? filteredItems.slice(0, limit) : filteredItems;
  const remainingItems = limit ? filteredItems.slice(limit) : [];

  return (
    <>
      {showFilters && (
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300",
                activeCategory === category
                  ? "bg-primary text-primary-foreground glow-box"
                  : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/50"
              )}
            >
              {category}
            </button>
          ))}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {displayItems.map((item, index) =>
          item.type === "video" ? (
            <VideoCard key={item.id} item={item} index={index} onClick={() => setSelectedItem(item)} />
          ) : (
            <ImageCard key={item.id} item={item} index={index} onClick={() => setSelectedItem(item)} />
          )
        )}
      </div>

      {showViewMore && remainingItems.length > 0 && (
        <div className="text-center mt-10">
          <Button variant="glowOutline" size="lg" onClick={() => setShowAllModal(true)}>
            View More Projects
          </Button>
        </div>
      )}

      {/* Lightbox */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/95 backdrop-blur-xl animate-fade-in"
          onClick={() => setSelectedItem(null)}
        >
          {selectedItem.type === "video" ? (
            <VideoLightbox item={selectedItem} onClose={() => setSelectedItem(null)} />
          ) : (
            <ImageLightbox item={selectedItem} onClose={() => setSelectedItem(null)} />
          )}
        </div>
      )}

      {/* View All Modal */}
      {showAllModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/95 backdrop-blur-xl animate-fade-in overflow-y-auto"
          onClick={() => setShowAllModal(false)}
        >
          <div
            className="relative max-w-6xl w-full bg-card border border-border rounded-2xl overflow-hidden animate-scale-in my-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 z-10 bg-card border-b border-border p-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-foreground">All Projects</h2>
              <button onClick={() => setShowAllModal(false)} className="w-10 h-10 rounded-full bg-background/80 flex items-center justify-center text-foreground hover:text-primary transition-colors" aria-label="Close modal">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {portfolioItems.map((item) => (
                <div
                  key={item.id}
                  className={cn("group relative rounded-xl overflow-hidden cursor-pointer", item.type === "video" ? "aspect-[9/16]" : "aspect-square")}
                  onClick={(e) => { e.stopPropagation(); setShowAllModal(false); setTimeout(() => setSelectedItem(item), 100); }}
                >
                  {item.type === "video" ? (
                    <video src={item.video} muted loop playsInline preload="metadata" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  ) : (
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="text-primary text-xs font-semibold uppercase tracking-wider">{item.category}</span>
                    <h3 className="text-foreground font-bold text-sm mt-1">{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

/* Image card */
const ImageCard = ({ item, index, onClick }: { item: PortfolioItem; index: number; onClick: () => void }) => (
  <div
    className="portfolio-scan group relative aspect-square rounded-xl overflow-hidden cursor-pointer card-glow opacity-0 animate-fade-in"
    style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
    onClick={onClick}
  >
    <img src={item.image} alt={item.title} className="scan-brighten w-full h-full object-cover transition-all duration-700 group-hover:scale-110" />
    <div className="scan-bar absolute top-0 bottom-0 w-[30%] pointer-events-none z-[2]" style={{ left: "-30%", opacity: 0, background: "linear-gradient(90deg, transparent, hsl(36 100% 50% / 0.25), hsl(36 100% 50% / 0.4), hsl(36 100% 50% / 0.25), transparent)" }} />
    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="absolute inset-0 p-6 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
      <span className="text-primary text-xs font-semibold uppercase tracking-wider mb-2">{item.category}</span>
      <h3 className="text-foreground font-bold text-lg leading-tight">{item.title}</h3>
    </div>
    <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/50 rounded-xl transition-all duration-500" />
  </div>
);

/* Video card — 9:16 portrait */
const VideoCard = ({ item, index, onClick }: { item: PortfolioItem; index: number; onClick: () => void }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  return (
    <div
      className="portfolio-scan group relative aspect-[9/16] rounded-xl overflow-hidden cursor-pointer card-glow opacity-0 animate-fade-in"
      style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
      onClick={onClick}
      onMouseEnter={() => videoRef.current?.play()}
      onMouseLeave={() => { if (videoRef.current) { videoRef.current.pause(); videoRef.current.currentTime = 0; } }}
    >
      <video ref={videoRef} src={item.video} muted loop playsInline preload="metadata" className="scan-brighten w-full h-full object-cover transition-all duration-700 group-hover:scale-105" />
      <div className="scan-bar absolute top-0 bottom-0 w-[30%] pointer-events-none z-[2]" style={{ left: "-30%", opacity: 0, background: "linear-gradient(90deg, transparent, hsl(36 100% 50% / 0.25), hsl(36 100% 50% / 0.4), hsl(36 100% 50% / 0.25), transparent)" }} />
      {/* Play icon */}
      <div className="absolute inset-0 flex items-center justify-center z-[3] pointer-events-none">
        <div className="w-14 h-14 rounded-full bg-primary/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100 shadow-lg shadow-primary/30">
          <Play className="w-6 h-6 text-primary-foreground ml-1" />
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
      <div className="absolute inset-0 p-5 flex flex-col justify-end z-[3]">
        <span className="text-primary text-xs font-semibold uppercase tracking-wider mb-1">{item.category}</span>
        <h3 className="text-foreground font-bold text-base leading-tight">{item.title}</h3>
      </div>
      <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/40 rounded-xl transition-all duration-500" />
    </div>
  );
};

/* Image lightbox */
const ImageLightbox = ({ item, onClose }: { item: PortfolioItem; onClose: () => void }) => (
  <div className="relative max-w-4xl w-full bg-card border border-border rounded-2xl overflow-hidden animate-scale-in" onClick={(e) => e.stopPropagation()}>
    <button onClick={onClose} className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-background/80 flex items-center justify-center text-foreground hover:text-primary transition-colors" aria-label="Close modal">
      <X className="w-5 h-5" />
    </button>
    <div className="grid md:grid-cols-2">
      <img src={item.image} alt={item.title} className="w-full h-64 md:h-full object-cover" />
      <div className="p-8 flex flex-col justify-center">
        <span className="text-primary text-xs font-semibold uppercase tracking-wider mb-2">{item.category}</span>
        <h3 className="text-2xl font-bold text-foreground mb-4">{item.title}</h3>
        <p className="text-muted-foreground leading-relaxed mb-6">{item.description}</p>
        <button className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300">
          View Full Project <ExternalLink className="w-4 h-4" />
        </button>
      </div>
    </div>
  </div>
);

/* Video lightbox — 9:16 portrait */
const VideoLightbox = ({ item, onClose }: { item: PortfolioItem; onClose: () => void }) => (
  <div className="relative w-full max-w-sm mx-auto animate-scale-in" onClick={(e) => e.stopPropagation()}>
    <button onClick={onClose} className="absolute -top-12 right-0 z-10 w-10 h-10 rounded-full bg-background/80 flex items-center justify-center text-foreground hover:text-primary transition-colors" aria-label="Close modal">
      <X className="w-5 h-5" />
    </button>
    <div className="aspect-[9/16] bg-black rounded-2xl overflow-hidden border border-border">
      <video src={item.video} controls autoPlay className="w-full h-full object-contain" />
    </div>
    <div className="mt-4 text-center">
      <span className="text-primary text-xs font-semibold uppercase tracking-wider">{item.category}</span>
      <h3 className="text-lg font-bold text-foreground mt-1">{item.title}</h3>
      <p className="text-muted-foreground text-sm mt-2">{item.description}</p>
    </div>
  </div>
);

export default PortfolioGrid;
