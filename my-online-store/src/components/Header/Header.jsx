import { useState } from 'react';
import styles from './Header.module.css';
import { FaSignInAlt, FaUserPlus, FaShoppingCart } from 'react-icons/fa';
import SidePanel from '../../components/SidePanel/SidePanel'; // Adjust the import path as needed

const Header = () => {
    const [navVisible, setNavVisible] = useState(false);

    const toggleNav = () => {
        setNavVisible(!navVisible);
    };

    return (
        <header className={styles.header}>
            <div className={styles.hamburgerMenu} onClick={toggleNav}>
                ☰
            </div>
            <div className={styles.storeName}>Your Store Name</div>
            <div className={styles.rightSection}>
                <button className={styles.authButton}>
                    <FaSignInAlt /> Login
                </button>
                <button className={styles.authButton}>
                    <FaUserPlus /> Register
                </button>
                <div className={styles.cartIcon}>
                    <FaShoppingCart />
                </div>
            </div>
            <SidePanel isOpen={navVisible} onClose={toggleNav} />
        </header>
    );
};

export default Header;
