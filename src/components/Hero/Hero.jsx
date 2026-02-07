import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div 
        className={styles.heroBackground}
        style={{ backgroundImage: `url('/hero.png')` }}
      />
      
      <div className={styles.heroOverlay} />

      <div className={styles.heroContent}>
        <h1 className={styles.title}>Duty After School</h1>
        
        <p className={styles.description}>
          Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan, 
          Departemen Pertahanan mulai merekrut lebih banyak tentara, termasuk siswa 
          sekolah menengah. Mereka pun segera menjadi pejuang garis depan dalam perang.
        </p>

        <div className={styles.actions}>
          <button className={styles.btnMulai}>Mulai</button>
          
          <button className={styles.btnSelengkapnya}>
            <span className={styles.infoIcon}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="9" stroke="white" strokeWidth="2"/>
                <path d="M10 9V14" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="10" cy="6" r="1" fill="white"/>
              </svg>
            </span>
            Selengkapnya
          </button>

          <span className={styles.ageBadge}>18+</span>

          <button className={styles.muteBtn}>
            <img src="/volume-off.png" alt="Mute" className={styles.muteIcon} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
