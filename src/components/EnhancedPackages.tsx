import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Users, User, UsersRound, Star, Sparkles, MapPin, Clock } from "lucide-react";
import couplesRetreat from "@/assets/couples-retreat.jpg";
import familyEscape from "@/assets/family-escape.jpg";
import soloExplorer from "@/assets/solo-explorer.jpg";

const packages = [
  {
    id: "couples",
    title: "Couple Retreat",
    subtitle: "Romance Under Stars",
    description: "Intimate luxury for two souls seeking connection",
    price: "From ₹299/night",
    originalPrice: "₹399",
    image: couplesRetreat,
    icon: Heart,
    features: ["Private hot tub", "Couples massage", "Candlelit dinner", "Stargazing deck"],
    highlights: ["🌹 Rose petal turndown", "🍷 Complimentary wine", "📸 Photo session"],
    popular: true,
    category: "Romance",
    duration: "2-3 nights",
    rating: 4.9
  },
  {
    id: "family",
    title: "Family Escape", 
    subtitle: "Adventures for All Ages",
    description: "Create lasting memories with your loved ones",
    price: "From ₹399/night",
    originalPrice: "₹499",
    image: familyEscape,
    icon: Users,
    features: ["Family activities", "Kids play area", "Group meals", "Nature guides"],
    highlights: ["🏕️ Connecting tents", "🎯 Adventure course", "🔥 S'mores nights"],
    category: "Family",
    duration: "3-5 nights",
    rating: 4.8
  },
  {
    id: "solo",
    title: "Solo Explorer",
    subtitle: "Journey Within",
    description: "Find yourself in nature's tranquil embrace",
    price: "From ₹199/night", 
    originalPrice: "₹279",
    image: soloExplorer,
    icon: User,
    features: ["Meditation space", "Personal guide", "Yoga sessions", "Reading nook"],
    highlights: ["🧘 Daily meditation", "📚 Library access", "🌅 Sunrise yoga"],
    category: "Wellness",
    duration: "1-3 nights",
    rating: 4.9
  },
  {
    id: "group",
    title: "Group Adventure",
    subtitle: "Bonds & Adventures",
    description: "Unforgettable experiences with your tribe",
    price: "From ₹149/person",
    originalPrice: "₹199",
    image: familyEscape,
    icon: UsersRound,
    features: ["Team activities", "Group fire pit", "Shared dining", "Adventure sports"],
    highlights: ["🏞️ Group challenges", "🎪 Event space", "🎵 Campfire songs"],
    category: "Adventure",
    duration: "2-4 nights", 
    rating: 4.7
  }
];

const categories = ["All", "Romance", "Family", "Wellness", "Adventure"];

const EnhancedPackages = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filteredPackages = selectedCategory === "All" 
    ? packages 
    : packages.filter(pkg => pkg.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      rotateX: 45
    },
    visible: { 
      opacity: 1, 
      y: 0,
      rotateX: 0,
      transition: { 
        duration: 0.6
      }
    }
  };

  return (
    <section 
      ref={ref}
      id="packages"
      className="relative py-24 px-6 bg-gradient-to-br from-secondary/20 via-background to-primary/5 scroll-snap-section"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Badge className="mb-6 bg-campfire-gold/20 text-campfire-gold border-campfire-gold/30 px-4 py-2">
              ✨ Luxury Experiences
            </Badge>
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl font-playfair font-bold mb-8 text-foreground">
            Choose Your 
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-forest">
              Perfect Escape
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Each curated experience is designed to create profound connections — 
            with nature, with others, and with yourself.
          </p>
        </motion.div>
        
        {/* Category Filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {categories.map((category) => (
            <motion.div key={category} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`px-8 py-3 text-lg transition-all duration-300 ${
                  selectedCategory === category 
                    ? "btn-nature shadow-[var(--shadow-forest)]" 
                    : "hover:bg-primary/10 hover:border-primary/30 hover:scale-105"
                }`}
              >
                {category}
              </Button>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Packages Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <AnimatePresence>
            {filteredPackages.map((pkg, index) => {
              const IconComponent = pkg.icon;
              return (
                <motion.div
                  key={`${pkg.id}-${selectedCategory}`}
                  variants={cardVariants}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  onHoverStart={() => setHoveredCard(pkg.id)}
                  onHoverEnd={() => setHoveredCard(null)}
                  className="group cursor-pointer perspective-1000"
                >
                  <Card className="h-full overflow-hidden border-border/50 bg-card/80 backdrop-blur-sm hover-lift group-hover:shadow-[var(--shadow-immersive)] transition-all duration-500 relative">
                    {pkg.popular && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 }}
                      >
                        <Badge className="absolute top-4 right-4 z-10 bg-campfire-gold text-campfire-gold-foreground">
                          <Star className="w-3 h-3 mr-1" />
                          Most Popular
                        </Badge>
                      </motion.div>
                    )}
                    
                    {/* Image Container */}
                    <div className="relative h-64 overflow-hidden">
                      <motion.img 
                        src={pkg.image} 
                        alt={pkg.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                      />
                      
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      
                      {/* Floating Price */}
                      <motion.div 
                        className="absolute bottom-4 left-4 right-4"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="glass-morphism p-3 rounded-full border border-white/30">
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                          <div className="text-right">
                            <div className="text-white font-bold text-lg">{pkg.price}</div>
                            {pkg.originalPrice && (
                              <div className="text-white/60 line-through text-sm">{pkg.originalPrice}</div>
                            )}
                          </div>
                        </div>
                      </motion.div>
                      
                      {/* Hover Overlay */}
                      <AnimatePresence>
                        {hoveredCard === pkg.id && (
                          <motion.div
                            className="absolute inset-0 bg-primary/90 flex items-center justify-center"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <div className="text-center text-white p-6">
                              <Sparkles className="w-12 h-12 mx-auto mb-4 animate-pulse" />
                              <div className="space-y-2">
                                {pkg.highlights.map((highlight, i) => (
                                  <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="text-sm font-medium"
                                  >
                                    {highlight}
                                  </motion.div>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                    
                    <CardContent className="p-6 space-y-4">
                      {/* Header */}
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant="outline" className="text-xs">
                            {pkg.category}
                          </Badge>
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 fill-campfire-gold text-campfire-gold" />
                            <span className="text-sm font-medium">{pkg.rating}</span>
                          </div>
                        </div>
                        
                        <h3 className="text-xl font-playfair font-bold text-foreground mb-1">
                          {pkg.title}
                        </h3>
                        <p className="text-campfire-gold font-medium text-sm mb-2">
                          {pkg.subtitle}
                        </p>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {pkg.description}
                        </p>
                      </div>

                      {/* Details */}
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {pkg.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          Forest View
                        </div>
                      </div>
                      
                      {/* Features */}
                      <ul className="space-y-2">
                        {pkg.features.slice(0, 3).map((feature, i) => (
                          <motion.li 
                            key={i} 
                            className="flex items-center gap-2 text-sm text-muted-foreground"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 + i * 0.1 }}
                          >
                            <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                            {feature}
                          </motion.li>
                        ))}
                      </ul>
                      
                      {/* CTA Button */}
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button 
                          className="w-full btn-nature hover:shadow-[var(--shadow-forest)] group relative overflow-hidden"
                        >
                          <motion.div
                            className="absolute inset-0 bg-white/10"
                            initial={{ x: "-100%" }}
                            whileHover={{ x: "100%" }}
                            transition={{ duration: 0.6 }}
                          />
                          <span className="relative z-10">Explore Experience</span>
                        </Button>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default EnhancedPackages;