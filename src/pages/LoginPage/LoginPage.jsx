/*import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { TextField, Button, Typography, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { setLoggedStatus } from "../../redux/features/authSlice";
import "./login.css";
import Smallheader from "../../components/Smallheader";
const LoginPage = () => {
  const [phone, setPhone] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [isPhoneNumberSubmitted, setIsPhoneNumberSubmitted] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const validPhoneNumber = "5468959972";

  const handlePhoneSubmit = async (e) => {
    e.preventDefault();
    if (phone === validPhoneNumber) {
      setIsPhoneNumberSubmitted(true);
    } else {
      alert("Telefon numarası hatalı veya kayıtlı değil.");
    }
  };

  const handleVerificationSubmit = async (e) => {
    e.preventDefault();
    if (phone === validPhoneNumber && verificationCode === "123456") {
      localStorage.setItem("token", "dummy-token");
      dispatch(setLoggedStatus(true));
      navigate("/");
    } else {
      alert("Doğrulama kodu hatalı.");
    }
  };

  return (
    <Grid 
  container 
  justifyContent="center" 
  alignItems="center" 
  style={{ minHeight: "100vh", padding: "20px" }} 
  className="login-container"
>
  <Grid 
    item 
    xs={12} 
    md={6} 
    className="login-form d-flex flex-column align-items-center p-4 position-relative"
  >
    <Smallheader />
    <Typography variant="h4" gutterBottom className="font-weight-bold">
      GİRİŞ YAP
    </Typography>

    <form onSubmit={handlePhoneSubmit} className="w-100 form-container">
    
      <TextField
        label="Telefon Numarası"
        variant="outlined"
        fullWidth
        margin="normal"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        inputProps={{ maxLength: 10 }}
        disabled={isPhoneNumberSubmitted}
        className="mb-3"
      />
      {!isPhoneNumberSubmitted && (
        <Button type="submit" variant="contained" className="login-button">
          Giriş Yap
        </Button>
      )}
    </form>

    {isPhoneNumberSubmitted && (
      <form onSubmit={handleVerificationSubmit} className="w-100 form-container">
        <TextField
          label="Doğrulama Kodu"
          variant="outlined"
          fullWidth
          margin="normal"
          value={verificationCode}
          onChange={(e) => setVerificationCode(e.target.value)}
        />
        <Button type="submit" variant="contained" className="login-button">
          Doğrula
        </Button>
      </form>
    )}

    <div className="mt-3 d-flex justify-content-center">
      <Typography
        variant="body2"
        className="text-secondary"
        style={{ cursor: "pointer" }}
        onClick={() => navigate("/kayit")}
      >
        Hesabınız yok mu ?
      </Typography>
    </div>
  </Grid>

  <Grid 
    item 
    xs={12} 
    md={6} 
    className="d-flex flex-column align-items-center p-4 position-relative"
  >
    <div className="phone-image-container">
      <img src="src/assets/images/telefonlar.jpg" alt="Telefonlar" className="phone-image" />
      <div className="text-block">
        <Typography variant="h6" gutterBottom>
          UYGULAMAMIZI İNDİRDİNİZ Mİ?
        </Typography>
        <Typography variant="body2" className="highlight-text">
          Tusverse mobil uygulaması ile videolara mobil cihazınızdan erişebilir, deneme sınavlarını çözebilirsiniz.
        </Typography>
      </div>
    </div>

    <div className="second-image-container">
      <img src="src/assets/images/sürec.png" alt="Süreç" className="second-image" />
    </div>
  </Grid>
</Grid>

  );
};

export default LoginPage;
*/ 
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { TextField, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { login } from "../../redux/actions/authActions";
import { message } from "antd"; // Ant Design'dan message import edildi
import Smallheader from "../../components/Smallheader";
import "./login.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validateForm = () => {
    if (!email || !password) {
      message.error("E-posta ve şifre alanları boş bırakılamaz.");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      message.error("Geçerli bir e-posta adresi giriniz.");
      return false;
    }

    if (password.length < 6) {
      message.error("Şifre en az 6 karakter olmalıdır.");
      return false;
    }

    return true;
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const loginData = {
        email,
        password,
      };

      const sendMessage = async (messagee, success) => {
        if (success === 1) {
          message.success(messagee); 
        } else {
          message.error(messagee); 
        }
      };

      dispatch(
        login({
          body: loginData,
          navigate: navigate,
          sendMessage: sendMessage,
        })
      );
    }
  };

  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-center"
      
    >
      <div className="row w-100">
        <div className="col-12 col-md-6 offset-md-3 d-flex flex-column align-items-center p-4 position-relative">
          
          <Typography variant="h4" gutterBottom className="font-weight-bold">
            GİRİŞ YAP
          </Typography>
  
          <form onSubmit={handleLoginSubmit} className="w-100">
            <div className="mb-3">
              <TextField
                label="E-posta"
                variant="outlined"
                fullWidth
                margin="normal"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <TextField
                label="Şifre"
                variant="outlined"
                fullWidth
                margin="normal"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button type="submit" variant="contained" fullWidth className="login-button">
              Giriş Yap
            </Button>
          </form>
  
          <div className="mt-3 d-flex justify-content-center">
            <Typography
              variant="body2"
              className="text-secondary"
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/kayit")}
            >
              Hesabınız yok mu ?
            </Typography>
          </div>
          
        </div>
        
      </div>
    </div>
  );
  
};

export default LoginPage;
