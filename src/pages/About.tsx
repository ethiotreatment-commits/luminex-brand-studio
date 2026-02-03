import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
                We started because we love what happens when good ideas meet real talent. We're a tight group in Addis who eat, sleep, and breathe creative work — graphic designers who obsess over every detail, digital marketers who understand numbers <em>and</em> people, video editors who turn raw footage into something cinematic, content creators who know how to speak to an audience, creative directors who keep the vision clear, and developers who make sure everything runs smoothly.
              </p>

              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                We're based in Addis Ababa, but we've already worked with clients from different corners of the world. We take on projects big and small, local or international, as long as there's a chance to do something meaningful.
              </p>

              <div className="bg-card border border-border rounded-2xl p-8 my-12">
                <h3 className="text-xl font-bold text-foreground mb-6">What we care about most:</h3>
                <ul className="space-y-4">
                  {[
                    "Making work that feels fresh and clever (especially logos that have a little secret inside them)",
                    "Delivering on time without cutting corners",
                    "Actually listening to what the client needs",
                    "Building long-term trust, not just one-off jobs",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                We're not the biggest agency out there, and we don't pretend to be. But we're damn good at what we do, and we pour everything into every project because we know how much your brand matters to you.
              </p>

              <p className="text-xl text-foreground leading-relaxed font-medium">
                If you're looking for a team that treats your vision like it's their own, let's talk.
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
            <div className="bg-card border border-border rounded-2xl p-8 card-glow opacity-0 animate-fade-in" style={{ animationFillMode: "forwards" }}>
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                We exist to help brands shine brighter — through logos people remember forever, campaigns that actually move the needle, videos that stop the scroll. We listen hard, think creatively, and deliver work we're proud to put our name on. Simple as that.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-card border border-border rounded-2xl p-8 card-glow opacity-0 animate-fade-in" style={{ animationDelay: "100ms", animationFillMode: "forwards" }}>
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To become the go-to creative partner in Ethiopia and across borders — where ambitious brands come when they want fresh ideas, reliable execution, and results that make them feel unstoppable.
              </p>
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
    </div>
  );
};

export default About;
