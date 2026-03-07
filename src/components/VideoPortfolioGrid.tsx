import { useState, useRef } from "react";
import { X, Play } from "lucide-react";
import { cn } from "@/lib/utils";

const videoCategories = ["All", "Branding Videos", "Marketing Ads", "Explainer Videos", "Social Media Content", "Event Highlights"];

const videoItems = [
  {
    id: 1,
    title: "Brand Story — Luminex",
    category: "Branding Videos",
    video: "/videos/1.mp4",
    description: "A cinematic brand story showcasing Luminex's creative journey and mission.",
  },
  {
    id: 2,
    title: "Product Launch Campaign",
    category: "Marketing Ads",
    video: "/videos/2.mp4",
    description: "High-energy product launch ad designed to drive engagement and conversions.",
  },
  {
    id: 3,
    title: "How It Works — Explainer",
    category: "Explainer Videos",
    video: "/videos/15-2.mp4",
    description: "Clear and engaging explainer video breaking down a complex service offering.",
  },
  {
    id: 4,
    title: "Social Media Reel",
    category: "Social Media Content",
    video: "/videos/8.mp4",
    description: "Scroll-stopping social media reel crafted for maximum reach and engagement.",
  },
  {
    id: 5,
    title: "Event Recap — Annual Gala",
    category: "Event Highlights",
    video: "/videos/6.mp4",
    description: "Beautifully captured highlights from a prestigious annual gala event.",
  },
  {
    id: 6,
    title: "Brand Identity Reveal",
    category: "Branding Videos",
    video: "/videos/17_1.mp4",
    description: "Dramatic reveal of a complete brand identity transformation.",
  },
  {
    id: 7,
    title: "Digital Ad Campaign",
    category: "Marketing Ads",
    video: "/videos/14.mp4",
    description: "Performance-driven digital advertisement for a cross-platform campaign.",
  },
  {
    id: 8,
    title: "Behind the Scenes",
    category: "Social Media Content",
    video: "/videos/13_1.mp4",
    description: "Authentic behind-the-scenes content showing the creative process.",
  },
  {
    id: 9,
    title: "Corporate Overview",
    category: "Explainer Videos",
    video: "/videos/16.mp4",
    description: "Professional corporate overview video for investor and partner presentations.",
  },
  {
    id: 10,
    title: "Conference Highlights",
    category: "Event Highlights",
    video: "/videos/18.mp4",
    description: "Dynamic highlights reel from a major industry conference.",
  },
];

interface VideoPortfolioGridProps {
  limit?: number;
  showFilters?: boolean;
}

const VideoPortfolioGrid = ({ limit, showFilters = true }: VideoPortfolioGridProps) => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedVideo, setSelectedVideo] = useState<typeof videoItems[0] | null>(null);

  const filteredItems = videoItems.filter(
    (item) => activeCategory === "All" || item.category === activeCategory
  );

  const displayItems = limit ? filteredItems.slice(0, limit) : filteredItems;

  return (
    <>
      {showFilters && (
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {videoCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-medium transition-all duration-300",
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayItems.map((item, index) => (
          <VideoThumbnail
            key={item.id}
            item={item}
            index={index}
            onClick={() => setSelectedVideo(item)}
          />
        ))}
      </div>

      {/* Video Lightbox Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/95 backdrop-blur-xl animate-fade-in"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="relative max-w-5xl w-full bg-card border border-border rounded-2xl overflow-hidden animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-background/80 flex items-center justify-center text-foreground hover:text-primary transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="aspect-video bg-black">
              <video
                src={selectedVideo.video}
                controls
                autoPlay
                className="w-full h-full object-contain"
              />
            </div>
            <div className="p-6">
              <span className="text-primary text-xs font-semibold uppercase tracking-wider mb-1 block">
                {selectedVideo.category}
              </span>
              <h3 className="text-xl font-bold text-foreground mb-2">
                {selectedVideo.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {selectedVideo.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

/* Thumbnail with hover play icon and video preview */
const VideoThumbnail = ({
  item,
  index,
  onClick,
}: {
  item: typeof videoItems[0];
  index: number;
  onClick: () => void;
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div
      className="portfolio-scan group relative aspect-video rounded-xl overflow-hidden cursor-pointer card-glow opacity-0 animate-fade-in"
      style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
      onClick={onClick}
      onMouseEnter={() => videoRef.current?.play()}
      onMouseLeave={() => {
        if (videoRef.current) {
          videoRef.current.pause();
          videoRef.current.currentTime = 0;
        }
      }}
    >
      {/* Video as thumbnail — muted autoplay on hover */}
      <video
        ref={videoRef}
        src={item.video}
        muted
        loop
        playsInline
        preload="metadata"
        className="scan-brighten w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
      />

      {/* Scan bar */}
      <div
        className="scan-bar absolute top-0 bottom-0 w-[30%] pointer-events-none z-[2]"
        style={{
          left: "-30%",
          opacity: 0,
          background:
            "linear-gradient(90deg, transparent, hsl(36 100% 50% / 0.25), hsl(36 100% 50% / 0.4), hsl(36 100% 50% / 0.25), transparent)",
        }}
      />

      {/* Play icon overlay */}
      <div className="absolute inset-0 flex items-center justify-center z-[3] pointer-events-none">
        <div className="w-14 h-14 rounded-full bg-primary/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100 shadow-lg shadow-primary/30">
          <Play className="w-6 h-6 text-primary-foreground ml-1" />
        </div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

      {/* Content */}
      <div className="absolute inset-0 p-5 flex flex-col justify-end z-[3]">
        <span className="text-primary text-xs font-semibold uppercase tracking-wider mb-1">
          {item.category}
        </span>
        <h3 className="text-foreground font-bold text-base leading-tight">
          {item.title}
        </h3>
      </div>

      {/* Border glow */}
      <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/40 rounded-xl transition-all duration-500" />
    </div>
  );
};

export default VideoPortfolioGrid;
