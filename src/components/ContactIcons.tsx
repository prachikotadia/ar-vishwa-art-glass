
import { Mail, MessageSquare, Phone, Instagram } from 'lucide-react';

const ContactIcons = () => {
  const handleContactClick = (method: string) => {
    const message = encodeURIComponent(`Hello! I'm interested in your artwork and would like to know more about your services. Looking forward to hearing from you!`);
    
    switch (method) {
      case 'email':
        window.location.href = `mailto:arvishwaartstudio@gmail.com?subject=${encodeURIComponent('Art Inquiry')}&body=${message}`;
        break;
      case 'whatsapp':
        window.open(`https://wa.me/+919313042798?text=${message}`, '_blank');
        break;
      case 'instagram':
        window.open('https://www.instagram.com/arvishwaartstudio/?igsh=MXMwNzVwam0wOTJ5OQ%3D%3D', '_blank');
        break;
      case 'sms':
        const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
        const smsUrl = `sms:+919313042798${isIOS ? ';' : '?'}body=${message}`;
        window.location.href = smsUrl;
        break;
    }
  };

  const contactMethods = [
    {
      id: 'email',
      icon: Mail,
      color: 'text-blue-500 hover:text-blue-600',
      bgColor: 'bg-blue-50 hover:bg-blue-100 dark:bg-blue-900/20 dark:hover:bg-blue-900/30',
      label: 'Email'
    },
    {
      id: 'sms',
      icon: Phone,
      color: 'text-green-500 hover:text-green-600',
      bgColor: 'bg-green-50 hover:bg-green-100 dark:bg-green-900/20 dark:hover:bg-green-900/30',
      label: 'SMS'
    },
    {
      id: 'whatsapp',
      icon: MessageSquare,
      color: 'text-emerald-500 hover:text-emerald-600',
      bgColor: 'bg-emerald-50 hover:bg-emerald-100 dark:bg-emerald-900/20 dark:hover:bg-emerald-900/30',
      label: 'WhatsApp'
    },
    {
      id: 'instagram',
      icon: Instagram,
      color: 'text-pink-500 hover:text-pink-600',
      bgColor: 'bg-pink-50 hover:bg-pink-100 dark:bg-pink-900/20 dark:hover:bg-pink-900/30',
      label: 'Instagram'
    }
  ];

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Contact Icons Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {contactMethods.map(({ id, icon: Icon, color, bgColor, label }) => (
              <button
                key={id}
                onClick={() => handleContactClick(id)}
                className={`
                  group relative flex flex-col items-center justify-center
                  w-full aspect-square min-h-[80px] md:min-h-[100px]
                  ${bgColor}
                  rounded-2xl transition-all duration-300
                  hover:scale-105 hover:shadow-lg
                  focus:outline-none focus:ring-2 focus:ring-primary/50
                  touch-manipulation
                `}
                aria-label={`Contact via ${label}`}
              >
                <Icon 
                  className={`
                    w-8 h-8 md:w-10 md:h-10 ${color}
                    transition-all duration-300
                    group-hover:scale-110
                  `}
                />
                <span className="sr-only">{label}</span>
                
                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactIcons;
