
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Artist3DPlaceholder from '@/components/Artist3DPlaceholder';

const ArtistProfile = () => {
  const achievements = [
    { year: '2020', title: 'Featured Artist - Mumbai Art Gallery' },
    { year: '2021', title: 'Best Contemporary Art - Regional Award' },
    { year: '2022', title: 'Solo Exhibition - "Colors of Life"' },
    { year: '2023', title: 'Art Residency - Creative Commons' },
  ];

  return (
    <section className="py-20 bg-gradient-mesh">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Artist 3D Model */}
          <div className="order-2 lg:order-1">
            <Artist3DPlaceholder />
          </div>

          {/* Artist Info */}
          <div className="order-1 lg:order-2 space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-handwritten font-bold text-foreground mb-4">
                Meet the Artist
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  Welcome to AR Vishwa Art Studio, where passion meets creativity. With over a decade 
                  of experience in various art forms, I specialize in bringing emotions to life through 
                  vibrant colors and meaningful compositions.
                </p>
                <p>
                  My journey began with traditional techniques and has evolved to embrace contemporary 
                  styles, always maintaining the core belief that art should speak to the soul.
                </p>
              </div>
            </div>

            {/* Achievements Timeline */}
            <Card className="glass p-6">
              <h3 className="text-2xl font-handwritten font-bold text-foreground mb-6">
                Milestones & Recognition
              </h3>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className="w-16 h-8 bg-primary/20 rounded-full flex items-center justify-center text-sm font-medium text-primary group-hover:bg-primary/30 transition-colors">
                      {achievement.year}
                    </div>
                    <div className="flex-1">
                      <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                        {achievement.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="glass hover-glass">
                <span className="mr-2">🎨</span>
                View Portfolio
              </Button>
              <Button size="lg" variant="secondary" className="glass hover-glass">
                <span className="mr-2">📞</span>
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtistProfile;
