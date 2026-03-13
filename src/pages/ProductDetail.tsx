import { useParams, Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2, Beaker, Sparkles, ClipboardList } from "lucide-react";
import { products } from "@/data/products";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="section-padding text-center">
        <h1 className="font-heading text-2xl text-secondary mb-4">Product Not Found</h1>
        <Link to="/products" className="text-primary hover:text-accent font-heading font-semibold">
          ← Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div>
      {/* Back button */}
      <div className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-primary hover:text-accent font-heading font-semibold transition-colors"
          >
            <ArrowLeft size={18} />
            Back to Products
          </Link>
        </div>
      </div>

      {/* Product Header */}
      <section className="section-padding bg-card">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Image */}
            <div className="rounded-2xl overflow-hidden shadow-lg bg-muted">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Details */}
            <div>
              <span className="inline-block bg-primary/10 text-primary text-xs font-heading font-semibold px-3 py-1 rounded-full mb-4">
                {product.category}
              </span>
              <h1 className="font-heading text-3xl md:text-4xl font-bold text-secondary mb-2">
                {product.name}
              </h1>
              <p className="text-primary font-heading font-semibold text-lg mb-6">
                {product.tagline}
              </p>
              <p className="text-foreground/80 font-body leading-relaxed mb-8">
                {product.description}
              </p>

              {/* Usage */}
              <div className="bg-primary/5 p-5 rounded-xl border border-primary/10">
                <div className="flex items-center gap-2 mb-2">
                  <ClipboardList size={18} className="text-primary" />
                  <h3 className="font-heading font-semibold text-secondary">Recommended Usage</h3>
                </div>
                <p className="text-foreground/80 font-body text-sm">{product.usage}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ingredients & Benefits */}
      <section className="section-padding section-alt">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Ingredients */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Beaker size={22} className="text-primary" />
                <h2 className="font-heading text-2xl font-bold text-secondary">Ingredients</h2>
              </div>
              <div className="space-y-3">
                {product.ingredients.map((ing) => (
                  <div
                    key={ing.name}
                    className="bg-card p-4 rounded-lg shadow-sm border border-border"
                  >
                    <h4 className="font-heading font-semibold text-secondary text-sm">{ing.name}</h4>
                    <p className="text-muted-foreground font-body text-sm mt-1">{ing.benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Sparkles size={22} className="text-primary" />
                <h2 className="font-heading text-2xl font-bold text-secondary">Benefits & Indications</h2>
              </div>
              <div className="space-y-3">
                {product.benefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-center gap-3 bg-card p-4 rounded-lg shadow-sm border border-border"
                  >
                    <CheckCircle2 size={18} className="text-primary shrink-0" />
                    <span className="text-foreground/80 font-body text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Image */}
      <section className="section-padding bg-card">
        <div className="container mx-auto max-w-3xl">
          <div className="rounded-2xl overflow-hidden shadow-lg">
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
