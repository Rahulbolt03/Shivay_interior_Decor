import Navigation from "@/components/Navigation";
// import GallerySection from "@/components/GallerySection";
import Footer from "@/components/Footer";

const Gallery = () => {
  return (
    <div className="min-h-screen bg-muted">
      <Navigation />
      <main className="pt-24">
        {/* <GallerySection /> */}
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Gallery</h1>
            <p className="text-muted-foreground">Gallery section coming soon...</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;

