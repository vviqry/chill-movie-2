import styles from './Button.module.css';

const Button = ({ 
  label, 
  variant = "primary", 
  icon, 
  onClick, 
  type = "button" 
}) => {
  const buttonClass = `${styles.btn} ${styles[variant]}`;

  return (
    <button type={type} className={buttonClass} onClick={onClick}>
      {icon && <span className={styles.icon}>{icon}</span>}
      {label}
    </button>
  );
};

export default Button;
