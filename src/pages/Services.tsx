import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServicesSection from "@/components/ServicesSection";
import ThreeDDesignsSection from "@/components/ThreeDDesignsSection";
import WarrantySection from "@/components/WarrantySection";
import ProcessSection from "@/components/ProcessSection";
import ResidentialCommercialSection from "@/components/ResidentialCommercialSection";
import { Link } from "react-router-dom";

const heroImage =
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80";

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24">
        <section className="relative h-[70vh] flex items-center justify-center text-center">
          <div className="absolute inset-0">
            <img src={heroImage} alt="Services hero" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/60" />
          </div>
          <div className="relative z-10 container mx-auto px-4 text-white space-y-4">
            <div className="flex items-center justify-center gap-4 text-sm uppercase tracking-[0.4em]">
              <Link to="/" className="hover:text-accent transition-colors duration-200">
                Home
              </Link>
              <span className="text-accent">/</span>
              <span>Services</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-semibold">Our Services</h1>
            <p className="max-w-3xl mx-auto text-base md:text-lg text-white/80">
              Comprehensive interior design solutions tailored to transform your living spaces into
              beautiful, functional environments
            </p>
          </div>
        </section>

        <div className="bg-background">
          <ServicesSection />
          <ResidentialCommercialSection />
          <ThreeDDesignsSection />
          <ProcessSection />
          <WarrantySection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Services;

