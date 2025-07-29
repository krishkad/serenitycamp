import { useState } from "react";
import { Button } from "@/components/ui/button";

// Using the nature images from the context
const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=800&q=80",
    alt: "Forest sunbeam",
    category: "Nature"
  },
  {
    src: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&q=80", 
    alt: "Deer in nature",
    category: "Wildlife"
  },
  {
    src: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=800&q=80",
    alt: "Starry night sky", 
    category: "Night"
  },
  {
    src: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=800&q=80",
    alt: "Magical forest lights",
    category: "Nature"
  },
  {
    src: "https://images.unsplash.com/photo-1458668383970-8ddd3927deed?w=800&q=80",
    alt: "Mountain alps landscape",
    category: "Landscape"
  },
  {
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80",
    alt: "Water surrounded by trees",
    category: "Water"
  },
  {
    src: "https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?w=800&q=80",
    alt: "Horses in nature",
    category: "Wildlife"
  },
  {
    src: "https://images.unsplash.com/photo-1439886183900-e79ec0057170?w=800&q=80",
    alt: "Deer in woods",
    category: "Wildlife"
  }
];

const categories = ["All", "Nature", "Wildlife", "Landscape", "Water", "Night"];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const filteredImages = selectedCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <section className="py-20 px-6 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Moments of <span className="text-primary">Pure Serenity</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Glimpse into the natural beauty and luxurious experiences that await you 
            at our wilderness retreat.
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`px-6 py-2 transition-all duration-300 ${
                  selectedCategory === category 
                    ? "btn-nature shadow-[var(--shadow-nature)]" 
                    : "hover:bg-primary/10 hover:border-primary/30"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
        
        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {filteredImages.map((image, index) => (
            <div 
              key={index}
              className="break-inside-avoid group cursor-pointer overflow-hidden rounded-[var(--radius)] shadow-lg hover:shadow-[var(--shadow-luxury)] transition-[var(--transition-nature)]"
            >
              <div className="relative">
                <img 
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/80 to-transparent">
                  <span className="text-sm font-medium">{image.alt}</span>
                  <div className="text-xs text-white/80 mt-1">{image.category}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* View More Button */}
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            className="btn-luxury hover:scale-105 transition-transform"
          >
            View Full Gallery
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;