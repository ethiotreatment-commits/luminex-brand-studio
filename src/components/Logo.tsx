import luminexLogo from "@/assets/luminex-logo.png";
import { cn } from "@/lib/utils";

interface LogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  showTagline?: boolean;
  className?: string;
}

const sizeClasses = {
  sm: "h-10",
  md: "h-14",
  lg: "h-24",
  xl: "h-36 md:h-44",
};

const Logo = ({ size = "md", showTagline = false, className }: LogoProps) => {
  return (
    <div className={cn("flex flex-col items-center", className)}>
      <img
        src={luminexLogo}
        alt="Luminex - Light up your brand"
        className={cn(
          sizeClasses[size],
          "w-auto object-contain"
        )}
      />
    </div>
  );
};

export default Logo;
