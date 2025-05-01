import React, { useState, useEffect } from 'react';
import ProductList from '../../components/Products/ProductList';
import ProductFilters from '../../components/Products/ProductFilters';
import { useFetch } from '../../hooks/useFetch';

const ProductPage = () => {
  const { data: allProducts, loading, error } = useFetch(
    'https://fakestoreapi.com/products'
  );
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (allProducts) {
      setProducts(allProducts);
    }
  }, [allProducts]);

  const handleFilter = ({ category, priceRange }) => {
    let filtered = allProducts || [];
    
    if (category) {
      filtered = filtered.filter(product => product.category === category);
    }
    
    if (priceRange) {
      const [min, max] = priceRange.split('-').map(Number);
      filtered = filtered.filter(product => product.price >= min && product.price <= max);
    }
    
    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    setProducts(filtered);
  };

  const handleSort = (sortOption) => {
    let sorted = [...products];
    
    switch (sortOption) {
      case 'price-asc':
        sorted.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        sorted.sort((a, b) => b.price - a.price);
        break;
      case 'title-asc':
        sorted.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'title-desc':
        sorted.sort((a, b) => b.title.localeCompare(a.title));
        break;
      default:
        sorted = [...(allProducts || [])];
    }
    
    setProducts(sorted);
  };

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    
    if (!query) {
      setProducts(allProducts || []);
      return;
    }
    
    const filtered = (allProducts || []).filter(product =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
    setProducts(filtered);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
        Our Products
      </h1>
      
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={handleSearch}
          className="w-full p-3 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
      </div>
      
      <ProductFilters onFilter={handleFilter} onSort={handleSort} />
      <ProductList 
        products={products} 
        loading={loading} 
        error={error} 
        searchQuery={searchQuery} 
      />
    </div>
  );
};

export default ProductPage;