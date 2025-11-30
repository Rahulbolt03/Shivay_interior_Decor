import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { getProjectById } from "@/data/projects";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = id ? getProjectById(id) : null;
  const galleryRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(galleryRef, { once: true, margin: "-100px" });
  const [activeScene, setActiveScene] = useState(0);
  const sceneRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (project?.category !== "residential" || !project.galleryImages.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-scene-index"));
          if (entry.isIntersecting) {
            setActiveScene(index);
          }
        });
      },
      { threshold: 0.5, rootMargin: "-10% 0px -40% 0px" }
    );

    sceneRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [project]);

  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
            <Link to="/projects" className="text-accent hover:underline">
              Back to Projects
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="layout-content-container flex flex-col gap-8">
            {/* HeaderImage */}
            <div
              className="w-full bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden rounded-xl min-h-[480px]"
              data-alt={project.title}
              style={{ backgroundImage: `url("${project.heroImage}")` }}
            ></div>

            <div className="max-w-5xl mx-auto w-full space-y-12">
              {/* Breadcrumbs */}
              <div className="flex flex-wrap gap-2 py-4">
                <Link
                  to="/"
                  className="text-primary/80 dark:text-primary/70 text-base font-medium leading-normal hover:underline"
                >
                  Home
                </Link>
                <span className="text-slate-500 dark:text-slate-400 text-base font-medium leading-normal">/</span>
                <Link
                  to="/projects"
                  className="text-primary/80 dark:text-primary/70 text-base font-medium leading-normal hover:underline"
                >
                  Projects
                </Link>
                <span className="text-slate-500 dark:text-slate-400 text-base font-medium leading-normal">/</span>
                <span className="text-[#0e171b] dark:text-slate-200 text-base font-medium leading-normal">
                  {project.title}
                </span>
              </div>

              {/* PageHeading */}
              <div className="flex flex-wrap justify-between gap-3">
                <div className="flex min-w-72 flex-col gap-3">
                  <p className="text-[#0e171b] dark:text-slate-50 text-4xl lg:text-5xl font-black leading-tight tracking-[-0.033em]">
                    {project.title}
                  </p>
                  <p className="text-slate-600 dark:text-slate-400 text-lg font-normal leading-normal">
                    {project.subtitle}
                  </p>
                </div>
              </div>

              {/* DescriptionList */}
              <div className="p-4 grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-6 border-y border-solid border-slate-200 dark:border-slate-700">
                <div className="flex flex-col gap-1 py-4">
                  <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal">Client</p>
                  <p className="text-[#0e171b] dark:text-slate-200 text-sm font-normal leading-normal">
                    {project.client}
                  </p>
                </div>
                <div className="flex flex-col gap-1 py-4">
                  <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal">Location</p>
                  <p className="text-[#0e171b] dark:text-slate-200 text-sm font-normal leading-normal">
                    {project.location}
                  </p>
                </div>
                <div className="flex flex-col gap-1 py-4">
                  <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal">Category</p>
                  <p className="text-[#0e171b] dark:text-slate-200 text-sm font-normal leading-normal capitalize">
                    {project.category}
                  </p>
                </div>
                <div className="flex flex-col gap-1 py-4">
                  <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal">Size</p>
                  <p className="text-[#0e171b] dark:text-slate-200 text-sm font-normal leading-normal">
                    {project.size}
                  </p>
                </div>
                <div className="flex flex-col gap-1 py-4">
                  <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal">Services</p>
                  <p className="text-[#0e171b] dark:text-slate-200 text-sm font-normal leading-normal">
                    {project.services}
                  </p>
                </div>
                <div className="flex flex-col gap-1 py-4">
                  <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal">Duration</p>
                  <p className="text-[#0e171b] dark:text-slate-200 text-sm font-normal leading-normal">
                    {project.duration}
                  </p>
                </div>
                <div className="flex flex-col gap-1 py-4">
                  <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal">Theme</p>
                  <p className="text-[#0e171b] dark:text-slate-200 text-sm font-normal leading-normal">
                    {project.theme}
                  </p>
                </div>
                <div className="flex flex-col gap-1 py-4">
                  <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal">Type</p>
                  <p className="text-[#0e171b] dark:text-slate-200 text-sm font-normal leading-normal">
                    {project.type}
                  </p>
                </div>
              </div>

              {/* Project Narrative Section */}
              <div className="grid md:grid-cols-3 gap-8 text-slate-700 dark:text-slate-300 leading-relaxed">
                <div className="md:col-span-1">
                  <h3 className="text-xl font-bold text-[#0e171b] dark:text-slate-50 mb-3">Project Description</h3>
                </div>
                <div className="md:col-span-2">
                  <p>{project.description}</p>
                </div>

                <div className="md:col-span-1">
                  <h3 className="text-xl font-bold text-[#0e171b] dark:text-slate-50 mb-3">Vision & Concept</h3>
                </div>
                <div className="md:col-span-2">
                  <p>{project.vision}</p>
                </div>

                <div className="md:col-span-1">
                  <h3 className="text-xl font-bold text-[#0e171b] dark:text-slate-50 mb-3">Key Features</h3>
                </div>
                <div className="md:col-span-2 space-y-2">
                  {project.keyFeatures.map((feature, index) => (
                    <p key={index}>• {feature}</p>
                  ))}
                </div>
              </div>

              {/* Image Gallery Section */}
              <div ref={galleryRef} className="space-y-6 pt-10">
                <h3 className="text-3xl font-bold text-center text-[#0e171b] dark:text-slate-50 mb-10">Visual Showcase</h3>
                {project.category === "residential" ? (
                  // Gallery style for residential projects
                  <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-10">
                    <motion.aside
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6 }}
                      className="space-y-6 lg:sticky lg:top-28 lg:h-min"
                    >
                      <div className="space-y-3">
                        <p className="text-sm uppercase tracking-[0.4em] text-primary/80">Project Gallery</p>
                        <h4 className="text-2xl font-semibold text-primary leading-tight">
                          {project.title}
                        </h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          Explore the visual journey of this residential project. Scroll through the images on the right while this overview remains in view.
                        </p>
                      </div>

                      <div className="grid grid-cols-3 gap-1.5">
                        {project.galleryImages.map((image, index) => (
                          <motion.button
                            key={index}
                            onClick={() =>
                              sceneRefs.current[index]?.scrollIntoView({ behavior: "smooth", block: "center" })
                            }
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="relative rounded-lg overflow-hidden shadow-sm ring-offset-1"
                            aria-label={`Preview Image ${index + 1}`}
                          >
                            {activeScene === index && (
                              <motion.span
                                layoutId="thumbGlow"
                                className="absolute inset-0 ring-2 ring-accent shadow-[0_0_15px_rgba(230,160,120,0.5)] rounded-lg z-10"
                              />
                            )}
                            <img 
                              src={image} 
                              loading="lazy" 
                              alt={`${project.title} - Thumbnail ${index + 1}`}
                              className="h-20 w-full object-cover"
                            />
                          </motion.button>
                        ))}
                      </div>
                    </motion.aside>

                    <div className="space-y-10">
                      {project.galleryImages.map((image, index) => (
                        <motion.div
                          key={index}
                          data-scene-index={index}
                          ref={(el) => (sceneRefs.current[index] = el)}
                          initial={{ opacity: 0, y: 40 }}
                          animate={isInView ? { opacity: 1, y: 0 } : {}}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="rounded-[36px] overflow-hidden shadow-2xl border border-white/60 bg-white relative"
                        >
                          {activeScene === index && (
                            <motion.div
                              layoutId="activeGlow"
                              className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-accent/10 pointer-events-none"
                            />
                          )}
                          <div className="absolute top-6 left-6 rounded-full bg-accent text-white px-4 py-1 text-xs tracking-[0.2em] z-10">
                            Image #{index + 1}
                          </div>
                          <img 
                            src={image} 
                            alt={`${project.title} - Image ${index + 1}`}
                            className="w-full object-cover h-[500px]" 
                            loading="lazy"
                          />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ) : (
                  // Standard grid for commercial projects
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {project.galleryImages.map((image, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="w-full bg-center bg-no-repeat bg-cover rounded-xl aspect-square overflow-hidden cursor-pointer group"
                        data-alt={`${project.title} - Image ${index + 1}`}
                      >
                        <motion.div
                          className="w-full h-full bg-center bg-no-repeat bg-cover transition-transform duration-500 group-hover:scale-110"
                          style={{ backgroundImage: `url("${image}")` }}
                        />
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetail;
