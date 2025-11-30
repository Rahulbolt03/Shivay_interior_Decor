import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const LoopingTestimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      text: "I wasn't sure which colors would suit my space, but their ideas were fresh and modern. The final result was even better than I imagined",
      author: "Ms. Kaviya",
      location: "Kolathur",
    },
    {
      text: "I had a basic idea for my interiors, but the team brought it to life with smart suggestions. Everything turned out stylish, neat, and exactly how I wanted",
      author: "Mr. Arjun",
      location: "Anna Nagar",
    },
    {
      text: "I thought modular kitchens would be complicated, but Shivay Interior Decor made the whole process so easy. Great design, perfect fitting, and clean finish!",
      author: "Mrs. Revathi",
      location: "Madhavaram",
    },
  ];

  // Auto-loop testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section ref={ref} className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Testimonials</h2>
          <p className="text-muted-foreground text-lg mb-2">
            Hear what our happy clients say about our work, designs, and service.
          </p>
          <p className="text-muted-foreground text-lg">
            Real feedback from real homes we've transformed with care
          </p>
        </motion.div>

        {/* Testimonial Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={
                isInView
                  ? {
                      opacity: 1,
                      y: 0,
                      scale: currentIndex === index ? 1.02 : 1,
                    }
                  : {}
              }
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                scale: { duration: 0.3 },
              }}
              className={`bg-white rounded-lg p-6 border-2 transition-all duration-300 ${
                currentIndex === index
                  ? "border-accent shadow-lg"
                  : "border-accent/20 shadow-md"
              }`}
            >
              <p className="text-foreground mb-6 leading-relaxed">{testimonial.text}</p>
              <div>
                <p className="font-bold text-foreground text-lg mb-1">{testimonial.author}</p>
                <p className="text-muted-foreground text-sm">{testimonial.location}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Auto-loop indicator dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all ${
                currentIndex === index ? "bg-accent w-8" : "bg-muted-foreground/30 w-2"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LoopingTestimonials;


