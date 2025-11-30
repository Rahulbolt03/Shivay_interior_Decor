import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

const ResidentialCommercialSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Residential Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="group"
          >
            <Link to="/services?filter=residential">
              <div className="relative overflow-hidden rounded-xl h-[400px] cursor-pointer">
                <img
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop"
                  alt="Residential Services"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">Residential</h3>
                  <p className="text-white/90 text-lg mb-4">
                    Transform your home into a beautiful and functional living space
                  </p>
                  <span className="inline-block text-accent font-semibold hover:underline">
                    Explore Residential Services →
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Commercial Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="group"
          >
            <Link to="/services?filter=commercial">
              <div className="relative overflow-hidden rounded-xl h-[400px] cursor-pointer">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop"
                  alt="Commercial Services"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">Commercial</h3>
                  <p className="text-white/90 text-lg mb-4">
                    Create professional and inspiring workspaces that reflect your brand identity
                  </p>
                  <span className="inline-block text-accent font-semibold hover:underline">
                    Explore Commercial Services →
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ResidentialCommercialSection;

