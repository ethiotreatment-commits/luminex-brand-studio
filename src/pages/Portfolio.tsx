import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PortfolioGrid from "@/components/PortfolioGrid";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 gradient-spotlight opacity-50" />
        <div className="absolute inset-0 light-ray opacity-20" />

        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block text-primary text-sm font-semibold uppercase tracking-[0.2em] mb-4 opacity-0 animate-fade-in" style={{ animationFillMode: "forwards" }}>
              Our Work
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "100ms", animationFillMode: "forwards" }}>
              Portfolio
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed opacity-0 animate-fade-in" style={{ animationDelay: "200ms", animationFillMode: "forwards" }}>
              Explore our creative journey through the brands we've helped illuminate.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <PortfolioGrid showFilters={true} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 gradient-spotlight opacity-50" />
        <div className="container mx-auto px-6 relative text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Be Our Next Success Story?
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10">
            Let's create something extraordinary together. Your brand deserves to shine.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact">
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
