import { useState } from "react";
import { Send, Upload, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const projectTypes = [
  "Graphic Design",
  "Branding",
  "Digital Marketing",
  "Video Production",
  "Web Development",
  "Full Package",
  "Other",
];

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });
  const [fileName, setFileName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset after showing success
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", projectType: "", message: "" });
      setFileName("");
    }, 3000);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-card border border-border rounded-2xl p-12 text-center animate-scale-in">
        <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
          <Check className="w-8 h-8 text-primary" />
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-3">Message Sent!</h3>
        <p className="text-muted-foreground">
          Thank you for reaching out. We'll get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-card border border-border rounded-2xl p-8 md:p-12">
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Your Name
          </label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
            placeholder="John Doe"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Email Address
          </label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
            placeholder="john@company.com"
          />
        </div>
      </div>

      {/* Project Type */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-foreground mb-2">
          Project Type
        </label>
        <select
          required
          value={formData.projectType}
          onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
          className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 appearance-none cursor-pointer"
        >
          <option value="" disabled>Select a service</option>
          {projectTypes.map((type) => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-foreground mb-2">
          Tell Us About Your Project
        </label>
        <textarea
          required
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          rows={5}
          className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 resize-none"
          placeholder="Describe your project goals, timeline, and any specific requirements..."
        />
      </div>

      {/* File Upload */}
      <div className="mb-8">
        <label className="block text-sm font-medium text-foreground mb-2">
          Attach Brief (Optional)
        </label>
        <label className="flex items-center gap-3 px-4 py-3 bg-secondary border border-dashed border-border rounded-lg cursor-pointer hover:border-primary/50 transition-colors duration-300">
          <Upload className="w-5 h-5 text-muted-foreground" />
          <span className="text-muted-foreground text-sm">
            {fileName || "Upload project brief, reference files, etc."}
          </span>
          <input
            type="file"
            onChange={handleFileChange}
            className="hidden"
            accept=".pdf,.doc,.docx,.zip,.png,.jpg"
          />
        </label>
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        variant="hero"
        size="xl"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <span className="flex items-center gap-2">
            <span className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
            Sending...
          </span>
        ) : (
          <span className="flex items-center gap-2">
            Send Message
            <Send className="w-5 h-5" />
          </span>
        )}
      </Button>
    </form>
  );
};

export default ContactForm;
