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
import { login } from "../../redux/actions/authActions";

import { setLoggedStatus } from "../../redux/features/authSlice";
import { useDispatch } from "react-redux";
import { TextField, Button, Typography, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./login.css";
import Smallheader from "../../components/Smallheader";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await dispatch(login({ email, password })).unwrap(); // Redux Thunk işlemi
      if (response.success) {
        localStorage.setItem("token", response.data.token);
        dispatch(setLoggedStatus(true));
        navigate("/");
      } else {
        alert("Giriş başarısız. Lütfen bilgilerinizi kontrol edin.");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Bir hata oluştu. Lütfen tekrar deneyin.");
    }
  };
  

  return (
    <Grid container justifyContent="center" alignItems="center" style={{ minHeight: "100vh", padding: "20px" }} className="login-container">
      <Grid item xs={12} md={6} className="login-form d-flex flex-column align-items-center p-4 position-relative">
        <Smallheader />
        <Typography variant="h4" gutterBottom className="font-weight-bold">
          GİRİŞ YAP
        </Typography>

        <form onSubmit={handleLoginSubmit} className="w-100 form-container">
          <TextField
            label="E-posta"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mb-3"
          />
          <TextField
            label="Şifre"
            variant="outlined"
            fullWidth
            margin="normal"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mb-3"
          />
          <Button type="submit" variant="contained" className="login-button">
            Giriş Yap
          </Button>
        </form>

        <div className="mt-3 d-flex justify-content-center">
          <Typography variant="body2" className="text-secondary" style={{ cursor: "pointer" }} onClick={() => navigate("/kayit")}>
            Hesabınız yok mu ?
          </Typography>
        </div>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
