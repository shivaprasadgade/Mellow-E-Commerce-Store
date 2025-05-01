import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Mellow</h3>
            <p className="text-gray-400">
              Your one-stop shop for all your needs. Quality products at affordable prices.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-white">Products</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li><Link to="#" className="text-gray-400 hover:text-white">FAQ</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-white">Shipping Policy</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-white">Returns & Refunds</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <address className="text-gray-400 not-italic">
              <p>123 Shopping Street</p>
              <p>E-Commerce City, EC 12345</p>
              <p>Email: info@mellow.com</p>
              <p>Phone: (123) 456-7890</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Mellow. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;