import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { initializeEmailJS, sendQuotationEmails } from "@/services/emailService";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  // Initialize EmailJS with public key
  React.useEffect(() => {
    initializeEmailJS();
  }, []);

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
            className="bg-card p-8 rounded-lg shadow-xl text-black"
          >
            <h3 className="text-2xl font-bold text-foreground mb-6">Quotation Form</h3>
            <form
              className="space-y-4"
              onSubmit={async (e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const formData = new FormData(form);

                const quotationData = {
                  name: (formData.get("name") as string) ?? "",
                  phone: (formData.get("phone") as string) ?? "",
                  email: (formData.get("email") as string) ?? "",
                  propertyType: (formData.get("propertyType") as string) ?? "",
                  message: (formData.get("message") as string) ?? "",
                };

                setIsSending(true);
                setStatus("idle");
                setStatusMessage("");

                try {
                  // Send emails to both owner and client
                  const result = await sendQuotationEmails(quotationData);

                  form.reset();
                  setStatus("success");
                  setStatusMessage(result.message);
                } catch (err: any) {
                  console.error("Email submission error:", err);
                  setStatus("error");

                  // Build a helpful error message for debugging. Avoid exposing sensitive details in production.
                  let friendlyMsg = "Something went wrong while sending your inquiry. Please try again or contact us directly.";
                  try {
                    if (err?.status) friendlyMsg += ` (status: ${err.status})`;
                    if (err?.text) friendlyMsg += ` ${err.text}`;
                    else if (err?.message) friendlyMsg += ` ${err.message}`;
                    else if (typeof err === "string") friendlyMsg += ` ${err}`;
                    else friendlyMsg += ` ${JSON.stringify(err)}`;
                  } catch (e) {
                    // ignore formatting errors
                  }

                  setStatusMessage(friendlyMsg);
                } finally {
                  setIsSending(false);
                }
              }}
            >
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Name *
                </label>
                <Input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-white text-black placeholder:text-gray-600"
                  required
                  name="name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Phone *
                </label>
                <Input
                  type="tel"
                  placeholder="Your Phone Number"
                  className="w-full bg-white text-black placeholder:text-gray-600"
                  required
                  name="phone"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email *
                </label>
                <Input
                  type="email"
                  placeholder="Your Email Address"
                  className="w-full bg-white text-black placeholder:text-gray-600"
                  required
                  name="email"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Property Type *
                </label>
                <select
                  className="w-full px-3 py-2 border border-input rounded-md bg-white text-black"
                  required
                  name="propertyType"
                >
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
                  className="w-full min-h-[120px] bg-white text-black placeholder:text-gray-600"
                  name="message"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground text-lg py-6 h-auto"
                disabled={isSending}
              >
                {isSending ? "Sending..." : "Submit Inquiry"}
              </Button>

              {status !== "idle" && (
                <p
                  className={`text-sm ${
                    status === "success" ? "text-green-600" : "text-red-500"
                  }`}
                >
                  {statusMessage}
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
