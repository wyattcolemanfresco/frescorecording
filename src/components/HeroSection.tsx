import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/fresco-hero-bg.jpg";
import frescoLogo from "@/assets/fresco-logo-main.png";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Professional recording studio with mixing console"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <p className="text-primary font-body text-lg md:text-xl mb-4 animate-fade-in opacity-0">
          Welcome to
        </p>
        <img 
          src={frescoLogo} 
          alt="Fresco Recording Services" 
          className="h-48 md:h-64 lg:h-80 w-auto mx-auto mb-6 animate-slide-up opacity-0 delay-100"
        />
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-in opacity-0 delay-300 font-body">
          The Best Sound in Pensacola. Professional music recording, voice over, and film production.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in opacity-0 delay-500">
          <Button variant="hero" size="lg" asChild>
            <a href="#contact">Book a Session</a>
          </Button>
          <Button variant="heroOutline" size="lg" asChild>
            <a href="#services">Our Services</a>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-foreground/50 hover:text-primary transition-colors duration-300 animate-float"
      >
        <ChevronDown size={36} />
      </a>
    </section>
  );
};
