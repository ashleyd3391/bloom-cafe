import styles from './Hero.module.css';
import flowerBackground from '../../assets/flower-background.png';
import matcha from '../../assets/matcha.png';
function Hero() {
    return (
        <section className={styles.hero}>
            <h1 className={styles.title}>Welcome!</h1>
            <p className={styles.description}>After one sip of our matcha, we promise you’ll bloom into a new you!</p>
            <img src={matcha} alt="A glass of iced matcha latte on a wooden coaster" />
        </section>
    )
}

export default Hero