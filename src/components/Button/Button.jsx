// src/components/Button/Button.jsx
import styles from './Button.module.css';

/**
 * Komponen Button yang reusable
 * @param {string} label - Teks tombol
 * @param {string} variant - "primary" (default) atau "google"
 * @param {ReactNode} icon - Icon (opsional, untuk Google)
 * @param {function} onClick - Handler klik
 * @param {string} type - Type button: "button" atau "submit"
 */
const Button = ({ 
  label, 
  variant = "primary", 
  icon, 
  onClick, 
  type = "button" 
}) => {
  // Gabungkan class base + variant
  const buttonClass = `${styles.btn} ${styles[variant]}`;

  return (
    <button type={type} className={buttonClass} onClick={onClick}>
      {icon && <span className={styles.icon}>{icon}</span>}
      {label}
    </button>
  );
};

export default Button;
