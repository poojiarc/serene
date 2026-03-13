import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const heroImages = [
  "/images/hero-1.jpg",
  "/images/hero-2.jpg",
  "/images/hero-3.jpg",
];

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[85vh] min-h-[500px] overflow-hidden">
      {/* Background images with crossfade */}
      {heroImages.map((img, i) => (
        <div
          key={img}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{
            opacity: i === currentImage ? 1 : 0,
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      ))}

      {/* Dark overlay */}
      <div className="absolute inset-0 hero-overlay" />

      {/* Static content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl animate-slide-up">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4 leading-tight">
              Science-Backed Skincare You Can Trust
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 font-body leading-relaxed">
              Clinically proven dermatological solutions developed by skin specialists. 
              Quality medications manufactured in WHO-GMP approved facilities.
            </p>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 bg-primary hover:bg-accent text-primary-foreground px-8 py-3.5 rounded-lg font-heading font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Explore Products
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>

      {/* Image indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentImage(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              i === currentImage
                ? "bg-primary-foreground w-8"
                : "bg-primary-foreground/50"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
