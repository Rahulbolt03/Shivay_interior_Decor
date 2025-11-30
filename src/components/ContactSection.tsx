import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const phoneNumber = "981198247";
  const email = "Shivayinteriordelhi@gmail.com";
  const address = "D4/358A First Floor Sangam Vihar, New Delhi";
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <section id="contact" ref={ref} className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Get in touch</h2>
            <p className="text-xl mb-8 opacity-90">
              Have something in mind or need more details? Get in touch with us — we're here to help you transform your space
            </p>

            <div className="space-y-6 mb-8">
              <a
                href={`tel:${phoneNumber}`}
                className="flex items-start gap-4 p-4 rounded-lg hover:bg-primary-foreground/10 transition-colors cursor-pointer group"
              >
                <Phone className="w-6 h-6 mt-1 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="font-semibold text-lg group-hover:text-accent transition-colors">
                    {phoneNumber}
                  </p>
                  <p className="text-sm opacity-70 mt-1">Tap to call</p>
                </div>
              </a>

              <a
                href={`mailto:${email}`}
                className="flex items-start gap-4 p-4 rounded-lg hover:bg-primary-foreground/10 transition-colors cursor-pointer group"
              >
                <Mail className="w-6 h-6 mt-1 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="font-semibold text-lg group-hover:text-accent transition-colors break-all">
                    {email}
                  </p>
                  <p className="text-sm opacity-70 mt-1">Tap to email</p>
                </div>
              </a>

              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-4 rounded-lg hover:bg-primary-foreground/10 transition-colors cursor-pointer group"
              >
                <MapPin className="w-6 h-6 mt-1 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="font-semibold text-lg group-hover:text-accent transition-colors">
                    {address}
                  </p>
                  <p className="text-sm opacity-70 mt-1">Tap to open in Maps</p>
                </div>
              </a>
              </div>

            {/* Map */}
            <div className="rounded-lg overflow-hidden shadow-xl border-2 border-primary-foreground/20">
              <iframe
                src={`https://maps.google.com/maps?q=${encodeURIComponent(address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-3 bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors text-sm font-semibold"
              >
                Open in Google Maps →
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-card p-8 rounded-lg shadow-xl"
          >
            <h3 className="text-2xl font-bold text-foreground mb-6">Quotation Form</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Name *
                </label>
                <Input
                  type="text"
                  placeholder="Your Name"
                  className="w-full"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Phone *
                </label>
                <Input
                  type="tel"
                  placeholder="Your Phone Number"
                  className="w-full"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email *
                </label>
                <Input
                  type="email"
                  placeholder="Your Email Address"
                  className="w-full"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Property Type *
                </label>
                <select className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground" required>
                  <option value="">Select Your Property Type</option>
                  <option value="residential">Residential</option>
                  <option value="commercial">Commercial</option>
                  <option value="others">Others</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  placeholder="Tell us about your requirements..."
                  className="w-full min-h-[120px]"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground text-lg py-6 h-auto"
              >
                Submit Inquiry
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
