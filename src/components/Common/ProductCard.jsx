import React from 'react';
import Button from './Button';
import { useCartActions } from '../../hooks/useCart';

const ProductCard = ({ product }) => {
  const { addToCart } = useCartActions();

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform duration-200 hover:scale-105">
      <div className="h-48 overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-contain p-4"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2 line-clamp-2">
          {product.title}
        </h3>
        <div className="flex justify-between items-center mt-4">
          <span className="text-lg font-bold text-indigo-600 dark:text-indigo-400">
            ${product.price.toFixed(2)}
          </span>
          <Button
            onClick={() => addToCart(product)}
            variant="primary"
            size="sm"
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;