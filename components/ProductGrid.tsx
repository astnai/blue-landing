import Image from "next/image";
import { SearchIcon, ShoppingCartIcon } from "lucide-react";

interface Product {
  id: number;
  name: string;
  price: number;
}

interface ProductGridProps {
  title: string;
  products: Product[];
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export default function ProductGrid({
  title,
  products,
  onQuickView,
  onAddToCart,
}: ProductGridProps) {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8 text-center">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg overflow-hidden shadow-md transition-all hover:shadow-xl group"
          >
            <div className="relative aspect-square">
              <Image
                src={`/test.png?height=400&width=400&text=${product.name}`}
                alt={`${product.name} - A stylish blue garment`}
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity flex items-center justify-center opacity-0 group-hover:opacity-100">
                <button
                  onClick={() => onQuickView(product)}
                  className="bg-white text-blue-600 rounded-full p-2 m-2 hover:bg-blue-100 transition-colors"
                  aria-label={`Quick view ${product.name}`}
                >
                  <SearchIcon className="h-5 w-5" />
                </button>
                <button
                  onClick={() => onAddToCart(product)}
                  className="bg-blue-600 text-white rounded-full p-2 m-2 hover:bg-blue-700 transition-colors"
                  aria-label={`Add ${product.name} to cart`}
                >
                  <ShoppingCartIcon className="h-5 w-5" />
                </button>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold mb-1 text-gray-800">
                {product.name}
              </h3>
              <p className="text-black font-bold">
                ${product.price.toFixed(2)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
