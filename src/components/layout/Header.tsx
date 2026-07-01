import { useState } from 'react';
import styles from './Header.module.css';
import bloomLogo from '../../assets/bloom-logo.png';

function Header() {
    const [nav, setNav] = useState(false);
    return (
        <header className={styles.header}>
            <h1 className={styles.companyName}>bloom</h1>
            <img className={styles.logo} src={bloomLogo} alt="Bloom Logo" />
            <button className={styles.navButton} onClick={() => setNav(!nav)}>
                •••
            </button>
                
        {nav && (
            <div  className={styles.navMenu}>
                <button className={styles.closeButton} onClick={() => setNav(false)}>X</button>

                <ul className={styles.navList}>
                    <li className={styles.navItem}>Menu</li>
                    <li className={styles.navItem}>Cart</li>
                    <li className={styles.navItem}>Contact</li>
                </ul>
            </div>
        )}

        </header>
    )

}

export default Header