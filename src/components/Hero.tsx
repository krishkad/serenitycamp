import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-luxury-camping.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center parallax"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/20" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 text-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Escape to Nature.
          <br />
          <span className="text-gold">Discover Peace.</span>
          <br />
          Experience Luxury.
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-12 font-light max-w-2xl mx-auto">
          Immerse yourself in the wilderness without compromising on comfort. 
          Where luxury meets nature's embrace.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            size="lg" 
            className="btn-nature text-lg px-8 py-4 hover:scale-105 transition-transform"
          >
            Explore Packages
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="bg-white/10 border-white/30 text-white hover:bg-white/20 text-lg px-8 py-4 hover:scale-105 transition-transform"
          >
            Book Your Escape
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-white w-8 h-8" />
      </div>
    </section>
  );
};

export default Hero;