import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, Sparkles, Shield, Users, TrendingUp } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/motion/ScrollReveal";
import TextReveal from "@/components/motion/TextReveal";
import FloatingParticles from "@/components/motion/FloatingParticles";
import GlowOrb from "@/components/motion/GlowOrb";

const coreValues = [
  {
    icon: Sparkles,
    title: "Strategic Creativity",
    description: "Fresh, intelligent concepts that surprise and connect, especially through thoughtful branding with subtle, meaningful details.",
  },
  {
    icon: Shield,
    title: "Uncompromising Delivery",
    description: "On-time, high-quality work delivered without shortcuts.",
  },
  {
    icon: Users,
    title: "Client-Centric Partnership",
    description: "Deep listening to understand true needs and build enduring trust.",
  },
  {
    icon: TrendingUp,
    title: "Sustainable Impact",
    description: "Focus on long-term relationships and results that endure beyond single projects.",
  },
];

const About = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 gradient-spotlight opacity-50" />
        <div className="absolute inset-0 light-ray opacity-20" />
        <FloatingParticles />
        <GlowOrb className="top-20 -left-20" size={400} delay={0} />
        <GlowOrb className="bottom-0 -right-20" size={300} delay={2} />

        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="container mx-auto px-6 relative"
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
              className="inline-block text-primary text-sm font-semibold uppercase tracking-[0.2em] mb-4"
            >
              About Us
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.4, 0.25, 1] }}
              className="text-4xl md:text-6xl font-bold text-foreground mb-6"
            >
              Hey, we're Luminex.
            </motion.h1>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
              className="h-1 w-24 mx-auto bg-gradient-to-r from-primary to-primary/0 rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Main About Section */}
      <section className="py-24 relative">
        <GlowOrb className="-right-40 top-1/3" size={500} delay={1} />
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg prose-invert max-w-none">
              <ScrollReveal delay={0}>
                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                  We are a multidisciplinary creative agency based in Addis Ababa, Ethiopia, built on strategy, performance, and measurable results. Our team operates with one clear objective: delivering impactful solutions that drive real business growth.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                  Our graphic designers create purposeful visuals grounded in brand strategy. Our digital strategists combine data, market intelligence, and audience insights to guide every decision. Our video editors and content creators craft compelling narratives designed not just to inspire, but to convert. Our creative directors ensure strategic clarity across every touchpoint, while our developers build seamless, high-performance digital experiences that scale.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.15}>
                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                  We integrate advanced AI tools and intelligent automation into our workflow, enhancing research, accelerating production, optimizing campaigns, and extracting actionable insights from data. Our AI proficiency allows us to move faster, test smarter, personalize content at scale, and continuously refine performance for measurable impact.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                  We believe creativity without strategy is decoration and strategy without execution is incomplete. That's why every project begins with defined objectives, clear KPIs, and a results-driven mindset. From rebrands to full-scale marketing campaigns and digital solutions, our work is designed to generate visibility, engagement, and sustainable growth.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <p className="text-xl text-foreground leading-relaxed font-medium mb-12">
                  Our strength lies in strategic thinking, disciplined execution, technological adaptability, and an unwavering commitment to tangible results. We approach every collaboration with precision and the understanding that your brand is an investment and it deserves outcomes that move it forward.
                </p>
              </ScrollReveal>

              {/* Guiding Principles */}
              <ScrollReveal delay={0.1} scale={0.95}>
                <div className="bg-card border border-border rounded-2xl p-8 my-12 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0" />
                  <h3 className="text-xl font-bold text-foreground mb-6">Our guiding principles:</h3>
                  <ul className="space-y-4">
                    {["Creativity guided by strategy", "Precision infused with purpose", "Lasting impact over fleeting trends"].map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + index * 0.15, duration: 0.5 }}
                        className="flex items-start gap-3"
                      >
                        <motion.div
                          className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0"
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + index * 0.15, type: "spring", stiffness: 300 }}
                        />
                        <span className="text-muted-foreground">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <p className="text-xl text-foreground leading-relaxed font-medium italic">
                  We would be honored to learn about your vision and explore how we can help bring it to life with excellence.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <FloatingParticles />
        <div className="container mx-auto px-6 relative">
          <ScrollReveal className="text-center mb-16">
            <TextReveal as="h2" className="text-3xl md:text-4xl font-bold text-foreground">
              What Drives Us
            </TextReveal>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Mission */}
            <ScrollReveal delay={0} direction="left">
              <motion.div
                className="bg-card border border-border rounded-2xl p-8 card-glow h-full relative overflow-hidden group"
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                <div className="relative">
                  <motion.div
                    className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Target className="w-7 h-7 text-primary" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
                  <p className="text-muted-foreground leading-relaxed">We exist to empower brands with exceptional creative solutions that build lasting recognition, drive meaningful engagement, and deliver measurable growth. Through strategic design, compelling storytelling, and disciplined execution, we create work of enduring quality that our clients are proud to represent, work that resonates deeply with their audiences.</p>
                </div>
              </motion.div>
            </ScrollReveal>

            {/* Vision */}
            <ScrollReveal delay={0.15} direction="right">
              <motion.div
                className="bg-card border border-border rounded-2xl p-8 card-glow h-full relative overflow-hidden group"
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                <div className="relative">
                  <motion.div
                    className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6"
                    whileHover={{ rotate: -10, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Eye className="w-7 h-7 text-primary" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
                  <p className="text-muted-foreground leading-relaxed">To establish ourselves as the premier creative partner in Ethiopia and a trusted choice for ambitious brands worldwide — where innovative ideas, flawless execution, and proven results converge to help organizations achieve their full potential and stand out with confidence.</p>
                </div>
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 relative">
        <GlowOrb className="left-1/2 -translate-x-1/2 top-0" size={600} delay={3} />
        <div className="container mx-auto px-6 relative">
          <ScrollReveal className="text-center mb-16">
            <TextReveal as="h2" className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Core Values
            </TextReveal>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {coreValues.map((value, index) => (
              <ScrollReveal key={value.title} delay={index * 0.1} direction="up" scale={0.9}>
                <motion.div
                  className="bg-card border border-border rounded-2xl p-6 card-glow h-full relative overflow-hidden group"
                  whileHover={{
                    y: -10,
                    borderColor: "hsl(36 100% 50% / 0.3)",
                    transition: { duration: 0.3 },
                  }}
                >
                  <motion.div
                    className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-primary/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  />
                  <div className="relative">
                    <motion.div
                      className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4"
                      whileHover={{ rotate: 15, scale: 1.15 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <value.icon className="w-6 h-6 text-primary" />
                    </motion.div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 gradient-spotlight opacity-50" />
        <FloatingParticles />
        <GlowOrb className="left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2" size={500} delay={0} />

        <div className="container mx-auto px-6 relative text-center">
          <ScrollReveal>
            <TextReveal as="h2" className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Elevate Your Brand?
            </TextReveal>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10">
              We're here to partner with you on projects that matter. Let's discuss how we can help your vision become reality with precision and purpose.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.25} direction="up">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Get In Touch
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>;
};
export default About;
