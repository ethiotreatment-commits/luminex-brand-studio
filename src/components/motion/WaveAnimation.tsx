const WaveAnimation = () => {
  return (
    <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none" style={{ height: "220px" }}>
      <svg
        className="absolute bottom-0 w-full"
        viewBox="0 0 1440 220"
        preserveAspectRatio="none"
        style={{ height: "220px", width: "100%" }}
      >
        <defs>
          <linearGradient id="waveGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(36, 100%, 50%)" stopOpacity="0.06" />
            <stop offset="30%" stopColor="hsl(36, 100%, 55%)" stopOpacity="0.2" />
            <stop offset="50%" stopColor="hsl(36, 100%, 60%)" stopOpacity="0.28" />
            <stop offset="70%" stopColor="hsl(36, 100%, 55%)" stopOpacity="0.2" />
            <stop offset="100%" stopColor="hsl(36, 100%, 50%)" stopOpacity="0.06" />
          </linearGradient>
          <linearGradient id="waveGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(36, 100%, 50%)" stopOpacity="0.03" />
            <stop offset="40%" stopColor="hsl(36, 100%, 58%)" stopOpacity="0.12" />
            <stop offset="60%" stopColor="hsl(36, 100%, 58%)" stopOpacity="0.12" />
            <stop offset="100%" stopColor="hsl(36, 100%, 50%)" stopOpacity="0.03" />
          </linearGradient>
          <linearGradient id="waveGrad3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(180, 60%, 50%)" stopOpacity="0.04" />
            <stop offset="50%" stopColor="hsl(180, 60%, 55%)" stopOpacity="0.1" />
            <stop offset="100%" stopColor="hsl(180, 60%, 50%)" stopOpacity="0.04" />
          </linearGradient>
          <filter id="waveGlow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {/* Wave 1 - large, slow, primary */}
        <path fill="url(#waveGrad1)" filter="url(#waveGlow)">
          <animate
            attributeName="d"
            dur="12s"
            repeatCount="indefinite"
            values="
              M0,130 C180,80 360,160 540,110 C720,60 900,150 1080,100 C1260,50 1380,120 1440,130 L1440,220 L0,220 Z;
              M0,100 C180,150 360,70 540,130 C720,160 900,80 1080,120 C1260,140 1380,90 1440,100 L1440,220 L0,220 Z;
              M0,130 C180,80 360,160 540,110 C720,60 900,150 1080,100 C1260,50 1380,120 1440,130 L1440,220 L0,220 Z
            "
          />
        </path>
        {/* Wave 2 — mid layer */}
        <path fill="url(#waveGrad2)">
          <animate
            attributeName="d"
            dur="9s"
            repeatCount="indefinite"
            values="
              M0,155 C240,120 480,175 720,140 C960,105 1200,165 1440,150 L1440,220 L0,220 Z;
              M0,135 C240,170 480,115 720,155 C960,175 1200,125 1440,140 L1440,220 L0,220 Z;
              M0,155 C240,120 480,175 720,140 C960,105 1200,165 1440,150 L1440,220 L0,220 Z
            "
          />
        </path>
        {/* Wave 3 — cyan accent, subtle */}
        <path fill="url(#waveGrad3)">
          <animate
            attributeName="d"
            dur="15s"
            repeatCount="indefinite"
            values="
              M0,170 C360,145 720,185 1080,155 C1260,140 1380,165 1440,170 L1440,220 L0,220 Z;
              M0,160 C360,185 720,140 1080,170 C1260,180 1380,150 1440,160 L1440,220 L0,220 Z;
              M0,170 C360,145 720,185 1080,155 C1260,140 1380,165 1440,170 L1440,220 L0,220 Z
            "
          />
        </path>
      </svg>
    </div>
  );
};

export default WaveAnimation;
