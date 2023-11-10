// src/components/Header/Header.jsx

import { useState } from 'react';
import styles from './Header.module.css';
import SidePanel from './../SidePanel/SidePanel'; // Import the new component

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
            <SidePanel isOpen={navVisible} onClose={toggleNav} />
            <div className={styles.storeName}>Your Store Name</div>
            <div className={styles.authButtons}>
                <button>Login</button>
                <button>Register</button>
            </div>
        </header>
    );
};

export default Header;
