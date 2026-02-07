// src/components/ChillLogo/ChillLogo.jsx
// Komponen logo CHILL yang bisa dipakai ulang di Login, Register, dll

import './ChillLogo.css';

const ChillLogo = ({ size = 'medium' }) => {
  return (
    <div className={`chill-logo chill-logo--${size}`}>
      <img src="/chill.svg" alt="Chill Icon" className="chill-logo__icon" />
      <span className="chill-logo__text">CHILL</span>
    </div>
  );
};

export default ChillLogo;
