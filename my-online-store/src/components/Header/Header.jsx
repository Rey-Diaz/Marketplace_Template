import { useState } from 'react';
import { Link } from 'react-router-dom'; // Make sure to import Link
import { FaSignInAlt, FaUserPlus, FaShoppingCart } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import styles from './Header.module.css';
import SidePanel from '../../components/SidePanel/SidePanel'; // Adjust the import path as needed

const Header = () => {
    const [navVisible, setNavVisible] = useState(false);
    const cartItems = useSelector((state) => state.cart.items);
    const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

    const toggleNav = () => {
        setNavVisible(!navVisible);
    };

    return (
        <header className={styles.header}>
            <div className={styles.hamburgerMenu} onClick={toggleNav}>
                ☰
            </div>
            <Link to="/" className={styles.storeNameLink}>
                <div className={styles.storeName}>Your Store Name</div>
            </Link>
            <div className={styles.rightSection}>
                {/* Update this part to a Link */}
                <Link to="/login" className={styles.authButton}>
                    <FaSignInAlt /> Login
                </Link>
                <Link to="/register" className={styles.authButton}>
                    <FaUserPlus /> Register
                </Link>
                <Link to="/cart" className={styles.cartIconLink}>
                    <FaShoppingCart />
                    {cartItemCount > 0 && <span className={styles.cartBadge}>{cartItemCount}</span>}
                </Link>
            </div>
            <SidePanel isOpen={navVisible} onClose={toggleNav} />
        </header>
    );
};

export default Header;
