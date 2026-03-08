import luminexLogo from "@/assets/luminex-logo.png";
import { cn } from "@/lib/utils";

interface LogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  showTagline?: boolean;
  className?: string;
  animated?: boolean;
}

const sizeClasses = {
  sm: "h-32",
  md: "h-48",
  lg: "h-72",
  xl: "h-[26rem] md:h-[32rem]",
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
            "absolute inset-0 blur-xl opacity-15 transition-opacity duration-500",
            "bg-gradient-to-r from-transparent via-primary/20 to-transparent",
            "group-hover:opacity-25"
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
            "transition-all duration-300 ease-out",
            "group-hover:drop-shadow-[0_0_12px_rgba(255,153,0,0.25)]",
            "group-hover:scale-[1.02]",
            "brightness-110 contrast-110",
            "drop-shadow-[0_0_8px_rgba(255,153,0,0.15)]"
          )}
        />
        
      </div>
    </div>
  );
};

export default Logo;
