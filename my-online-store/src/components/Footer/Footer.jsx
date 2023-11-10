// src/components/Footer/Footer.jsx
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.column}>
                <h3>Contact Us</h3>
                <p>Email: contact@example.com</p>
                <p>Phone: 123-456-7890</p>
                <p>Address: 123 Main St, City, Country</p>
            </div>
            <div className={styles.column}>
                <h3>Quick Links</h3>
                <a href="/about">About Us</a>
                <a href="/products">Products</a>
                <a href="/faq">FAQ</a>
            </div>
            <div className={styles.column}>
                <p>© {new Date().getFullYear()} My Online Store. All rights reserved.</p>
                <a href="/terms">Terms of Service</a>
                <a href="/privacy">Privacy Policy</a>
            </div>
        </footer>
    );
};

export default Footer;
