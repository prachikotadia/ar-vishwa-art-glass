
import { useState, useRef, useEffect } from 'react';
import { X, Send, MessageCircle, Mail, Calendar, ShoppingBag, HelpCircle, Image } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [hasGreeted, setHasGreeted] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && !hasGreeted) {
      const greeting: Message = {
        id: '1',
        text: "Hello! I'm your virtual art assistant. Feel free to ask about our paintings, exhibitions, or commissions. I'll make sure to forward your questions to our team!",
        isUser: false,
        timestamp: new Date()
      };
      setMessages([greeting]);
      setHasGreeted(true);
    }
  }, [isOpen, hasGreeted]);

  const sendEmailTranscript = async (chatMessages: Message[], userEmailAddress?: string) => {
    const transcript = chatMessages
      .map(msg => `${msg.isUser ? 'Visitor' : 'Assistant'}: ${msg.text}`)
      .join('\n');
    
    const emailBody = encodeURIComponent(`
New Website Chat Inquiry

Timestamp: ${new Date().toLocaleString()}
${userEmailAddress ? `Visitor Email: ${userEmailAddress}` : ''}

Chat Transcript:
${transcript}

---
Sent automatically from AR Vishwa Art Studio website
    `);

    // Open email client to send to admin
    window.location.href = `mailto:arvishwaartstudio@gmail.com?subject=${encodeURIComponent('New Website Chat Inquiry')}&body=${emailBody}`;
  };

  const addMessage = (text: string, isUser: boolean = true) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      isUser,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newMessage]);
    return newMessage;
  };

  const handleQuickAction = (action: string) => {
    let userMessage = '';
    let botResponse = '';

    switch (action) {
      case 'explore':
        userMessage = 'I want to explore paintings';
        botResponse = 'Great! I can help you discover artworks by theme, style, or price range. What type of art speaks to you? Abstract, portraits, landscapes, or something specific?';
        break;
      case 'exhibitions':
        userMessage = 'Tell me about exhibitions';
        botResponse = 'We regularly host exhibitions showcasing various art forms. Would you like to know about upcoming events or see past exhibitions? I can also help you RSVP for upcoming shows.';
        break;
      case 'commission':
        userMessage = 'I want to buy or commission artwork';
        botResponse = 'Wonderful! I can guide you through our commission process. Are you looking for a custom portrait, landscape, abstract piece, or something else? I can also provide pricing information.';
        break;
      case 'question':
        userMessage = 'I have a question';
        botResponse = 'I\'m here to help! Please type your question below, and I\'ll do my best to assist you. If it\'s complex, I\'ll make sure to forward it to our artist team.';
        break;
    }

    addMessage(userMessage);
    setTimeout(() => {
      addMessage(botResponse, false);
    }, 1000);
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage = addMessage(inputValue);
    setInputValue('');

    // Auto-response logic
    setTimeout(() => {
      let response = "Thanks for your message! I've noted your inquiry and will forward it to our artist team. They'll get back to you soon with detailed information.";
      
      if (inputValue.toLowerCase().includes('price') || inputValue.toLowerCase().includes('cost')) {
        response = "For pricing information, our team will provide you with a detailed quote based on your specific requirements. I'm forwarding your inquiry now!";
      } else if (inputValue.toLowerCase().includes('commission') || inputValue.toLowerCase().includes('custom')) {
        response = "Custom commissions are one of our specialties! I'll send your details to our artist who will discuss your vision and provide a personalized quote.";
      } else if (inputValue.toLowerCase().includes('exhibition') || inputValue.toLowerCase().includes('show')) {
        response = "I'll connect you with our team about upcoming exhibitions and events. They'll share the latest schedule with you!";
      }

      addMessage(response, false);
      
      // Auto-send email after bot response
      setTimeout(() => {
        const updatedMessages = [...messages, userMessage, { 
          id: Date.now().toString(), 
          text: response, 
          isUser: false, 
          timestamp: new Date() 
        }];
        sendEmailTranscript(updatedMessages, userEmail);
        addMessage("I've forwarded this chat to the artist's team, and they will respond soon.", false);
      }, 1500);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Icon Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-4 left-4 z-50 w-12 h-12 md:w-14 md:h-14 glass rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 group animate-pulse-glow"
        aria-label="Open chat assistant"
      >
        <MessageCircle className="w-6 h-6 md:w-7 md:h-7 text-primary group-hover:text-primary/80 transition-colors" />
        
        {/* Hover tooltip */}
        <div className="absolute left-full ml-3 px-3 py-1 bg-foreground text-background text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
          Need Help? Chat with us
        </div>
      </button>

      {/* Chat Panel */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm">
          {/* Desktop: Side Panel, Mobile: Full Screen */}
          <div className={`
            fixed top-0 right-0 h-full w-full md:w-96 lg:w-[28rem]
            glass-strong backdrop-blur-xl
            flex flex-col
            animate-slide-in-right
          `}>
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-border/50">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 glass rounded-full flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-avenir font-semibold text-foreground">Art Assistant</h3>
                  <p className="text-xs text-muted-foreground">Online now</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="hover:bg-destructive/20 hover:text-destructive"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>

            {/* Quick Actions */}
            {messages.length <= 1 && (
              <div className="p-4 border-b border-border/50">
                <div className="grid grid-cols-2 gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleQuickAction('explore')}
                    className="flex items-center gap-2 glass hover-glass text-xs"
                  >
                    <Image className="w-3 h-3" />
                    Explore Art
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleQuickAction('exhibitions')}
                    className="flex items-center gap-2 glass hover-glass text-xs"
                  >
                    <Calendar className="w-3 h-3" />
                    Exhibitions
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleQuickAction('commission')}
                    className="flex items-center gap-2 glass hover-glass text-xs"
                  >
                    <ShoppingBag className="w-3 h-3" />
                    Commission
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleQuickAction('question')}
                    className="flex items-center gap-2 glass hover-glass text-xs"
                  >
                    <HelpCircle className="w-3 h-3" />
                    Ask Question
                  </Button>
                </div>
              </div>
            )}

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`
                      max-w-[80%] p-3 rounded-2xl font-avenir text-sm
                      ${
                        message.isUser
                          ? 'bg-primary text-primary-foreground ml-4'
                          : 'glass text-foreground mr-4'
                      }
                    `}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Email Input (Optional) */}
            {messages.length > 1 && !userEmail && (
              <div className="p-4 border-t border-border/50">
                <Input
                  placeholder="Your email (optional, for follow-up)"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  className="glass border-0 text-sm"
                />
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t border-border/50">
              <div className="flex gap-2">
                <Textarea
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="glass border-0 resize-none min-h-[44px] max-h-24 text-sm"
                  rows={1}
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim()}
                  size="sm"
                  className="px-3 shrink-0"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
