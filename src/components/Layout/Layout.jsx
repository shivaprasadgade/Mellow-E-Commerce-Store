import React from 'react';
import Navbar from '../Header/Navbar';
import MiniCart from '../Cart/MiniCart';
import Footer from '../Footer/Footer';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <MiniCart />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;