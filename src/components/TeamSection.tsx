import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TeamSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  // Combine roles for the same person with descriptions
  const teamData = [
    { 
      name: "Veeru Jangid", 
      roles: ["Owner", "Project Coordinator"],
      description: "Leading the team with 25+ years of experience in interior design and project management."
    },
    { 
      name: "Prince Jangid", 
      roles: ["Company CEO"],
      description: "Strategic visionary driving innovation and excellence in every project we undertake."
    },
    { 
      name: "Yogesh Jangid", 
      roles: ["Project Head"],
      description: "Expert in coordinating complex projects from concept to completion with precision."
    },
    { 
      name: "Rahul Jangid", 
      roles: ["Project Head"],
      description: "Specialized in residential and commercial interior solutions with attention to detail."
    },
    { 
      name: "Ajay Tomar", 
      roles: ["Project Head"],
      description: "Bringing creative solutions and technical expertise to transform spaces."
    },
    { 
      name: "Kanhiya Jangid", 
      roles: ["Company Accountant"],
      description: "Managing financial operations and ensuring transparent, efficient processes."
    },
    { 
      name: "Krishna", 
      roles: ["Procurement Team"],
      description: "Sourcing premium materials and ensuring quality supplies for all projects."
    },
  ];

  const teamMembers = teamData.map(member => ({
    name: member.name,
    role: member.roles.join(" and "),
    description: member.description
  }));

  // Group members into slides of 3, fill empty spaces by duplicating from the start
  const slides: typeof teamMembers[] = [];
  for (let i = 0; i < teamMembers.length; i += 3) {
    const slide = teamMembers.slice(i, i + 3);
    // Fill empty spaces in the last slide by duplicating from the beginning
    if (slide.length < 3) {
      const needed = 3 - slide.length;
      slide.push(...teamMembers.slice(0, needed));
    }
    slides.push(slide);
  }

  const totalSlides = slides.length;

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent text-sm uppercase tracking-[0.4em] mb-4">Our Team</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Meet the Creative Minds
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate professionals dedicated to bringing your vision to life
          </p>
        </motion.div>

        {/* Team Carousel */}
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 w-10 h-10 rounded-full bg-accent text-white hover:bg-accent/90 flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 w-10 h-10 rounded-full bg-accent text-white hover:bg-accent/90 flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>

          <div className="overflow-hidden">
            <motion.div
              className="flex transition-transform duration-500 ease-out"
              animate={{
                x: `-${currentIndex * 100}%`,
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {slides.map((slide, slideIndex) => (
                <div
                  key={slideIndex}
                  className="min-w-full grid md:grid-cols-3 gap-6 items-stretch"
                >
                  {slide.map((member, memberIndex) => {
                    const globalIndex = slideIndex * 3 + memberIndex;
                    const isActive = slideIndex === currentIndex && memberIndex === 1;
                    
                    return (
                      <motion.div
                        key={member.name}
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: globalIndex * 0.1 }}
                        className="group relative h-full"
                      >
                        <div
                          className={`relative bg-white rounded-lg p-8 shadow-md transition-all duration-300 h-full flex flex-col ${
                            isActive
                              ? "border-2 border-accent shadow-lg scale-105"
                              : "border border-transparent"
                          }`}
                        >
                          {/* Initial letter circle */}
                          <div className="mb-6 flex items-center justify-center flex-shrink-0">
                            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center text-3xl font-bold text-white shadow-lg">
                              {member.name.charAt(0)}
                            </div>
                          </div>

                          {/* Name */}
                          <div className="mb-3 text-center flex-shrink-0">
                            <h3 className="text-xl font-bold text-foreground mb-2">
                              {member.name}
                            </h3>
                          </div>

                          {/* Role */}
                          <p className="text-muted-foreground text-sm text-center uppercase tracking-wider mb-4 flex-shrink-0">
                            {member.role}
                          </p>

                          {/* Description - flex-grow to fill remaining space */}
                          <p className="text-muted-foreground text-sm text-center leading-relaxed flex-grow flex items-center justify-center">
                            {member.description}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              ))}
              
              {/* Duplicate first slide at the end for seamless loop */}
              {slides.map((slide, slideIndex) => (
                <div
                  key={`duplicate-start-${slideIndex}`}
                  className="min-w-full grid md:grid-cols-3 gap-6"
                >
                  {slide.map((member, memberIndex) => {
                    const globalIndex = slideIndex * 3 + memberIndex;
                    const isActive = slideIndex === (currentIndex % totalSlides) && memberIndex === 1;
                    
                    return (
                      <motion.div
                        key={`dup-start-${member.name}`}
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: globalIndex * 0.1 }}
                        className="group relative"
                      >
                        <div
                          className={`relative bg-white rounded-lg p-8 shadow-md transition-all duration-300 h-full flex flex-col ${
                            isActive
                              ? "border-2 border-accent shadow-lg scale-105"
                              : "border border-transparent"
                          }`}
                        >
                          {/* Initial letter circle */}
                          <div className="mb-6 flex items-center justify-center flex-shrink-0">
                            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center text-3xl font-bold text-white shadow-lg">
                              {member.name.charAt(0)}
                            </div>
                          </div>

                          {/* Name */}
                          <div className="mb-3 text-center flex-shrink-0">
                            <h3 className="text-xl font-bold text-foreground mb-2">
                              {member.name}
                            </h3>
                          </div>

                          {/* Role */}
                          <p className="text-muted-foreground text-sm text-center uppercase tracking-wider mb-4 flex-shrink-0">
                            {member.role}
                          </p>

                          {/* Description - flex-grow to fill remaining space */}
                          <p className="text-muted-foreground text-sm text-center leading-relaxed flex-grow flex items-center justify-center">
                            {member.description}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-accent w-8"
                    : "bg-muted-foreground/30 w-2 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

