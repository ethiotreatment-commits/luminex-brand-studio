import { useState } from "react";
import { X, ExternalLink } from "lucide-react";
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

const portfolioItems = [
  {
    id: 1,
    title: "Book Promotional Design",
    category: "Graphics",
    image: project1,
    description: "Eye-catching promotional graphic for a book launch with bold typography and creative visual elements.",
  },
  {
    id: 2,
    title: "Educational Campaign Design",
    category: "Graphics",
    image: project2,
    description: "Informative and visually engaging graphic design for an educational awareness campaign.",
  },
  {
    id: 3,
    title: "JL Furniture Brand Campaign",
    category: "Branding",
    image: project3,
    description: "Creative brand campaign featuring dreamlike cloud imagery for a furniture company.",
  },
  {
    id: 4,
    title: "Furniture Brand Concept Art",
    category: "Branding",
    image: project4,
    description: "Surreal space-themed concept art for JL Furniture showcasing creative brand storytelling.",
  },
  {
    id: 5,
    title: "Suhan Travel Campaign",
    category: "Digital Marketing",
    image: project5,
    description: "Vibrant travel agency promotional design featuring world landmarks and call-to-action.",
  },
  {
    id: 6,
    title: "UNV Ethiopia Motivational",
    category: "Digital Marketing",
    image: project6,
    description: "Powerful motivational design for UNV Ethiopia featuring bold typography and dynamic imagery.",
  },
  {
    id: 7,
    title: "Security Camera Promo",
    category: "Digital Marketing",
    image: project7,
    description: "Creative promotional design for security camera products with compelling visuals.",
  },
  {
    id: 8,
    title: "Amibara Properties Campaign",
    category: "Branding",
    image: project8,
    description: "Modern real estate promotional design for Amibara Properties featuring architectural visualization.",
  },
  {
    id: 9,
    title: "HASED Real Estate Holiday",
    category: "Graphics",
    image: project9,
    description: "Holiday greeting design for HASED Real Estate with powerful imagery and brand messaging.",
  },
];

interface PortfolioGridProps {
  limit?: number;
  showFilters?: boolean;
  showViewMore?: boolean;
}

const PortfolioGrid = ({ limit, showFilters = true, showViewMore = false }: PortfolioGridProps) => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState<typeof portfolioItems[0] | null>(null);
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

      {/* View More Button */}
      {showViewMore && remainingItems.length > 0 && (
        <div className="text-center mt-10">
          <Button 
            variant="glowOutline" 
            size="lg" 
            onClick={() => setShowAllModal(true)}
          >
            View More Projects
          </Button>
        </div>
      )}

      {/* Single Item Lightbox Modal */}
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
              <button
                onClick={() => setShowAllModal(false)}
                className="w-10 h-10 rounded-full bg-background/80 flex items-center justify-center text-foreground hover:text-primary transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {portfolioItems.map((item) => (
                <div
                  key={item.id}
                  className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowAllModal(false);
                    setTimeout(() => setSelectedItem(item), 100);
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="text-primary text-xs font-semibold uppercase tracking-wider">
                      {item.category}
                    </span>
                    <h3 className="text-foreground font-bold text-sm mt-1">
                      {item.title}
                    </h3>
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

export default PortfolioGrid;
