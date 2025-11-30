import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&h=1080&fit=crop",
    "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1920&h=1080&fit=crop",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&h=1080&fit=crop",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&h=1080&fit=crop",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative h-screen overflow-hidden bg-black">
      {/* Background Image Slider with Parallax and Smooth Crossfade */}
      <div className="absolute inset-0">
        {images.map((image, index) => (
        <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{
              opacity: currentImageIndex === index ? 1 : 0,
              scale: currentImageIndex === index ? 1 : 1.1,
            }}
            transition={{ duration: 2, ease: "easeInOut" }}
          className="absolute inset-0"
            style={{
              willChange: "opacity, transform",
            }}
          >
            <motion.div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `url(${image})`,
                backgroundAttachment: "fixed",
              }}
              animate={{
                y: currentImageIndex === index ? [0, -20, 0] : 0,
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
            }}
          />
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 data-delay="0.2s" className="text-5xl md:text-7xl font-bold text-white mb-6">
              Welcome to Shivay Interior Decor
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              We design and build beautiful, practical interiors that match your lifestyle. With 25+ years of experience, we help families across India turn their homes into comfortable, stylish spaces.
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white z-10"
      >
        <ChevronDown size={32} />
      </motion.div>

    </section>
  );
};

export default HeroSection;
