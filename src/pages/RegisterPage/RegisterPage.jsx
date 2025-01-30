import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { TextField, Button, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { setLoggedStatus } from "../../redux/features/authSlice";
import { requestWithoutAuth } from "../../helpers/requests";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./register.css";

const RegisterPage = () => {
  const [step, setStep] = useState(1);
  const [phone, setPhone] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [isPhoneVerified, setIsPhoneVerified] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [tcNumber, setTcNumber] = useState("");
  const [dob, setDob] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlePhoneSubmit = async () => {
    setStep(2);
  };

  const handleVerificationSubmit = async () => {
    if (verificationCode === "123456") {
      setIsPhoneVerified(true);
      setStep(3);
    } else {
      alert("Doğrulama başarısız. Lütfen tekrar deneyin.");
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const body = { firstName, lastName, email, phone, password, tcNumber, dob };
    try {
      const response = await requestWithoutAuth("POST", "/user/register", null, null, body);
      if (response.token) {
        localStorage.setItem("token", response.token);
        dispatch(setLoggedStatus(true));
        navigate("/dashboard");
      } else {
        alert("Kayıt başarısız. Lütfen tekrar deneyin.");
      }
    } catch (error) {
      console.error("Registration error:", error);
      alert("Bir hata oluştu. Lütfen tekrar deneyin.");
    }
  };

  return (
    <Grid container justifyContent="center" alignItems="center" style={{ minHeight: "100vh" }}>
      {/* Left Side: Register Form */}
      <div style={{ position: "fixed", top: "-80px", left: "50%", transform: "translateX(-50%)", zIndex: 10 }}>
        <img src="src/assets/images/siyah_logo.png" alt="Logo" style={{ width: "300px", height: "auto" }} />
      </div>
      <Grid item xs={12} md={6} style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "20px", position: "relative" }}>
        
       
        
        <Typography variant="h4" gutterBottom style={{ fontWeight: "bold" }}>KAYIT OL</Typography>
        
        {step === 1 && (
          <>
            <TextField label="Telefon" 
            variant="outlined" 
            fullWidth margin="normal" 
            value={phone} 
            onChange={(e) => setPhone(e.target.value)} 
            style={{ width: "50%" }}/>
            <Button variant="contained" onClick={handlePhoneSubmit} style={{ marginTop: "20px", backgroundColor: "#00C7D5", color: "#fff" }}>
              Devam Et
            </Button>
          </>
        )}
        {step === 2 && (
          <>
            <TextField label="Doğrulama Kodu"
             variant="outlined" 
             fullWidth 
             margin="normal" 
             value={verificationCode} 
             onChange={(e) => setVerificationCode(e.target.value)} 
             style={{ width: "50%" }}/>
            <Button variant="contained" onClick={handleVerificationSubmit} style={{ marginTop: "20px", backgroundColor: "#00C7D5", color: "#fff" }}>
              Doğrula
            </Button>
          </>
        )}
        {step === 3 && (
          <form onSubmit={handleRegister} style={{ width: "100%", maxWidth: "400px" }}>
            <TextField label="Ad" variant="outlined" fullWidth margin="normal" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            <TextField label="Soyad" variant="outlined" fullWidth margin="normal" value={lastName} onChange={(e) => setLastName(e.target.value)} />
            <TextField label="E-posta" variant="outlined" fullWidth margin="normal" value={email} onChange={(e) => setEmail(e.target.value)} />
            <TextField label="Telefon" variant="outlined" fullWidth margin="normal" value={phone} disabled />
            <TextField label="TC Kimlik No" variant="outlined" fullWidth margin="normal" value={tcNumber} onChange={(e) => setTcNumber(e.target.value)} inputProps={{ maxLength: 11 }} />
            <DatePicker selected={dob} onChange={(date) => setDob(date)} dateFormat="dd/MM/yyyy" placeholderText="Doğum Tarihi" className="react-datepicker__input" wrapperClassName="react-datepicker-wrapper" customInput={<TextField variant="outlined" fullWidth margin="normal" />} />
            <TextField label="Şifre" type="password" variant="outlined" fullWidth margin="normal" value={password} onChange={(e) => setPassword(e.target.value)} />
            <Button type="submit" variant="contained" style={{ marginTop: "20px", backgroundColor: "#00C7D5", color: "#fff" }}>
              Kayıt Ol
            </Button>
          </form>
        )}
      </Grid>

      {/* Right Side: Image & Content */}
      <Grid item xs={12} md={6} style={{ textAlign: "center", padding: "20px", position: "relative" }}>
        <div style={{ position: "absolute", top: "-180px", left: "10%", transform: "translateX(-50%)", zIndex: 10 }}>
          <img src="src/assets/images/telefonlar.jpg" alt="Telefonlar" style={{ width: "300px", height: "auto" }} />
        </div>
        <div style={{ position: "absolute", top: "-120px", left: "55%", transform: "translateX(-50%)", zIndex: 10 }}>
          <Typography variant="h6" gutterBottom>UYGULAMAMIZI İNDİRDİNİZ Mİ?</Typography>
          <Typography variant="body2" color="#00C7D5" gutterBottom>
            Tusverse mobil uygulaması ile videolara mobil cihazınızdan erişebilir, deneme sınavlarını çözebilirsiniz.
          </Typography>
        </div>
        
        <div style={{ position: "absolute", top: "40px", left: "70%", transform: "translateX(-50%)", zIndex: 10 }}>
          <img src="src/assets/images/sürec.png" alt="Telefonlar" style={{ width: "300px", height: "auto" }} />
        </div>
      </Grid>
    </Grid>
  );
};

export default RegisterPage;
