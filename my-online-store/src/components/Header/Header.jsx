// src/components/Header/Header.jsx

import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
        <nav>
          <a href="/">Home</a>
          <a href="/products">Products</a>
          <a href="cart">Cart</a>
          {/* Add other links as needed */}
        </nav>
      </header>
    );
  };
  
  export default Header;
