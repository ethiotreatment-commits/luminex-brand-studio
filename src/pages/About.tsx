import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, Sparkles, Shield, Users, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
  return <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 gradient-spotlight opacity-50" />
        <div className="absolute inset-0 light-ray opacity-20" />

        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block text-primary text-sm font-semibold uppercase tracking-[0.2em] mb-4 opacity-0 animate-fade-in" style={{
            animationFillMode: "forwards"
          }}>
              About Us
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 opacity-0 animate-fade-in" style={{
            animationDelay: "100ms",
            animationFillMode: "forwards"
          }}>
              Hey, we're Luminex.
            </h1>
          </div>
        </div>
      </section>

      {/* Main About Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                We are a multidisciplinary creative agency based in Addis Ababa, Ethiopia, built on strategy, performance, and measurable results. Our team operates with one clear objective: delivering impactful solutions that drive real business growth.
              </p>

              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Our graphic designers create purposeful visuals grounded in brand strategy. Our digital strategists combine data, market intelligence, and audience insights to guide every decision. Our video editors and content creators craft compelling narratives designed not just to inspire, but to convert. Our creative directors ensure strategic clarity across every touchpoint, while our developers build seamless, high-performance digital experiences that scale.
              </p>

              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                We integrate advanced AI tools and intelligent automation into our workflow — enhancing research, accelerating production, optimizing campaigns, and extracting actionable insights from data. Our AI proficiency allows us to move faster, test smarter, personalize content at scale, and continuously refine performance for measurable impact.
              </p>

              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                We believe creativity without strategy is decoration and strategy without execution is incomplete. That's why every project begins with defined objectives, clear KPIs, and a results-driven mindset. From rebrands to full-scale marketing campaigns and digital solutions, our work is designed to generate visibility, engagement, and sustainable growth.
              </p>

              <p className="text-xl text-foreground leading-relaxed font-medium mb-12">
                Our strength lies in strategic thinking, disciplined execution, technological adaptability, and an unwavering commitment to tangible results. We approach every collaboration with precision and the understanding that your brand is an investment and it deserves outcomes that move it forward.
              </p>

              {/* Guiding Principles */}
              <div className="bg-card border border-border rounded-2xl p-8 my-12">
                <h3 className="text-xl font-bold text-foreground mb-6">Our guiding principles:</h3>
                <ul className="space-y-4">
                  {["Creativity guided by strategy", "Precision infused with purpose", "Lasting impact over fleeting trends"].map((item, index) => <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>)}
                </ul>
              </div>

              <p className="text-xl text-foreground leading-relaxed font-medium italic">
                We would be honored to learn about your vision and explore how we can help bring it to life with excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="container mx-auto px-6 relative">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Mission */}
            <div className="bg-card border border-border rounded-2xl p-8 card-glow opacity-0 animate-fade-in" style={{
            animationFillMode: "forwards"
          }}>
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">We exist to empower brands with exceptional creative solutions that build lasting recognition, drive meaningful engagement, and deliver measurable growth. Through strategic design, compelling storytelling, and disciplined execution, we create work of enduring quality that our clients are proud to represent — and that resonates deeply with their audiences.</p>
            </div>

            {/* Vision */}
            <div className="bg-card border border-border rounded-2xl p-8 card-glow opacity-0 animate-fade-in" style={{
            animationDelay: "100ms",
            animationFillMode: "forwards"
          }}>
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">To establish ourselves as the premier creative partner in Ethiopia and a trusted choice for ambitious brands worldwide — where innovative ideas, flawless execution, and proven results converge to help organizations achieve their full potential and stand out with confidence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Core Values</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {coreValues.map((value, index) => (
              <div key={value.title} className="bg-card border border-border rounded-2xl p-6 card-glow opacity-0 animate-fade-in" style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
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
            Ready to Elevate Your Brand?
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10">
            We're here to partner with you on projects that matter. Let's discuss how we can help your vision become reality with precision and purpose.
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
    </div>;
};
export default About;