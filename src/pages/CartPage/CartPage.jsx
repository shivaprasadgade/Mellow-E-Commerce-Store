import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Common/Button';
import CartItem from '../../components/Cart/CartItem';
import { useCartActions } from '../../hooks/useCart';

const CartPage = () => {
  const { cart, cartTotal, clearCart } = useCartActions();

  const shippingCost = cart.length > 0 ? 5.99 : 0;
  const total = cartTotal + shippingCost;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
        Your Shopping Cart
      </h1>
      
      {cart.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 dark:text-gray-400 text-lg mb-4">
            Your cart is empty
          </p>
          <Link to="/products">
            <Button variant="primary">Continue Shopping</Button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                  Cart Items ({cart.length})
                </h2>
                <button
                  onClick={clearCart}
                  className="text-red-500 hover:text-red-700 text-sm"
                >
                  Clear Cart
                </button>
              </div>
              
              <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                {cart.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </ul>
            </div>
          </div>
          
          <div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 sticky top-4">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                Order Summary
              </h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Subtotal:</span>
                  <span className="font-medium">${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Shipping:</span>
                  <span className="font-medium">${shippingCost.toFixed(2)}</span>
                </div>
                <div className="border-t border-gray-200 dark:border-gray-700 pt-3 flex justify-between">
                  <span className="font-semibold">Total:</span>
                  <span className="font-bold text-lg">${total.toFixed(2)}</span>
                </div>
              </div>
              
              <Button variant="primary" className="w-full mb-3" disabled>
                Proceed to Checkout
              </Button>
              <Link to="/products">
                <Button variant="outline" className="w-full">
                  Continue Shopping
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;