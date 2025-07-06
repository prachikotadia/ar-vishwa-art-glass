
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Carousel3D from '@/components/Carousel3D';
import CategoryGallery from '@/components/CategoryGallery';
import ArtistProfile from '@/components/ArtistProfile';
import VirtualStudioTour from '@/components/VirtualStudioTour';
import CustomOrder from '@/components/CustomOrder';
import Footer from '@/components/Footer';
import ErrorBoundary from '@/components/ErrorBoundary';
import ChatBot from '@/components/ChatBot';
import About from './About';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-background pb-24">
      <ErrorBoundary>
        <ChatBot />
      </ErrorBoundary>
      <ErrorBoundary>
        <Navigation />
      </ErrorBoundary>
      <main>
        <ErrorBoundary>
          <Hero />
        </ErrorBoundary>
        <ErrorBoundary>
          <About />
        </ErrorBoundary>
        <ErrorBoundary>
          <Carousel3D />
        </ErrorBoundary>
        <ErrorBoundary>
          <CategoryGallery searchQuery={searchQuery} />
        </ErrorBoundary>
        <ErrorBoundary>
          <ArtistProfile />
        </ErrorBoundary>
        <ErrorBoundary>
          <VirtualStudioTour />
        </ErrorBoundary>
        <ErrorBoundary>
          <CustomOrder />
        </ErrorBoundary>
        <ErrorBoundary>
          <Footer />
        </ErrorBoundary>
      </main>
    </div>
  );
};

export default Index;
