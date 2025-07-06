
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Play, Pause, Camera, Palette, Phone } from 'lucide-react';
import studioVideo from '@/assets/demo_studio.mp4';

const VirtualStudioTour = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleVideoToggle = () => {
    const video = document.getElementById('studio-video') as HTMLVideoElement;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const handleConsultationClick = () => {
    setShowModal(true);
  };

  const handleCallClick = () => {
    const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if (isMobile) {
      window.location.href = 'tel:+919313042798';
    } else {
      // Copy number to clipboard on desktop
      navigator.clipboard.writeText('+91 93130 42798').then(() => {
        alert('Phone number copied to clipboard: +91 93130 42798');
      });
    }
    setShowModal(false);
  };

  const interactiveFeatures = [
    {
      icon: Palette,
      title: "Process Videos",
      description: "Watch the creative process unfold",
      action: () => {
        // Scroll to video or open process videos
        const video = document.getElementById('studio-video');
        video?.scrollIntoView({ behavior: 'smooth' });
      }
    },
    {
      icon: Camera,
      title: "Studio Gallery",
      description: "Explore behind-the-scenes moments",
      action: () => {
        // Navigate to gallery section
        const gallery = document.getElementById('gallery');
        gallery?.scrollIntoView({ behavior: 'smooth' });
      }
    },
    {
      icon: Play,
      title: "Technique Demos",
      description: "Learn artistic techniques",
      action: () => {
        handleVideoToggle();
      }
    }
  ];

  return (
    <section className="py-20 bg-gradient-mesh">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-avenir font-bold text-foreground mb-4">
            Behind the Scenes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-avenir">
            Step into the creative world and witness the magic of art in the making
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Interactive Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {interactiveFeatures.map((feature, index) => (
              <button
                key={index}
                onClick={feature.action}
                className="glass rounded-2xl p-6 text-center hover-glass transition-all duration-300 group"
              >
                <div className="w-16 h-16 glass rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-pulse">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-avenir font-bold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground font-avenir">
                  {feature.description}
                </p>
              </button>
            ))}
          </div>

          {/* Studio Video */}
          <div className="glass rounded-2xl overflow-hidden mb-8">
            <div className="relative">
              <video
                id="studio-video"
                className="w-full h-[400px] md:h-[500px] object-cover"
                poster="/placeholder.svg"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              >
                <source src={studioVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <Button
                  onClick={handleVideoToggle}
                  size="lg"
                  className="glass hover-glass transition-all duration-300 rounded-full w-20 h-20 p-0"
                >
                  {isPlaying ? (
                    <Pause className="w-8 h-8 text-primary" />
                  ) : (
                    <Play className="w-8 h-8 text-primary ml-1" />
                  )}
                </Button>
              </div>
            </div>
          </div>

          {/* Consultation Button */}
          <div className="text-center">
            <Button
              onClick={handleConsultationClick}
              size="lg"
              className="glass hover-glass transition-all duration-300 px-8 py-6 text-lg font-medium group font-avenir"
            >
              <Phone className="w-6 h-6 mr-2 group-hover:animate-pulse" />
              Schedule Consultation
            </Button>
          </div>
        </div>

        {/* Consultation Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="glass rounded-2xl p-8 max-w-md w-full text-center">
              <Phone className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-avenir font-bold text-foreground mb-4">
                Schedule Your Consultation
              </h3>
              <p className="text-muted-foreground mb-6 font-avenir">
                Ready to discuss your art project? Call us directly or we'll copy the number for you.
              </p>
              <div className="text-2xl font-avenir font-bold text-primary mb-6">
                +91 93130 42798
              </div>
              <div className="flex gap-4">
                <Button
                  onClick={handleCallClick}
                  className="flex-1 bg-primary hover:bg-primary/90 font-avenir"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
                <Button
                  onClick={() => setShowModal(false)}
                  variant="outline"
                  className="flex-1 font-avenir"
                >
                  Close
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default VirtualStudioTour;
