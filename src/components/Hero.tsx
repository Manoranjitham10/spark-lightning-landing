import { Button } from "@/components/ui/button";
import lightningHero from "@/assets/lightning-hero.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Sparkles */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-electric rounded-full sparkle" style={{ '--delay': '0s' } as React.CSSProperties}></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-luxury-gold rounded-full sparkle" style={{ '--delay': '1s' } as React.CSSProperties}></div>
        <div className="absolute bottom-32 left-32 w-2 h-2 bg-electric-glow rounded-full sparkle" style={{ '--delay': '2s' } as React.CSSProperties}></div>
        <div className="absolute top-60 right-20 w-1 h-1 bg-electric rounded-full sparkle" style={{ '--delay': '0.5s' } as React.CSSProperties}></div>
      </div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              <span className="text-foreground">Welcome to</span>
              <br />
              <span className="text-gradient-electric">Spark Labs</span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-2xl">
              AI solutions transforming businesses with cutting-edge technology and intelligent automation
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="btn-electric text-lg px-8 py-4">
              Explore Services
            </Button>
            <Button 
              variant="outline" 
              className="border-electric text-electric hover:bg-electric hover:text-primary-foreground text-lg px-8 py-4 transition-all duration-300"
            >
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 pt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient-electric">500+</div>
              <div className="text-sm text-muted-foreground">AI Agents Deployed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient-electric">98%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient-electric">24/7</div>
              <div className="text-sm text-muted-foreground">AI Support</div>
            </div>
          </div>
        </div>

        {/* Right Content - Lightning Element */}
        <div className="relative flex items-center justify-center">
          <div className="relative animate-float">
            <img
              src={lightningHero}
              alt="Electric Lightning - AI Power"
              className="w-full max-w-md lg:max-w-lg drop-shadow-2xl lightning-glow animate-lightning"
            />
            
            {/* Electric Ring Effect */}
            <div className="absolute inset-0 rounded-full border-2 border-electric/30 animate-pulse-electric"></div>
            
            {/* Floating Elements Around Lightning */}
            <div className="absolute -top-10 -right-10 w-16 h-16 bg-electric/10 rounded-full animate-float" style={{ animationDelay: '1s' } as React.CSSProperties}></div>
            <div className="absolute -bottom-10 -left-10 w-12 h-12 bg-luxury-gold/10 rounded-full animate-float" style={{ animationDelay: '2s' } as React.CSSProperties}></div>
          </div>

          {/* Background Glow */}
          <div className="absolute inset-0 bg-electric/5 rounded-full blur-3xl scale-150"></div>
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