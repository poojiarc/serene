import { Link } from "react-router-dom";
import { ArrowRight, Shield, Microscope, Award, FlaskConical } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const Index = () => {
  const featuredProducts = products.slice(0, 6);

  return (
    <div>
      <HeroSection />

      {/* About Section */}
      <section className="section-padding bg-card">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary font-heading font-semibold text-sm uppercase tracking-widest mb-3">About Us</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mb-6">
                Empowering Life & Well-Being
              </h2>
              <div className="space-y-4 text-foreground/80 font-body leading-relaxed">
                <p>
                  Serene Derma is a pharmaceutical company focused on the marketing of Dermatological and Cosmetic pharmaceutical products for fulfilling all patient's needs. Built with dreams of empowering life and well-being, we are a young, dynamic, and energetic company with a multi-skilled team whose motto is "the height of success depends on the depth of desire".
                </p>
                <p>
                  Our business focuses on producing a wide range of quality, affordable medicines trusted by healthcare professionals and patients. All our products are manufactured in WHO-GMP approved facilities equipped with state-of-the-art equipment.
                </p>
              </div>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 mt-6 text-primary font-heading font-semibold hover:text-accent transition-colors"
              >
                Learn More <ArrowRight size={16} />
              </Link>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/images/products/about pic.avif"
                alt="Dermatology expertise"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="section-padding section-alt">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-primary font-heading font-semibold text-sm uppercase tracking-widest mb-3">Our Expertise</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mb-6">
              Dermatology-Grade Solutions
            </h2>
            <p className="text-foreground/80 font-body leading-relaxed">
              At our dermatology pharmaceutical company, science and skin health come together under the guidance of experienced dermatologists. Every product is the result of extensive research, rigorous clinical evaluation, and evidence-based formulation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Microscope, title: "Clinical Research", desc: "Extensive dermatological research and evidence-based formulation" },
              { icon: Shield, title: "Safety First", desc: "Multi-stage testing procedures guarantee authenticity and reliability" },
              { icon: FlaskConical, title: "WHO-GMP Approved", desc: "Manufactured in approved facilities with state-of-the-art equipment" },
              { icon: Award, title: "Expert-Backed", desc: "Founded and led by qualified skin specialists and scientists" },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-card p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 text-center"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <item.icon size={24} className="text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-secondary mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground font-body">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="section-padding bg-card">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <p className="text-primary font-heading font-semibold text-sm uppercase tracking-widest mb-3">Our Products</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary">
              Trusted by Dermatologists
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 bg-primary hover:bg-accent text-primary-foreground px-8 py-3 rounded-lg font-heading font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
            >
              View All Products <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
