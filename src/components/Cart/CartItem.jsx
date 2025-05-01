import React from 'react';
import { useCartActions } from '../../hooks/useCart';

const CartItem = ({ item, mini = false }) => {
  const { updateQuantity, removeFromCart } = useCartActions();

  return (
    <li className="flex items-center space-x-4">
      <div className="flex-shrink-0">
        <img
          src={item.image}
          alt={item.title}
          className="h-16 w-16 object-contain rounded-md"
        />
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="text-sm font-medium text-gray-800 dark:text-white truncate">
          {item.title}
        </h4>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          ${item.price.toFixed(2)}
        </p>
      </div>
      {mini ? (
        <div className="text-sm text-gray-500 dark:text-gray-400">
          x{item.quantity}
        </div>
      ) : (
        <div className="flex items-center space-x-2">
          <button
            onClick={() => updateQuantity(item.id, item.quantity - 1)}
            className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-md text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            -
          </button>
          <span className="w-8 text-center">{item.quantity}</span>
          <button
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
            className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-md text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            +
          </button>
          <button
            onClick={() => removeFromCart(item.id)}
            className="text-red-500 hover:text-red-700"
          >
            Remove
          </button>
        </div>
      )}
    </li>
  );
};

export default CartItem;