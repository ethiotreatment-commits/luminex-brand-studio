import { Link } from "react-router-dom";
import { ArrowRight, Palette, Megaphone, Video, PenTool, Globe, Lightbulb, Users, Zap, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import SectionHeading from "@/components/SectionHeading";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import PortfolioGrid from "@/components/PortfolioGrid";

const services = [
  {
    icon: Palette,
    title: "Graphic Design",
    description: "Eye-catching visuals that communicate your brand story with precision and creativity.",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "Data-driven strategies that amplify your reach and convert audiences into loyal customers.",
  },
  {
    icon: Video,
    title: "Video Production",
    description: "Cinematic storytelling that captivates viewers and brings your vision to life.",
  },
  {
    icon: PenTool,
    title: "Branding",
    description: "Memorable identities with clever logos and cohesive brand systems that stand out.",
  },
  {
    icon: Lightbulb,
    title: "Content Creation",
    description: "Compelling content that engages your audience across all platforms and channels.",
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Fast, responsive, and beautiful websites that deliver exceptional user experiences.",
  },
];

const benefits = [
  {
    icon: Award,
    title: "Innovative & Memorable Designs",
    description: "We craft unique visual solutions that leave lasting impressions.",
  },
  {
    icon: Users,
    title: "Multidisciplinary Team",
    description: "Diverse expertise united by a passion for exceptional creative work.",
  },
  {
    icon: Globe,
    title: "Ethiopia-Based, Global Reach",
    description: "Local talent delivering world-class projects internationally.",
  },
  {
    icon: Zap,
    title: "Fast Turnaround & Quality",
    description: "Efficient workflows without compromising on excellence.",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 gradient-spotlight" />
        <div className="absolute inset-0 light-ray opacity-30" />
        
        {/* Radial gradient */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/10 via-transparent to-transparent" />

        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="opacity-0 animate-fade-in" style={{ animationDelay: "200ms", animationFillMode: "forwards" }}>
            <Logo size="xl" showTagline />
          </div>

          <p className="mt-8 text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in" style={{ animationDelay: "400ms", animationFillMode: "forwards" }}>
            A creative powerhouse lighting up brands worldwide
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in" style={{ animationDelay: "600ms", animationFillMode: "forwards" }}>
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
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: "1000ms", animationFillMode: "forwards" }}>
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* Our Expertise Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="container mx-auto px-6 relative">
          <SectionHeading
            subtitle="What We Do"
            title="Our Expertise"
            description="From concept to execution, we deliver comprehensive creative solutions that elevate your brand."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Luminex Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <SectionHeading
            subtitle="Why Choose Us"
            title="Why Luminex?"
            description="We combine creative excellence with strategic thinking to deliver results that matter."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="text-center opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms`, animationFillMode: "forwards" }}
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center group hover:bg-primary/20 transition-colors duration-300">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="container mx-auto px-6 relative">
          <SectionHeading
            subtitle="Our Work"
            title="Featured Projects"
            description="A glimpse into the transformative work we've done for our clients."
          />

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
          <SectionHeading
            subtitle="Testimonials"
            title="What Our Clients Say"
            description="Don't just take our word for it – hear from the brands we've helped shine."
          />

          <TestimonialCarousel />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 gradient-spotlight opacity-50" />
        <div className="absolute inset-0 light-ray opacity-20" />
        
        <div className="container mx-auto px-6 relative text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Light Up Your Brand?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Let's create something extraordinary together. Your vision, our expertise.
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

export default Index;
