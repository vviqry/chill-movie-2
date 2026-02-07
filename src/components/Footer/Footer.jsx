// src/components/Footer/Footer.jsx
import { useState } from 'react';
import styles from './Footer.module.css';
import ChillLogo from '../ChillLogo/ChillLogo';

// Data untuk Footer
const genreLinks = [
  "Aksi", "Anak-anak", "Anime", "Britania", "Drama", 
  "Fantasi Ilmiah & Fantasi", "Kejahatan", "KDrama", 
  "Komedi", "Petualangan", "Perang", "Romantis", 
  "Sains & Alam", "Thriller"
];

const bantuanLinks = ["FAQ", "Kontak Kami", "Privasi", "Syarat & Ketentuan"];

const Footer = () => {
  const [isGenreOpen, setIsGenreOpen] = useState(false);
  const [isBantuanOpen, setIsBantuanOpen] = useState(false);

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Left Section - Logo & Copyright */}
        <div className={styles.leftSection}>
          <ChillLogo size="small" />
          <p className={styles.copyright}>@2023 Chill All Rights Reserved.</p>
        </div>

        {/* Right Section - Genre & Bantuan */}
        <div className={styles.rightSection}>
          {/* Genre Section */}
          <div className={styles.linkSection}>
            <button 
              className={styles.sectionHeader}
              onClick={() => setIsGenreOpen(!isGenreOpen)}
            >
              <h4 className={styles.sectionTitle}>Genre</h4>
              <span className={`${styles.chevron} ${isGenreOpen ? styles.chevronOpen : ''}`}>
                ›
              </span>
            </button>
            <ul className={`${styles.linkList} ${styles.genreGrid} ${isGenreOpen ? styles.open : ''}`}>
              {genreLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className={styles.link}>{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Bantuan Section */}
          <div className={styles.linkSection}>
            <button 
              className={styles.sectionHeader}
              onClick={() => setIsBantuanOpen(!isBantuanOpen)}
            >
              <h4 className={styles.sectionTitle}>Bantuan</h4>
              <span className={`${styles.chevron} ${isBantuanOpen ? styles.chevronOpen : ''}`}>
                ›
              </span>
            </button>
            <ul className={`${styles.linkList} ${isBantuanOpen ? styles.open : ''}`}>
              {bantuanLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className={styles.link}>{link}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
