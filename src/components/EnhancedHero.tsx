import heroImage from "@/assets/hero-luxury-camping.jpg";
import { Button } from "@/components/ui/button";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Play } from "lucide-react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const FloatingLeaf = ({ delay = 0 }) => (
  <motion.div
    className="absolute pointer-events-none"
    initial={{ opacity: 0 }}
    animate={{
      opacity: [0, 1, 0],
      y: [-100, window.innerHeight + 100],
      x: [Math.random() * 200 - 100, Math.random() * 200 - 100],
      rotate: [0, 360],
    }}
    transition={{
      duration: 15 + Math.random() * 10,
      delay: delay,
      repeat: Infinity,
      ease: "linear",
    }}
    style={{
      left: `${Math.random() * 100}%`,
    }}
  >
    <div className="w-4 h-4 bg-primary/20 rounded-full" />
  </motion.div>
);

const EnhancedHero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll();
  const isInView = useInView(ref, { once: true });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section
      ref={ref}
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Parallax Background */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
          y: y,
        }}
      >
        {/* Dynamic Overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-black/50"
          animate={{
            background: [
              "linear-gradient(135deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.5) 100%)",
              "linear-gradient(135deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.4) 100%)",
              "linear-gradient(135deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.5) 100%)",
            ],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Floating Leaves Animation */}
      {[...Array(8)].map((_, i) => (
        <FloatingLeaf key={i} delay={i * 2} />
      ))}

      {/* Content */}
      <motion.div
        className="relative z-10 text-center max-w-6xl mx-auto px-6"
        style={{ opacity }}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div variants={textVariants} className="mb-8">
          <motion.h1
            className="text-6xl md:text-8xl font-playfair font-bold text-white mb-6 leading-tight"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.span
              className="block"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              Escape.
            </motion.span>
            <motion.span
              className="block text-campfire-gold"
              animate={{ y: [0, -15, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            >
              Breathe.
            </motion.span>
            <motion.span
              className="block"
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            >
              Reconnect.
            </motion.span>
          </motion.h1>
        </motion.div>

        <motion.p
          variants={textVariants}
          className="text-xl md:text-3xl text-white/90 mb-12 font-light max-w-4xl mx-auto leading-relaxed"
        >
          Where luxury embraces wilderness, and every moment becomes a
          meditation.
          <br />
          <span className="text-campfire-gold font-medium">
            Nature's sanctuary awaits.
          </span>
        </motion.p>

        <motion.div
          variants={textVariants}
          className="flex flex-col sm:flex-row gap-8 justify-center items-center"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              className="btn-nature text-xl px-12 py-6 group relative overflow-hidden"
              onClick={() => window.location.hash = "packages"}
            >
              <motion.div
                className="absolute inset-0 bg-white/10"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
              <span className="relative z-10 flex items-center gap-3">
                <Play className="w-5 h-5" />
                Explore Packages
              </span>
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              className="glass-morphism text-white hover:bg-white/20 text-xl px-12 py-6 border border-white/30"
               onClick={() => window.location.hash = "booking"}
            >
              Book Your Escape
            </Button>
          </motion.div>
        </motion.div>

        {/* Nature Sound Toggle */}
        {/* <motion.div
          variants={textVariants}
          className="mt-12"
        >
          <motion.button
            onClick={() => setSoundEnabled(!soundEnabled)}
            className="flex items-center gap-3 mx-auto glass-morphism px-6 py-3 rounded-full text-white/80 hover:text-white transition-colors group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {soundEnabled ? (
              <Volume2 className="w-5 h-5 group-hover:scale-110 transition-transform" />
            ) : (
              <VolumeX className="w-5 h-5 group-hover:scale-110 transition-transform" />
            )}
            <span className="text-sm font-medium">
              {soundEnabled ? "Nature Sounds On" : "Enable Nature Sounds"}
            </span>
          </motion.button>
        </motion.div> */}
      </motion.div>

      {/* Scroll Indicator */}
      {/* <motion.div 
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20"
        an                                                                                                                                ate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="glass-morphism p-4 rounded-full border border-white/30">
          <ChevronDown className="text-white w-8 h-8" />
        </div>
      </motion.div> */}

      {/* Gradient Overlay for Smooth Transition */}
      <div className="absolute -bottom-1 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default EnhancedHero;
