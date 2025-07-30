import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah & Michael Chen",
    location: "San Francisco, CA",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b742?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    quote:
      "The perfect blend of luxury and nature. We disconnected from the digital world and reconnected with each other. The stargazing experience was absolutely magical.",
    experience: "Couple Retreat",
  },
  {
    name: "David Rodriguez",
    location: "Austin, TX",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    quote:
      "As a solo traveler, I found exactly what I was looking for - peace, reflection, and incredible natural beauty. The meditation sessions were life-changing.",
    experience: "Solo Explorer",
  },
  {
    name: "The Johnson Family",
    location: "Denver, CO",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    quote:
      "Our kids are still talking about the adventure weeks later! The perfect family bonding experience with activities for all ages. We'll definitely be back.",
    experience: "Family Escape",
  },
  {
    name: "Emma Thompson",
    location: "Seattle, WA",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    quote:
      "Every detail was thoughtfully planned. From the organic meals to the cozy accommodations, it exceeded all expectations. A true luxury in the wilderness.",
    experience: "Couple Retreat",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-secondary/10 to-primary/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Stories from <span className="text-primary">Our Guests</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how our wilderness retreat has touched the hearts and souls
            of those seeking their own natural escape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-card/90 backdrop-blur-sm border-border/50 hover:shadow-[var(--shadow-luxury)] transition-[var(--transition-nature)] hover:-translate-y-1"
            >
              <CardContent className="p-8">
                {/* Rating Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-500 text-yellow-500"
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-lg text-foreground mb-6 leading-relaxed font-light">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center gap-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage
                      src={testimonial.avatar}
                      alt={testimonial.name}
                    />
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>

                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.location}
                    </div>
                    <div className="text-sm text-primary font-medium">
                      {testimonial.experience}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Quote */}
        <div className="text-center mt-16 py-12 border-t border-border/30">
          <blockquote className="text-2xl md:text-3xl font-playfair italic text-muted-foreground max-w-4xl mx-auto">
            "Nature does not hurry, yet everything is accomplished. Here, we
            simply help you find your natural rhythm."
          </blockquote>
          <cite className="text-primary font-medium mt-4 block">
            - Serenity Camp Philosophy
          </cite>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
