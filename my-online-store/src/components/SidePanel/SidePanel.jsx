import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './SidePanel.module.css';
import { MdClose, MdHome, MdShoppingCart, MdPerson, MdSettings, MdArrowDropDown, MdArrowDropUp } from 'react-icons/md'; // Import the icons

const SidePanel = ({ isOpen, onClose }) => {
    const [categoriesOpen, setCategoriesOpen] = useState(false);

    return (
        <div className={isOpen ? styles.sidePanelOpen : styles.sidePanelClosed}>
            <div className={styles.navHeader}>
                NAV TITLE <button onClick={onClose} className={styles.closeButton}><MdClose /></button>
            </div>

            <div className={styles.navContent}>
                {/* Home link with MdHome icon */}
                <a href="/" className={styles.navItem}><MdHome size={24} /> Home</a>

                {/* Products link with MdShoppingCart icon */}
                <a href="/products" className={styles.navItem}><MdShoppingCart size={24} /> Products</a>

                {/* Cart link with MdShoppingCart icon */}
                <a href="/cart" className={styles.navItem}><MdShoppingCart size={24} /> Cart</a>

                <div className={styles.navItem} onClick={() => setCategoriesOpen(!categoriesOpen)}>
                    Categories {categoriesOpen ? <MdArrowDropUp /> : <MdArrowDropDown />} {/* Use the arrow icons */}
                </div>
                {categoriesOpen && (
                    <div className={styles.dropdownContent}>
                        <a href="#">cat1</a>
                        <a href="#">cat2</a>
                        <a href="#">cat3</a>
                        <a href="#">cat4</a>
                    </div>
                )}
            </div>

            <div className={styles.accountSection}>
                <div>ACCOUNT</div>

                {/* Profile link with MdPerson icon */}
                <a href="/profile" className={styles.navItem}><MdPerson size={24} /> Profile</a>

                {/* Settings link with MdSettings icon */}
                <a href="/settings" className={styles.navItem}><MdSettings size={24} /> Settings</a>
            </div>
        </div>
    );
};

SidePanel.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default SidePanel;

