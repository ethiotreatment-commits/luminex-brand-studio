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
          className="absolute inset-[-30%] blur-3xl opacity-[0.25] bg-[radial-gradient(circle,rgba(255,153,0,0.4)_0%,rgba(255,153,0,0.15)_40%,transparent_70%)]"
        />
        
        {/* Main logo image */}
        <img
          src={luminexLogo}
          alt="Luminex - Light up your brand"
          className={cn(
            sizeClasses[size],
            "w-auto object-contain relative z-10",
            "mix-blend-lighten",
            "brightness-110 contrast-110",
            "drop-shadow-[0_0_8px_rgba(255,153,0,0.08)]"
          )}
        />
        
      </div>
    </div>
  );
};

export default Logo;
