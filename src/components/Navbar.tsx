import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import {
  Menu,
  Leaf,
  Mountain,
  Camera,
  Mail,
  Calendar,
  Star,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "#home", icon: Leaf },
  { name: "Packages", href: "#packages", icon: Mountain },
  { name: "Experience", href: "#experience", icon: Star },
  { name: "Gallery", href: "#gallery", icon: Camera },
  { name: "Book Now", href: "#booking", icon: Calendar },
  { name: "Contact", href: "#contact", icon: Mail },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollYProgress } = useScroll();

  const navbarOpacity = useTransform(scrollYProgress, [0, 0.1], [0.9, 0.95]);
  const navbarBlur = useTransform(scrollYProgress, [0, 0.1], [10, 20]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="scroll-progress"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Desktop Navbar */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-lg"
            : "bg-transparent"
        }`}
        style={{
          opacity: navbarOpacity,
          backdropFilter: `blur(${navbarBlur}px)`,
        }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div
              className="flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="bg-gradient-forest p-2 rounded-full">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <span
                className={cn(
                  "text-2xl font-playfair font-bold text-foreground",
                  isScrolled ? "text-black" : "text-white"
                )}
              >
                Serenity Camp
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navigation.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "flex items-center gap-2 text-foreground hover:text-primary transition-colors group",
                      isScrolled ? "text-black" : "text-white"
                    )}
                    whileHover={{ y: -2 }}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <IconComponent className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span className="font-medium">{item.name}</span>
                  </motion.a>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="hover:bg-primary/10"
                  >
                    <Menu
                      className={cn(
                        "w-6 h-6",
                        isScrolled ? "text-black" : "text-white"
                      )}
                    />
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="w-full bg-gradient-to-br from-background via-secondary/20 to-primary/5 border-l border-border/30"
                  aria-describedby={undefined}
                >
                  <SheetHeader>
                    <SheetTitle className="text-left flex items-center gap-3 text-2xl">
                      <div className="bg-gradient-forest p-2 rounded-full">
                        <Leaf className="w-6 h-6 text-white" />
                      </div>
                      Serenity Camp
                    </SheetTitle>
                  </SheetHeader>

                  <div className="flex flex-col gap-2 mt-12">
                    {navigation.map((item, index) => {
                      const IconComponent = item.icon;
                      return (
                        <SheetClose asChild key={item.name}>
                          <motion.a
                            href={item.href}
                            className="flex items-center gap-4 p-4 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/30 hover:bg-primary/10 transition-all group"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.02, x: 10 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <div className="bg-gradient-forest p-3 rounded-xl group-hover:scale-110 transition-transform">
                              <IconComponent className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <span className="text-lg font-semibold text-foreground">
                                {item.name}
                              </span>
                              <div className="text-sm text-muted-foreground">
                                {item.name === "Home" && "Return to beginning"}
                                {item.name === "Packages" &&
                                  "Explore our offerings"}
                                {item.name === "Experience" &&
                                  "Your perfect day"}
                                {item.name === "Gallery" && "Visual journey"}
                                {item.name === "Book Now" &&
                                  "Reserve your escape"}
                                {item.name === "Contact" && "Get in touch"}
                              </div>
                            </div>
                          </motion.a>
                        </SheetClose>
                      );
                    })}
                  </div>

                  {/* Mobile CTA */}
                  {/* <div className="mt-6 p-6 bg-gradient-forest rounded-2xl text-center">
                    <h4 className="text-white font-semibold mb-2">
                      Ready for Adventure?
                    </h4>
                    <p className="text-white/80 text-sm mb-4">
                      Escape to nature today
                    </p>
                    <Button className="btn-gold w-full">
                      Start Your Journey
                    </Button>
                  </div> */}
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;
