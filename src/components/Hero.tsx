import { Button } from "@/components/ui/button";
import ScrollVelocity from "@/components/ScrollVelocity";
import { useState } from "react";
// Use public spark image so you can replace it easily without rebuilding assets
// Place your new spark image at public/spark.png (with dark background to be keyed out)
// Fallback to bundled asset if public file is missing
import lightningHero from "@/assets/lightning-hero.png";

const Hero = () => {
  const [sparkSrc, setSparkSrc] = useState<string>(lightningHero);
  const [showAgent, setShowAgent] = useState<boolean>(true);
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-reference">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Sparkles */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-electric rounded-full sparkle" style={{ '--delay': '0s' } as React.CSSProperties}></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-luxury-gold rounded-full sparkle" style={{ '--delay': '1s' } as React.CSSProperties}></div>
        <div className="absolute bottom-32 left-32 w-2 h-2 bg-electric-glow rounded-full sparkle" style={{ '--delay': '2s' } as React.CSSProperties}></div>
        <div className="absolute top-60 right-20 w-1 h-1 bg-electric rounded-full sparkle" style={{ '--delay': '0.5s' } as React.CSSProperties}></div>
      </div>

      <div className="container mx-auto px-6 md:px-10 lg:px-12 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center relative z-10 py-24 lg:py-32">
        {/* Left Content */}
        <div className="space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight">
              <span className="text-foreground">Welcome to</span>
              <br />
              <span className="text-gradient-electric">Spark Labs</span>
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground/90 max-w-2xl leading-relaxed">
              Transforming the way you work—our AI agents automate, optimize, and elevate your business to the next level.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Button className="btn-electric text-base lg:text-lg px-7 py-4">
              Explore Services
            </Button>
            <Button 
              variant="outline" 
              className="border-electric text-electric hover:bg-electric hover:text-primary-foreground text-base lg:text-lg px-7 py-4 transition-all duration-300 hover:shadow-electric"
            >
              Learn More
            </Button>
          </div>

          {/* Scrolling value props */}
          <div className="pt-8">
            <ScrollVelocity
              texts={[
                "Automate Smarter",
                "Boost Productivity",
                "Accelerate Growth",
                "Optimize Workflows",
                "Enhance Customer Experience",
                "Future-Proof Your Business",
              ]}
              velocity={2}
              className="custom-scroll-text"
            />
          </div>
        </div>

        {/* Right Content - Lightning Element */}
        <div className="relative flex items-center justify-center">
          <div className="relative animate-float">
            {/* Subtle gradient to blend into background (reduced, no yellow ring) */}
            <div className="pointer-events-none absolute -inset-4 rounded-full bg-gradient-to-b from-transparent via-transparent to-transparent" />

            <img
              src={sparkSrc}
              alt="Electric Lightning - AI Power"
              className="w-full max-w-md lg:max-w-lg drop-shadow-2xl lightning-glow animate-lightning image-soft-mask key-dark-bg opacity-95"
              onError={() => setSparkSrc(lightningHero)}
            />
            
            {/* Removed electric ring to avoid yellow oval around image */}
            
            {/* Floating Elements Around Lightning */}
            <div className="absolute -top-10 -right-10 w-16 h-16 bg-electric/10 rounded-full animate-float" style={{ animationDelay: '1s' } as React.CSSProperties}></div>
            <div className="absolute -bottom-10 -left-10 w-12 h-12 bg-luxury-gold/10 rounded-full animate-float" style={{ animationDelay: '2s' } as React.CSSProperties}></div>

            {/* Mini AI Agent leaning on the spark (place your image at public/ai-agent.png) */}
            {showAgent && (
              <div className="absolute -bottom-2 right-4 lg:right-8 origin-bottom agent-drop-shadow" aria-hidden>
                <img
                  src="/ai-agent.png"
                  alt="AI agent"
                  className="w-24 lg:w-28 transform -rotate-8 translate-x-2 image-soft-mask mix-blend-normal"
                  draggable={false}
                  onError={() => setShowAgent(false)}
                />
                {/* Contact shadow */}
                <div className="absolute -bottom-1 left-3 right-0 h-2 bg-black/40 blur-md rounded-full opacity-60 -z-10" />
              </div>
            )}
          </div>

          {/* Removed large background glow to avoid yellow oval */}
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-electric/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-electric rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;