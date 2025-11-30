import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const location = useLocation();

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, section: string) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    } else {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: "Home", section: "home", type: "anchor" as const },
    { name: "About us", href: "/about", type: "route" as const },
    { name: "Services", href: "/services", type: "route" as const },
    { name: "Projects", href: "/projects", type: "route" as const },
    { name: "Contact us", section: "contact", type: "anchor" as const },
  ];

  return (
    <nav
      data-delay="0s"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-md"
          : "bg-gradient-to-b from-black/70 via-black/50 to-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg overflow-hidden ${
            isScrolled 
              ? "bg-black border border-border" 
              : "bg-black border border-white/20"
          }`}>
            <img 
              src="/logo.png" 
              alt="Shivay Interior Decor Logo" 
              className="w-full h-full object-cover"
            />
          </div>
          <span
            className={`text-2xl font-black tracking-wide ${
              isScrolled ? "text-foreground" : "text-white drop-shadow-lg"
            }`}
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Shivay Interior Decor
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
            link.type === "route" ? (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => {
                  // Scroll to top when navigating to a route
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className={`text-lg font-semibold transition-colors duration-200 ${
                  isScrolled ? "text-foreground hover:text-accent" : "text-white hover:text-accent"
                } ${location.pathname === link.href ? "text-accent" : ""}`}
              >
                {link.name}
              </Link>
            ) : (
            <a
              key={link.name}
              href={`/#${link.section}`}
              onClick={(e) => handleAnchorClick(e, link.section!)}
              className={`text-lg font-semibold transition-colors duration-200 ${
                isScrolled ? "text-foreground hover:text-accent" : "text-white hover:text-accent"
              }`}
            >
              {link.name}
            </a>
            ),
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`md:hidden ${
            isScrolled ? "text-foreground" : "text-white drop-shadow"
          }`}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-t border-border"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) =>
                link.type === "route" ? (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      // Scroll to top when navigating to a route
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="text-foreground hover:text-accent transition-colors duration-200 py-2"
                  >
                    {link.name}
                  </Link>
                ) : (
                <a
                  key={link.name}
                  href={`/#${link.section}`}
                  onClick={(e) => handleAnchorClick(e, link.section!)}
                  className="text-foreground hover:text-accent transition-colors duration-200 py-2"
                >
                  {link.name}
                </a>
                ),
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
