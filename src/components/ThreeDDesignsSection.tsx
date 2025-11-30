import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "./ui/button";

const ThreeDDesignsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section ref={ref} className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content Box with Animation */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="bg-white rounded-xl p-8 md:p-12 shadow-lg"
          >
            <motion.div variants={itemVariants} className="text-accent text-sm font-semibold mb-4">
              /3D Designs
            </motion.div>
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold text-foreground mb-6"
            >
              Experience Your Interiors in 3D
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-muted-foreground text-lg leading-relaxed mb-8"
            >
              We provide detailed 3D designs for your interiors before the work begins. This helps
              you clearly see how every element like furniture, colors, and layout will look in your
              space. What you see in the 3D design is exactly what you'll get as the final result. It
              ensures clarity, avoids guesswork, and brings your vision to life with confidence.
            </motion.p>
          </motion.div>

          {/* Right Side - 3D Rendering */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
                alt="3D Interior Design Rendering"
                className="w-full h-full object-cover"
                loading="lazy"
                style={{ filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.15))" }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ThreeDDesignsSection;

