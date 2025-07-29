import Navbar from "@/components/Navbar";
import EnhancedHero from "@/components/EnhancedHero";
import EnhancedPackages from "@/components/EnhancedPackages";
import EnhancedDayTimeline from "@/components/EnhancedDayTimeline";
import Gallery from "@/components/Gallery";
import Booking from "@/components/Booking";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen cursor-nature">
      <Navbar />
      <EnhancedHero />
      <EnhancedPackages />
      <EnhancedDayTimeline />
      <Gallery />
      <Booking />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
