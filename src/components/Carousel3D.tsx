
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

  // Duplicate categories for seamless infinite scroll
  const duplicatedCategories = [...categories, ...categories];

  return (
    <section className="py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-avenir font-bold text-foreground mb-4">
            Our Art Categories
          </h2>
          <p className="text-lg font-avenir text-muted-foreground max-w-2xl mx-auto">
            Discover our diverse collection of artistic styles and techniques
          </p>
        </div>

        {/* Auto-rotating Arc-style Carousel */}
        <div className="cards-container">
          <div 
            className={`cards-inner ${isPaused ? 'pause' : ''}`}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            style={{
              animationPlayState: isPaused ? 'paused' : 'running'
            }}
          >
            {duplicatedCategories.map((category, index) => (
              <div
                key={`${category.name}-${index}`}
                className="art-card"
              >
                <img
                  src={category.image}
                  alt={`${category.name} artwork showcase`}
                  className="w-full h-48 object-cover"
                />
                <p className="art-caption">
                  {category.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Centered Carousel Controls/Info */}
        <div className="text-center mt-8">
          <p className="text-sm font-avenir text-muted-foreground">
            Hover to pause • {categories.length} Categories Available
          </p>
        </div>
      </div>
    </section>
  );
};

export default Carousel3D;
