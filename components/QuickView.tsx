interface Product {
  id: number;
  name: string;
  price: number;
}

interface QuickViewProps {
  product: Product | null;
  onClose: () => void;
}

export default function QuickView({ product, onClose }: QuickViewProps) {
  if (!product) return null;

  return (
    <div className="fixed inset-0 bg-blue-900/80 flex items-center justify-center p-4 z-50">
      <div className="bg-white text-blue-600 p-6 rounded-lg max-w-sm w-full">
        <h3 className="text-xl font-bold mb-2">{product.name}</h3>
        <p className="mb-4">${product.price.toFixed(2)}</p>
        <p className="mb-4">
          This is a quick view of the product. Add more details here.
        </p>
        <div className="flex justify-between">
          <button className="bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-500 transition-colors">
            Add to Cart
          </button>
          <button
            onClick={onClose}
            className="bg-gray-200 text-blue-600 font-bold py-2 px-4 rounded hover:bg-gray-300 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
