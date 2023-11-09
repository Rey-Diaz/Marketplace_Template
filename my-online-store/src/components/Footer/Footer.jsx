// src/components/Footer/Footer.jsx
import styles from './Footer.module.css';

const Footer = () => {
    return (
      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} My Online Store. All rights reserved.</p>
      </footer>
    );
  };
  
  export default Footer;
  