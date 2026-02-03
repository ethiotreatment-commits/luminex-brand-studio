import { Link } from "react-router-dom";
import { ArrowRight, Target, Heart, Sparkles, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";

const values = [
  {
    icon: Sparkles,
    title: "Creativity Without Limits",
    description: "We push boundaries and challenge conventions to create work that truly stands out.",
  },
  {
    icon: Target,
    title: "Strategic Thinking",
    description: "Every creative decision is backed by strategy that drives real business results.",
  },
  {
    icon: Heart,
    title: "Passion for Excellence",
    description: "We pour our hearts into every project, treating your brand as if it were our own.",
  },
  {
    icon: Globe,
    title: "Global Perspective",
    description: "Ethiopia-based with a worldview, we blend local insights with international standards.",
  },
];

const About = () => {
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
              About Us
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "100ms", animationFillMode: "forwards" }}>
              Who We Are
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed opacity-0 animate-fade-in" style={{ animationDelay: "200ms", animationFillMode: "forwards" }}>
              A dynamic creative agency in Addis Ababa, Ethiopia, bringing together top talent in design, marketing, video, and development to help brands shine globally.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <SectionHeading
                subtitle="Our Story"
                title="Born to Light Up Brands"
                align="left"
                className="mb-8"
              />
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Luminex was founded with a singular vision: to be the beacon that illuminates brands in an increasingly crowded marketplace. Based in the heart of Addis Ababa, we've grown from a small creative studio into a full-service agency serving clients across Africa and beyond.
                </p>
                <p>
                  We believe that great design is more than aesthetics—it's about crafting meaningful connections between brands and their audiences. Every logo we design carries hidden meanings, every campaign we launch tells a compelling story, and every website we build delivers exceptional experiences.
                </p>
                <p>
                  Our approach combines Ethiopian creativity with global standards, delivering work that resonates locally while standing tall on the international stage. We take on contractual projects with passion and precision, treating every client's vision as our own.
                </p>
              </div>
            </div>

            <div className="order-1 lg:order-2 relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 via-primary/10 to-transparent overflow-hidden relative">
                <div className="absolute inset-0 light-ray opacity-50" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center animate-glow-pulse">
                      <Sparkles className="w-16 h-16 text-primary" />
                    </div>
                    <p className="text-2xl font-bold text-foreground">Creative Excellence</p>
                    <p className="text-muted-foreground mt-2">Since Day One</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="container mx-auto px-6 relative">
          <SectionHeading
            subtitle="Our Team"
            title="The Creative Minds"
            description="Our strength lies in our diverse, multidisciplinary team united by a passion for exceptional creative work."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { title: "Graphic Designers", desc: "Visual storytellers who transform ideas into stunning designs" },
              { title: "Digital Marketers", desc: "Strategy experts driving growth through data-driven campaigns" },
              { title: "Video Editors & Producers", desc: "Cinematic craftspeople bringing stories to life" },
              { title: "Content Creators", desc: "Wordsmiths and creators who engage and inspire" },
              { title: "Creative Directors", desc: "Visionaries who guide projects from concept to completion" },
              { title: "Developers", desc: "Technical experts building seamless digital experiences" },
            ].map((item, index) => (
              <div
                key={item.title}
                className="bg-card border border-border rounded-xl p-8 card-glow opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
              >
                <h3 className="text-lg font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <SectionHeading
            subtitle="Our Values"
            title="What Drives Us"
            description="The principles that guide every project and every relationship we build."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="text-center opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms`, animationFillMode: "forwards" }}
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
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
            Ready to Work Together?
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10">
            Let's combine your vision with our expertise to create something extraordinary.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact">
              Get In Touch
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
