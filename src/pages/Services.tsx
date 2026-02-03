import { Link } from "react-router-dom";
import { ArrowRight, Palette, Megaphone, Video, PenTool, Lightbulb, Globe, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: PenTool,
    title: "Graphic Design & Branding",
    description: "Create a memorable visual identity that tells your brand story. We specialize in clever logos with hidden meanings, complete brand systems, and visual assets that leave lasting impressions.",
    features: [
      "Logo design with hidden symbolism",
      "Brand guidelines & identity systems",
      "Print & packaging design",
      "Marketing collateral",
      "Illustration & iconography",
    ],
    packages: [
      { name: "Starter", price: "$500", desc: "Logo + basic guidelines" },
      { name: "Professional", price: "$1,500", desc: "Full brand identity" },
      { name: "Enterprise", price: "Custom", desc: "Complete rebrand" },
    ],
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "Amplify your reach and convert audiences with data-driven marketing strategies. From SEO to social media, we create campaigns that deliver measurable results.",
    features: [
      "Search Engine Optimization (SEO)",
      "Social media management",
      "Paid advertising (Google, Meta)",
      "Email marketing campaigns",
      "Analytics & reporting",
    ],
    packages: [
      { name: "Starter", price: "$300/mo", desc: "Basic social management" },
      { name: "Professional", price: "$800/mo", desc: "Multi-channel strategy" },
      { name: "Enterprise", price: "Custom", desc: "Full marketing team" },
    ],
  },
  {
    icon: Video,
    title: "Video Production & Editing",
    description: "Bring your stories to life with cinematic video content. From concept to final cut, we produce compelling videos that captivate and convert.",
    features: [
      "Commercial & promotional videos",
      "Corporate documentaries",
      "Social media content",
      "Motion graphics & animation",
      "Post-production & editing",
    ],
    packages: [
      { name: "Starter", price: "$800", desc: "Social video package" },
      { name: "Professional", price: "$3,000", desc: "Commercial production" },
      { name: "Enterprise", price: "Custom", desc: "Full film production" },
    ],
  },
  {
    icon: Lightbulb,
    title: "Content Creation",
    description: "Engage your audience with compelling content across all platforms. Our team creates everything from blog posts to social media content that resonates.",
    features: [
      "Blog & article writing",
      "Social media content",
      "Copywriting & messaging",
      "Photography & shoots",
      "Content strategy",
    ],
    packages: [
      { name: "Starter", price: "$400/mo", desc: "8 posts/month" },
      { name: "Professional", price: "$900/mo", desc: "20 posts + blog" },
      { name: "Enterprise", price: "Custom", desc: "Full content team" },
    ],
  },
  {
    icon: Globe,
    title: "Web & App Development",
    description: "Build fast, beautiful, and functional digital experiences. We create responsive websites and applications that deliver exceptional user experiences.",
    features: [
      "Custom website development",
      "E-commerce solutions",
      "Web applications",
      "Mobile-responsive design",
      "Maintenance & support",
    ],
    packages: [
      { name: "Starter", price: "$1,500", desc: "5-page website" },
      { name: "Professional", price: "$4,000", desc: "Custom web app" },
      { name: "Enterprise", price: "Custom", desc: "Full platform build" },
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
              Comprehensive creative solutions tailored to light up your brand and drive real results.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={cn(
                  "grid lg:grid-cols-2 gap-12 items-start",
                  index % 2 === 1 && "lg:flex-row-reverse"
                )}
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
                  
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    {service.description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pricing Cards */}
                <div className={cn("grid gap-4", index % 2 === 1 && "lg:order-1")}>
                  {service.packages.map((pkg, pkgIndex) => (
                    <div
                      key={pkg.name}
                      className={cn(
                        "bg-card border rounded-xl p-6 transition-all duration-300 hover:border-primary/50",
                        pkgIndex === 1 ? "border-primary glow-border" : "border-border"
                      )}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-bold text-foreground">{pkg.name}</h3>
                          <p className="text-sm text-muted-foreground">{pkg.desc}</p>
                        </div>
                        <div className="text-right">
                          <span className="text-2xl font-bold text-primary">{pkg.price}</span>
                        </div>
                      </div>
                    </div>
                  ))}
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
            Need a Custom Solution?
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10">
            Every brand is unique. Let's discuss your specific needs and create a tailored package just for you.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact">
              Get a Custom Quote
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
