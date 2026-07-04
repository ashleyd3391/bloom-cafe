import styles from './Footer.module.css'

function Footer() {
    return (
        <footer className={styles.footer}>
            <p className={styles.text}>© bloom | All rights reserved</p>
            <p className={styles.text}>123 Maple Street, Chicago, IL</p>
        </footer>
    )
}

export default Footer