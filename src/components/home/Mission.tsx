import styles from './Mission.module.css';
import matcha2 from '../../assets/matcha2.png';
import matcha3 from '../../assets/matcha3.png';

function Mission() {
    return (
        <section className={styles.mission}>
            <p className={styles.description}>Here at bloom, matcha is more than a drink. It’s an ritual of calm and time to reflect. </p>
            <img src={matcha2} alt="Matcha powder freshly whisked" className={styles.image} />
            <p className={styles.description}>Our unique blend improves your mood and attention to focus on being a better you today!</p>
            <img src={matcha3} alt="Iced matcha latte" className={styles.image} />
        </section>
    )
}

export default Mission