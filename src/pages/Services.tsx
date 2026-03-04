import { Link } from "react-router-dom";
import { ArrowRight, Palette, Megaphone, Video, PenTool, Globe, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: PenTool,
    title: "Graphic Design & Branding",
    description: "We craft distinctive visual identities that authentically capture your brand's essence and leave a lasting impression. Our specialty lies in intelligent logo design incorporating layered symbolism — elements that invite discovery and foster memorability. From comprehensive brand systems to supporting collateral, we ensure every detail aligns with your strategic goals.",
    features: [
      "Logo design with embedded symbolism and meaning",
      "Comprehensive brand guidelines and identity systems",
      "Print and packaging design",
      "Marketing collateral (business cards, brochures, etc.)",
      "Custom illustration and iconography",
    ],
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "We develop integrated strategies that combine data insight with audience understanding to achieve tangible business outcomes. Rather than simply executing tactics, we focus on performance that grows visibility, engagement, and revenue.",
    features: [
      "Search Engine Optimization (SEO)",
      "Social media strategy and management",
      "Paid advertising across Google, Meta, TikTok, and more",
      "Email marketing campaigns",
      "Analytics, reporting, and continuous optimization",
    ],
  },
  {
    icon: Video,
    title: "Video Production & Editing",
    description: "We transform concepts into captivating visual stories — from concise social content to polished corporate narratives. Our production and post-production expertise ensures videos that command attention and communicate with clarity and emotion.",
    features: [
      "Commercial and promotional videos",
      "Corporate documentaries and brand films",
      "Social media content (Reels, TikToks, Stories)",
      "Motion graphics and animation",
      "Professional editing, color grading, and sound design",
    ],
  },
  {
    icon: Palette,
    title: "Content Creation",
    description: "We produce high-impact content that engages audiences and strengthens brand voice. By combining creative photography, strategic copywriting, and data-informed planning, we deliver assets that perform across channels.",
    features: [
      "Professional photography and on-location shoots",
      "Copywriting and messaging development",
      "Social media content calendars and execution",
      "Blog, article, and long-form writing",
      "Full content strategy and performance planning",
    ],
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "We engineer clean, high-performance digital experiences that reflect your brand's professionalism. Our focus is on responsive, user-friendly sites and applications built for speed, security, and scalability.",
    features: [
      "Custom website development",
      "E-commerce platforms and integrations",
      "Web applications and interactive tools",
      "Mobile-responsive and accessible design",
      "Ongoing maintenance and technical support",
    ],
  },
];

const Services = () => {
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
              Our Services
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "100ms", animationFillMode: "forwards" }}>
              What We Offer
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed opacity-0 animate-fade-in" style={{ animationDelay: "200ms", animationFillMode: "forwards" }}>
              Comprehensive creative and digital solutions designed to elevate your brand with strategy, precision, and measurable impact.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={cn(
                  "grid lg:grid-cols-2 gap-12 items-start opacity-0 animate-fade-in",
                  index % 2 === 1 && "lg:flex-row-reverse"
                )}
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
              >
                {/* Content */}
                <div className={cn(index % 2 === 1 && "lg:order-2")}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                      <service.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                      {service.title}
                    </h2>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
                    {service.description}
                  </p>

                  <Button variant="hero" size="lg" asChild>
                    <Link to="/contact">
                      Get a Quote
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>

                {/* Features Card */}
                <div className={cn(
                  "bg-card border border-border rounded-2xl p-8 card-glow",
                  index % 2 === 1 && "lg:order-1"
                )}>
                  <h3 className="font-bold text-foreground mb-6">What's included:</h3>
                  <ul className="space-y-4">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                          <Check className="w-3.5 h-3.5 text-primary" />
                        </div>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 gradient-spotlight opacity-50" />
        <div className="container mx-auto px-6 relative text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Need Something Custom?
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10">
            Every brand is unique. Let's talk about what you need and build a package that fits.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact">
              Get in Touch
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
