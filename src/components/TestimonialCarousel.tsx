import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    quote: "Luminex transformed our brand identity completely. The attention to detail and creativity exceeded our expectations.",
    author: "Sarah M.",
    company: "TechStart Ethiopia",
    role: "CEO",
  },
  {
    quote: "Their video production quality is world-class. They brought our vision to life with stunning visuals and storytelling.",
    author: "Michael K.",
    company: "Global Ventures",
    role: "Marketing Director",
  },
  {
    quote: "Working with Luminex was seamless. They understood our brand essence and delivered beyond what we imagined.",
    author: "Amara T.",
    company: "Heritage Hotels",
    role: "Brand Manager",
  },
  {
    quote: "The digital marketing strategy they developed increased our online presence by 300%. Truly exceptional work.",
    author: "David O.",
    company: "E-Commerce Hub",
    role: "Founder",
  },
];

const TestimonialCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const next = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 500);
    return () => clearTimeout(timer);
  }, [current]);

  useEffect(() => {
    const autoplay = setInterval(next, 6000);
    return () => clearInterval(autoplay);
  }, []);

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent" />
      
      <div className="relative bg-card/50 border border-border rounded-2xl p-8 md:p-12">
        <Quote className="w-12 h-12 text-primary/30 mb-6" />
        
        <div className="relative min-h-[200px] flex items-center">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={cn(
                "absolute inset-0 transition-all duration-500",
                index === current
                  ? "opacity-100 translate-x-0"
                  : index < current
                  ? "opacity-0 -translate-x-10"
                  : "opacity-0 translate-x-10"
              )}
            >
              <blockquote className="text-xl md:text-2xl text-foreground font-light leading-relaxed mb-8">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-bold">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-foreground font-semibold">{testimonial.author}</p>
                  <p className="text-muted-foreground text-sm">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-8">
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  index === current
                    ? "bg-primary w-8"
                    : "bg-muted hover:bg-muted-foreground"
                )}
              />
            ))}
          </div>
          
          <div className="flex gap-2">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
