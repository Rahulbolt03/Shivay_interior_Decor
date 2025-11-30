import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContentWrapper from "@/components/ContentWrapper";
import Loader from "@/components/Loader";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";

const queryClient = new QueryClient();

const App = () => {
  const [isContentVisible, setIsContentVisible] = useState(false);

  const handleLoaderComplete = () => {
    setIsContentVisible(true);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        
        <Loader onComplete={handleLoaderComplete} />
        
        <ContentWrapper isVisible={isContentVisible}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:id" element={<ProjectDetail />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </ContentWrapper>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
