
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import SearchAutocomplete from '@/components/SearchAutocomplete';
import type { SearchableItem } from '@/utils/searchUtils';
import { User, Image, ShoppingBag, Phone } from 'lucide-react';

interface NavigationProps {
  onSearch: (query: string) => void;
}

const Navigation = ({ onSearch }: NavigationProps) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Load theme from localStorage or system preference
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark';
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const initialTheme = savedTheme || systemTheme;
    
    setTheme(initialTheme);
    document.documentElement.setAttribute('data-theme', initialTheme);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const handleSearchSelect = (item: SearchableItem) => {
    // Handle selection of autocomplete item
    console.log('Selected item:', item);
    
    // Scroll to gallery section when item is selected
    const galleryElement = document.getElementById('gallery');
    if (galleryElement) {
      galleryElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'glass-strong backdrop-blur-lg' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Brand Name - Centered for mobile, left for desktop */}
            <div className="flex-1 flex justify-center md:justify-start">
              <div 
                className="cursor-pointer group"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                <span className="font-handwritten font-bold text-xl md:text-2xl text-foreground hover:text-primary transition-colors">
                  Vishwa Art Studio
                </span>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                Gallery
              </button>
              <button
                onClick={() => scrollToSection('custom-order')}
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                Order
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                Contact
              </button>
            </div>

            {/* Search Bar and Theme Toggle */}
            <div className="flex items-center space-x-4">
              {/* Desktop Search Bar */}
              <div className="hidden sm:block">
                <SearchAutocomplete
                  onSearch={onSearch}
                  onSelectItem={handleSearchSelect}
                  className="w-48"
                  placeholder="search artwork..."
                />
              </div>

              {/* Theme Toggle */}
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                className="glass w-10 h-10 rounded-full p-0 hover:animate-pulse"
                aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
              >
                {theme === 'light' ? '🌙' : '☀️'}
              </Button>
            </div>
          </div>

          {/* Mobile Search Bar */}
          <div className="sm:hidden pb-4">
            <SearchAutocomplete
              onSearch={onSearch}
              onSelectItem={handleSearchSelect}
              placeholder="search artwork..."
            />
          </div>
        </div>
      </nav>
      
      {/* Mobile Bottom Navigation Bar */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 w-[95vw] max-w-md md:hidden">
        <div className="glass backdrop-blur-lg rounded-full flex justify-around items-center py-3 px-2 shadow-lg">
          <button onClick={() => scrollToSection('hero')} className="flex flex-col items-center text-foreground font-semibold focus:outline-none">
            <User className="w-6 h-6 mb-1" />
            <span className="text-xs">About</span>
          </button>
          <button onClick={() => scrollToSection('gallery')} className="flex flex-col items-center text-foreground font-semibold focus:outline-none">
            <Image className="w-6 h-6 mb-1" />
            <span className="text-xs">Gallery</span>
          </button>
          <button onClick={() => scrollToSection('custom-order')} className="flex flex-col items-center text-foreground font-semibold focus:outline-none">
            <ShoppingBag className="w-6 h-6 mb-1" />
            <span className="text-xs">Order</span>
          </button>
          <button onClick={() => scrollToSection('contact')} className="flex flex-col items-center text-foreground font-semibold focus:outline-none">
            <Phone className="w-6 h-6 mb-1" />
            <span className="text-xs">Contact</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navigation;
