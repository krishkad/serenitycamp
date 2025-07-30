import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear().toString();
  return (
    <footer className="bg-gradient-to-br from-primary/5 to-accent/5 border-t border-border/50">
      {/* Newsletter Section */}
      <div className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4 text-foreground">
            Stay Connected with <span className="text-primary">Nature</span>
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Subscribe to receive seasonal updates, exclusive offers, and
            inspiration for your next wilderness adventure.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email address"
              className="flex-1"
            />
            <Button className="btn-nature hover:scale-105 transition-transform">
              <Mail className="w-4 h-4 mr-2" />
              Subscribe
            </Button>
          </div>
        </div>
      </div>

      <Separator className="opacity-30" />

      {/* Main Footer Content */}
      <div className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <h4 className="text-2xl font-bold mb-4 text-foreground">
                Serenity Camp
              </h4>
              <p className="text-muted-foreground mb-6 max-w-md">
                Where luxury meets wilderness. Experience the perfect blend of
                comfort and adventure in nature's most beautiful settings.
              </p>

              <div className="flex gap-4 mb-6">
                <Button
                  size="sm"
                  variant="outline"
                  className="hover:bg-primary/10"
                >
                  <Instagram className="w-4 h-4" />
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="hover:bg-primary/10"
                >
                  <Facebook className="w-4 h-4" />
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="hover:bg-primary/10"
                >
                  <Twitter className="w-4 h-4" />
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="hover:bg-primary/10"
                >
                  <Youtube className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h5 className="font-semibold text-foreground mb-4">
                Quick Links
              </h5>
              <ul className="space-y-3 text-muted-foreground">
                <li>
                  <a
                    href="#packages"
                    className="hover:text-primary transition-colors"
                  >
                    Packages
                  </a>
                </li>
                <li>
                  <a
                    href="#gallery"
                    className="hover:text-primary transition-colors"
                  >
                    Gallery
                  </a>
                </li>
                <li>
                  <a
                    href="#experiences"
                    className="hover:text-primary transition-colors"
                  >
                    Experiences
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="hover:text-primary transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#testimonials"
                    className="hover:text-primary transition-colors"
                  >
                    Reviews
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-primary transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h5 className="font-semibold text-foreground mb-4">
                Get in Touch
              </h5>
              <div className="space-y-3 text-muted-foreground">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>
                    123 Serenity Valley Road
                    <br />
                    Pine Ridge, MT 59718
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>+1 (555) 123-CAMP</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>hello@serenitycamp.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Separator className="opacity-30" />

      {/* Bottom Footer */}
      <div className="py-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-muted-foreground text-sm">
              © {year} Serenity Camp. All rights reserved.
            </div>

            <div className="flex gap-6 text-sm text-muted-foreground">
              <a
                href="#privacy"
                className="hover:text-primary transition-colors"
              >
                Privacy Policy
              </a>
              <a href="#terms" className="hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a
                href="#accessibility"
                className="hover:text-primary transition-colors"
              >
                Accessibility
              </a>
            </div>

            <div className="text-sm text-muted-foreground italic">
              "Crafted by nature, for those who seek it."
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
