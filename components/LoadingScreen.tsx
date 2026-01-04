"use client";

import GlitchText from "@/components/ui/bits/GlitchText";

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <GlitchText
        speed={0.4}
        enableShadows={true}
        className="text-4xl md:text-6xl lg:text-7xl font-bold"
      >
        Design, Develop, Deploy.
      </GlitchText>
    </div>
  );
};

export default LoadingScreen;
