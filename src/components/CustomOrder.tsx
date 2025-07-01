import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const CustomOrder = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    description: '',
    size: '',
    deadline: '',
  });
  const [files, setFiles] = useState<File[]>([]);
  const [isDragOver, setIsDragOver] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSizeChange = (value: string) => {
    setFormData(prev => ({ ...prev, size: value }));
  };

  const handleFileUpload = (uploadedFiles: FileList | null) => {
    if (uploadedFiles) {
      const newFiles = Array.from(uploadedFiles);
      setFiles(prev => [...prev, ...newFiles]);
    }
  };

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    handleFileUpload(e.dataTransfer.files);
  };

  const generateMessage = () => {
    const filesList = files.length > 0 ? `\nReference Images: ${files.map(f => f.name).join(', ')}` : '';
    return `Hello! I would like to request a custom art order.

Name: ${formData.name}
Email: ${formData.email}
Description: ${formData.description}
Size: ${formData.size || 'Not specified'}
Deadline: ${formData.deadline || 'Flexible'}${filesList}

Please let me know about pricing and timeline. Thank you!`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.description) {
      alert('Please fill in all required fields');
      return;
    }

    const message = generateMessage();
    const encodedMessage = encodeURIComponent(message);
    
    // Replace with actual WhatsApp number
    const whatsappNumber = "1234567890";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    const emailSubject = "Custom Art Order Request";
    const emailBody = encodeURIComponent(message);
    const emailUrl = `mailto:vishwa@example.com?subject=${encodeURIComponent(emailSubject)}&body=${emailBody}`;
    
    // Open both WhatsApp and email
    window.open(whatsappUrl, '_blank');
    setTimeout(() => {
      window.location.href = emailUrl;
    }, 1000);
  };

  return (
    <section id="custom-order" className="py-20 bg-gradient-mesh">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-handwritten font-bold text-foreground mb-4">
            Custom Art Orders
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Bring your vision to life with our custom art services
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Info & Examples */}
          <div className="space-y-8">
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-handwritten font-bold text-foreground mb-4">
                How It Works
              </h3>
              <div className="space-y-4 text-muted-foreground">
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold">1.</span>
                  <p>Tell us your idea and share any reference images</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold">2.</span>
                  <p>We'll provide a quote and timeline for your project</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold">3.</span>
                  <p>Once approved, we'll bring your vision to life</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold">4.</span>
                  <p>Receive your beautiful custom artwork</p>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-handwritten font-bold text-foreground mb-4">
                What We Create
              </h3>
              <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
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
          <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 space-y-6">
            <h3 className="text-2xl font-handwritten font-bold text-foreground mb-6">
              Request Your Custom Art
            </h3>

            {/* Name */}
            <div className="space-y-2">
              <Label htmlFor="name" className="text-foreground font-medium">
                Full Name *
              </Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="glass border-0 focus:ring-2 focus:ring-primary/50"
                placeholder="Enter your full name"
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground font-medium">
                Email Address *
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="glass border-0 focus:ring-2 focus:ring-primary/50"
                placeholder="your.email@example.com"
              />
            </div>

            {/* Description */}
            <div className="space-y-2">
              <Label htmlFor="description" className="text-foreground font-medium">
                Artwork Description *
              </Label>
              <Textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                required
                rows={4}
                className="glass border-0 focus:ring-2 focus:ring-primary/50 resize-none"
                placeholder="Describe your dream art piece... Include style, colors, mood, and any specific details"
              />
            </div>

            {/* Size */}
            <div className="space-y-2">
              <Label className="text-foreground font-medium">Preferred Size</Label>
              <Select onValueChange={handleSizeChange}>
                <SelectTrigger className="glass border-0 focus:ring-2 focus:ring-primary/50">
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
              <Label htmlFor="deadline" className="text-foreground font-medium">
                Deadline (Optional)
              </Label>
              <Input
                id="deadline"
                name="deadline"
                type="date"
                value={formData.deadline}
                onChange={handleInputChange}
                className="glass border-0 focus:ring-2 focus:ring-primary/50"
              />
            </div>

            {/* File Upload */}
            <div className="space-y-2">
              <Label className="text-foreground font-medium">
                Reference Images (Optional)
              </Label>
              <div
                className={`glass rounded-lg border-2 border-dashed transition-all duration-300 ${
                  isDragOver ? 'border-primary bg-primary/10' : 'border-muted-foreground/30'
                }`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={(e) => handleFileUpload(e.target.files)}
                  className="hidden"
                  id="file-upload"
                />
                <label
                  htmlFor="file-upload"
                  className="block p-8 text-center cursor-pointer"
                >
                  <div className="text-4xl mb-4">📎</div>
                  <p className="text-foreground font-medium mb-2">
                    Drop your images here or click to upload
                  </p>
                  <p className="text-sm text-muted-foreground">
                    JPG, PNG files up to 10MB each
                  </p>
                </label>
              </div>

              {/* File List */}
              {files.length > 0 && (
                <div className="space-y-2">
                  {files.map((file, index) => (
                    <div key={index} className="flex items-center justify-between glass rounded-lg p-3">
                      <span className="text-sm text-foreground truncate flex-1">
                        📸 {file.name}
                      </span>
                      <button
                        type="button"
                        onClick={() => removeFile(index)}
                        className="text-destructive hover:text-destructive/80 ml-2"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              size="lg"
              className="w-full glass hover-glass transition-all duration-300 font-medium text-lg py-6 group"
            >
              <span className="mr-2 group-hover:animate-pulse">📱</span>
              Send Request via WhatsApp & Email
            </Button>

            <p className="text-xs text-muted-foreground text-center">
              This will open WhatsApp and your email client with your request pre-filled
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CustomOrder;