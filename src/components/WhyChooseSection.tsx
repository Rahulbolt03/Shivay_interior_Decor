import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Award, Brush, Clock, ShieldCheck } from "lucide-react";

const WhyChooseSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, margin: "-200px" });
  
  // Global scroll progress for parallax effect
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const features = [
    {
      icon: Users,
      title: "Experienced Team",
      description: "With over 25 years in the field, we bring hands-on knowledge and proven results",
    },
    {
      icon: Brush,
      title: "Customized Design",
      description: "Every design is customized to reflect your lifestyle. We don't fit a template, we create one for you",
    },
    {
      icon: Award,
      title: "Skilled in All Interiors",
      description: "From modular kitchens to ceilings and lighting, our team handles everything with care",
    },
    {
      icon: Clock,
      title: "On-Time Delivery",
      description: "We follow a clear schedule and ensure your work is completed on time, every time",
    },
    {
      icon: ShieldCheck,
      title: "Trusted Warranty Support",
      description: "Enjoy full peace of mind with our service and product warranties that cover you post-installation",
    },
  ];

  // White background for all cards
  const cardColor = "#FFFFFF";

  return (
    <section ref={containerRef} className="py-20 bg-muted/30 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Content - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="sticky top-24 h-fit"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Why Choose Us</h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              With 25+ years of experience, we deliver reliable and quality interiors. Our team focuses on smart design, timely work, and long-term support you can trust.
              We use only premium materials and work with trusted brands like BMW, BETTERWAY, LOVEBIRDS, TOSTEM, and LIXIL to ensure lasting quality and durability.
              Our design process is collaborative and transparent, keeping you informed every step of the way.
              Quality craftsmanship is at the heart of everything we do, with skilled artisans ensuring precision in every detail.
              We provide comprehensive warranty coverage and responsive after-sales service for your complete peace of mind.
            </p>
          </motion.div>

          {/* Sticky Cards with Parallax - Right Side */}
          <div className="relative">
            {features.map((feature, i) => {
              const isLastCard = i === features.length - 1;
              
              // Calculate target scale - first cards scale down more
              const targetScale = 1 - ((features.length - i) * 0.05);
              
              // Calculate range for each card's animation - each card appears sequentially
              const startProgress = i * (1 / features.length);
              const endProgress = (i + 1) * (1 / features.length);
              const range: [number, number] = [startProgress, endProgress];
              
              // Scale transformation based on scroll progress
              const scale = useTransform(scrollYProgress, range, [1, targetScale]);
              
              // Opacity for sequential reveal - each card fades in one by one
              // Last card stays visible (opacity stays at 1)
              const opacity = isLastCard
                ? useTransform(
                    scrollYProgress,
                    [startProgress - 0.1, startProgress, 1],
                    [0, 1, 1]
                  )
                : useTransform(
                    scrollYProgress,
                    [startProgress - 0.1, startProgress, endProgress - 0.1, endProgress],
                    [0, 1, 1, 0]
                  );

              return (
                <div
                  key={feature.title}
                  className="sticky mb-4"
                  style={{ 
                    zIndex: features.length - i,
                    top: `calc(5vh + ${i * 25}px)`,
                  }}
                >
                  <motion.div
                    className="rounded-xl overflow-hidden shadow-2xl"
                    style={{
                      backgroundColor: cardColor,
                      scale,
                      opacity,
                    }}
                  >
                    <div className="p-8 min-h-[350px] flex flex-col justify-between">
                      <div>
                        <div className="mb-6">
                          <feature.icon className="w-12 h-12 text-accent mb-4" />
                        </div>
                        <h3 className="text-3xl font-bold text-foreground mb-4">{feature.title}</h3>
                        <p className="text-muted-foreground text-lg leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
