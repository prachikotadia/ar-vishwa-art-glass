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
  // Additional placeholder categories
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
  const radius = 300; // Distance from center

  return (
    <section className="py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-handwritten font-bold text-foreground mb-4">
            Our Art Categories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our diverse collection of artistic styles and techniques
          </p>
        </div>

        {/* 3D Carousel Container */}
        <div className="perspective-1000 flex justify-center items-center h-96">
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
                  className="absolute w-48 h-64 glass hover-glass transition-all duration-300 rounded-2xl overflow-hidden cursor-pointer group"
                  style={{
                    transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                    backfaceVisibility: 'hidden'
                  }}
                >
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <h3 className="text-white font-semibold text-lg font-handwritten">
                      {category.name}
                    </h3>
                  </div>
                  
                  {/* Glassmorphic overlay */}
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-semibold bg-black/50 px-4 py-2 rounded-full">
                      View Collection
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Carousel Controls/Info */}
        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            Hover to pause • {numberOfItems} Categories Available
          </p>
        </div>
      </div>
    </section>
  );
};

export default Carousel3D;