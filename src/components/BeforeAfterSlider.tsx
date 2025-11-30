import { useEffect, useState, useRef } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";

const BeforeAfterSlider = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [animateHandle, setAnimateHandle] = useState(true);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setAnimateHandle(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleSlider = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!sliderRef.current) return;
    const container = sliderRef.current.getBoundingClientRect();
    const newPosition = ((e.clientX - container.left) / container.width) * 100;
    if (newPosition >= 0 && newPosition <= 100) {
      setSliderPosition(newPosition);
    }
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!sliderRef.current) return;
    const container = sliderRef.current.getBoundingClientRect();
    const touch = e.touches[0];
    const newPosition = ((touch.clientX - container.left) / container.width) * 100;
    if (newPosition >= 0 && newPosition <= 100) {
      setSliderPosition(newPosition);
    }
  };

  return (
    <section
      aria-label="Before and after interior transformation slider"
      className="bg-background py-12 sm:py-16 px-4 sm:px-6 text-center"
    >
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground mb-3">
        See The Transformation
      </h2>
      <div className="flex justify-center mb-6 sm:mb-8">
        <div className="w-16 sm:w-24 h-[2px] bg-accent"></div>
      </div>
      <p className="text-muted-foreground text-sm sm:text-lg max-w-xl mx-auto mb-8 sm:mb-10">
        Witness how we transform empty spaces into extraordinary living experiences
      </p>

      {/* Slider Container */}
      <div
        ref={sliderRef}
        className="relative w-full max-w-4xl mx-auto h-[260px] sm:h-[380px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl cursor-ew-resize select-none touch-action-none"
        onMouseMove={(e) => e.buttons === 1 && handleSlider(e)}
        onMouseDown={handleSlider}
        onTouchMove={(e) => {
          e.preventDefault();
          handleTouchMove(e);
        }}
        onTouchStart={(e) => {
          e.preventDefault();
          handleTouchMove(e);
        }}
      >
        {/* BEFORE IMAGE - Left side */}
        <div className="absolute inset-0">
          <img
            src="/slider before.svg"
            alt="Before interior design space"
            className="w-full h-full object-cover"
          />
          <span className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-foreground/80 text-background text-[10px] sm:text-xs px-3 py-1 rounded-full">
            Before: Empty
          </span>
        </div>

        {/* AFTER IMAGE - Right side */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
            }}
          >
            <img
              src="/slider after.svg"
              alt="After interior design space"
              className="w-full h-full object-cover"
            />
            <span className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-accent/90 text-foreground text-[10px] sm:text-xs px-3 py-1 rounded-full">
              After: Designed
            </span>
          </div>
        </div>

        {/* Slider Line */}
        <div
          className="absolute top-0 bottom-0 w-[2px] bg-white shadow-lg z-20"
          style={{ left: `${sliderPosition}%` }}
        />

        {/* Slider Handle with Pulse Animation */}
        <div
          aria-label="Drag handle for before-after comparison"
          className={`absolute top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-accent text-foreground rounded-full flex items-center justify-center z-30 shadow-xl border-4 border-white cursor-grab active:cursor-grabbing transition-transform hover:scale-110 ${
            animateHandle ? "animate-pulse" : ""
          }`}
          style={{ left: `${sliderPosition}%`, transform: "translate(-50%, -50%)" }}
        >
          <div className="flex">
            <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4" />
            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
          </div>
        </div>

        {/* Drag Label */}
        <div
          aria-hidden="true"
          className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 bg-foreground/80 text-background text-[10px] sm:text-xs px-3 sm:px-4 py-1.5 sm:py-2 rounded-full backdrop-blur"
        >
          <ArrowLeft className="w-3 h-3 inline mr-1" />
          Drag to compare
          <ArrowRight className="w-3 h-3 inline ml-1" />
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 sm:mt-10">
        <h3 className="text-xl sm:text-2xl font-semibold text-foreground">
          Luxury Living Room Transformation
        </h3>
        <p className="text-accent text-xs sm:text-sm mt-1">India Villa</p>
        <p className="text-muted-foreground mt-2 text-xs sm:text-sm max-w-md mx-auto">
          From bare walls to a sophisticated living space
        </p>
      </div>
    </section>
  );
};

export default BeforeAfterSlider;

