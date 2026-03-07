import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import PortfolioGrid from "@/components/PortfolioGrid";
import VideoPortfolioGrid from "@/components/VideoPortfolioGrid";

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

      {/* Portfolio Tabs */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <Tabs defaultValue="graphics" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="bg-card border border-border p-1.5 rounded-full">
                <TabsTrigger
                  value="graphics"
                  className="rounded-full px-6 py-2.5 text-sm font-medium data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-[0_0_15px_hsl(36_100%_50%/0.3)] transition-all duration-300"
                >
                  Graphics & Branding
                </TabsTrigger>
                <TabsTrigger
                  value="videos"
                  className="rounded-full px-6 py-2.5 text-sm font-medium data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-[0_0_15px_hsl(36_100%_50%/0.3)] transition-all duration-300"
                >
                  Video Portfolio
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="graphics" className="mt-0">
              <PortfolioGrid showFilters={true} />
            </TabsContent>

            <TabsContent value="videos" className="mt-0">
              <VideoPortfolioGrid showFilters={true} />
            </TabsContent>
          </Tabs>
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
