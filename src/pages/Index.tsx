import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import ProcessSection from "@/components/ProcessSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import LogoCarousel from "@/components/LogoCarousel";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <BeforeAfterSlider />
      <ProcessSection />
      <WhyChooseSection />
      <LogoCarousel />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
