import { motion } from "framer-motion";

const LogoCarousel = () => {
  const logos = [
    { name: "BMW", tagline: "PREMIUM PARTNER", icon: "text" },
    { name: "BETTERWAY", tagline: "QUALITY ASSURED", icon: "door" },
    { name: "LOVEBIRDS", tagline: "DESIGN EXCELLENCE", icon: "building" },
    { name: "TOSTEM", tagline: "INNOVATION LEADER", icon: "house" },
    { name: "LIXIL", tagline: "TRUSTED BRAND", icon: "house-circle" },
  ];

  // Duplicate logos for seamless loop
  const duplicatedLogos = [...logos, ...logos, ...logos];

  const LogoIcon = ({ type }: { type: string }) => {
    if (type === "door") {
      return (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-foreground">
          <rect x="8" y="6" width="24" height="28" stroke="currentColor" strokeWidth="2" fill="none" />
          <circle cx="28" cy="20" r="2" fill="currentColor" />
        </svg>
      );
    }
    if (type === "building") {
      return (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-foreground">
          <rect x="6" y="12" width="28" height="22" stroke="currentColor" strokeWidth="2" fill="none" />
          <rect x="10" y="16" width="4" height="4" fill="currentColor" />
          <rect x="16" y="16" width="4" height="4" fill="currentColor" />
          <rect x="22" y="16" width="4" height="4" fill="currentColor" />
        </svg>
      );
    }
    if (type === "house") {
      return (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-foreground">
          <path d="M20 8 L8 18 L8 32 L32 32 L32 18 Z" stroke="currentColor" strokeWidth="2" fill="none" />
          <circle cx="20" cy="24" r="3" fill="currentColor" />
        </svg>
      );
    }
    if (type === "house-circle") {
      return (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-foreground">
          <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M20 10 L12 18 L12 28 L28 28 L28 18 Z" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
      );
    }
    return null;
  };

  return (
    <section className="py-16 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Single Row - Moving Left */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-16 items-center"
            animate={{
              x: [0, -2400],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
          >
            {duplicatedLogos.map((logo, index) => (
              <div
                key={`row-${index}`}
                className="flex-shrink-0 flex items-center gap-3 px-6"
              >
                {logo.icon !== "text" && (
                  <div className="flex-shrink-0">
                    <LogoIcon type={logo.icon} />
                  </div>
                )}
                <div>
                  <h3 className="text-lg font-bold text-foreground whitespace-nowrap">
                    {logo.name}
                  </h3>
                  <p className="text-xs text-muted-foreground uppercase tracking-[0.2em] whitespace-nowrap">
                    {logo.tagline}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LogoCarousel;

