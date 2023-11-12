// src/App.jsx

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import ProductList from "./pages/ProductList/ProductList";
import Product from "./pages/Product/Product";
import Cart from "./pages/Cart/Cart";
import Checkout from "./pages/Checkout/Checkout";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
// ... other imports
import styles from "./App.module.css";



function App() {
  return (
    <Router>
      <div className={styles.app}>
        <Header />

        <div className={styles.content}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/products/:productId" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            {/* ... other routes */}
          </Routes>
        </div>

        <div className={styles.footer}>
        <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
