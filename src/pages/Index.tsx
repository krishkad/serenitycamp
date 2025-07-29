import Hero from "@/components/Hero";
import Packages from "@/components/Packages";
import DayTimeline from "@/components/DayTimeline";
import Gallery from "@/components/Gallery";
import Booking from "@/components/Booking";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Packages />
      <DayTimeline />
      <Gallery />
      <Booking />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
