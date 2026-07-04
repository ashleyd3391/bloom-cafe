import styles from './Mission.module.css';
import matcha2 from '../../assets/matcha2.png';
import matcha3 from '../../assets/matcha3.png';
import bloomLogo from '../../assets/bloom-logo.png';

function Mission() {
    return (
        <section className={styles.mission}>
            <img src={bloomLogo} alt="Bloom Logo" className={styles.logo} />
            <p className={styles.description}>Here at bloom, matcha is more than a drink. It’s an ritual of calm and time to reflect. </p>
            <img src={matcha2} alt="Matcha powder freshly whisked"  />
            <p className={styles.description2}>Our unique blend improves your <span style={{ color: '#C94042' }}>mood</span> and <span style={{ color: '#C94042' }}>attention</span> to focus on being a better you <br></br> today!</p>
            <img src={matcha3} alt="Iced matcha latte" className={styles.image} />
        </section>
    )
}

export default Mission