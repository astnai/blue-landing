"use client";

import { useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import ProductGrid from "../components/ProductGrid";
import Testimonials from "../components/Testimonials";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import QuickView from "../components/QuickView";

interface Product {
  id: number;
  name: string;
  price: number;
}

export default function Home() {
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(
    null
  );

  const featuredProducts: Product[] = [
    { id: 1, name: "Blue Essential 1", price: 129.99 },
    { id: 2, name: "Blue Essential 2", price: 129.99 },
    { id: 3, name: "Blue Essential 3", price: 129.99 },
  ];

  const allProducts: Product[] = [
    { id: 4, name: "Blue Product 1", price: 99.99 },
    { id: 5, name: "Blue Product 2", price: 99.99 },
    { id: 6, name: "Blue Product 3", price: 99.99 },
    { id: 7, name: "Blue Product 4", price: 99.99 },
    { id: 8, name: "Blue Product 5", price: 99.99 },
    { id: 9, name: "Blue Product 6", price: 99.99 },
    { id: 10, name: "Blue Product 7", price: 99.99 },
    { id: 11, name: "Blue Product 8", price: 99.99 },
    { id: 12, name: "Blue Product 9", price: 99.99 },
  ];

  const openQuickView = (product: Product) => setQuickViewProduct(product);
  const closeQuickView = () => setQuickViewProduct(null);

  const handleAddToCart = (product: Product) => {
    console.log(`Added ${product.name} to cart`);
  };

  return (
    <div className="min-h-screen bg-blue-600 text-white">
      <Header />
      <main className="container mx-auto max-w-6xl px-4">
        <Hero />
        <Banner />
        <ProductGrid
          title="Featured Products"
          products={featuredProducts}
          onQuickView={openQuickView}
          onAddToCart={handleAddToCart}
        />
        <ProductGrid
          title="Our Collection"
          products={allProducts}
          onQuickView={openQuickView}
          onAddToCart={handleAddToCart}
        />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
      <QuickView product={quickViewProduct} onClose={closeQuickView} />
    </div>
  );
}
