// src/pages/Register/Register.jsx
import { useState } from "react";
import AuthLayout from "../../components/Layout/AuthLayout.jsx";
import Button from "../../components/Button/Button.jsx";
import "../Login/Login.css"; // Import CSS untuk password-wrapper dan eye-btn

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <AuthLayout
      title="Daftar"
      subtitle="Selamat datang!"
      backgroundImage="/layout_register.jpg"
    >
      {/* Form Register */}
      <form className="auth-form">
        <div className="form-group">
          <label>Username</label>
          <input type="text" placeholder="Masukkan username" />
        </div>

        <div className="form-group">
          <label>Kata Sandi</label>
          <div className="password-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Masukkan kata sandi"
            />
            <button
              type="button"
              className="eye-btn"
              onClick={() => setShowPassword(!showPassword)}
            >
              <img src="/mata.png" alt="Toggle password" />
            </button>
          </div>
        </div>

        <div className="form-group">
          <label>Konfirmasi Kata Sandi</label>
          <div className="password-wrapper">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Masukkan kata sandi"
            />
            <button
              type="button"
              className="eye-btn"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              <img src="/mata.png" alt="Toggle password" />
            </button>
          </div>
          <p>
            Sudah punya akun? <b>Masuk</b>
          </p>
        </div>

        {/* --- BUTTON GROUP --- */}
        <div className="button-group">
          <Button label="Daftar" variant="primary" type="submit" />
          <p className="atau-text">Atau</p>
          <Button
            label="Daftar dengan Google"
            variant="google"
            icon={
              <img src="/google.png" alt="Google" style={{ width: "20px" }} />
            }
          />
        </div>
      </form>
    </AuthLayout>
  );
};

export default Register;
