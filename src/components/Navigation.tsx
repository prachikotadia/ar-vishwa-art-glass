import { User, Image, ShoppingBag, Phone } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import SearchBar from './SearchBar';
import ThemeToggle from './ThemeToggle';

interface NavigationProps {
  searchQuery: string;
  setSearchQuery: (q: string) => void;
}

const Navigation = ({ searchQuery, setSearchQuery }: NavigationProps) => {
  const location = useLocation();
  const currentPath = location.pathname;

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navigationItems = [
    {
      id: 'about',
      icon: User,
      label: 'About',
      onClick: () => scrollToSection('hero'),
      isActive: currentPath === '/' || currentPath === '/about'
    },
    {
      id: 'gallery',
      icon: Image,
      label: 'Gallery',
      onClick: () => scrollToSection('gallery'),
      isActive: false
    },
    {
      id: 'order',
      icon: ShoppingBag,
      label: 'Order',
      onClick: () => scrollToSection('custom-order'),
      isActive: false
    },
    {
      id: 'contact',
      icon: Phone,
      label: 'Contact',
      onClick: () => scrollToSection('contact'),
      isActive: false
    }
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-40 flex justify-center items-center px-2 py-3 bg-transparent pointer-events-none">
      <div className="w-full max-w-2xl mx-auto pointer-events-auto flex justify-center">
        <SearchBar value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
      </div>
      <div className="fixed top-4 right-4 z-50 pointer-events-auto">
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navigation;
