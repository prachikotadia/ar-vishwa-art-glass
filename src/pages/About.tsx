import Timeline from '@/components/Timeline';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ChatSystem from '@/components/ChatSystem';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const About = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation onSearch={() => {}} />
      
      {/* Hero Section with Split Portrait */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 items-center">
            
            {/* Left Text Section */}
            <div className="text-center md:text-left space-y-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold font-avenir mb-4 text-foreground">
                  The Artist
                </h1>
                <p className="text-lg font-avenir text-muted-foreground leading-relaxed">
                  Visionary creator with a passion for transforming imagination into vivid realities. 
                  Merging classical technique with bold contemporary expression.
                </p>
              </div>
            </div>

            {/* Center Portrait */}
            <div className="flex justify-center">
              <div className="relative group">
                <img
                  src="/lovable-uploads/b7936043-39bc-4768-a581-922b48f91e94.png"
                  alt="Half realistic, half painted creative portrait of AR Vishwa Art Studio artist"
                  className="w-80 h-80 md:w-96 md:h-96 object-cover rounded-2xl shadow-2xl split-portrait transition-transform duration-300 hover:scale-102"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>

            {/* Right Text Section */}
            <div className="text-center md:text-right space-y-6">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold font-avenir mb-4 text-foreground">
                  The Creative Soul
                </h2>
                <p className="text-lg font-avenir text-muted-foreground leading-relaxed">
                  Pushing boundaries through color, form, and movement, capturing stories and 
                  emotions on every canvas.
                </p>
              </div>
            </div>
          </div>

          {/* View Gallery Button */}
          <div className="text-center mt-12">
            <Button 
              size="lg"
              className="glass hover-glass transition-all duration-300 px-8 py-6 text-lg font-medium group"
              onClick={() => scrollToSection('gallery')}
            >
              <span className="mr-2 group-hover:animate-pulse">🎨</span>
              View My Gallery
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="text-center mt-16">
            <div className="inline-flex flex-col items-center animate-bounce">
              <ArrowDown className="w-6 h-6 text-primary/70 mb-2" />
              <span className="text-sm text-muted-foreground font-avenir">Scroll to explore</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      
      {/* Chat System with About page context */}
      <ChatSystem currentPage="about" />
    </div>
  );
};

export default About;
