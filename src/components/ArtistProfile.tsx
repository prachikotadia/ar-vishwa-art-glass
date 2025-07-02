
import { useInView } from 'react-intersection-observer';
import Artist3D from './Artist3D';
import Timeline from './Timeline';

const ArtistProfile = () => {
  const { ref: sectionRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section 
      ref={sectionRef}
      className="py-16 lg:py-24 relative overflow-hidden"
      id="artist-journey"
    >
      {/* Background gradient mesh */}
      <div className="bg-gradient-mesh absolute inset-0 opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`glass-strong rounded-3xl p-6 lg:p-12 transition-all duration-1000 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {/* Section header */}
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-4xl lg:text-6xl font-handwritten text-foreground mb-4 animate-ink-reveal">
              The Artistic Journey of Vishwa Patel
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore the milestones, achievements, and creative evolution that shaped my artistic vision
            </p>
          </div>
          
          {/* Main content grid */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Timeline section */}
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl font-handwritten text-foreground mb-8">
                Career Milestones
              </h3>
              <Timeline />
            </div>
            
            {/* 3D Artist model section */}
            <div className="order-1 lg:order-2 space-y-6">
              <div className="text-center lg:text-left">
                <h3 className="text-2xl font-handwritten text-foreground mb-4">
                  Meet the Artist
                </h3>
                <p className="text-muted-foreground mb-6">
                  Interact with the 3D model below - rotate, zoom, and explore from every angle
                </p>
              </div>
              
              <Artist3D 
                modelPath="/models/artist.glb"
                staticImagePath="/images/artist-3d.jpg"
                autoRotate={true}
              />
              
              <div className="text-center">
                <p className="text-sm text-muted-foreground">
                  Click and drag to rotate • Scroll to zoom • Auto-rotates when idle
                </p>
              </div>
              
              {/* Artist description */}
              <div className="glass rounded-xl p-6 space-y-4">
                <h4 className="font-semibold text-foreground">About Vishwa Patel</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  A passionate artist dedicated to bridging traditional techniques with contemporary expression. 
                  My work explores the intersection of classical artistry and modern digital innovation, 
                  creating pieces that resonate with both timeless beauty and cutting-edge creativity.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary/20 text-primary text-xs rounded-full">Portrait Artist</span>
                  <span className="px-3 py-1 bg-secondary/20 text-secondary text-xs rounded-full">Mixed Media</span>
                  <span className="px-3 py-1 bg-accent/20 text-accent text-xs rounded-full">Digital Art</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtistProfile;
