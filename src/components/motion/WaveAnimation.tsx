const WaveAnimation = () => {
  return (
    <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none" style={{ height: "120px" }}>
      <svg
        className="absolute bottom-0 w-full"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        style={{ height: "120px", width: "100%" }}
      >
        <defs>
          <linearGradient id="waveGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(36, 100%, 50%)" stopOpacity="0.15" />
            <stop offset="50%" stopColor="hsl(36, 100%, 60%)" stopOpacity="0.25" />
            <stop offset="100%" stopColor="hsl(36, 100%, 50%)" stopOpacity="0.15" />
          </linearGradient>
          <linearGradient id="waveGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(36, 100%, 50%)" stopOpacity="0.08" />
            <stop offset="50%" stopColor="hsl(36, 100%, 55%)" stopOpacity="0.15" />
            <stop offset="100%" stopColor="hsl(36, 100%, 50%)" stopOpacity="0.08" />
          </linearGradient>
        </defs>
        {/* Wave 1 - slower, larger */}
        <path fill="url(#waveGrad1)">
          <animate
            attributeName="d"
            dur="8s"
            repeatCount="indefinite"
            values="
              M0,80 C360,40 720,100 1080,60 C1260,40 1380,70 1440,80 L1440,120 L0,120 Z;
              M0,60 C360,90 720,40 1080,80 C1260,70 1380,50 1440,60 L1440,120 L0,120 Z;
              M0,80 C360,40 720,100 1080,60 C1260,40 1380,70 1440,80 L1440,120 L0,120 Z
            "
          />
        </path>
        {/* Wave 2 - faster, thinner */}
        <path fill="url(#waveGrad2)">
          <animate
            attributeName="d"
            dur="6s"
            repeatCount="indefinite"
            values="
              M0,90 C240,70 480,100 720,80 C960,60 1200,90 1440,85 L1440,120 L0,120 Z;
              M0,75 C240,95 480,65 720,90 C960,80 1200,70 1440,90 L1440,120 L0,120 Z;
              M0,90 C240,70 480,100 720,80 C960,60 1200,90 1440,85 L1440,120 L0,120 Z
            "
          />
        </path>
      </svg>
    </div>
  );
};

export default WaveAnimation;
