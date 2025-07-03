
import Timeline from '@/components/Timeline';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-mesh overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Artist Portrait */}
            <div className="mb-12">
              <div className="relative inline-block">
                <img
                  src="/lovable-uploads/ea71478a-39fb-497b-88b0-59a9916239ef.png"
                  alt="AR Vishwa - Artist Portrait"
                  className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full mx-auto shadow-2xl border-4 border-white/20"
                  style={{
                    filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.3))'
                  }}
                />
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-primary/20 rounded-full animate-float" style={{ animationDelay: '1s' }} />
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-secondary/20 rounded-full animate-float" style={{ animationDelay: '2s' }} />
              </div>
            </div>

            {/* Artist Introduction */}
            <div className="space-y-6 text-left max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-handwritten font-bold text-center text-foreground mb-8">
                Meet the Artist
              </h1>
              
              <Card className="glass p-8">
                <p className="text-lg font-opensans leading-relaxed text-muted-foreground mb-6">
                  Welcome to the world of AR Vishwa Art Studio, where creativity flows like vibrant colors on canvas. 
                  As a passionate artist with over a decade of experience, I specialize in bringing emotions to life through 
                  diverse artistic mediums including acrylics, oils, watercolors, and mixed media. My artistic vision centers 
                  around the belief that every stroke tells a story, and every color carries an emotion that resonates with 
                  the viewer's soul.
                </p>
                
                <p className="text-lg font-opensans leading-relaxed text-muted-foreground">
                  My creative journey has been shaped by a deep connection to traditional techniques while embracing 
                  contemporary expressions. Having showcased my work in numerous exhibitions and received recognition 
                  for innovative approaches to art, I continue to push boundaries in artistic expression. My philosophy 
                  revolves around the idea that art should not just be seen but felt – creating pieces that spark 
                  conversations, evoke memories, and inspire new perspectives in everyone who encounters them.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Artist Journey Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-handwritten font-bold text-foreground mb-4">
                My Artistic Journey
              </h2>
              <p className="text-lg font-opensans text-muted-foreground max-w-2xl mx-auto">
                Follow the creative path that led to the establishment of AR Vishwa Art Studio
              </p>
            </div>

            <Timeline />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-mesh">
        <div className="container mx-auto px-4">
          <Card className="glass max-w-4xl mx-auto p-8 text-center">
            <h3 className="text-3xl font-handwritten font-bold text-foreground mb-4">
              Let's Create Something Beautiful Together
            </h3>
            <p className="text-lg font-opensans text-muted-foreground mb-8">
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
