import ProductCard from "@/components/ProductCard";
import { products } from "@/constants/dummyData";

export default function ProductsPage() {
  return (
    <main className="max-w-7xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-purple-700 mb-6">Our Jewelry Collection</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}

