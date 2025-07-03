
import { useEffect, useState } from 'react';
import acrylicImg from '@/assets/categories/acrylic-1.jpg';
import portraitImg from '@/assets/categories/portrait-1.jpg';
import landscapeImg from '@/assets/categories/landscape-1.jpg';
import mixmediaImg from '@/assets/categories/mixmedia-1.jpg';
import pencilImg from '@/assets/categories/pencil-1.jpg';
import fluidImg from '@/assets/categories/fluid-1.jpg';
import buddhaImg from '@/assets/categories/buddha-1.jpg';
import spiritualImg from '@/assets/categories/spiritual-1.jpg';
import blackwhiteImg from '@/assets/categories/blackwhite-1.jpg';

const categories = [
  { name: 'Acrylic', image: acrylicImg },
  { name: 'Portrait', image: portraitImg },
  { name: 'Landscape', image: landscapeImg },
  { name: 'Mix Media', image: mixmediaImg },
  { name: 'Pencil', image: pencilImg },
  { name: 'Fluid', image: fluidImg },
  { name: 'Buddha', image: buddhaImg },
  { name: 'Spiritual', image: spiritualImg },
  { name: 'Black & White', image: blackwhiteImg },
  { name: 'Oil', image: portraitImg },
  { name: 'Stripping', image: acrylicImg },
  { name: 'Stitching', image: mixmediaImg },
  { name: 'Printmaking', image: pencilImg },
  { name: 'Texture', image: fluidImg },
  { name: 'Visual', image: landscapeImg },
];

const Carousel3D = () => {
  const [isPaused, setIsPaused] = useState(false);
  const numberOfItems = categories.length;
  const angleIncrement = 360 / numberOfItems;
  const radius = 300;

  return (
    <section className="py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-handwritten font-bold text-foreground mb-4">
            Our Art Categories
          </h2>
          <p className="text-lg font-opensans text-muted-foreground max-w-2xl mx-auto">
            Discover our diverse collection of artistic styles and techniques
          </p>
        </div>

        {/* Enhanced 3D Carousel Container with better centering */}
        <div className="flex justify-center items-center">
          <div className="perspective-1000 flex justify-center items-center h-96 w-full max-w-4xl mx-auto">
            <div 
              className={`preserve-3d ${isPaused ? '' : 'animate-carousel'} relative w-80 h-80`}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              style={{
                transformStyle: 'preserve-3d'
              }}
            >
              {categories.map((category, index) => {
                const angle = index * angleIncrement;
                return (
                  <div
                    key={category.name}
                    className="absolute w-44 h-60 md:w-48 md:h-64 glass hover-glass transition-all duration-300 rounded-2xl overflow-hidden cursor-pointer group shadow-lg"
                    style={{
                      transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                      backfaceVisibility: 'hidden',
                      boxShadow: '0 8px 32px rgba(0,0,0,0.2)'
                    }}
                  >
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4">
                      <h3 className="text-white font-semibold text-lg font-handwritten text-center">
                        {category.name}
                      </h3>
                    </div>
                    
                    {/* Enhanced glassmorphic overlay */}
                    <div className="absolute inset-0 bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white font-semibold bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full font-opensans">
                        View Collection
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Centered Carousel Controls/Info */}
        <div className="text-center mt-8">
          <p className="text-sm font-opensans text-muted-foreground">
            Hover to pause • {numberOfItems} Categories Available
          </p>
        </div>
      </div>
    </section>
  );
};

export default Carousel3D;
