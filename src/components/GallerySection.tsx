import { motion, useInView } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

const baseImageUrls = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  "https://images.unsplash.com/photo-1484101403633-562f891dc89a",
  "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e",
  "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
  "https://images.unsplash.com/photo-1505691723518-36a5ac3be353",
  "https://images.unsplash.com/photo-1505692794400-75b6eb09c8f0",
  "https://images.unsplash.com/photo-1521783593447-5702afea3815",
  "https://images.unsplash.com/photo-1493809842364-78817add7ffb",
  "https://images.unsplash.com/photo-1524758631624-e2822e304c36",
  "https://images.unsplash.com/photo-1556911220-bff31c812dba",
  "https://images.unsplash.com/photo-1555041469-a586c61ea9bc",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
  "https://images.unsplash.com/photo-1600607687644-c7171b42498f",
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3",
  "https://images.unsplash.com/photo-1600210492493-0946911123ea",
  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
  "https://images.unsplash.com/photo-1600585154526-990dced4db0d",
  "https://images.unsplash.com/photo-1600607687644-c7171b42498f",
  "https://images.unsplash.com/photo-1600607687644-c7171b42498f",
  "https://images.unsplash.com/photo-1600607687644-c7171b42498f",
  "https://images.unsplash.com/photo-1600607687644-c7171b42498f",
  "https://images.unsplash.com/photo-1600607687644-c7171b42498f",
  "https://images.unsplash.com/photo-1600607687644-c7171b42498f",
  "https://images.unsplash.com/photo-1600607687644-c7171b42498f",
  "https://images.unsplash.com/photo-1600607687644-c7171b42498f",
];

const paletteOptions = [
  "Sand • Terracotta • Charcoal",
  "Ivory • Walnut • Brass",
  "Slate • Dove grey • Maple",
  "Champagne • Ebony • Copper",
  "Putty • Sage • Oak",
  "Fog • Coffee bean • Pearl",
  "Truffle • Mushroom • Honey",
  "Clay • Ash • Bronze",
  "Cream • Espresso • Gold",
  "Blush • Graphite • Cedar",
];

const detailSnippets = [
  "Low-profile seating anchored by tactile rugs creates casual elegance.",
  "Clean-lined storage walls hide entertainment gear for a clutter-free view.",
  "Bespoke joinery frames art and adds subtle depth to neutral palettes.",
  "Layered drapery softens sunlight while brass sconces add glow.",
  "Curved ceiling bands echo bespoke furniture for visual harmony.",
];

const livingRoomScenes = Array.from({ length: 25 }, (_, index) => {
  const baseUrl = baseImageUrls[index % baseImageUrls.length];
  return {
    image: `${baseUrl}?auto=format&fit=crop&w=1200&h=800&q=80`,
    title: `Living Room Story ${index + 1}`,
    details: detailSnippets[index % detailSnippets.length],
    palette: paletteOptions[index % paletteOptions.length],
  };
});

const GallerySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeScene, setActiveScene] = useState(0);
  const activeData = useMemo(() => livingRoomScenes[activeScene], [activeScene]);
  const sceneRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-scene-index"));
          if (entry.isIntersecting) {
            setActiveScene(index);
          }
        });
      },
      { threshold: 0.5, rootMargin: "-10% 0px -40% 0px" },
    );

    sceneRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="gallery" ref={ref} className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-10">
          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-6 lg:sticky lg:top-28 lg:h-min"
          >
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.4em] text-primary/80">Living Room Stories</p>
              <h1 className="text-3xl font-semibold text-primary leading-tight">
                Browse curated lounges crafted for comfort, essence, and elegance.
              </h1>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Tint Tone & Shade's gallery is a guided tour of spaces where furniture, lighting, and décor meet
                harmoniously. Scroll through the hero scenes on the right while this overview remains in view.
              </p>
            </div>

            <div className="grid grid-cols-5 gap-1.5">
              {livingRoomScenes.map((scene, index) => (
                <motion.button
                  key={scene.title}
                  onClick={() =>
                    sceneRefs.current[index]?.scrollIntoView({ behavior: "smooth", block: "center" })
                  }
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative rounded-lg overflow-hidden shadow-sm ring-offset-1"
                  aria-label={`Preview ${scene.title}`}
                >
                  {activeScene === index && (
                    <motion.span
                      layoutId="thumbGlow"
                      className="absolute inset-0 ring-2 ring-primary shadow-[0_0_15px_rgba(230,160,120,0.5)] rounded-lg z-10"
                    />
                  )}
                  <img 
                    src={scene.image} 
                    loading="lazy" 
                    alt={scene.title} 
                    className="h-14 w-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=300&h=300&q=80`;
                    }}
                  />
                </motion.button>
              ))}
            </div>
          </motion.aside>

          <div className="space-y-10">
            {livingRoomScenes.map((scene, index) => (
              <motion.div
                key={scene.title}
                data-scene-index={index}
                ref={(el) => (sceneRefs.current[index] = el)}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.02 }}
                className="rounded-[36px] overflow-hidden shadow-2xl border border-white/60 bg-white relative"
              >
                {activeScene === index && (
                  <motion.div
                    layoutId="activeGlow"
                    className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-primary/10 pointer-events-none"
                  />
                )}
                <div className="absolute top-6 left-6 rounded-full bg-primary text-primary-foreground px-4 py-1 text-xs tracking-[0.2em]">
                  Story #{index + 1}
                </div>
                <img 
                  src={scene.image} 
                  alt={scene.title} 
                  className="w-full object-cover h-[380px]" 
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&h=800&q=80`;
                  }}
                />
                <div className="p-8 space-y-4 relative z-10">
                  <p className="text-xs tracking-[0.4em] uppercase text-muted-foreground">Scene {index + 1}</p>
                  <h3 className="text-3xl font-semibold text-primary">{scene.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{scene.details}</p>
                  <div className="inline-flex items-center gap-2 rounded-full bg-muted px-4 py-2 text-sm text-foreground shadow-inner">
                    Palette: {scene.palette}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;

