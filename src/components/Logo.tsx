import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showTagline?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
}

const Logo = ({ className, showTagline = false, size = "md" }: LogoProps) => {
  const sizeClasses = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-4xl",
    xl: "text-6xl",
  };

  const taglineSizes = {
    sm: "text-[8px]",
    md: "text-[10px]",
    lg: "text-sm",
    xl: "text-lg",
  };

  return (
    <div className={cn("flex flex-col items-center", className)}>
      <div className="relative">
        <span className="font-script text-muted-foreground italic block text-center -mb-1 tracking-wide" 
              style={{ fontSize: size === "xl" ? "1.5rem" : size === "lg" ? "1rem" : size === "md" ? "0.75rem" : "0.5rem" }}>
          the
        </span>
        <div className={cn("font-bold tracking-tight flex items-center", sizeClasses[size])}>
          <span className="text-foreground">Lum</span>
          <span className="relative">
            <span className="text-foreground">i</span>
            <span 
              className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-primary animate-glow-pulse"
              style={{ 
                top: size === "xl" ? "0.25rem" : size === "lg" ? "0.15rem" : "0.1rem",
                width: size === "xl" ? "0.5rem" : size === "lg" ? "0.375rem" : size === "md" ? "0.25rem" : "0.2rem",
                height: size === "xl" ? "0.5rem" : size === "lg" ? "0.375rem" : size === "md" ? "0.25rem" : "0.2rem",
              }}
            />
          </span>
          <span className="relative text-foreground">
            nex
            <span 
              className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-primary/5 blur-sm"
              style={{ transform: "translateX(20%)" }}
            />
          </span>
        </div>
      </div>
      {showTagline && (
        <span className={cn(
          "text-muted-foreground tracking-[0.2em] uppercase mt-2",
          taglineSizes[size]
        )}>
          Light up your brand
        </span>
      )}
    </div>
  );
};

export default Logo;
