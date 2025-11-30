import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import TeamSection from "@/components/TeamSection";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const heroImage =
  "https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&w=1600&q=80";

const About = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24">
        <section className="relative h-[70vh] flex items-center justify-center text-center">
          <div className="absolute inset-0">
            <img src={heroImage} alt="About hero" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/60" />
          </div>
          <div className="relative z-10 container mx-auto px-4 text-white space-y-4">
            <div className="flex items-center justify-center gap-4 text-sm uppercase tracking-[0.4em]">
              <Link to="/" className="hover:text-accent transition-colors duration-200">
                Home
              </Link>
              <span className="text-accent">/</span>
              <span>About Us</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-semibold">About Us</h1>
            <p className="max-w-3xl mx-auto text-base md:text-lg text-white/80">
              Meet the team crafting soulful interiors across India. From bespoke living rooms to full
              home transformations, Shivay Interior Decor blends craftsmanship, comfort, and modern sensibility.
            </p>
          </div>
        </section>

        <div className="bg-background">
          <AboutSection />
        </div>
        <TeamSection />
        <WhyChooseSection />
      </main>
      <Footer />
    </div>
  );
};

export default About;

