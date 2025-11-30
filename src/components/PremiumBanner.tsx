const defaultPhrases = [
  "Premium Interiors from ₹5 Lakh/-",
  "Modular Kitchens starting ₹3.5 Lakh/-",
  "Complimentary 3D Visualizations",
  "45-Day Delivery Promise",
  "Award-Winning Designers in India",
];

type PremiumBannerProps = {
  messages?: string[];
  theme?: "dark" | "light";
};

const PremiumBanner = ({ messages = defaultPhrases, theme = "dark" }: PremiumBannerProps) => {
  const bgClass =
    theme === "dark"
      ? "bg-black text-white border-white/10"
      : "bg-muted text-primary border-primary/10";

  return (
    <section className={`${bgClass} py-8 border-y`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-8">
          {messages.map((text, index) => (
            <span key={`${text}-${index}`} className="mx-2 text-2xl md:text-3xl font-semibold tracking-wide uppercase">
              {text}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PremiumBanner;

