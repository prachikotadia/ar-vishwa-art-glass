
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MessageCircle, Instagram, Phone, Mail, Smartphone } from 'lucide-react';

const CustomOrder = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    description: '',
    size: '',
    deadline: '',
  });
  const [selectedPlatform, setSelectedPlatform] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSizeChange = (value: string) => {
    setFormData(prev => ({ ...prev, size: value }));
  };

  const generateMessage = () => {
    return `🎨 Custom Art Order Request

Name: ${formData.name}
Email: ${formData.email}
${formData.phone ? `Phone: ${formData.phone}` : ''}

Artwork Description:
${formData.description}

Details:
• Size: ${formData.size || 'Not specified'}
• Deadline: ${formData.deadline || 'Flexible'}

Looking forward to creating something beautiful together!`;
  };

  const getSMSBodyParam = () => {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    return isIOS ? ';' : '?';
  };

  const generatePlatformURLs = () => {
    const message = generateMessage();
    const encodedMessage = encodeURIComponent(message);
    
    return {
      whatsapp: `https://wa.me/+919313042798?text=${encodedMessage}`,
      instagram: `https://www.instagram.com/arvishwaartstudio/?igsh=MXMwNzVwam0wOTJ5OQ%3D%3D#`,
      sms: `sms:+919313042798${getSMSBodyParam()}body=${encodedMessage}`,
      email: `mailto:arvishwaartstudio@gmail.com?subject=${encodeURIComponent('Custom Art Order Request')}&body=${encodedMessage}`
    };
  };

  const handlePlatformLaunch = (platform: string) => {
    if (!formData.name || !formData.email || !formData.description) {
      alert('Please fill in all required fields');
      return;
    }

    const urls = generatePlatformURLs();
    
    switch (platform) {
      case 'whatsapp':
        window.open(urls.whatsapp, '_blank');
        break;
      case 'instagram':
        window.open(urls.instagram, '_blank');
        break;
      case 'sms':
        window.location.href = urls.sms;
        break;
      case 'email':
        window.location.href = urls.email;
        break;
      default:
        break;
    }
  };

  const getRecommendedPlatforms = () => {
    const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
      return [
        { platform: 'whatsapp', name: 'WhatsApp', icon: MessageCircle, priority: 1, reason: 'Instant messaging' },
        { platform: 'sms', name: 'SMS', icon: Smartphone, priority: 2, reason: 'Universal mobile' },
        { platform: 'instagram', name: 'Instagram', icon: Instagram, priority: 3, reason: 'Visual platform' },
        { platform: 'email', name: 'Email', icon: Mail, priority: 4, reason: 'Formal communication' }
      ];
    } else {
      return [
        { platform: 'email', name: 'Email', icon: Mail, priority: 1, reason: 'Best for details' },
        { platform: 'whatsapp', name: 'WhatsApp', icon: MessageCircle, priority: 2, reason: 'WhatsApp Web' },
        { platform: 'instagram', name: 'Instagram', icon: Instagram, priority: 3, reason: 'Social engagement' },
        { platform: 'sms', name: 'SMS', icon: Smartphone, priority: 4, reason: 'Limited on desktop' }
      ];
    }
  };

  const platforms = getRecommendedPlatforms();

  return (
    <section id="custom-order" className="py-20 bg-gradient-mesh">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-avenir font-bold text-foreground mb-4">
            Custom Art Orders
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-avenir">
            Bring your vision to life with our custom art services
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Info & Examples */}
          <div className="space-y-8">
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-avenir font-bold text-foreground mb-4">
                How It Works
              </h3>
              <div className="space-y-4 text-muted-foreground font-avenir">
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold">1.</span>
                  <p>Tell us your idea and vision</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold">2.</span>
                  <p>Choose your preferred messaging platform below</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold">3.</span>
                  <p>We'll provide a quote and timeline for your project</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold">4.</span>
                  <p>Receive your beautiful custom artwork</p>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-avenir font-bold text-foreground mb-4">
                What We Create
              </h3>
              <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground font-avenir">
                <div>• Custom Portraits</div>
                <div>• Pet Paintings</div>
                <div>• Wedding Art</div>
                <div>• Abstract Pieces</div>
                <div>• Family Portraits</div>
                <div>• Landscape Art</div>
                <div>• Corporate Art</div>
                <div>• Memorial Pieces</div>
              </div>
            </div>
          </div>

          {/* Right Side - Order Form */}
          <form className="glass rounded-2xl p-8 space-y-6">
            <h3 className="text-2xl font-avenir font-bold text-foreground mb-6">
              Request Your Custom Art
            </h3>

            {/* Name */}
            <div className="space-y-2">
              <Label htmlFor="name" className="text-foreground font-medium font-avenir">
                Full Name *
              </Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="glass border-0 focus:ring-2 focus:ring-primary/50 font-avenir"
                placeholder="Enter your full name"
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground font-medium font-avenir">
                Email Address *
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="glass border-0 focus:ring-2 focus:ring-primary/50 font-avenir"
                placeholder="your.email@example.com"
              />
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-foreground font-medium font-avenir">
                Phone Number (Optional)
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
                className="glass border-0 focus:ring-2 focus:ring-primary/50 font-avenir"
                placeholder="+1 (555) 123-4567"
              />
            </div>

            {/* Description */}
            <div className="space-y-2">
              <Label htmlFor="description" className="text-foreground font-medium font-avenir">
                Artwork Description *
              </Label>
              <Textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                required
                rows={4}
                className="glass border-0 focus:ring-2 focus:ring-primary/50 resize-none font-avenir"
                placeholder="Describe your dream art piece... Include style, colors, mood, and any specific details"
              />
            </div>

            {/* Size */}
            <div className="space-y-2">
              <Label className="text-foreground font-medium font-avenir">Preferred Size</Label>
              <Select onValueChange={handleSizeChange}>
                <SelectTrigger className="glass border-0 focus:ring-2 focus:ring-primary/50 font-avenir">
                  <SelectValue placeholder="Select artwork size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="A4">A4 (8.3 × 11.7 inches)</SelectItem>
                  <SelectItem value="A3">A3 (11.7 × 16.5 inches)</SelectItem>
                  <SelectItem value="16x20">16 × 20 inches</SelectItem>
                  <SelectItem value="18x24">18 × 24 inches</SelectItem>
                  <SelectItem value="24x36">24 × 36 inches</SelectItem>
                  <SelectItem value="custom">Custom Size</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Deadline */}
            <div className="space-y-2">
              <Label htmlFor="deadline" className="text-foreground font-medium font-avenir">
                Deadline (Optional)
              </Label>
              <Input
                id="deadline"
                name="deadline"
                type="date"
                value={formData.deadline}
                onChange={handleInputChange}
                className="glass border-0 focus:ring-2 focus:ring-primary/50 font-avenir"
              />
            </div>

            {/* Platform Selection */}
            <div className="space-y-4">
              <Label className="text-foreground font-medium font-avenir">
                Choose Your Preferred Contact Method
              </Label>
              <div className="grid grid-cols-2 gap-3">
                {platforms.map(({ platform, name, icon: Icon, reason }) => (
                  <Button
                    key={platform}
                    type="button"
                    variant="outline"
                    onClick={() => handlePlatformLaunch(platform)}
                    className="glass hover-glass transition-all duration-300 h-auto p-4 flex flex-col items-center gap-2 group font-avenir"
                  >
                    <Icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                    <div className="text-center">
                      <div className="font-medium text-foreground">{name}</div>
                      <div className="text-xs text-muted-foreground">{reason}</div>
                    </div>
                  </Button>
                ))}
              </div>
            </div>

            <div className="text-xs text-muted-foreground text-center space-y-1 font-avenir">
              <p>WhatsApp & SMS will open your messaging app</p>
              <p>Email will open your default email client</p>
              <p>Instagram will open direct messages</p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CustomOrder;
