import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center overflow-hidden">
                <img 
                  src="/logo.png" 
                  alt="Shivay Interior Decor Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-bold text-lg">Shivay Interior Decor</span>
            </div>
            <p className="text-sm opacity-80">
              Transforming spaces with quality craftsmanship and timeless design since 2000.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  Services
                </a>
              </li>
              <li>
                <a href="#projects" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  Projects
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/projects?category=residential" 
                  className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                >
                  Residential
                </Link>
              </li>
              <li>
                <Link 
                  to="/projects?category=commercial" 
                  className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                >
                  Commercial
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li className="text-sm opacity-80">981198247</li>
              <li className="text-sm opacity-80">Shivayinteriordelhi@gmail.com</li>
              <li className="text-sm opacity-80">D4/358A First Floor Sangam Vihar, New Delhi</li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 py-6 border-t border-primary-foreground/20">
          <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
            <Facebook size={20} />
          </a>
          <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
            <Instagram size={20} />
          </a>
          <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
            <Twitter size={20} />
          </a>
          <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
            <Linkedin size={20} />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm opacity-70 pt-6 border-t border-primary-foreground/20">
          <p>&copy; 2025 Shivay Interior Decor. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
