import './AuthLayout.css';
import ChillLogo from '../ChillLogo/ChillLogo';

const AuthLayout = ({ children, title, subtitle, backgroundImage }) => {
  return (
    <div className="auth-container">
      <div 
        className="auth-background" 
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      
      <div className="auth-card">
        <div className="auth-header">
          <ChillLogo size="medium" />
          <h2 className="auth-title">{title}</h2>
          <p className="auth-subtitle">{subtitle}</p>
        </div>
        
        <div className="auth-content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
