// src/components/Navbar/Navbar.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import ChillLogo from '../ChillLogo/ChillLogo';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      {/* Inner content wrapper - sejajar dengan hero content */}
      <div className={styles.navContent}>
        {/* Left Section - Logo & Menu */}
        <div className={styles.leftSection}>
          <Link to="/">
            <ChillLogo size="small" />
          </Link>
          
          <ul className={styles.menu}>
            <li><a href="#" className={styles.menuLink}>Series</a></li>
            <li><a href="#" className={styles.menuLink}>Film</a></li>
            <li><Link to="/daftar-saya" className={styles.menuLink}>Daftar Saya</Link></li>
          </ul>
        </div>

        {/* Right Section - Avatar & Dropdown */}
        <div className={styles.rightSection}>
          <div 
            className={styles.avatarContainer}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <img src="/avatar.png" alt="Profile" className={styles.avatar} />
            <span className={styles.dropdownArrow}>
              <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                <path d="M1 1.5L6 6.5L11 1.5" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </span>
          </div>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className={styles.dropdown}>
              <a href="#" className={styles.dropdownItem}>
                <img src="/akun.png" alt="Profil" className={styles.dropdownIcon} />
                Profil Saya
              </a>
              <a href="#" className={styles.dropdownItem}>
                <img src="/star.png" alt="Premium" className={styles.dropdownIcon} />
                Ubah Premium
              </a>
              <a href="#" className={styles.dropdownItem}>
                <img src="/keluar.png" alt="Keluar" className={styles.dropdownIcon} />
                Keluar
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

