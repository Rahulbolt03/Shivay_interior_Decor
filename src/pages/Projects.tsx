import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link, useSearchParams } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { projectsData } from "@/data/projects";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [searchParams] = useSearchParams();
  const categoryFromUrl = searchParams.get("category") as "all" | "residential" | "commercial" | null;
  const [selectedCategory, setSelectedCategory] = useState<"all" | "residential" | "commercial">(
    categoryFromUrl && (categoryFromUrl === "residential" || categoryFromUrl === "commercial") 
      ? categoryFromUrl 
      : "all"
  );

  useEffect(() => {
    if (categoryFromUrl && (categoryFromUrl === "residential" || categoryFromUrl === "commercial")) {
      setSelectedCategory(categoryFromUrl);
    }
  }, [categoryFromUrl]);

  const projects = projectsData.map(project => ({
    id: project.id,
    title: project.title,
    subtitle: project.subtitle,
    category: project.category,
    image: project.heroImage,
  }));

  const filteredProjects = selectedCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative h-[50vh] flex items-center justify-center text-center">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80"
              alt="Projects hero"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>
          <div className="relative z-10 container mx-auto px-4 text-white space-y-4">
            <div className="flex items-center justify-center gap-4 text-sm uppercase tracking-[0.4em]">
              <Link to="/" className="hover:text-accent transition-colors duration-200">
                Home
              </Link>
              <span className="text-accent">/</span>
              <span>Projects</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-semibold">Our Projects</h1>
            <p className="max-w-3xl mx-auto text-base md:text-lg text-white/80">
              Explore our portfolio of completed interior design projects
            </p>
          </div>
        </section>

        {/* Projects Grid */}
        <section ref={ref} className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
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

            <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6 p-4">
              {filteredProjects.map((project, index) => (
                <Link key={project.id} to={`/projects/${project.id}`}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group relative overflow-hidden rounded-xl cursor-pointer"
                  >
                    <img
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105 aspect-[3/4]"
                      alt={project.title}
                      src={project.image}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-4">
                      <h3 className="text-white text-base font-bold leading-tight">{project.title}</h3>
                      <p className="text-slate-200 text-sm">{project.subtitle}</p>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;

