import React, { useState } from 'react';

const ProductFilters = ({ onFilter, onSort }) => {
  const [category, setCategory] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [sortOption, setSortOption] = useState('');

  const categories = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing"
  ];

  const priceRanges = [
    { label: "Under $25", value: "0-25" },
    { label: "$25 to $50", value: "25-50" },
    { label: "$50 to $100", value: "50-100" },
    { label: "Over $100", value: "100-1000" }
  ];

  const sortOptions = [
    { label: "Price: Low to High", value: "price-asc" },
    { label: "Price: High to Low", value: "price-desc" },
    { label: "Name: A to Z", value: "title-asc" },
    { label: "Name: Z to A", value: "title-desc" }
  ];

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    setCategory(value);
    onFilter({ category: value, priceRange });
  };

  const handlePriceChange = (e) => {
    const value = e.target.value;
    setPriceRange(value);
    onFilter({ category, priceRange: value });
  };

  const handleSortChange = (e) => {
    const value = e.target.value;
    setSortOption(value);
    onSort(value);
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md mb-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Category
          </label>
          <select
            value={category}
            onChange={handleCategoryChange}
            className="w-full p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          >
            <option value="">All Categories</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </option>
            ))}
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Price Range
          </label>
          <select
            value={priceRange}
            onChange={handlePriceChange}
            className="w-full p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          >
            <option value="">All Prices</option>
            {priceRanges.map((range) => (
              <option key={range.value} value={range.value}>
                {range.label}
              </option>
            ))}
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Sort By
          </label>
          <select
            value={sortOption}
            onChange={handleSortChange}
            className="w-full p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          >
            <option value="">Default</option>
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default ProductFilters;