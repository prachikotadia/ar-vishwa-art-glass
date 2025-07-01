import { useState } from 'react';
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
  { 
    name: 'Acrylic Paintings', 
    images: [acrylicImg, landscapeImg], 
    count: 8,
    description: 'Vibrant and versatile acrylic artworks'
  },
  { 
    name: 'Oil Paintings', 
    images: [portraitImg, landscapeImg], 
    count: 12,
    description: 'Classical oil painting techniques'
  },
  { 
    name: 'Portrait Art', 
    images: [portraitImg, buddhaImg], 
    count: 15,
    description: 'Expressive portrait creations'
  },
  { 
    name: 'Landscape Art', 
    images: [landscapeImg, acrylicImg], 
    count: 10,
    description: 'Beautiful natural landscapes'
  },
  { 
    name: 'Mix Media', 
    images: [mixmediaImg, fluidImg], 
    count: 6,
    description: 'Combined artistic techniques'
  },
  { 
    name: 'Pencil Drawings', 
    images: [pencilImg, blackwhiteImg], 
    count: 9,
    description: 'Detailed graphite artworks'
  },
  { 
    name: 'Stripping Art', 
    images: [acrylicImg, mixmediaImg], 
    count: 4,
    description: 'Modern stripping techniques'
  },
  { 
    name: 'Fluid Art', 
    images: [fluidImg, acrylicImg], 
    count: 7,
    description: 'Flowing abstract creations'
  },
  { 
    name: 'Stitching Work', 
    images: [mixmediaImg, spiritualImg], 
    count: 5,
    description: 'Textile and stitching art'
  },
  { 
    name: 'Printmaking', 
    images: [pencilImg, blackwhiteImg], 
    count: 8,
    description: 'Traditional print techniques'
  },
  { 
    name: 'Texture Art', 
    images: [mixmediaImg, fluidImg], 
    count: 6,
    description: 'Rich textured surfaces'
  },
  { 
    name: 'Visual Art', 
    images: [landscapeImg, spiritualImg], 
    count: 11,
    description: 'Contemporary visual expressions'
  },
  { 
    name: 'Buddha Art', 
    images: [buddhaImg, spiritualImg], 
    count: 9,
    description: 'Peaceful Buddhist themes'
  },
  { 
    name: 'Black & White', 
    images: [blackwhiteImg, pencilImg], 
    count: 7,
    description: 'Monochromatic masterpieces'
  },
  { 
    name: 'Spiritual Art', 
    images: [spiritualImg, buddhaImg], 
    count: 13,
    description: 'Sacred and mystical themes'
  },
];

interface CategoryGalleryProps {
  searchQuery?: string;
}

const CategoryGallery = ({ searchQuery = '' }: CategoryGalleryProps) => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCategoryClick = (categoryName: string) => {
    // In a real app, this would navigate to a category detail page
    console.log(`Navigate to ${categoryName} category`);
  };

  return (
    <section id="gallery" className="py-20 bg-gradient-mesh">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-handwritten font-bold text-foreground mb-4">
            Art Collections
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our diverse categories of artistic creations, each telling its own unique story
          </p>
          {searchQuery && (
            <p className="text-sm text-primary mt-4">
              Showing results for: "{searchQuery}" ({filteredCategories.length} categories found)
            </p>
          )}
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCategories.map((category, index) => (
            <div
              key={category.name}
              className={`glass hover-glass hover-scale transition-all duration-300 rounded-2xl p-6 cursor-pointer group ${
                searchQuery && category.name.toLowerCase().includes(searchQuery.toLowerCase()) 
                  ? 'ring-2 ring-primary animate-pulse-glow' 
                  : ''
              }`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => handleCategoryClick(category.name)}
            >
              {/* Folder Preview Images */}
              <div className="relative mb-4 h-48">
                {/* First Image */}
                <div 
                  className={`absolute top-0 left-0 w-full h-40 rounded-lg overflow-hidden transition-all duration-300 ${
                    hoveredCard === index ? 'transform rotate-2 translate-x-2' : 'transform rotate-1'
                  }`}
                >
                  <img
                    src={category.images[0]}
                    alt={`${category.name} sample 1`}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Second Image */}
                <div 
                  className={`absolute top-4 right-0 w-full h-40 rounded-lg overflow-hidden transition-all duration-300 ${
                    hoveredCard === index ? 'transform -rotate-2 -translate-x-2' : 'transform -rotate-1'
                  }`}
                >
                  <img
                    src={category.images[1]}
                    alt={`${category.name} sample 2`}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Overlay folder tab */}
                <div className="absolute top-0 left-4 w-20 h-6 bg-primary/20 rounded-t-lg border-t border-l border-r border-primary/30" />
              </div>

              {/* Category Info */}
              <div className="text-center">
                <h3 className="text-xl font-handwritten font-bold text-foreground mb-2">
                  {category.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {category.description}
                </p>
                <div className="flex items-center justify-center gap-2 text-sm text-primary">
                  <span>📁</span>
                  <span>{category.count} files</span>
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className={`absolute inset-0 bg-primary/10 rounded-2xl transition-opacity duration-300 ${
                hoveredCard === index ? 'opacity-100' : 'opacity-0'
              }`} />
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredCategories.length === 0 && searchQuery && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🎨</div>
            <h3 className="text-xl font-semibold text-foreground mb-2">No categories found</h3>
            <p className="text-muted-foreground">
              Try searching for a different term or browse all categories
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default CategoryGallery;