import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Users, User, UsersRound } from "lucide-react";
import couplesRetreat from "@/assets/couples-retreat.jpg";
import familyEscape from "@/assets/family-escape.jpg";
import soloExplorer from "@/assets/solo-explorer.jpg";

const packages = [
  {
    id: "couples",
    title: "Couple Retreat",
    description: "Romance under the stars with luxury amenities",
    price: "From $299/night",
    image: couplesRetreat,
    icon: Heart,
    features: ["Private hot tub", "Couples massage", "Candlelit dinner", "Stargazing deck"],
    popular: true
  },
  {
    id: "family",
    title: "Family Escape", 
    description: "Adventure and bonding for the whole family",
    price: "From $399/night",
    image: familyEscape,
    icon: Users,
    features: ["Family activities", "Kids play area", "Group meals", "Nature guides"]
  },
  {
    id: "solo",
    title: "Solo Explorer",
    description: "Find yourself in nature's tranquility",
    price: "From $199/night", 
    image: soloExplorer,
    icon: User,
    features: ["Meditation space", "Personal guide", "Yoga sessions", "Reading nook"]
  },
  {
    id: "group",
    title: "Group Adventure",
    description: "Unforgettable experiences with friends",
    price: "From $149/person",
    image: familyEscape,
    icon: UsersRound,
    features: ["Team activities", "Group fire pit", "Shared dining", "Adventure sports"]
  }
];

const Packages = () => {
  return (
    <section className="py-20 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Choose Your <span className="text-primary">Perfect Escape</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Each package is carefully crafted to provide you with an unforgettable experience
            tailored to your unique adventure style.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {packages.map((pkg) => {
            const IconComponent = pkg.icon;
            return (
              <Card 
                key={pkg.id} 
                className="group hover:shadow-[var(--shadow-nature)] transition-[var(--transition-nature)] hover:-translate-y-2 border-border/50 bg-card/80 backdrop-blur-sm relative overflow-hidden"
              >
                {pkg.popular && (
                  <Badge className="absolute top-4 right-4 z-10 bg-gold text-gold-foreground">
                    Most Popular
                  </Badge>
                )}
                
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={pkg.image} 
                    alt={pkg.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-2">
                    <div className="bg-primary/90 p-2 rounded-full">
                      <IconComponent className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <span className="text-white font-medium">{pkg.price}</span>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">{pkg.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {pkg.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {pkg.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className="w-full btn-nature hover:scale-105 transition-transform"
                    variant="default"
                  >
                    View Details
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Packages;