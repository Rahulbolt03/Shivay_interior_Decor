import { useState } from "react";
import { Link } from "react-router-dom";
import { projectsData } from "@/data/projects";

const ServicesSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<"all" | "residential" | "commercial">("all");

  const services = projectsData.map(project => ({
    id: project.id,
    category: project.category,
    title: project.title,
    subtitle: project.subtitle,
    image: project.heroImage,
  }));

  const filteredServices = selectedCategory === "all" 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header with Logo */}
        <div className="flex items-center gap-4 mb-8">
          <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center overflow-hidden flex-shrink-0">
            <img 
              src="/logo.png" 
              alt="Shivay Interior Decor Logo" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Our Services</h2>
            <p className="text-muted-foreground text-lg">Shivay Interior Decor</p>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex gap-3 p-3 flex-wrap items-center justify-center mb-8">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full pl-4 pr-4 transition-all ${
              selectedCategory === "all"
                ? "bg-accent text-white"
                : "bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700"
            }`}
          >
            <p className={`text-sm font-medium leading-normal ${
              selectedCategory === "all" ? "text-white" : "text-slate-900 dark:text-slate-200"
            }`}>
              All
            </p>
          </button>
          <button
            onClick={() => setSelectedCategory("commercial")}
            className={`flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full pl-4 pr-4 transition-all ${
              selectedCategory === "commercial"
                ? "bg-accent text-white"
                : "bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700"
            }`}
          >
            <p className={`text-sm font-medium leading-normal ${
              selectedCategory === "commercial" ? "text-white" : "text-slate-900 dark:text-slate-200"
            }`}>
              Commercial
            </p>
          </button>
          <button
            onClick={() => setSelectedCategory("residential")}
            className={`flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full pl-4 pr-4 transition-all ${
              selectedCategory === "residential"
                ? "bg-accent text-white"
                : "bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700"
            }`}
          >
            <p className={`text-sm font-medium leading-normal ${
              selectedCategory === "residential" ? "text-white" : "text-slate-900 dark:text-slate-200"
            }`}>
              Residential
            </p>
          </button>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6 p-4">
          {filteredServices.map((service, index) => {
            const delay = `${0.4 + (index * 0.2)}s`;
            return (
            <Link key={service.id} to={`/projects/${service.id}`}>
              <div
                data-delay={delay}
                className="group relative overflow-hidden rounded-xl cursor-pointer"
              >
                <img
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105 aspect-[3/4]"
                  alt={service.title}
                  src={service.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-white text-base font-bold leading-tight">{service.title}</h3>
                  <p className="text-slate-200 text-sm">{service.subtitle}</p>
                </div>
              </div>
            </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
