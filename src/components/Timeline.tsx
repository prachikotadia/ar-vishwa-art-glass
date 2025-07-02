
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Award, Palette, Star, Calendar, MapPin } from 'lucide-react';

interface TimelineEvent {
  id: string;
  year: number;
  title: string;
  description: string;
  category: 'education' | 'exhibition' | 'award' | 'milestone';
  icon: React.ComponentType<any>;
  featured?: boolean;
}

const timelineEvents: TimelineEvent[] = [
  {
    id: '1',
    year: 2010,
    title: 'Bachelor of Fine Arts',
    description: 'Government College of Arts, Mumbai - Specialized in Traditional and Contemporary Art',
    category: 'education',
    icon: GraduationCap
  },
  {
    id: '2',
    year: 2013,
    title: 'First Solo Exhibition',
    description: 'Mumbai Art Gallery - "Colors of Expression" featuring 25 original paintings',
    category: 'exhibition',
    icon: Palette,
    featured: true
  },
  {
    id: '3',
    year: 2015,
    title: 'International Art Residency',
    description: 'Florence, Italy - 3-month residency studying Renaissance techniques',
    category: 'milestone',
    icon: MapPin
  },
  {
    id: '4',
    year: 2018,
    title: 'Master\'s in Contemporary Art',
    description: 'Sir J.J. School of Art - Advanced studies in modern artistic expression',
    category: 'education',
    icon: GraduationCap
  },
  {
    id: '5',
    year: 2020,
    title: 'Digital Art Innovation Award',
    description: 'Recognized for pioneering work in mixed media and digital art integration',
    category: 'award',
    icon: Award,
    featured: true
  },
  {
    id: '6',
    year: 2022,
    title: 'Founded AR Vishwa Art Studio',
    description: 'Established professional art studio offering custom artwork and commissions',
    category: 'milestone',
    icon: Star,
    featured: true
  },
  {
    id: '7',
    year: 2024,
    title: 'Virtual Reality Art Installation',
    description: 'Launched immersive VR art experience combining traditional and digital mediums',
    category: 'exhibition',
    icon: Calendar
  }
];

const Timeline = () => {
  const { ref: timelineRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <div ref={timelineRef} className="relative pl-8 lg:pl-12">
      {/* Timeline line */}
      <div 
        className={`absolute left-6 lg:left-10 top-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent transition-all duration-1000 ${
          inView ? 'h-full opacity-100' : 'h-0 opacity-0'
        }`}
        style={{ transformOrigin: 'top' }}
      />
      
      {/* Timeline events */}
      <div className="space-y-8 lg:space-y-12">
        {timelineEvents.map((event, index) => {
          const { ref: eventRef, inView: eventInView } = useInView({
            threshold: 0.5,
            triggerOnce: true,
            rootMargin: '-100px'
          });
          
          const IconComponent = event.icon;
          
          return (
            <div
              key={event.id}
              ref={eventRef}
              className={`relative transition-all duration-700 ease-out ${
                eventInView 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 translate-x-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Timeline dot */}
              <div 
                className={`absolute -left-8 lg:-left-12 w-4 h-4 rounded-full border-2 border-background flex items-center justify-center transition-all duration-500 ${
                  event.featured 
                    ? 'bg-primary shadow-lg shadow-primary/30' 
                    : 'bg-secondary'
                } ${
                  eventInView 
                    ? 'scale-100 animate-pulse-glow' 
                    : 'scale-0'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <IconComponent className="w-2 h-2 text-white" />
              </div>
              
              {/* Event content */}
              <div className={`glass-strong rounded-xl p-4 lg:p-6 hover:shadow-lg transition-all duration-300 ${
                event.featured ? 'ring-1 ring-primary/20' : ''
              }`}>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                      event.category === 'education' ? 'bg-blue-500/20 text-blue-400' :
                      event.category === 'exhibition' ? 'bg-purple-500/20 text-purple-400' :
                      event.category === 'award' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-green-500/20 text-green-400'
                    }`}>
                      <IconComponent className="w-4 h-4" />
                    </div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-semibold text-primary">
                        {event.year}
                      </span>
                      {event.featured && (
                        <span className="px-2 py-0.5 bg-primary/20 text-primary text-xs rounded-full">
                          Featured
                        </span>
                      )}
                    </div>
                    
                    <h3 className="font-semibold text-foreground mb-1">
                      {event.title}
                    </h3>
                    
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Timeline;
