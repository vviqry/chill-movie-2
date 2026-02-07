import React, { useState } from "react";
import {} from "react-router-dom";
import AuthLayout from "../../components/Layout/AuthLayout";
import Button from "../../components/Button/Button";
import "./Login.css";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <AuthLayout
      title="Masuk"
      subtitle="Selamat datang kembali!"
      backgroundImage="/layout_login.jpg"
    >
      <form className="login-form">
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

        <div className="links-wrapper">
          <span>
            <span style={{ color: "#a5a5a5ff" }}>Belum punya akun? </span>
            Daftar
          </span>
          Lupa kata sandi?
        </div>

        <div className="button-group">
          <Button label="Masuk" variant="primary" type="submit" />
          <p className="atau-text">Atau</p>
          <Button
            label="Masuk dengan Google"
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

export default Login;
