import React from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Home = () => {
  return (
    <main className="container page-content">
      <div className="hero-section">
        <h1 className="page-title">Featured Products</h1>
        <p className="page-subtitle">Discover our premium collection designed for modern living.</p>
      </div>
      <div className="product-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
};

export default Home;
