import emailjs from "@emailjs/browser";

interface QuotationFormData {
  name: string;
  phone: string;
  email: string;
  propertyType: string;
  message: string;
}

// Initialize EmailJS
export const initializeEmailJS = () => {
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const thankYouTemplateId = import.meta.env.VITE_EMAILJS_THANKYOU_TEMPLATE_ID;

  // Initialize if public key exists
  if (publicKey) {
    emailjs.init(publicKey);
  }

  // Mask helper to avoid printing full keys
  const mask = (v?: string) => (v ? `${v.slice(0, 4)}...${v.slice(-3)}` : "(missing)");

  console.info("EmailJS config:", {
    serviceId: serviceId ? "present" : "(missing)",
    templateId: templateId ? "present" : "(missing)",
    thankYouTemplateId: thankYouTemplateId ? "present" : "(missing)",
    publicKey: publicKey ? mask(publicKey) : "(missing)",
  });
};

/**
 * Send quotation inquiry to business owner
 */
export const sendQuotationToOwner = async (formData: QuotationFormData) => {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  // Provide a clearer error listing which variables are missing
  const missing: string[] = [];
  if (!serviceId) missing.push("VITE_EMAILJS_SERVICE_ID");
  if (!templateId) missing.push("VITE_EMAILJS_TEMPLATE_ID");
  if (!publicKey) missing.push("VITE_EMAILJS_PUBLIC_KEY");
  if (missing.length > 0) {
    throw new Error(
      `EmailJS configuration is incomplete. Missing: ${missing.join(", ")}. Please check your environment variables.`
    );
  }

  const templateParams = {
    to_email: "Shivayinteriordelhi@gmail.com", // Business owner email
    from_name: formData.name,
    from_phone: formData.phone,
    from_email: formData.email,
    property_type: formData.propertyType,
    message: formData.message || "No additional message provided",
    inquiry_date: new Date().toLocaleDateString(),
  };

  try {
    const response = await emailjs.send(serviceId, templateId, templateParams, publicKey);
    console.log("Email sent to owner:", response);
    return response;
  } catch (error) {
    console.error("Failed to send email to owner:", error);
    throw error;
  }
};

/**
 * Send thank you email to client
 */
export const sendThankYouToClient = async (formData: QuotationFormData) => {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const thankYouTemplateId = import.meta.env.VITE_EMAILJS_THANKYOU_TEMPLATE_ID;
  const defaultTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  // Provide clearer error for thank you email config
  const missingForThankyou: string[] = [];
  if (!serviceId) missingForThankyou.push("VITE_EMAILJS_SERVICE_ID");
  if (!publicKey) missingForThankyou.push("VITE_EMAILJS_PUBLIC_KEY");
  if (missingForThankyou.length > 0) {
    throw new Error(
      `EmailJS configuration is incomplete. Missing: ${missingForThankyou.join(", ")}. Please check your environment variables.`
    );
  }

  // Use thank you template if available, otherwise use default
  const templateId = thankYouTemplateId || defaultTemplateId;

  if (!templateId) {
    throw new Error("No email template configured for thank you messages.");
  }

  const templateParams = {
    to_email: formData.email,
    to_name: formData.name,
    property_type: formData.propertyType,
    contact_phone: "981198247",
    contact_email: "Shivayinteriordelhi@gmail.com",
    company_name: "Shivay Interior Decor",
  };

  try {
    const response = await emailjs.send(serviceId, templateId, templateParams, publicKey);
    console.log("Thank you email sent to client:", response);
    return response;
  } catch (error) {
    console.error("Failed to send thank you email to client:", error);
    throw error;
  }
};

/**
 * Send both emails - to owner and client
 */
export const sendQuotationEmails = async (formData: QuotationFormData) => {
  try {
    // Send to business owner
    await sendQuotationToOwner(formData);

    // Send thank you to client
    await sendThankYouToClient(formData);

    return {
      success: true,
      message: "Inquiry submitted successfully! You'll receive a confirmation email shortly.",
    };
  } catch (error) {
    console.error("Error sending quotation emails:", error);
    throw error;
  }
};
