import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider, ThemeProvider } from './context';
// import { CartProvider } from './context/CartContext';
// import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage/HomePage';
import ProductPage from './pages/ProductPage/ProductPage';
import CartPage from './pages/CartPage/CartPage';
import './styles/tailwind.css';

function App() {
  return (
    <Router>
      <ThemeProvider>
        <CartProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/products" element={<ProductPage />} />
              <Route path="/cart" element={<CartPage />} />
            </Routes>
          </Layout>
        </CartProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;