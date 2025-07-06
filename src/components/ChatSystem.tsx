
import { useState, useEffect } from 'react';
import { X, Send, Mic, MicOff, Sun, Moon, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
  buttons?: Array<{ text: string; action: string }>;
}

interface ChatSystemProps {
  currentPage: string;
}

const ChatSystem = ({ currentPage = 'home' }: ChatSystemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [language, setLanguage] = useState('en');
  const [darkMode, setDarkMode] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizStep, setQuizStep] = useState(0);
  const [userPreferences, setUserPreferences] = useState<any>({});

  const languages = {
    en: 'English',
    hi: 'Hindi',
    gu: 'Gujarati'
  };

  const translations = {
    en: {
      greeting: "Hi! I'm your virtual art assistant. I can help you explore paintings, see exhibitions, learn about the artist, or connect you directly. What would you like to do?",
      exploreArt: "🖼 Explore Art Collection",
      exhibitions: "🗓 Exhibitions", 
      aboutArtist: "👩‍🎨 About the Artist",
      contactArtist: "✉️ Contact the Artist",
      askQuestion: "❓ Ask a Question",
      buyCommission: "🛒 Buy or Commission",
      contextualHelp: {
        home: "Want me to help you discover something new today?",
        gallery: "Would you like recommendations by color or theme?",
        about: "I can guide you through the artist's milestones, just ask!",
        contact: "I can help you write a message to the artist directly."
      }
    },
    hi: {
      greeting: "नमस्ते! मैं आपका वर्चुअल आर्ट असिस्टेंट हूं। मैं चित्रों की खोज, प्रदर्शनियां देखने, कलाकार के बारे में जानने या सीधे संपर्क करने में आपकी सहायता कर सकता हूं।",
      exploreArt: "🖼 कला संग्रह देखें",
      exhibitions: "🗓 प्रदर्शनियां",
      aboutArtist: "👩‍🎨 कलाकार के बारे में",
      contactArtist: "✉️ कलाकार से संपर्क करें",
      askQuestion: "❓ प्रश्न पूछें",
      buyCommission: "🛒 खरीदें या कमीशन करें"
    },
    gu: {
      greeting: "નમસ્તે! હું તમારો વર્ચુઅલ આર્ટ આસિસ્ટન્ટ છું। હું ચિત્રો શોધવામાં, પ્રદર્શનો જોવામાં, કલાકાર વિશે જાણવામાં અથવા સીધો સંપર્ક કરવામાં તમારી મદદ કરી શકું છું।",
      exploreArt: "🖼 કલા સંગ્રહ શોધો",
      exhibitions: "🗓 પ્રદર્શનો",
      aboutArtist: "👩‍🎨 કલાકાર વિશે",
      contactArtist: "✉️ કલાકાર સાથે સંપર્ક કરો",
      askQuestion: "❓ પ્રશ્ન પૂછો",
      buyCommission: "🛒 ખરીદો અથવા કમિશન કરો"
    }
  };

  const faqData = [
    { q: "How to buy art?", a: "You can purchase artworks through our gallery section. Each piece has detailed pricing and purchase options. Would you like me to show you available pieces?" },
    { q: "Can I reserve a painting?", a: "Yes! You can reserve any artwork for up to 7 days. Just let me know which piece interests you and I'll help with the reservation process." },
    { q: "Do you ship internationally?", a: "Absolutely! We ship worldwide with secure packaging. Shipping costs vary by location. Would you like a shipping quote for your area?" }
  ];

  const quizQuestions = [
    {
      question: "What mood are you in today?",
      options: ["Calm & Peaceful", "Energetic & Bold", "Contemplative", "Joyful & Vibrant"]
    },
    {
      question: "Which colors appeal to you most?",
      options: ["Cool Blues & Greens", "Warm Reds & Oranges", "Earth Tones", "Bright & Colorful"]
    },
    {
      question: "What size artwork interests you?",
      options: ["Small & Intimate", "Medium Statement Piece", "Large & Dramatic", "Any Size"]
    }
  ];

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      initializeChat();
    }
  }, [isOpen, currentPage, language]);

  const initializeChat = () => {
    const t = translations[language as keyof typeof translations];
    const contextualMessage = t.contextualHelp?.[currentPage as keyof typeof t.contextualHelp] || "";
    
    const welcomeMessage: Message = {
      id: Date.now().toString(),
      type: 'bot',
      content: `${t.greeting}\n\n${contextualMessage}`,
      timestamp: new Date(),
      buttons: [
        { text: t.exploreArt, action: 'explore' },
        { text: t.exhibitions, action: 'exhibitions' },
        { text: t.aboutArtist, action: 'about' },
        { text: t.contactArtist, action: 'contact' },
        { text: t.askQuestion, action: 'question' },
        { text: t.buyCommission, action: 'buy' }
      ]
    };
    
    setMessages([welcomeMessage]);
  };

  const handleButtonAction = (action: string) => {
    let response = "";
    let buttons: Array<{ text: string; action: string }> = [];

    switch (action) {
      case 'explore':
        response = "Great choice! I can help you discover artworks in several ways:";
        buttons = [
          { text: "Show trending artworks", action: 'trending' },
          { text: "Browse by style", action: 'style' },
          { text: "Search by color", action: 'color' },
          { text: "View by price range", action: 'price' },
          { text: "Take art discovery quiz", action: 'quiz' }
        ];
        break;
      case 'exhibitions':
        response = "I can show you information about exhibitions:";
        buttons = [
          { text: "Upcoming exhibitions", action: 'upcoming' },
          { text: "Past exhibitions", action: 'past' },
          { text: "RSVP for events", action: 'rsvp' },
          { text: "Exhibition reminders", action: 'reminders' }
        ];
        break;
      case 'about':
        response = "Let me tell you about our talented artist! What would you like to know?";
        buttons = [
          { text: "Artist biography", action: 'bio' },
          { text: "Interactive timeline", action: 'timeline' },
          { text: "View 3D portrait", action: '3d' },
          { text: "Artistic philosophy", action: 'philosophy' }
        ];
        break;
      case 'contact':
        response = "I'd be happy to help you connect with the artist. How would you like to reach out?";
        buttons = [
          { text: "Draft a message", action: 'draft' },
          { text: "Schedule consultation", action: 'schedule' },
          { text: "WhatsApp contact", action: 'whatsapp' },
          { text: "Email directly", action: 'email' }
        ];
        break;
      case 'question':
        response = "Feel free to ask me anything! Here are some common questions, or type your own:";
        buttons = faqData.map((faq, index) => ({ text: faq.q, action: `faq-${index}` }));
        break;
      case 'buy':
        response = "Wonderful! I can help you with purchasing or commissioning artwork:";
        buttons = [
          { text: "View available pieces", action: 'available' },
          { text: "Commission new work", action: 'commission' },
          { text: "Get price estimates", action: 'pricing' },
          { text: "Personal consultation", action: 'consult' }
        ];
        break;
      case 'quiz':
        setShowQuiz(true);
        setQuizStep(0);
        response = "Perfect! Let's find your ideal artwork with a quick 3-question quiz:";
        buttons = quizQuestions[0].options.map(option => ({ text: option, action: `quiz-0-${option}` }));
        break;
      default:
        if (action.startsWith('faq-')) {
          const faqIndex = parseInt(action.split('-')[1]);
          response = faqData[faqIndex].a;
        } else if (action.startsWith('quiz-')) {
          handleQuizResponse(action);
          return;
        } else {
          response = "That's a great choice! Let me help you with that. Would you like me to connect you with a real person for more detailed assistance?";
          buttons = [
            { text: "Yes, connect me", action: 'human' },
            { text: "Continue with AI", action: 'continue' },
            { text: "Back to main menu", action: 'menu' }
          ];
        }
    }

    addBotMessage(response, buttons);
  };

  const handleQuizResponse = (action: string) => {
    const parts = action.split('-');
    const step = parseInt(parts[1]);
    const answer = parts.slice(2).join('-');
    
    setUserPreferences({
      ...userPreferences,
      [step]: answer
    });

    if (step < quizQuestions.length - 1) {
      const nextStep = step + 1;
      setQuizStep(nextStep);
      const nextQuestion = quizQuestions[nextStep];
      const buttons = nextQuestion.options.map(option => ({ 
        text: option, 
        action: `quiz-${nextStep}-${option}` 
      }));
      addBotMessage(nextQuestion.question, buttons);
    } else {
      // Quiz completed
      setShowQuiz(false);
      const recommendations = generateRecommendations(userPreferences);
      addBotMessage(`Based on your preferences, I recommend: ${recommendations}`, [
        { text: "Show me these artworks", action: 'show-recommendations' },
        { text: "Take quiz again", action: 'quiz' },
        { text: "Back to main menu", action: 'menu' }
      ]);
    }
  };

  const generateRecommendations = (prefs: any) => {
    // Simple recommendation logic based on preferences
    if (prefs[0]?.includes('Calm')) {
      return "Peaceful landscape paintings and serene abstract pieces";
    } else if (prefs[0]?.includes('Energetic')) {
      return "Bold contemporary works and vibrant color compositions";
    }
    return "A curated selection of our most popular artworks";
  };

  const addBotMessage = (content: string, buttons?: Array<{ text: string; action: string }>) => {
    const message: Message = {
      id: Date.now().toString(),
      type: 'bot',
      content,
      timestamp: new Date(),
      buttons
    };
    setMessages(prev => [...prev, message]);
  };

  const addUserMessage = (content: string) => {
    const message: Message = {
      id: Date.now().toString(),
      type: 'user',
      content,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, message]);
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    
    addUserMessage(inputValue);
    
    // Simple AI response simulation
    setTimeout(() => {
      addBotMessage("Thank you for your message! I'm processing your request. Would you like me to forward this to the artist for a personal response?", [
        { text: "Yes, send to artist", action: 'forward' },
        { text: "No, continue here", action: 'continue' },
        { text: "Back to main menu", action: 'menu' }
      ]);
    }, 1000);
    
    setInputValue('');
  };

  const toggleVoiceInput = () => {
    if (!isListening) {
      // Start voice input (simplified - would need speech recognition API)
      setIsListening(true);
      setTimeout(() => {
        setIsListening(false);
        setInputValue("Voice input received");
      }, 3000);
    } else {
      setIsListening(false);
    }
  };

  return (
    <>
      {/* Floating Chat Icon */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="relative group">
          <Button
            onClick={() => setIsOpen(true)}
            className="w-16 h-16 rounded-full bg-primary hover:bg-primary/80 shadow-2xl animate-pulse hover:animate-none transition-all duration-300 hover:scale-110"
            size="icon"
          >
            <img
              src="/lovable-uploads/2415f52d-0c67-42c1-8a2a-c8899ffcee6a.png"
              alt="Chat Assistant"
              className="w-8 h-8 object-contain"
            />
          </Button>
          
          {/* Hover Label */}
          <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            <div className="bg-foreground text-background px-3 py-2 rounded-lg text-sm whitespace-nowrap shadow-lg">
              Need Help? Chat with us
              <div className="absolute top-full right-4 border-4 border-transparent border-t-foreground"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Panel */}
      {isOpen && (
        <div className={`fixed inset-0 z-50 ${darkMode ? 'dark' : ''}`}>
          {/* Desktop: Side Panel, Mobile: Full Screen */}
          <div className="absolute inset-0 bg-black/50 md:bg-transparent" onClick={() => setIsOpen(false)} />
          <div className="absolute inset-0 md:inset-auto md:right-0 md:top-0 md:bottom-0 md:w-96 bg-background border-l shadow-2xl flex flex-col">
            
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b bg-card">
              <div className="flex items-center gap-3">
                <img
                  src="/lovable-uploads/2415f52d-0c67-42c1-8a2a-c8899ffcee6a.png"
                  alt="Assistant"
                  className="w-8 h-8 object-contain"
                />
                <div>
                  <h3 className="font-semibold">Art Assistant</h3>
                  <p className="text-xs text-muted-foreground">Online now</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                {/* Language Selector */}
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="text-xs bg-transparent border rounded px-2 py-1"
                >
                  {Object.entries(languages).map(([code, name]) => (
                    <option key={code} value={code}>{name}</option>
                  ))}
                </select>
                
                {/* Dark Mode Toggle */}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setDarkMode(!darkMode)}
                >
                  {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                </Button>
                
                {/* Close Button */}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Messages */}
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-[80%] ${
                      message.type === 'user' 
                        ? 'bg-primary text-primary-foreground' 
                        : 'bg-muted'
                    } rounded-lg p-3`}>
                      <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                      
                      {/* Action Buttons */}
                      {message.buttons && (
                        <div className="mt-3 flex flex-wrap gap-2">
                          {message.buttons.map((button, index) => (
                            <Button
                              key={index}
                              variant="outline"
                              size="sm"
                              onClick={() => handleButtonAction(button.action)}
                              className="text-xs"
                            >
                              {button.text}
                            </Button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            {/* FAQ Quick Access */}
            <div className="p-2 border-t bg-muted/50">
              <div className="flex flex-wrap gap-1">
                <Badge variant="secondary" className="text-xs cursor-pointer" 
                      onClick={() => handleButtonAction('faq-0')}>
                  How to buy?
                </Badge>
                <Badge variant="secondary" className="text-xs cursor-pointer"
                      onClick={() => handleButtonAction('faq-1')}>
                  Reserve painting?
                </Badge>
                <Badge variant="secondary" className="text-xs cursor-pointer"
                      onClick={() => handleButtonAction('faq-2')}>
                  International shipping?
                </Badge>
              </div>
            </div>

            {/* Input Area */}
            <div className="p-4 border-t bg-card">
              <div className="flex gap-2">
                <div className="flex-1 relative">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Type your message..."
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    className="pr-10"
                  />
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={toggleVoiceInput}
                    className={`absolute right-1 top-1/2 -translate-y-1/2 ${
                      isListening ? 'text-red-500' : 'text-muted-foreground'
                    }`}
                  >
                    {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                  </Button>
                </div>
                <Button onClick={handleSendMessage} size="sm">
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

export default ChatSystem;
