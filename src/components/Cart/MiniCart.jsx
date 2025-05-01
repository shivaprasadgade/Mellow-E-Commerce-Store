import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Common/Button';
import CartItem from './CartItem';
import { useCartActions } from '../../hooks/useCart';

const MiniCart = () => {
  const { cart, cartTotal, isCartOpen, toggleCart } = useCartActions();

  if (!isCartOpen) return null;

  return (
    <div className="absolute right-0 mt-2 w-72 md:w-80 bg-white dark:bg-gray-800 rounded-md shadow-lg z-50 border border-gray-200 dark:border-gray-700">
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
            Your Cart ({cart.length})
          </h3>
          <button
            onClick={toggleCart}
            className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
          >
            ✕
          </button>
        </div>
        
        <div className="max-h-96 overflow-y-auto">
          {cart.length === 0 ? (
            <p className="text-gray-500 dark:text-gray-400 text-center py-4">
              Your cart is empty
            </p>
          ) : (
            <ul className="space-y-4">
              {cart.map((item) => (
                <CartItem key={item.id} item={item} mini />
              ))}
            </ul>
          )}
        </div>
        
        {cart.length > 0 && (
          <div className="mt-4 border-t border-gray-200 dark:border-gray-700 pt-4">
            <div className="flex justify-between mb-4">
              <span className="font-medium text-gray-700 dark:text-gray-300">
                Subtotal:
              </span>
              <span className="font-bold text-gray-900 dark:text-white">
                ${cartTotal.toFixed(2)}
              </span>
            </div>
            <div className="flex flex-col space-y-2">
              <Link to="/cart" onClick={toggleCart}>
                <Button variant="primary" className="w-full">
                  View Cart
                </Button>
              </Link>
              <Button variant="secondary" className="w-full" disabled>
                Checkout
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MiniCart;