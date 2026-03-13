import { Link } from "react-router-dom";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link
      to={`/products/${product.id}`}
      className="group block rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 bg-card"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 product-card-overlay" />
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="font-heading text-lg font-bold text-primary-foreground leading-snug">
            {product.name}
          </h3>
          <p className="text-sm text-primary-foreground/80 mt-1">{product.tagline}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
