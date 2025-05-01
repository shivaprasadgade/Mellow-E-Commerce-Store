import React from 'react';
import Hero from '../../components/Hero/Hero';
import ProductList from '../../components/Products/ProductList';
import { useFetch } from '../../hooks/useFetch';

const HomePage = () => {
  const { data: products, loading, error } = useFetch(
    'https://fakestoreapi.com/products?limit=4'
  );

  return (
    <div>
      <Hero />
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
          Featured Products
        </h2>
        <ProductList products={products} loading={loading} error={error} />
      </section>
    </div>
  );
};

export default HomePage;