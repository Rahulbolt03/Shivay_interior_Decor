import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const ProcessSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    {
      number: "01",
      title: "Consultation & Design",
      description: "We begin with a site visit, design discussion, and color consultation to craft a plan that perfectly fits your space and lifestyle",
    },
    {
      number: "02",
      title: "Finalization & Quotation",
      description: "We provide clear, transparent pricing with no hidden costs, ensuring a confident and stress-free experience",
    },
    {
      number: "03",
      title: "Material Selection",
      description: "We help you choose the right materials, finishes, and colors for lasting beauty, strength, and style within your budget",
    },
    {
      number: "04",
      title: "Manufacturing",
      description: "We craft furniture in-house using high-quality materials for a strong build, smooth finish, and precise fit",
    },
    {
      number: "05",
      title: "Installation & Finishing",
      description: "Our team installs every element with care, ensuring a clean setup, perfect fit, and polished finish",
    },
    {
      number: "06",
      title: "Handover & Support",
      description: "We conduct a final check and provide warranty support with clear guidance to ensure lasting satisfaction",
    },
  ];

  return (
    <section ref={ref} className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">How We Work</h2>
          <p className="text-muted-foreground text-base max-w-2xl mx-auto">
            A clear, step-by-step process ensuring quality work, timely delivery, and complete satisfaction
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:perspective-[1200px]">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -100 }}
              animate={
                isInView
                  ? {
                      opacity: 1,
                      x: 0,
                      transition: { delay: index * 0.1, duration: 0.6, type: "spring", damping: 15 },
                    }
                  : {}
              }
              whileHover={{
                y: -10,
                rotateY: 0,
                boxShadow: "0 30px 60px rgba(0,0,0,0.15)",
              }}
              className={`bg-card p-6 rounded-xl shadow-lg transition-all duration-500 border border-border relative overflow-hidden ${
                index % 2 === 0 ? "lg:-translate-y-4" : "lg:translate-y-4"
              }`}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent"
                animate={{
                  backgroundPosition: ["0% 0%", "100% 100%"],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
              <div className="relative z-10">
              <div className="text-5xl font-bold text-accent/20 mb-3">{step.number}</div>
              <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
