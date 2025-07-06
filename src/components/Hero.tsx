
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import heroArtwork from '@/assets/hero-artwork.jpg';
import heroArtworkMobile from '@/assets/mobile view.png';
import heroArtworkIpad from '@/assets/hero-artwork - Copy.jpg';

const Hero = () => {
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

      {/* Main content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Logo */}
        <div className="mb-8">
          <img
            src="/lovable-uploads/2415f52d-0c67-42c1-8a2a-c8899ffcee6a.png"
            alt="AR Vishwa Art Studio Logo"
            className="h-32 md:h-40 mx-auto transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Main title */}
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-avenir font-bold text-foreground mb-4">
            Where Colors Speak
          </h1>
          <div className="text-3xl md:text-4xl font-avenir text-foreground/80">
            AR Vishwa Art Studio
          </div>
        </div>

        {/* Enhanced Tagline with mixed typography */}
        <p className="text-xl md:text-2xl font-avenir text-muted-foreground mb-12 hero-title-mixed">
          Imbuing Life to Art, <span className="brush-text">One Stroke</span> at a Time
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
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
