
import Fuse from 'fuse.js';

export interface SearchableItem {
  id: string;
  title: string;
  category: string;
  description: string;
  type: 'artwork' | 'category' | 'technique';
}

// Mock data for search - in a real app this would come from an API
export const searchableData: SearchableItem[] = [
  // Categories
  { id: 'cat-1', title: 'Acrylic Paintings', category: 'Category', description: 'Vibrant and versatile acrylic artworks', type: 'category' },
  { id: 'cat-2', title: 'Oil Paintings', category: 'Category', description: 'Classical oil painting techniques', type: 'category' },
  { id: 'cat-3', title: 'Portrait Art', category: 'Category', description: 'Expressive portrait creations', type: 'category' },
  { id: 'cat-4', title: 'Landscape Art', category: 'Category', description: 'Beautiful natural landscapes', type: 'category' },
  { id: 'cat-5', title: 'Mix Media', category: 'Category', description: 'Combined artistic techniques', type: 'category' },
  { id: 'cat-6', title: 'Pencil Drawings', category: 'Category', description: 'Detailed graphite artworks', type: 'category' },
  { id: 'cat-7', title: 'Fluid Art', category: 'Category', description: 'Flowing abstract creations', type: 'category' },
  { id: 'cat-8', title: 'Buddha Art', category: 'Category', description: 'Peaceful Buddhist themes', type: 'category' },
  { id: 'cat-9', title: 'Spiritual Art', category: 'Category', description: 'Sacred and mystical themes', type: 'category' },
  { id: 'cat-10', title: 'Black & White', category: 'Category', description: 'Monochromatic masterpieces', type: 'category' },
  
  // Techniques
  { id: 'tech-1', title: 'Watercolor Technique', category: 'Technique', description: 'Transparent watercolor methods', type: 'technique' },
  { id: 'tech-2', title: 'Impasto Painting', category: 'Technique', description: 'Thick paint application method', type: 'technique' },
  { id: 'tech-3', title: 'Glazing Method', category: 'Technique', description: 'Layered transparent colors', type: 'technique' },
  { id: 'tech-4', title: 'Dry Brush Technique', category: 'Technique', description: 'Textured painting method', type: 'technique' },
  { id: 'tech-5', title: 'Stippling Art', category: 'Technique', description: 'Dotted texture creation', type: 'technique' },
  
  // Sample Artworks
  { id: 'art-1', title: 'Sunset Serenity', category: 'Landscape', description: 'Beautiful sunset landscape painting', type: 'artwork' },
  { id: 'art-2', title: 'Ocean Waves', category: 'Landscape', description: 'Dynamic seascape artwork', type: 'artwork' },
  { id: 'art-3', title: 'Mountain Majesty', category: 'Landscape', description: 'Majestic mountain range painting', type: 'artwork' },
  { id: 'art-4', title: 'Forest Path', category: 'Landscape', description: 'Peaceful forest trail scene', type: 'artwork' },
  { id: 'art-5', title: 'City Lights', category: 'Urban', description: 'Modern cityscape at night', type: 'artwork' },
];

// Fuse.js configuration
const fuseOptions = {
  keys: [
    { name: 'title', weight: 0.6 },
    { name: 'category', weight: 0.3 },
    { name: 'description', weight: 0.1 }
  ],
  threshold: 0.4,
  includeScore: true,
  includeMatches: true,
  minMatchCharLength: 2,
};

export const fuse = new Fuse(searchableData, fuseOptions);

export const searchItems = (query: string): SearchableItem[] => {
  if (!query || query.length < 2) return [];
  
  const results = fuse.search(query);
  return results.slice(0, 6).map(result => result.item);
};

export const getTypeIcon = (type: SearchableItem['type']): string => {
  switch (type) {
    case 'category': return '📁';
    case 'technique': return '🎨';
    case 'artwork': return '🖼️';
    default: return '🔍';
  }
};
