import styles from './Header.module.css';
import bloomLogo from '../../assets/bloom-logo.png';

function Header() {
    return (
        <header className={styles.header}>
            <h1 className={styles.companyName}>bloom</h1>
            <img className={styles.logo} src={bloomLogo} alt="Bloom Logo" />
            <button className={styles.navButton}>•••</button>
        </header>
    )
}

export default Header