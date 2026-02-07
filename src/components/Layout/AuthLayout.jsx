// src/components/AuthLayout.jsx - Layout untuk halaman Login & Register
import './AuthLayout.css';
import ChillLogo from '../ChillLogo/ChillLogo';

const AuthLayout = ({ children, title, subtitle, backgroundImage }) => {
  return (
    <div className="auth-container">
      {/* Background FIXED - terpisah dari container */}
      <div 
        className="auth-background" 
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      
      <div className="auth-card">
        {/* Header: Logo & Title */}
        <div className="auth-header">
          <ChillLogo size="medium" />
          <h2 className="auth-title">{title}</h2>
          <p className="auth-subtitle">{subtitle}</p>
        </div>
        
        {/* Content: Form yang di-passing dari children */}
        <div className="auth-content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
