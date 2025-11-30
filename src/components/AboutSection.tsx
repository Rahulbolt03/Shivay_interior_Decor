import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "./ui/button";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              <motion.div
                className="absolute inset-6 rounded-[32px] bg-gradient-to-br from-accent/30 to-transparent blur-3xl -z-10"
                animate={{ scale: [0.9, 1, 0.95], opacity: [0.6, 0.8, 0.7] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="rounded-[32px] shadow-2xl overflow-hidden border border-white/40 relative"
                initial={{ x: -60, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : {}}
                transition={{ type: "spring", stiffness: 70, damping: 12 }}
              >
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: "linear-gradient(120deg, rgba(255,255,255,0.25), transparent 40%)" }}
                  animate={{ x: ["-40%", "120%"] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                  animate={{ x: ["-6%", "6%", "-6%"] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80"
                    alt="Modern Living Room Interior"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className="w-full h-[600px] object-cover"
            />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-accent text-lg font-medium mb-4">/ Welcome to Shivay Interior Decor</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              We Create You Enjoy 
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              At <span className="font-semibold text-foreground">Shivay Interior Decor</span>, we design stylish and functional spaces with quality craftsmanship and care. Based in India, with 25+ years of experience. From modular kitchens to full home interiors, we bring your vision to life from concept to completion.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 gap-8 mt-12">
              <div>
                <h3 className="text-5xl font-bold text-foreground mb-2">25 +</h3>
                <p className="text-muted-foreground">Years of Experience</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
