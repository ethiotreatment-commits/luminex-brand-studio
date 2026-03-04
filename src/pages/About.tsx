import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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

              <p className="text-xl text-foreground leading-relaxed font-medium">
                Our strength lies in strategic thinking, disciplined execution, technological adaptability, and an unwavering commitment to tangible results. We approach every collaboration with precision and the understanding that your brand is an investment and it deserves outcomes that move it forward.
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
              <p className="text-muted-foreground leading-relaxed">We exist to help brands shine brighter - through logos people remember forever, campaigns that actually move the needle, videos that stop the scroll. We listen hard, think creatively, and deliver work we're proud to put our name on. Simple as that.</p>
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
              <p className="text-muted-foreground leading-relaxed">To become the go-to creative partner in Ethiopia and across borders - where ambitious brands come when they want fresh ideas, reliable execution, and results that make them feel unstoppable.</p>
            </div>
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
    </div>;
};
export default About;