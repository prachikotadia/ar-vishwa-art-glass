import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { MapPin, Video, Navigation, Clock, Phone, Mail } from 'lucide-react';
import demoStudioVideo from '@/assets/demo_studio.mp4';

const VirtualStudioTour = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [currentHotspot, setCurrentHotspot] = useState<string | null>(null);

  // Mock studio information
  const studioInfo = {
    address: "123 Art District Lane, Creative Quarter, Mumbai 400001",
    phone: "+91 98765 43210",
    email: "hello@arvishwaart.com",
    hours: {
      weekdays: "10:00 AM - 6:00 PM",
      weekends: "11:00 AM - 5:00 PM",
      closed: "Sundays"
    }
  };

  const hotspots = [
    {
      id: 'easel',
      title: 'Main Easel Station',
      description: 'Where the magic happens - professional easels with adjustable heights and custom lighting setup.',
      x: 25,
      y: 40
    },
    {
      id: 'paints',
      title: 'Paint Collection',
      description: 'Premium quality acrylics, oils, and watercolors from renowned brands worldwide.',
      x: 70,
      y: 30
    },
    {
      id: 'gallery',
      title: 'Display Gallery',
      description: 'Finished artworks waiting for their new homes, showcasing various styles and techniques.',
      x: 50,
      y: 70
    },
    {
      id: 'workspace',
      title: 'Creative Workspace',
      description: 'Sketching area with natural lighting, perfect for detailed pencil work and planning.',
      x: 15,
      y: 65
    }
  ];

  const handleVideoPlay = () => {
    setIsVideoPlaying(true);
  };

  const handleMapNavigation = () => {
    const encodedAddress = encodeURIComponent(studioInfo.address);
    window.open(`https://www.google.com/maps/search/${encodedAddress}`, '_blank');
  };

  const getCurrentStatus = () => {
    const now = new Date();
    const hour = now.getHours();
    const day = now.getDay();
    
    if (day === 0) return { status: 'Closed', color: 'text-red-500' };
    if ((day >= 1 && day <= 5 && hour >= 10 && hour < 18) || 
        (day === 6 && hour >= 11 && hour < 17)) {
      return { status: 'Open Now', color: 'text-green-500' };
    }
    return { status: 'Closed', color: 'text-red-500' };
  };

  const currentStatus = getCurrentStatus();

  return (
    <section id="studio-tour" className="py-20 px-4 bg-gradient-mesh">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-handwritten font-bold text-foreground mb-4">
            Step Inside the Creative Space
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Take a virtual journey through AR Vishwa Art Studio and discover where artistic dreams come to life
          </p>
        </div>

        {/* Virtual Tour Video Section */}
        <div className="mb-16">
          <Card className="glass overflow-hidden">
            <div className="relative aspect-video bg-muted">
              {!isVideoPlaying ? (
                <>
                  {/* Video Thumbnail */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center cursor-pointer group"
                    onClick={handleVideoPlay}
                  >
                    <div className="text-center">
                      <div className="w-20 h-20 bg-white/20 backdrop-blur rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                        <Video className="w-8 h-8 text-white ml-1" />
                      </div>
                      <h3 className="text-2xl font-handwritten font-bold text-white mb-2">
                        360° Studio Walkthrough
                      </h3>
                      <p className="text-white/80">Click to start your virtual tour</p>
                    </div>
                  </div>

                  {/* Interactive Hotspots */}
                  {hotspots.map((hotspot) => (
                    <div
                      key={hotspot.id}
                      className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                      style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
                      onMouseEnter={() => setCurrentHotspot(hotspot.id)}
                      onMouseLeave={() => setCurrentHotspot(null)}
                    >
                      <div className="w-4 h-4 bg-primary rounded-full animate-ping absolute" />
                      <div className="w-4 h-4 bg-primary rounded-full relative z-10" />
                      
                      {currentHotspot === hotspot.id && (
                        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
                          <div className="bg-background/90 backdrop-blur p-3 rounded-lg shadow-lg min-w-48">
                            <h4 className="font-semibold text-sm mb-1">{hotspot.title}</h4>
                            <p className="text-xs text-muted-foreground">{hotspot.description}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </>
              ) : (
                <video
                  className="absolute inset-0 w-full h-full object-cover"
                  src={demoStudioVideo}
                  controls
                  autoPlay
                  playsInline
                  onEnded={() => setIsVideoPlaying(false)}
                />
              )}
            </div>
          </Card>
        </div>

        {/* Studio Information Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Location & Contact Info */}
          <Card className="glass p-6">
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-handwritten font-bold">Visit Our Studio</h3>
            </div>

            <div className="space-y-4 mb-6">
              <div>
                <h4 className="font-semibold mb-2">Address</h4>
                <p className="text-muted-foreground">{studioInfo.address}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Phone</h4>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-primary" />
                    <a 
                      href={`tel:${studioInfo.phone}`}
                      className="text-primary hover:underline"
                    >
                      {studioInfo.phone}
                    </a>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Email</h4>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-primary" />
                    <a 
                      href={`mailto:${studioInfo.email}`}
                      className="text-primary hover:underline"
                    >
                      {studioInfo.email}
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  Operating Hours
                  <span className={`text-sm px-2 py-1 rounded-full bg-background/50 ${currentStatus.color}`}>
                    {currentStatus.status}
                  </span>
                </h4>
                <div className="text-sm text-muted-foreground space-y-1">
                  <p>Monday - Friday: {studioInfo.hours.weekdays}</p>
                  <p>Saturday: {studioInfo.hours.weekends}</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>

            <Button 
              onClick={handleMapNavigation}
              className="w-full glass hover-glass"
            >
              <Navigation className="w-4 h-4 mr-2" />
              Get Directions
            </Button>
          </Card>

          {/* Interactive Map */}
          <Card className="glass overflow-hidden">
            <div className="p-6 pb-0">
              <h3 className="text-2xl font-handwritten font-bold mb-4">Find Us</h3>
            </div>
            
            <div className="aspect-square bg-muted relative overflow-hidden">
              {/* Map Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">Interactive Map</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Studio location in Creative Quarter
                  </p>
                  <Button 
                    variant="secondary"
                    onClick={handleMapNavigation}
                    className="glass"
                  >
                    Open in Maps
                  </Button>
                </div>
              </div>

              {/* Map overlay effects */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent to-background/10" />
            </div>
          </Card>
        </div>

        {/* Behind the Scenes Preview */}
        <div className="mt-16 text-center">
          <Card className="glass p-8">
            <h3 className="text-3xl font-handwritten font-bold mb-4">
              Behind the Scenes
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Experience the creative process firsthand. Watch time-lapse videos of artwork creation, 
              learn about different techniques, and see the passion that goes into every piece.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="outline" className="glass">
                🎨 Process Videos
              </Button>
              <Button variant="outline" className="glass">
                📸 Studio Gallery
              </Button>
              <Button variant="outline" className="glass">
                🖌️ Technique Demos
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default VirtualStudioTour;
