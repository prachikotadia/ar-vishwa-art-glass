import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import heroArtwork from '@/assets/hero-artwork.jpg';
import heroArtworkMobile from '@/assets/mobile view.png';
import heroArtworkIpad from '@/assets/hero-artwork - Copy.jpg';

const Hero = () => {
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsRevealed(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-mesh">
      {/* Background with parallax effect */}
      <picture>
        <source srcSet={heroArtworkMobile} media="(max-width: 768px)" />
        <source srcSet={heroArtworkIpad} media="(min-width: 769px) and (max-width: 1366px)" />
        <img
          src={heroArtwork}
          alt="Hero Artwork"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          style={{ zIndex: 0 }}
        />
      </picture>
      
      {/* Floating background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary/20 rounded-full animate-float" />
        <div className="absolute top-40 right-32 w-24 h-24 bg-secondary/20 rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-32 left-40 w-40 h-40 bg-accent/20 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-artist-gold/20 rounded-full animate-float" style={{ animationDelay: '3s' }} />
      </div>

      {/* Floating logo */}
      <div className="absolute top-32 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-20 h-20 glass rounded-full flex items-center justify-center">
          <span className="text-2xl font-avenir font-bold text-primary">AR</span>
        </div>
      </div>

      {/* Orbiting brush */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="animate-orbit">
          <div className="w-8 h-8 text-primary opacity-70">
            🖌️
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Magic ink reveal title */}
        <div className="mb-8">
          <h1 
            className={`text-5xl md:text-7xl font-avenir font-bold text-foreground transition-all duration-3000 ${
              isRevealed ? 'animate-ink-reveal' : 'opacity-0'
            }`}
            style={{
              background: 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--secondary)), hsl(var(--accent)))',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 4px 8px hsl(var(--primary) / 0.3)'
            }}
          >
            Where Colors Speak
          </h1>
          <div className="text-3xl md:text-4xl font-avenir mt-4 text-foreground/80">
            AR Vishwa Art Studio
          </div>
        </div>

        {/* Enhanced Tagline with mixed typography */}
        <p className="text-xl md:text-2xl font-avenir text-muted-foreground mb-12 animate-fade-in hero-title-mixed" style={{ animationDelay: '3s' }}>
          Imbuing Life to Art, <span className="brush-text">One Stroke</span> at a Time
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in" style={{ animationDelay: '4s' }}>
          <Button 
            size="lg"
            className="glass hover-glass transition-all duration-300 px-8 py-6 text-lg font-medium group"
            onClick={() => scrollToSection('gallery')}
          >
            <span className="mr-2 group-hover:animate-pulse">🎨</span>
            Explore Paintings
          </Button>
          <Button 
            size="lg"
            variant="secondary"
            className="glass hover-glass transition-all duration-300 px-8 py-6 text-lg font-medium group"
            onClick={() => scrollToSection('custom-order')}
          >
            <span className="mr-2 group-hover:animate-pulse">🖌️</span>
            Custom Order
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
