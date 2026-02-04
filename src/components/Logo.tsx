import luminexLogo from "@/assets/luminex-logo.png";
import { cn } from "@/lib/utils";

interface LogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  showTagline?: boolean;
  className?: string;
  animated?: boolean;
}

const sizeClasses = {
  sm: "h-16",
  md: "h-24",
  lg: "h-36",
  xl: "h-52 md:h-64",
};

const Logo = ({ size = "md", showTagline = false, className, animated = true }: LogoProps) => {
  return (
    <div 
      className={cn(
        "flex flex-col items-center group",
        animated && "animate-fade-in",
        className
      )}
    >
      <div className="relative">
        {/* Glow effect behind logo */}
        <div 
          className={cn(
            "absolute inset-0 blur-xl opacity-30 transition-opacity duration-500",
            "bg-gradient-to-r from-transparent via-primary/40 to-transparent",
            "group-hover:opacity-50"
          )} 
        />
        
        {/* Main logo image with enhanced styling */}
        <img
          src={luminexLogo}
          alt="Luminex - Light up your brand"
          className={cn(
            sizeClasses[size],
            "w-auto object-contain relative z-10",
            "mix-blend-lighten",
            "drop-shadow-[0_0_10px_rgba(255,153,0,0.3)]",
            "transition-all duration-300 ease-out",
            "group-hover:drop-shadow-[0_0_20px_rgba(255,153,0,0.5)]",
            "group-hover:scale-[1.02]",
            "brightness-110 contrast-110"
          )}
        />
        
      </div>
    </div>
  );
};

export default Logo;
