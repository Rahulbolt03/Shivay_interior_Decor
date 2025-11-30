import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "./ui/button";
import { MessageCircle } from "lucide-react";

const WarrantySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-8 overflow-hidden" style={{ minHeight: "8cm" }}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80"
          alt="Modern Living Room"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-6 items-center">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 md:p-8 border border-white/20"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Warranty & After-Sales Support
              </h2>
              <p className="text-white/90 text-sm md:text-base leading-relaxed mb-4">
                We believe in long-lasting quality and full customer support. That's why we offer up
                to 1 year of free service after project completion. All hardware like hinges and
                slides come with a 1-year replacement warranty. For modular boards, we provide a
                warranty ranging from 10 to 30 years based on the material used—giving you complete
                peace of mind and trust in our work.
              </p>
              <Button
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-foreground px-6 py-3 text-sm md:text-base h-auto"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Talk to our Expert
              </Button>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WarrantySection;

