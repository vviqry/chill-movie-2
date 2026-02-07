// src/components/Badges/Top10Badge.jsx
import styles from './Top10Badge.module.css';

const Top10Badge = () => {
  return (
    <div className={styles.badge}>
      <span className={styles.top}>Top</span>
      <span className={styles.number}>10</span>
    </div>
  );
};

export default Top10Badge;
