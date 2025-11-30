import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      text: "The wardrobe design for my bedroom exceeded all expectations! The team's color suggestions and sliding door recommendations were spot on. Perfect fit and stunning look.",
      author: "Mr. Senthil Kumar",
      location: "Perambur",
    },
    {
      text: "The modular kitchen exceeded our expectations. Professional team, quality work, and delivered on time. Highly recommend Shivay Interior Decor!",
      author: "Mrs. Priya Ramesh",
      location: "Madhavaram",
    },
    {
      text: "Excellent craftsmanship and attention to detail. They transformed our living room completely. Very satisfied with their service and support.",
      author: "Mr. Rajesh Kumar",
      location: "India",
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section ref={ref} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&h=600&fit=crop"
              alt="Beautiful Bedroom Interior"
              className="rounded-lg shadow-2xl w-full h-[500px] object-cover"
            />
          </motion.div>

          {/* Testimonials */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Testimonials</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Hear what our happy clients say about our work, designs, and service. Real feedback from real homes we've transformed with care
            </p>

            <div className="relative bg-card p-8 rounded-lg shadow-lg border-2 border-accent/20">
              <Quote className="w-12 h-12 text-accent mb-4" />
              <p className="text-lg text-foreground mb-6 leading-relaxed">
                {testimonials[currentIndex].text}
              </p>
              <div>
                <p className="font-bold text-foreground text-lg">
                  {testimonials[currentIndex].author}
                </p>
                <p className="text-muted-foreground">{testimonials[currentIndex].location}</p>
              </div>

              {/* Navigation */}
              <div className="flex gap-4 mt-6">
                <button
                  onClick={prevTestimonial}
                  className="w-10 h-10 rounded-full bg-accent text-accent-foreground hover:bg-accent/90 flex items-center justify-center transition-all"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-10 h-10 rounded-full bg-accent text-accent-foreground hover:bg-accent/90 flex items-center justify-center transition-all"
                >
                  <ChevronRight size={20} />
                </button>
              </div>

              {/* Dots */}
              <div className="flex gap-2 mt-4">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex ? "bg-accent w-8" : "bg-muted-foreground/30"
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
