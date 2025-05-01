import React from 'react';
import { Link } from 'react-router-dom';
import { useCartActions } from '../../hooks/useCart';
import { useThemeActions } from '../../hooks/useTheme';
import { FiShoppingCart, FiSun, FiMoon } from 'react-icons/fi';

const Navbar = () => {
  const { cartCount, toggleCart, isCartOpen } = useCartActions();
  const { darkMode, toggleTheme } = useThemeActions();

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
            Mellow
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400">
              Home
            </Link>
            <Link to="/products" className="text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400">
              Products
            </Link>
            <Link to="#" className="text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400">
              About
            </Link>
            <Link to="#" className="text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400">
              Contact
            </Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>
            
            <div className="relative">
              <button
                onClick={toggleCart}
                className="p-2 rounded-full text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 relative"
              >
                <FiShoppingCart size={20} />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;