import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Common/Button';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Welcome to Mellow
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Discover amazing products at unbeatable prices
        </p>
        <div className="flex justify-center space-x-4">
          <Link to="/products">
            <Button variant="secondary" className="px-8 py-3">
              Shop Now
            </Button>
          </Link>
          <Link to="#">
            <Button variant="outline" className="px-8 py-3 border-white text-white hover:bg-white hover:text-indigo-600">
              Learn More
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;