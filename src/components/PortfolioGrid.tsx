import { useState } from "react";
import { X, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

const categories = ["All", "Graphics", "Video", "Digital Marketing", "Branding"];

const portfolioItems = [
  {
    id: 1,
    title: "Ethiopian Coffee Brand Identity",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80",
    description: "Complete brand identity design for a premium Ethiopian coffee exporter, featuring hidden coffee bean motifs in the logo.",
  },
  {
    id: 2,
    title: "Tech Startup Launch Campaign",
    category: "Digital Marketing",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
    description: "Multi-platform digital marketing campaign that increased brand awareness by 250%.",
  },
  {
    id: 3,
    title: "Luxury Hotel Promotional Video",
    category: "Video",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80",
    description: "Cinematic promotional video showcasing the elegance and heritage of a 5-star resort.",
  },
  {
    id: 4,
    title: "Annual Report Design",
    category: "Graphics",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&q=80",
    description: "Modern, data-driven annual report design with custom infographics and illustrations.",
  },
  {
    id: 5,
    title: "Fashion Brand Visual Identity",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    description: "Elegant visual identity for a contemporary Ethiopian fashion label.",
  },
  {
    id: 6,
    title: "Documentary Production",
    category: "Video",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&q=80",
    description: "Award-winning documentary highlighting cultural heritage and modern innovation.",
  },
  {
    id: 7,
    title: "E-commerce Social Campaign",
    category: "Digital Marketing",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=80",
    description: "Comprehensive social media strategy that drove 400% increase in online sales.",
  },
  {
    id: 8,
    title: "Restaurant Menu Design",
    category: "Graphics",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80",
    description: "Sophisticated menu design blending traditional aesthetics with modern typography.",
  },
];

interface PortfolioGridProps {
  limit?: number;
  showFilters?: boolean;
}

const PortfolioGrid = ({ limit, showFilters = true }: PortfolioGridProps) => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState<typeof portfolioItems[0] | null>(null);

  const filteredItems = portfolioItems.filter(
    (item) => activeCategory === "All" || item.category === activeCategory
  );

  const displayItems = limit ? filteredItems.slice(0, limit) : filteredItems;

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
        {displayItems.map((item, index) => (
          <div
            key={item.id}
            className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer card-glow opacity-0 animate-fade-in"
            style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
            onClick={() => setSelectedItem(item)}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Content */}
            <div className="absolute inset-0 p-6 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
              <span className="text-primary text-xs font-semibold uppercase tracking-wider mb-2">
                {item.category}
              </span>
              <h3 className="text-foreground font-bold text-lg leading-tight">
                {item.title}
              </h3>
            </div>

            {/* Glow effect */}
            <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/50 rounded-xl transition-all duration-500" />
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/95 backdrop-blur-xl animate-fade-in"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-card border border-border rounded-2xl overflow-hidden animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-background/80 flex items-center justify-center text-foreground hover:text-primary transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid md:grid-cols-2">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="w-full h-64 md:h-full object-cover"
              />
              <div className="p-8 flex flex-col justify-center">
                <span className="text-primary text-xs font-semibold uppercase tracking-wider mb-2">
                  {selectedItem.category}
                </span>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {selectedItem.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {selectedItem.description}
                </p>
                <button className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300">
                  View Full Project
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PortfolioGrid;
