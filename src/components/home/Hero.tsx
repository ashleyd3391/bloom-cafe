import styles from './Hero.module.css';
import matcha from '../../assets/matcha.png';
function Hero() {
    return (
        <section className={styles.hero}>
            <h1 className={styles.title}>Welcome!</h1>
            <p className={styles.description}>After one sip of our matcha, <br></br> we promise you’ll bloom into a <br></br> new you!</p>
            <img className={styles.image} src={matcha} alt="A glass of iced matcha latte on a wooden coaster" />
        </section>
    )
}

export default Hero