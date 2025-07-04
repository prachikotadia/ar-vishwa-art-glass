import Timeline from '@/components/Timeline';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import halfPortrait from '@/assets/halfportrait.png';

const About = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section - Split Portrait */}
      <section className="relative py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            
            {/* Mobile Layout - Stacked */}
            <div className="flex flex-col lg:hidden items-center text-center space-y-8">
              {/* Split Portrait */}
              <div className="w-full max-w-sm mx-auto">
                <img
                  src={halfPortrait}
                  alt="Half realistic, half painted creative portrait of AR Vishwa"
                  className="w-full h-auto object-cover rounded-2xl shadow-2xl"
                  loading="lazy"
                />
              </div>
              
              {/* The Artist Section */}
              <div className="space-y-4">
                <h1 className="text-3xl font-avenir font-bold text-foreground">
                  The Artist
                </h1>
                <p className="text-lg font-avenir leading-relaxed text-muted-foreground">
                  Visionary creator with a passion for transforming imagination into vivid realities. 
                  Merging classical technique with bold contemporary expression.
                </p>
              </div>
              
              {/* The Creative Soul Section */}
              <div className="space-y-4">
                <h2 className="text-3xl font-avenir font-bold text-foreground">
                  The Creative Soul
                </h2>
                <p className="text-lg font-avenir leading-relaxed text-muted-foreground">
                  Pushing boundaries through color, form, and movement, capturing stories 
                  and emotions on every canvas.
                </p>
              </div>
              
              {/* View Gallery Button */}
              <Button 
                size="lg" 
                className="w-full max-w-xs mt-8 h-12 text-lg font-avenir font-medium glass hover-glass transition-all duration-300"
                onClick={() => scrollToSection('gallery')}
              >
                <span className="mr-2">🎨</span>
                View My Gallery
              </Button>
            </div>

            {/* Desktop Layout - Side by Side */}
            <div className="hidden lg:grid lg:grid-cols-3 lg:gap-12 lg:items-center">
              
              {/* Left Section - The Artist */}
              <div className="space-y-6">
                <h1 className="text-4xl xl:text-5xl font-avenir font-bold text-foreground">
                  The Artist
                </h1>
                <p className="text-xl font-avenir leading-relaxed text-muted-foreground">
                  Visionary creator with a passion for transforming imagination into vivid realities. 
                  Merging classical technique with bold contemporary expression.
                </p>
              </div>
              
              {/* Center Section - Split Portrait */}
              <div className="flex justify-center">
                <div className="relative">
                  <img
                    src={halfPortrait}
                    alt="Half realistic, half painted creative portrait of AR Vishwa"
                    className="w-80 h-80 xl:w-96 xl:h-96 object-cover rounded-2xl shadow-2xl"
                    loading="lazy"
                  />
                  {/* Floating elements around portrait */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary/20 rounded-full animate-float" />
                  <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-secondary/20 rounded-full animate-float" style={{ animationDelay: '1s' }} />
                </div>
              </div>
              
              {/* Right Section - The Creative Soul */}
              <div className="space-y-6">
                <h2 className="text-4xl xl:text-5xl font-avenir font-bold text-foreground">
                  The Creative Soul
                </h2>
                <p className="text-xl font-avenir leading-relaxed text-muted-foreground">
                  Pushing boundaries through color, form, and movement, capturing stories 
                  and emotions on every canvas.
                </p>
              </div>
            </div>

            {/* Desktop Gallery Button */}
            <div className="hidden lg:flex lg:justify-center lg:mt-16">
              <Button 
                size="lg" 
                className="px-12 py-6 text-xl font-avenir font-medium glass hover-glass transition-all duration-300 group"
                onClick={() => scrollToSection('gallery')}
              >
                <span className="mr-2 group-hover:animate-pulse">🎨</span>
                View My Gallery
              </Button>
            </div>

            {/* Scroll Indicator */}
            <div className="flex justify-center mt-12 lg:mt-16">
              <div className="animate-bounce">
                <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
                  <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Artist Journey Timeline */}
      <section className="py-20" id="timeline">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-handwritten font-bold text-foreground mb-4">
                My Artistic Journey
              </h2>
              <p className="text-lg font-avenir text-muted-foreground max-w-2xl mx-auto">
                Follow the creative path that led to the establishment of AR Vishwa Art Studio
              </p>
            </div>

            <Timeline />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-mesh" id="gallery">
        <div className="container mx-auto px-4">
          <Card className="glass max-w-4xl mx-auto p-8 text-center">
            <h3 className="text-3xl font-handwritten font-bold text-foreground mb-4">
              Let's Create Something Beautiful Together
            </h3>
            <p className="text-lg font-avenir text-muted-foreground mb-8">
              Whether you're looking for a custom portrait, landscape, or abstract piece, 
              I'm here to bring your artistic vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="glass hover-glass">
                <span className="mr-2">🎨</span>
                Commission Artwork
              </Button>
              <Button size="lg" variant="secondary" className="glass hover-glass">
                <span className="mr-2">📞</span>
                Schedule Consultation
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default About;
