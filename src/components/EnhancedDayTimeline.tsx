import { useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Sunrise, Sun, Sunset, Moon, Play, Pause } from "lucide-react";

const timelineEvents = [
  {
    time: "Dawn",
    hour: "6:00 AM",
    title: "Forest Meditation & Organic Breakfast",
    description: "Awaken your senses with guided meditation as the forest comes alive, followed by a farm-to-table breakfast made from locally sourced ingredients.",
    icon: Sunrise,
    color: "from-orange-300 via-yellow-400 to-orange-500",
    bgGradient: "from-orange-50 to-yellow-50",
    soundDescription: "🎵 Birds chirping, gentle rustling"
  },
  {
    time: "Midday", 
    hour: "12:00 PM",
    title: "Guided Nature Trail & Water Activities",
    description: "Explore hidden trails with our expert naturalist guides, then cool off in pristine waters through kayaking or peaceful lake swimming.",
    icon: Sun,
    color: "from-blue-400 via-sky-400 to-cyan-500",
    bgGradient: "from-blue-50 to-sky-50",
    soundDescription: "🎵 Flowing water, gentle splashing"
  },
  {
    time: "Golden Hour",
    hour: "6:00 PM", 
    title: "Bonfire Dinner & Storytelling",
    description: "Gather around the crackling fire for a feast of locally sourced cuisine, sharing stories under the painted evening sky.",
    icon: Sunset,
    color: "from-orange-400 via-red-400 to-pink-500",
    bgGradient: "from-orange-50 to-red-50",
    soundDescription: "🎵 Crackling fire, gentle conversations"
  },
  {
    time: "Starlight",
    hour: "9:00 PM",
    title: "Stargazing & Luxury Rest",
    description: "Marvel at the cosmos through telescopes, then retreat to your luxurious accommodation where nature's symphony lulls you to sleep.",
    icon: Moon,
    color: "from-indigo-400 via-purple-500 to-blue-600",
    bgGradient: "from-indigo-50 to-purple-50",
    soundDescription: "🎵 Night crickets, gentle wind"
  }
];

const EnhancedDayTimeline = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const eventVariants = {
    hidden: { 
      opacity: 0, 
      x: -100,
      rotateY: -45
    },
    visible: { 
      opacity: 1, 
      x: 0,
      rotateY: 0,
      transition: { 
        duration: 0.8
      }
    }
  };

  return (
    <section 
      ref={containerRef}
      id="experience"
      className="py-24 px-6 bg-gradient-to-br from-background via-secondary/10 to-primary/5 relative overflow-hidden scroll-snap-section"
    >
      {/* Animated Background */}
      <motion.div 
        className="absolute inset-0 opacity-30"
        style={{ y: backgroundY }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
        <div className="nature-grain absolute inset-0" />
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 bg-campfire-gold/20 text-campfire-gold px-6 py-3 rounded-full mb-8">
              <Sun className="w-5 h-5" />
              <span className="font-medium">24 Hours of Luxury</span>
            </div>
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-playfair font-bold mb-8 text-foreground">
            How Your Day 
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-forest">
              Unfolds in Paradise
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Every moment is thoughtfully curated to reconnect you with nature's rhythm,
            from the first light of dawn to the peaceful embrace of starlit night.
          </p>

          {/* Play/Pause Audio Control */}
          <motion.button
            onClick={() => setIsPlaying(!isPlaying)}
            className="mt-8 glass-morphism px-6 py-3 rounded-full text-foreground hover:scale-105 transition-transform group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isPlaying ? (
              <Pause className="w-5 h-5 mr-2 inline group-hover:scale-110 transition-transform" />
            ) : (
              <Play className="w-5 h-5 mr-2 inline group-hover:scale-110 transition-transform" />
            )}
            <span className="font-medium">
              {isPlaying ? "Pause" : "Play"} Ambient Journey
            </span>
          </motion.button>
        </motion.div>
        
        {/* Timeline Visualization */}
        <div className="relative mb-16">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-orange-300 via-sky-400 via-orange-400 to-indigo-500 rounded-full" />
          
          <motion.div 
            className="space-y-20 md:space-y-32"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {timelineEvents.map((event, index) => {
              const IconComponent = event.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div 
                  key={index}
                  variants={eventVariants}
                  className={`flex flex-col md:flex-row items-center gap-12 ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                  onHoverStart={() => setActiveIndex(index)}
                >
                  {/* Content Card */}
                  <motion.div 
                    className={`flex-1 ${isEven ? 'md:text-right' : 'md:text-left'} text-center md:text-left`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div 
                      className={`p-8 rounded-3xl bg-gradient-to-br ${event.bgGradient} border border-border/30 backdrop-blur-sm hover-lift hover-glow group cursor-pointer`}
                      whileHover={{ 
                        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)",
                        y: -5
                      }}
                    >
                      <div className="mb-6">
                        <div className="flex items-center gap-3 justify-center md:justify-start">
                          <span className="text-primary font-bold text-lg tracking-wide uppercase">
                            {event.time}
                          </span>
                          <div className="w-2 h-2 bg-primary rounded-full" />
                          <span className="text-muted-foreground font-medium">
                            {event.hour}
                          </span>
                        </div>
                      </div>
                      
                      <h3 className="text-2xl md:text-4xl font-playfair font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                        {event.title}
                      </h3>
                      
                      <p className="text-muted-foreground text-lg leading-relaxed mb-6 max-w-md mx-auto md:mx-0">
                        {event.description}
                      </p>

                      <motion.div 
                        className="inline-flex items-center gap-2 text-sm text-campfire-gold bg-campfire-gold/10 px-4 py-2 rounded-full"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: activeIndex === index ? 1 : 0.7 }}
                        transition={{ duration: 0.3 }}
                      >
                        {event.soundDescription}
                      </motion.div>
                    </motion.div>
                  </motion.div>
                  
                  {/* Icon */}
                  <motion.div 
                    className="relative z-10"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div 
                      className={`bg-gradient-to-br ${event.color} p-8 rounded-full shadow-[var(--shadow-immersive)] border-4 border-white`}
                      animate={{
                        boxShadow: activeIndex === index 
                          ? "0 0 40px rgba(255, 255, 255, 0.3)" 
                          : "0 15px 35px -10px rgba(0, 0, 0, 0.2)"
                      }}
                      whileHover={{ 
                        scale: 1.1,
                        rotate: 5
                      }}
                    >
                      <IconComponent className="w-10 h-10 text-white drop-shadow-lg" />
                    </motion.div>
                    
                    {/* Ripple Effect */}
                    <motion.div
                      className={`absolute inset-0 rounded-full bg-gradient-to-br ${event.color} opacity-20`}
                      animate={{
                        scale: activeIndex === index ? [1, 1.5, 1] : 1,
                        opacity: activeIndex === index ? [0.2, 0, 0.2] : 0.2
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </motion.div>
                  
                  {/* Spacer for alignment */}
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
        
        {/* Bottom Inspirational Quote */}
        <motion.div 
          className="text-center py-16 border-t border-border/30 bg-gradient-to-r from-transparent via-primary/5 to-transparent rounded-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.blockquote 
            className="text-3xl md:text-4xl font-playfair italic text-muted-foreground max-w-5xl mx-auto leading-relaxed"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            "In every walk with nature, one receives far more than they seek. 
            Here, we amplify that gift with thoughtful luxury."
          </motion.blockquote>
          <motion.cite 
            className="block mt-6 text-primary font-medium text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            — John Muir, reimagined for Serenity Camp
          </motion.cite>
        </motion.div>
      </div>
    </section>
  );
};

export default EnhancedDayTimeline;