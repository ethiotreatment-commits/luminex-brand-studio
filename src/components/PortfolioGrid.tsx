import { useState, useRef } from "react";
import { X, ExternalLink, Play, ChevronDown, ChevronUp } from "lucide-react";
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
  company?: string;
  sector?: string;
};

const imageItems: PortfolioItem[] = [
  { id: 1, title: "Book Promotional Design", category: "Graphics", type: "image", image: project1, description: "Eye-catching promotional graphic for a book launch with bold typography and creative visual elements." },
  { id: 2, title: "Educational Campaign Design", category: "Graphics", type: "image", image: project2, description: "Informative and visually engaging graphic design for an educational awareness campaign." },
  { id: 3, title: "JL Furniture Brand Campaign", category: "Branding", type: "image", image: project3, description: "Creative brand campaign featuring dreamlike cloud imagery for a furniture company." },
  { id: 4, title: "Furniture Brand Concept Art", category: "Branding", type: "image", image: project4, description: "Surreal space-themed concept art for JL Furniture showcasing creative brand storytelling." },
  { id: 5, title: "Suhan Travel Campaign", category: "Digital Marketing", type: "image", image: project5, description: "Vibrant travel agency promotional design featuring world landmarks and call-to-action." },
  { id: 6, title: "UNV Ethiopia Motivational", category: "Digital Marketing", type: "image", image: project6, description: "Powerful motivational design for UNV Ethiopia featuring bold typography and dynamic imagery." },
  { id: 7, title: "Security Camera Promo", category: "Digital Marketing", type: "image", image: project7, description: "Creative promotional design for security camera products with compelling visuals." },
  { id: 8, title: "Amibara Properties Campaign", category: "Branding", type: "image", image: project8, description: "Modern real estate promotional design for Amibara Properties featuring architectural visualization." },
  { id: 9, title: "HASED Real Estate Holiday", category: "Graphics", type: "image", image: project9, description: "Holiday greeting design for HASED Real Estate with powerful imagery and brand messaging." },
];

// Video items grouped by company/sector
type CompanyGroup = {
  company: string;
  sector: string;
  teaserCount: number;
  videos: PortfolioItem[];
};

const companyGroups: CompanyGroup[] = [
  {
    company: "Health",
    sector: "Health Sector",
    teaserCount: 2,
    videos: [
      { id: 100, title: "Health Campaign 1", category: "Video", type: "video", video: "/videos/helt_1.mp4", description: "Promotional video for a leading health institution." },
      { id: 101, title: "Health Campaign 2", category: "Video", type: "video", video: "/videos/hett_2.mp4", description: "Dynamic health awareness campaign spot." },
      { id: 102, title: "Health Campaign 3", category: "Video", type: "video", video: "/videos/cons2.mp4", description: "Corporate culture and expertise showcase." },
    ],
  },
  {
    company: "Hotels",
    sector: "Hotel & Hospitality",
    teaserCount: 2,
    videos: [
      { id: 200, title: "Hotel Experience 1", category: "Video", type: "video", video: "/videos/ho_1.mp4", description: "Luxurious hotel walkthrough and brand experience." },
      { id: 201, title: "Hotel Experience 2", category: "Video", type: "video", video: "/videos/ho2.mp4", description: "Highlights of world-class hospitality services." },
      { id: 202, title: "Hotel Experience 3", category: "Video", type: "video", video: "/videos/ho_3.mp4", description: "Capturing the elegant atmosphere and guest experience." },
    ],
  },
  {
    company: "Cafeterias",
    sector: "Cafeteria & Food",
    teaserCount: 2,
    videos: [
      { id: 300, title: "Café Vibes 1", category: "Video", type: "video", video: "/videos/caf_1.mp4", description: "Warm and inviting cafeteria brand video." },
      { id: 301, title: "Café Vibes 2", category: "Video", type: "video", video: "/videos/caf_2.mp4", description: "Showcasing the food, drinks, and cozy atmosphere." },
      { id: 302, title: "Café Vibes 3", category: "Video", type: "video", video: "/videos/caf_3.mp4", description: "A taste of the cafeteria culture and community." },
    ],
  },
  {
    company: "Consultancy",
    sector: "Consultancy Offices",
    teaserCount: 2,
    videos: [
      { id: 400, title: "Consultancy Spotlight 1", category: "Video", type: "video", video: "/videos/cons.mp4", description: "Professional consultancy firm brand overview." },
      { id: 401, title: "Consultancy Spotlight 2", category: "Video", type: "video", video: "/videos/cons2.mp4", description: "Corporate culture and expertise showcase." },
      { id: 402, title: "Consultancy Spotlight 3", category: "Video", type: "video", video: "/videos/cons3.mp4", description: "Client success stories and professional impact." },
    ],
  },
  {
    company: "Travel",
    sector: "Travel Agencies",
    teaserCount: 2,
    videos: [
      { id: 500, title: "Travel Promo 1", category: "Video", type: "video", video: "/videos/trav1.mp4", description: "Exciting travel agency promotional video." },
      { id: 501, title: "Travel Promo 2", category: "Video", type: "video", video: "/videos/trav_2.mp4", description: "Destination highlights and travel experiences." },
      { id: 502, title: "Travel Promo 3", category: "Video", type: "video", video: "/videos/trav_3.mp4", description: "Adventure and wanderlust brand campaign." },
      { id: 503, title: "Travel Promo 4", category: "Video", type: "video", video: "/videos/trav_4.mp4", description: "Travel stories and destination showcase." },
      { id: 504, title: "Travel Promo 5", category: "Video", type: "video", video: "/videos/1.mp4", description: "Vibrant travel destination highlights." },
      { id: 505, title: "Travel Promo 6", category: "Video", type: "video", video: "/videos/2.mp4", description: "Wanderlust-inspiring travel campaign." },
      { id: 506, title: "Travel Promo 7", category: "Video", type: "video", video: "/videos/5.mp4", description: "Scenic travel experiences and adventures." },
      { id: 507, title: "Travel Promo 8", category: "Video", type: "video", video: "/videos/7.mp4", description: "Cultural travel exploration showcase." },
    ],
  },
];

const allPortfolioItems: PortfolioItem[] = [
  ...imageItems,
  ...companyGroups.flatMap((g) => g.videos),
];

interface PortfolioGridProps {
  limit?: number;
  showFilters?: boolean;
  showViewMore?: boolean;
}

const PortfolioGrid = ({ limit, showFilters = true, showViewMore = false }: PortfolioGridProps) => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [expandedCompanies, setExpandedCompanies] = useState<Set<string>>(new Set());

  const showImages = activeCategory === "All" || activeCategory !== "Video";
  const showVideos = activeCategory === "All" || activeCategory === "Video";

  const filteredImages = imageItems.filter(
    (item) => activeCategory === "All" || item.category === activeCategory
  );

  const displayImages = limit && !showVideos ? filteredImages.slice(0, limit) : filteredImages;

  const toggleCompany = (company: string) => {
    setExpandedCompanies((prev) => {
      const next = new Set(prev);
      if (next.has(company)) next.delete(company);
      else next.add(company);
      return next;
    });
  };

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

      {/* Image grid */}
      {showImages && activeCategory !== "Video" && displayImages.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {displayImages.map((item, index) => (
            <ImageCard key={item.id} item={item} index={index} onClick={() => setSelectedItem(item)} />
          ))}
        </div>
      )}

      {/* Video company groups */}
      {showVideos && (
        <div className="space-y-16">
          {activeCategory !== "Video" && filteredImages.length > 0 && (
            <div className="flex items-center gap-4">
              <div className="h-px flex-1 bg-border" />
              <h3 className="text-lg font-semibold text-primary uppercase tracking-wider">Video Portfolio</h3>
              <div className="h-px flex-1 bg-border" />
            </div>
          )}

          {companyGroups.map((group) => {
            const isExpanded = expandedCompanies.has(group.company);
            const visibleVideos = isExpanded ? group.videos : group.videos.slice(0, group.teaserCount);
            const hasMore = group.videos.length > group.teaserCount;

            return (
              <div key={group.company} className="space-y-6">
                {/* Company header */}
                <div>
                  <h3 className="text-2xl font-bold text-foreground">{group.sector}</h3>
                </div>

                {/* Video grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                  {visibleVideos.map((item, index) => (
                    <VideoCard key={item.id} item={item} index={index} onClick={() => setSelectedItem(item)} />
                  ))}
                </div>

                {/* View More / Less */}
                {hasMore && (
                  <button
                    onClick={() => toggleCompany(group.company)}
                    className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all duration-300"
                  >
                    {isExpanded ? (
                      <>Show Less <ChevronUp className="w-4 h-4" /></>
                    ) : (
                      <>View More ({group.videos.length - group.teaserCount} more) <ChevronDown className="w-4 h-4" /></>
                    )}
                  </button>
                )}
              </div>
            );
          })}
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
      style={{ animationDelay: `${index * 80}ms`, animationFillMode: "forwards" }}
      onClick={onClick}
      onMouseEnter={() => videoRef.current?.play()}
      onMouseLeave={() => { if (videoRef.current) { videoRef.current.pause(); videoRef.current.currentTime = 0; } }}
    >
      <video ref={videoRef} src={item.video} muted loop playsInline preload="metadata" className="scan-brighten w-full h-full object-cover transition-all duration-700 group-hover:scale-105" />
      <div className="scan-bar absolute top-0 bottom-0 w-[30%] pointer-events-none z-[2]" style={{ left: "-30%", opacity: 0, background: "linear-gradient(90deg, transparent, hsl(36 100% 50% / 0.25), hsl(36 100% 50% / 0.4), hsl(36 100% 50% / 0.25), transparent)" }} />
      <div className="absolute inset-0 flex items-center justify-center z-[3] pointer-events-none">
        <div className="w-12 h-12 rounded-full bg-primary/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100 shadow-lg shadow-primary/30">
          <Play className="w-5 h-5 text-primary-foreground ml-0.5" />
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
      <div className="absolute inset-0 p-4 flex flex-col justify-end z-[3]">
        <h3 className="text-foreground font-bold text-sm leading-tight">{item.title}</h3>
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
      <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
      <p className="text-muted-foreground text-sm mt-2">{item.description}</p>
    </div>
  </div>
);

export default PortfolioGrid;
