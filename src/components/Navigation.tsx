
import { User, Image, ShoppingBag, Phone } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const Navigation = () => {
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
    <nav className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="glass backdrop-blur-lg rounded-full px-6 py-3 shadow-lg border border-white/20">
        <div className="flex items-center space-x-8">
          {navigationItems.map(({ id, icon: Icon, label, onClick, isActive }) => (
            <button
              key={id}
              onClick={onClick}
              className={`
                flex flex-col items-center justify-center
                min-w-[48px] min-h-[48px] p-2
                transition-all duration-300 ease-in-out
                hover:scale-110 hover:bg-white/10 rounded-lg
                focus:outline-none focus:ring-2 focus:ring-primary/50
                ${isActive ? 'text-primary' : 'text-foreground hover:text-primary'}
              `}
              aria-label={`Go to ${label} section`}
            >
              <Icon 
                className={`
                  w-5 h-5 mb-1 transition-all duration-300
                  ${isActive ? 'text-primary' : 'text-foreground'}
                `}
              />
              <span className={`
                text-xs font-medium transition-all duration-300
                ${isActive ? 'text-primary' : 'text-foreground'}
              `}>
                {label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
