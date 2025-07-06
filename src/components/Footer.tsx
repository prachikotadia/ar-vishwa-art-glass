import { Mail, Phone, MapPin } from 'lucide-react';
import { FaInstagram, FaWhatsapp, FaSms } from 'react-icons/fa';

const Footer = () => {
  const email = 'arvishwaartstudio@gmail.com ';
  const phone = '+919313042798';
  const whatsapp = '+919313042798';
  const instagram = 'https://www.instagram.com/arvishwaartstudio?igsh=MXMwNzVwam0wOTJ5OQ==';
  const message = encodeURIComponent('Hello, I would like to inquire about your art services.');

  return (
    <footer id="contact" className="py-16 bg-gradient-mesh">
      <div className="container mx-auto px-4">
        <div className="glass rounded-2xl p-8 text-center">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Let's Create Something Beautiful Together
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ready to bring your artistic vision to life? Contact us today and let's start creating magic.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Contact Info */}
            <div className="space-y-3">
              <h3 className="font-semibold text-foreground">Contact</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2"><Mail className="w-4 h-4" />
                  <a href={`mailto:${email}?subject=Art Inquiry&body=${message}`} className="hover:text-primary transition-colors">{email}</a>
                </div>
                <div className="flex items-center gap-2"><Phone className="w-4 h-4" />
                  <a href={`sms:${phone}?body=${message}`} className="hover:text-primary transition-colors">{phone}</a>
                </div>
                <div className="flex items-center gap-2"><MapPin className="w-4 h-4" />
                  Art District, Creative City
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-3">
              <h3 className="font-semibold text-foreground">Services</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>Custom Portraits</div>
                <div>Landscape Paintings</div>
                <div>Abstract Art</div>
                <div>Art Consultation</div>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-3">
              <h3 className="font-semibold text-foreground">Follow Us</h3>
              <div className="flex justify-center space-x-4">
                <a href={`mailto:${email}?subject=Art Inquiry&body=${message}`} className="text-2xl hover:text-primary transition-colors" aria-label="Gmail"><Mail /></a>
                <a href={`https://wa.me/${whatsapp.replace('+','')}?text=${message}`} target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-primary transition-colors" aria-label="WhatsApp"><FaWhatsapp /></a>
                <a href={`sms:${phone}?body=${message}`} className="text-2xl hover:text-primary transition-colors" aria-label="SMS"><FaSms /></a>
                <a href={`https://instagram.com/${instagram}`} target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-primary transition-colors" aria-label="Instagram"><FaInstagram /></a>
              </div>
            </div>
          </div>

          <div className="border-t border-muted-foreground/20 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
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