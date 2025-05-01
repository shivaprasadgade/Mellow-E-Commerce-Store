import React from 'react';
import ProductCard from '../Common/ProductCard';
import LoadingSpinner from '../Common/LoadingSpinner';

const ProductList = ({ products, loading, error, searchQuery }) => {
  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-10">
        <p className="text-red-500">Error loading products: {error}</p>
      </div>
    );
  }

  if (searchQuery && products.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-gray-500">No products found for "{searchQuery}"</p>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-gray-500">No products available</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;