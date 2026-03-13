import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const Products = () => {
  return (
    <div>
      {/* Hero Banner */}
      <section className="relative py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-secondary-foreground mb-4">
            Our Products
          </h1>
          <p className="text-secondary-foreground/80 font-body text-lg max-w-2xl mx-auto">
            Dermatology-grade pharmaceutical products trusted by healthcare professionals
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding bg-card">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
