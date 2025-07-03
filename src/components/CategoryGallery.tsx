import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import acrylicImg from '@/assets/categories/acrylic-1.jpg';
import portraitImg from '@/assets/categories/portrait-1.jpg';
import landscapeImg from '@/assets/categories/landscape-1.jpg';
import mixmediaImg from '@/assets/categories/mixmedia-1.jpg';
import pencilImg from '@/assets/categories/pencil-1.jpg';
import fluidImg from '@/assets/categories/fluid-1.jpg';
import buddhaImg from '@/assets/categories/buddha-1.jpg';
import spiritualImg from '@/assets/categories/spiritual-1.jpg';
import blackwhiteImg from '@/assets/categories/blackwhite-1.jpg';

// Sample artwork data for each category
const artworkData = {
  'Acrylic Paintings': [
    { 
      id: 1, 
      image: acrylicImg, 
      title: 'Vibrant Sunset', 
      description: 'A stunning acrylic painting capturing the beauty of a golden sunset. Medium: Acrylic on Canvas, Size: 24x18 inches. Inspired by the serene evenings at Marina Beach.',
      medium: 'Acrylic on Canvas',
      size: '24x18 inches'
    },
    { 
      id: 2, 
      image: landscapeImg, 
      title: 'Mountain Dreams', 
      description: 'An abstract interpretation of mountain landscapes using bold acrylic strokes. Medium: Acrylic on Canvas, Size: 20x16 inches. Created during a retreat in the Western Ghats.',
      medium: 'Acrylic on Canvas',
      size: '20x16 inches'
    }
  ],
  'Portrait Art': [
    { 
      id: 3, 
      image: portraitImg, 
      title: 'Soul Connection', 
      description: 'A deeply expressive portrait that captures the essence of human emotion. Medium: Oil on Canvas, Size: 16x20 inches. Part of the "Faces of India" series.',
      medium: 'Oil on Canvas',
      size: '16x20 inches'
    },
    { 
      id: 4, 
      image: buddhaImg, 
      title: 'Peaceful Meditation', 
      description: 'A serene Buddha portrait emphasizing inner peace and tranquility. Medium: Charcoal and Acrylic, Size: 18x24 inches. Inspired by ancient temple sculptures.',
      medium: 'Charcoal and Acrylic',
      size: '18x24 inches'
    }
  ]
  // Add more categories as needed
};

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
  const [openFolder, setOpenFolder] = useState<string | null>(null);
  const [modalImage, setModalImage] = useState<any>(null);

  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCategoryClick = (categoryName: string) => {
    if (openFolder === categoryName) {
      setOpenFolder(null);
    } else {
      setOpenFolder(categoryName);
      console.log(`Opened ${categoryName} folder`);
    }
  };

  const handleImageClick = (artwork: any) => {
    setModalImage(artwork);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  const getArtworkForCategory = (categoryName: string) => {
    return artworkData[categoryName as keyof typeof artworkData] || [
      { 
        id: 1, 
        image: categories.find(c => c.name === categoryName)?.images[0] || acrylicImg, 
        title: 'Sample Artwork 1', 
        description: `Beautiful ${categoryName.toLowerCase()} piece showcasing exceptional artistic technique and creative vision.`,
        medium: 'Mixed Media',
        size: '16x20 inches'
      },
      { 
        id: 2, 
        image: categories.find(c => c.name === categoryName)?.images[1] || portraitImg, 
        title: 'Sample Artwork 2', 
        description: `Another stunning example from our ${categoryName.toLowerCase()} collection, demonstrating mastery of form and color.`,
        medium: 'Oil on Canvas',
        size: '18x24 inches'
      }
    ];
  };

  return (
    <section id="gallery" className="py-20 bg-gradient-mesh">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-handwritten font-bold text-foreground mb-4">
            Art Collections
          </h2>
          <p className="text-lg font-opensans text-muted-foreground max-w-2xl mx-auto">
            Explore our diverse categories of artistic creations, each telling its own unique story
          </p>
          {searchQuery && (
            <p className="text-sm text-primary mt-4 font-opensans">
              Showing results for: "{searchQuery}" ({filteredCategories.length} categories found)
            </p>
          )}
        </div>

        {/* Enhanced Category Grid with better spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredCategories.map((category, index) => (
            <div key={category.name} className="space-y-4">
              {/* Category Folder */}
              <div
                className={`glass hover-glass hover-scale transition-all duration-300 rounded-2xl p-6 cursor-pointer group ${
                  searchQuery && category.name.toLowerCase().includes(searchQuery.toLowerCase()) 
                    ? 'ring-2 ring-primary animate-pulse-glow' 
                    : ''
                } ${openFolder === category.name ? 'ring-2 ring-accent' : ''}`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => handleCategoryClick(category.name)}
              >
                {/* Folder Preview Images with better spacing */}
                <div className="relative mb-4 h-48">
                  <div 
                    className={`absolute top-0 left-0 w-full h-40 rounded-lg overflow-hidden transition-all duration-300 shadow-md ${
                      hoveredCard === index ? 'transform rotate-2 translate-x-2' : 'transform rotate-1'
                    }`}
                  >
                    <img
                      src={category.images[0]}
                      alt={`${category.name} sample 1`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div 
                    className={`absolute top-4 right-0 w-full h-40 rounded-lg overflow-hidden transition-all duration-300 shadow-md ${
                      hoveredCard === index ? 'transform -rotate-2 -translate-x-2' : 'transform -rotate-1'
                    }`}
                  >
                    <img
                      src={category.images[1]}
                      alt={`${category.name} sample 2`}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="absolute top-0 left-4 w-20 h-6 bg-primary/20 rounded-t-lg border-t border-l border-r border-primary/30" />
                </div>

                {/* Category Info */}
                <div className="text-center">
                  <h3 className="text-xl font-handwritten font-bold text-foreground mb-2">
                    {category.name}
                  </h3>
                  <p className="text-sm font-opensans text-muted-foreground mb-3">
                    {category.description}
                  </p>
                  <div className="flex items-center justify-center gap-2 text-sm text-primary font-opensans">
                    <span>📁</span>
                    <span>{category.count} files</span>
                    {openFolder === category.name && <span className="text-accent">• Open</span>}
                  </div>
                </div>

                <div className={`absolute inset-0 bg-primary/10 rounded-2xl transition-opacity duration-300 ${
                  hoveredCard === index ? 'opacity-100' : 'opacity-0'
                }`} />
              </div>

              {/* Expanded Folder Content */}
              {openFolder === category.name && (
                <div className="animate-fade-in">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {getArtworkForCategory(category.name).map((artwork) => (
                      <div
                        key={artwork.id}
                        className="glass hover-glass cursor-pointer rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:scale-105"
                        onClick={() => handleImageClick(artwork)}
                      >
                        <img
                          src={artwork.image}
                          alt={artwork.title}
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h4 className="font-handwritten font-bold text-foreground mb-2">
                            {artwork.title}
                          </h4>
                          <p className="text-sm font-opensans text-muted-foreground line-clamp-2">
                            {artwork.description}
                          </p>
                          <div className="mt-2 text-xs text-primary font-opensans">
                            {artwork.medium} • {artwork.size}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredCategories.length === 0 && searchQuery && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🎨</div>
            <h3 className="text-xl font-semibold text-foreground mb-2 font-opensans">No categories found</h3>
            <p className="text-muted-foreground font-opensans">
              Try searching for a different term or browse all categories
            </p>
          </div>
        )}
      </div>

      {/* Full-screen Modal */}
      {modalImage && (
        <div className="gallery-modal" onClick={closeModal}>
          <div className="relative max-w-6xl mx-auto p-4" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-all duration-200"
            >
              <X size={24} />
            </button>
            
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              <div className="flex-1">
                <img
                  src={modalImage.image}
                  alt={modalImage.title}
                  className="w-full max-h-[70vh] object-contain rounded-lg"
                />
              </div>
              
              <div className="flex-1 lg:max-w-md text-white space-y-4">
                <h3 className="text-3xl font-handwritten font-bold">
                  {modalImage.title}
                </h3>
                <div className="space-y-2">
                  <p className="text-primary font-opensans font-semibold">
                    {modalImage.medium}
                  </p>
                  <p className="text-secondary font-opensans">
                    Size: {modalImage.size}
                  </p>
                </div>
                <p className="font-opensans leading-relaxed text-gray-200">
                  {modalImage.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CategoryGallery;
