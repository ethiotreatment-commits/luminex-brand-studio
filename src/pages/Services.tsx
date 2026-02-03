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
    description: "Create a memorable visual identity that tells your brand story. We specialize in clever logos with hidden meanings — the kind people notice and never forget. From complete brand systems to marketing collateral, we obsess over every detail so you don't have to.",
    features: [
      "Logo design with hidden symbolism",
      "Brand guidelines & identity systems",
      "Print & packaging design",
      "Marketing collateral",
      "Illustration & iconography",
    ],
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "We don't just run ads — we build strategies that actually move the needle. Our team understands both the numbers and the people behind them. Whether it's SEO, social media, or paid campaigns, we create marketing that gets real results.",
    features: [
      "Search Engine Optimization (SEO)",
      "Social media management & strategy",
      "Paid advertising (Google, Meta, TikTok)",
      "Email marketing campaigns",
      "Analytics & performance reporting",
    ],
  },
  {
    icon: Video,
    title: "Video Production & Editing",
    description: "From raw footage to cinematic final cuts, we produce videos that stop the scroll. Our editors and producers know how to tell stories that captivate, whether it's a 15-second social clip or a full corporate documentary.",
    features: [
      "Commercial & promotional videos",
      "Corporate documentaries",
      "Social media content (Reels, TikToks, Stories)",
      "Motion graphics & animation",
      "Post-production & color grading",
    ],
  },
  {
    icon: Palette,
    title: "Content Creation",
    description: "Great content isn't just pretty — it speaks to your audience. Our team creates everything from photography and copywriting to social posts that actually get engagement. We know what works because we're always learning, testing, and refining.",
    features: [
      "Professional photography & shoots",
      "Copywriting & messaging",
      "Social media content calendars",
      "Blog & article writing",
      "Content strategy & planning",
    ],
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "We build websites and apps that are fast, beautiful, and actually work. No bloated code, no frustrating user experiences. Just clean, responsive digital products that make your brand look as good online as it deserves.",
    features: [
      "Custom website development",
      "E-commerce solutions",
      "Web applications",
      "Mobile-responsive design",
      "Maintenance & ongoing support",
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
              Everything you need to make your brand shine, done right.
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
