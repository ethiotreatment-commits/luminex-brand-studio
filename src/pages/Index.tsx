import { Link } from "react-router-dom";
import { ArrowRight, Palette, Megaphone, Video, PenTool, Globe, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import SectionHeading from "@/components/SectionHeading";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import PortfolioGrid from "@/components/PortfolioGrid";
const services = [{
  icon: PenTool,
  title: "Graphic Design & Branding",
  description: "Smart logos with hidden meanings, complete brand identities, and visuals that stick."
}, {
  icon: Megaphone,
  title: "Digital Marketing",
  description: "SEO, social media, and paid campaigns that actually move the needle."
}, {
  icon: Video,
  title: "Video Production & Editing",
  description: "From raw footage to cinematic final cuts that stop the scroll."
}, {
  icon: Palette,
  title: "Content Creation",
  description: "Photography, copywriting, and social content that speaks to your audience."
}, {
  icon: Globe,
  title: "Web Development",
  description: "Fast, beautiful, responsive websites and apps that just work."
}];
const whyLuminex = ["We actually finish what we start — on time, on budget", "Every piece gets multiple eyes; nothing sloppy leaves", "Ethiopian energy + global standards", "We tell you straight if something won't work", "We love solving problems creatively"];
const Index = () => {
  return <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 gradient-spotlight" />
        <div className="absolute inset-0 light-ray opacity-30" />
        
        {/* Radial gradient */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/10 via-transparent to-transparent" />

        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="opacity-0 animate-fade-in" style={{
          animationDelay: "200ms",
          animationFillMode: "forwards"
        }}>
            <Logo size="xl" />
          </div>

          <p className="mt-10 text-xl md:text-2xl text-foreground max-w-3xl mx-auto opacity-0 animate-fade-in font-medium" style={{
          animationDelay: "400ms",
          animationFillMode: "forwards"
        }}>We're Luminex real people in Addis creating work you're proud to show the world.</p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in" style={{
          animationDelay: "600ms",
          animationFillMode: "forwards"
        }}>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="glowOutline" size="xl" asChild>
              <Link to="/portfolio">
                View Our Work
              </Link>
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{
        animationDelay: "1000ms",
        animationFillMode: "forwards"
      }}>
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Light up your brand.
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">From smart logos with hidden meaning, to campaigns that move the needle, to videos that stop the scroll we bring your vision to life.</p>
          </div>
        </div>
      </section>

      {/* Our Expertise Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="container mx-auto px-6 relative">
          <SectionHeading subtitle="What We Do" title="Our Expertise" description="Everything you need to make your brand shine, under one roof." />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => <ServiceCard key={service.title} icon={service.icon} title={service.title} description={service.description} delay={index * 100} />)}
          </div>
        </div>
      </section>

      {/* Why Luminex Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <SectionHeading subtitle="Why Choose Us" title="Why Luminex?" description="Here's what makes working with us different." />

          <div className="max-w-3xl mx-auto">
            <div className="grid gap-5">
              {whyLuminex.map((point, index) => <div key={index} className="flex items-center gap-4 bg-card border border-border rounded-xl p-5 opacity-0 animate-fade-in hover:border-primary/50 transition-colors" style={{
              animationDelay: `${index * 100}ms`,
              animationFillMode: "forwards"
            }}>
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-foreground font-medium">{point}</p>
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="container mx-auto px-6 relative">
          <SectionHeading subtitle="Our Work" title="Featured Projects" description="A glimpse into the work we're proud of." />

          <PortfolioGrid limit={4} showFilters={false} />

          <div className="text-center mt-12">
            <Button variant="glowOutline" size="lg" asChild>
              <Link to="/portfolio">
                View All Projects
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <SectionHeading subtitle="Testimonials" title="What Our Clients Say" description="Don't just take our word for it." />

          <TestimonialCarousel />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 gradient-spotlight opacity-50" />
        <div className="absolute inset-0 light-ray opacity-20" />
        
        <div className="container mx-auto px-6 relative text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Ready to make your brand shine?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Let's talk.
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
    </div>;
};
export default Index;