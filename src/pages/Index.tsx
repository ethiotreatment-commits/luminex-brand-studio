import { Link } from "react-router-dom";
import { useRef } from "react";
import { ArrowRight, Palette, Megaphone, Video, PenTool, Globe, CheckCircle } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import SectionHeading from "@/components/SectionHeading";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import PortfolioGrid from "@/components/PortfolioGrid";
import ScrollReveal from "@/components/motion/ScrollReveal";
import ScrollTextReveal from "@/components/motion/ScrollTextReveal";
import FloatingParticles from "@/components/motion/FloatingParticles";
import GlowOrb from "@/components/motion/GlowOrb";

const services = [
  { icon: PenTool, title: "Graphic Design & Branding", description: "Smart logos with hidden meanings, complete brand identities, and visuals that stick." },
  { icon: Megaphone, title: "Digital Marketing", description: "SEO, social media, and paid campaigns that actually move the needle." },
  { icon: Video, title: "Video Production & Editing", description: "From raw footage to cinematic final cuts that stop the scroll." },
  { icon: Palette, title: "Content Creation", description: "Photography, copywriting, and social content that speaks to your audience." },
  { icon: Globe, title: "Web Development", description: "Fast, beautiful, responsive websites and apps that just work." },
];

const whyLuminex = [
  "We actually finish what we start - on time, on budget",
  "Every piece gets multiple eyes; nothing sloppy leaves",
  "Ethiopian energy + global standards",
  "We love solving problems creatively",
];

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(heroProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(heroProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(heroProgress, [0, 0.5], [1, 0.95]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section with parallax */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 gradient-spotlight" />
        <div className="absolute inset-0 light-ray opacity-30" />
        <FloatingParticles />
        <GlowOrb className="top-1/4 left-1/4" size={500} delay={0} />
        <GlowOrb className="bottom-1/4 right-1/4" size={400} delay={2} />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/10 via-transparent to-transparent" />

        <motion.div
          style={{ y: heroY, opacity: heroOpacity, scale: heroScale }}
          className="relative z-10 container mx-auto px-6 text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <Logo size="xl" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
            className="mt-10 text-xl md:text-2xl text-foreground max-w-3xl mx-auto font-medium"
          >
            Bringing your boldest vision to powerful reality.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="glowOutline" size="xl" asChild>
              <Link to="/portfolio">View Our Work</Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-2 bg-primary rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Scroll-scrubbed text reveal section */}
      <ScrollTextReveal
        text="From smart logos with hidden meaning, to campaigns that move the needle, to videos that stop the scroll — we bring your vision to life with strategy, precision, and creative excellence that drives real results."
        className="text-2xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight"
      />

      {/* Our Expertise Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <FloatingParticles />
        <div className="container mx-auto px-6 relative">
          <ScrollReveal>
            <SectionHeading subtitle="What We Do" title="Our Expertise" description="Everything you need to make your brand shine, under one roof." />
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ScrollReveal key={service.title} delay={index * 0.1} direction={index % 2 === 0 ? "left" : "right"}>
                <ServiceCard icon={service.icon} title={service.title} description={service.description} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Luminex Section */}
      <section className="py-24 relative">
        <GlowOrb className="top-0 right-0" size={350} delay={1} />
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <SectionHeading subtitle="Why Choose Us" title="Why Luminex?" description="Here's what makes working with us different." />
          </ScrollReveal>

          <div className="max-w-3xl mx-auto">
            <div className="grid gap-5">
              {whyLuminex.map((point, index) => (
                <ScrollReveal key={index} delay={index * 0.12} direction="left">
                  <motion.div
                    className="flex items-center gap-4 bg-card border border-border rounded-xl p-5 hover:border-primary/50 transition-colors"
                    whileHover={{ x: 8, transition: { duration: 0.3 } }}
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-foreground font-medium">{point}</p>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="container mx-auto px-6 relative">
          <ScrollReveal>
            <SectionHeading subtitle="Our Work" title="Featured Projects" description="A glimpse into the work we're proud of." />
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <PortfolioGrid limit={4} showFilters={false} showViewMore={true} />
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <SectionHeading subtitle="Testimonials" title="What Our Clients Say" description="Don't just take our word for it." />
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <TestimonialCarousel />
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 gradient-spotlight opacity-50" />
        <div className="absolute inset-0 light-ray opacity-20" />
        <FloatingParticles />

        <div className="container mx-auto px-6 relative text-center">
          <ScrollReveal direction="none" scale={0.9}>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Ready to make your brand shine?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">Let's talk.</p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
