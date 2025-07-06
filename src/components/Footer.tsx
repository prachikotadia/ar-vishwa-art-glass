
import ContactIcons from '@/components/ContactIcons';

const Footer = () => {
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
              Ready to bring your artistic vision to life? Get in touch with us today.
            </p>
          </div>

          {/* Contact Icons Section */}
          <ContactIcons />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 mt-12">
            {/* Contact Info */}
            <div className="space-y-3">
              <h3 className="font-semibold text-foreground font-avenir">Contact Information</h3>
              <div className="space-y-2 text-sm text-muted-foreground font-avenir">
                <div className="flex items-center justify-center gap-2">
                  <span>📧</span>
                  <span>arvishwaartstudio@gmail.com</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <span>📱</span>
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
              <h3 className="font-semibold text-foreground font-avenir">Our Services</h3>
              <div className="space-y-2 text-sm text-muted-foreground font-avenir">
                <div>Custom Portraits</div>
                <div>Landscape Paintings</div>
                <div>Abstract Art</div>
                <div>Art Consultation</div>
                <div>Exhibitions & Shows</div>
                <div>Art Workshops</div>
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
