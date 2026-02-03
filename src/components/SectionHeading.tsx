import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

const SectionHeading = ({
  subtitle,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) => {
  return (
    <div
      className={cn(
        "max-w-3xl mb-16",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {subtitle && (
        <span className="inline-block text-primary text-sm font-semibold uppercase tracking-[0.2em] mb-4">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-muted-foreground text-lg leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
