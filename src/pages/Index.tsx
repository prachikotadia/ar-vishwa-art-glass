
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Carousel3D from '@/components/Carousel3D';
import CategoryGallery from '@/components/CategoryGallery';
import ArtistProfile from '@/components/ArtistProfile';
import VirtualStudioTour from '@/components/VirtualStudioTour';
import CustomOrder from '@/components/CustomOrder';
import Footer from '@/components/Footer';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation onSearch={handleSearch} />
      <main>
        <Hero />
        <Carousel3D />
        <CategoryGallery searchQuery={searchQuery} />
        <ArtistProfile />
        <VirtualStudioTour />
        <CustomOrder />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
