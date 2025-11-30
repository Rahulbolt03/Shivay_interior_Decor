const PromotionalBanner = () => {
  const phrases = [
    "KITCHENS STARTING ₹3.5 LAKH/-",
    "COMPLIMENTARY 3D VISUALIZATIONS",
    "45-DAY DELIVERY",
  ];

  return (
    <section className="relative overflow-hidden">
      {/* Light Beige Strip at Top */}
      <div className="h-2 bg-[#F5F5DC]" />
      
      {/* Black Background Banner - static text (animation removed) */}
      <div className="bg-black text-white border-white/10 py-6 border-y">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-10">
            {phrases.map((text, index) => (
              <span key={`${text}-${index}`} className="text-xl md:text-2xl font-semibold tracking-wide uppercase">
                {text}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromotionalBanner;

