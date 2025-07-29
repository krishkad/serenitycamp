import { Sunrise, Sun, Sunset, Moon } from "lucide-react";

const timelineEvents = [
  {
    time: "Morning",
    title: "Forest Meditation & Organic Breakfast",
    description: "Start your day with guided meditation followed by a farm-to-table breakfast",
    icon: Sunrise,
    color: "from-yellow-400 to-orange-400"
  },
  {
    time: "Afternoon", 
    title: "Guided Nature Trail & Kayaking",
    description: "Explore hidden trails and pristine waters with our expert naturalist guides",
    icon: Sun,
    color: "from-blue-400 to-cyan-400"
  },
  {
    time: "Evening",
    title: "Bonfire Dinner & Stargazing",
    description: "Enjoy locally sourced cuisine around the fire, followed by celestial observation",
    icon: Sunset,
    color: "from-orange-400 to-red-400"
  },
  {
    time: "Night",
    title: "Luxury Comfort & Nature Sounds",
    description: "Drift to sleep in premium accommodations with the symphony of the wilderness",
    icon: Moon,
    color: "from-purple-400 to-blue-600"
  }
];

const DayTimeline = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            How Your <span className="text-primary">Day Unfolds</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every moment is carefully orchestrated to reconnect you with nature 
            while ensuring absolute comfort and luxury.
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary/20 via-primary to-primary/20" />
          
          <div className="space-y-16 md:space-y-24">
            {timelineEvents.map((event, index) => {
              const IconComponent = event.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div 
                  key={index}
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${isEven ? 'md:text-right' : 'md:text-left'} text-center md:text-left`}>
                    <div className="mb-4">
                      <span className="text-primary font-semibold text-lg tracking-wide uppercase">
                        {event.time}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                      {event.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-lg leading-relaxed max-w-md mx-auto md:mx-0">
                      {event.description}
                    </p>
                  </div>
                  
                  {/* Icon */}
                  <div className="relative z-10">
                    <div className={`bg-gradient-to-br ${event.color} p-6 rounded-full shadow-[var(--shadow-luxury)] hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  {/* Spacer for alignment */}
                  <div className="flex-1 hidden md:block" />
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Bottom Quote */}
        <div className="text-center mt-20 py-12 border-t border-border/50">
          <blockquote className="text-2xl md:text-3xl font-playfair italic text-muted-foreground max-w-4xl mx-auto">
            "In every walk with nature, one receives far more than they seek. 
            Here, we amplify that gift with thoughtful luxury."
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default DayTimeline;