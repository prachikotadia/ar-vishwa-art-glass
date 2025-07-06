
import { Mail, MessageCircle, Instagram, Smartphone, Phone } from 'lucide-react';

const Footer = () => {
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

  return (
    <footer id="contact" className="py-16 bg-gradient-mesh">
      <div className="container mx-auto px-4">
        <div className="glass rounded-2xl p-8 text-center">
          {/* Logo */}
          <div className="mb-8">
            <div className="w-16 h-16 glass rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-avenir font-bold text-primary">AR</span>
            </div>
            <h2 className="text-3xl font-avenir font-bold text-foreground mb-4">
              Let's Create Something Beautiful Together
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto font-avenir">
              Ready to bring your artistic vision to life? Contact us today and let's start creating magic.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Contact Info */}
            <div className="space-y-3">
              <h3 className="font-semibold text-foreground font-avenir">Contact</h3>
              <div className="space-y-2 text-sm text-muted-foreground font-avenir">
                <div className="flex items-center justify-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>arvishwaartstudio@gmail.com</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+91 93130 42798</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <span>📍</span>
                  <span>Art District, Creative City</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-3">
              <h3 className="font-semibold text-foreground font-avenir">Services</h3>
              <div className="space-y-2 text-sm text-muted-foreground font-avenir">
                <div>Custom Portraits</div>
                <div>Landscape Paintings</div>
                <div>Abstract Art</div>
                <div>Art Consultation</div>
              </div>
            </div>

            {/* Contact Methods */}
            <div className="space-y-3">
              <h3 className="font-semibold text-foreground font-avenir">Get In Touch</h3>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => handleContactClick('email')}
                  className="flex flex-col items-center gap-2 p-3 glass hover-glass transition-all duration-300 rounded-lg group"
                >
                  <Mail className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                  <div className="text-center">
                    <div className="font-medium text-foreground text-sm font-avenir">Email</div>
                    <div className="text-xs text-muted-foreground font-avenir">Best for attachments</div>
                  </div>
                </button>
                
                <button
                  onClick={() => handleContactClick('whatsapp')}
                  className="flex flex-col items-center gap-2 p-3 glass hover-glass transition-all duration-300 rounded-lg group"
                >
                  <MessageCircle className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                  <div className="text-center">
                    <div className="font-medium text-foreground text-sm font-avenir">WhatsApp</div>
                    <div className="text-xs text-muted-foreground font-avenir">Instant messaging</div>
                  </div>
                </button>
                
                <button
                  onClick={() => handleContactClick('instagram')}
                  className="flex flex-col items-center gap-2 p-3 glass hover-glass transition-all duration-300 rounded-lg group"
                >
                  <Instagram className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                  <div className="text-center">
                    <div className="font-medium text-foreground text-sm font-avenir">Instagram</div>
                    <div className="text-xs text-muted-foreground font-avenir">Social engagement</div>
                  </div>
                </button>
                
                <button
                  onClick={() => handleContactClick('sms')}
                  className="flex flex-col items-center gap-2 p-3 glass hover-glass transition-all duration-300 rounded-lg group"
                >
                  <Smartphone className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                  <div className="text-center">
                    <div className="font-medium text-foreground text-sm font-avenir">SMS</div>
                    <div className="text-xs text-muted-foreground font-avenir">Mobile friendly</div>
                  </div>
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-muted-foreground/20 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground font-avenir">
              <div className="mb-4 md:mb-0">
                © 2024 AR Vishwa Art Studio. All rights reserved.
              </div>
              <div className="flex space-x-6">
                <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
