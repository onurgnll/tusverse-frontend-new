import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { TextField, Button, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { setLoggedStatus } from "../../redux/features/authSlice";
import { requestWithoutAuth } from "../../helpers/requests";
import RegisterForm from "./RegisterForm";
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
      navigate("/kayitform"); // Navigate to the /kayitform page
    } else {
      alert("Doğrulama başarısız. Lütfen tekrar deneyin.");
    }
  };


  return (
    <Grid container justifyContent="center" alignItems="center" style={{ minHeight: "100vh" }}>
      {/* Left Side: Register Form */}
      
      <Grid item xs={12} md={6} style={{ display: "flex", flexDirection: "column", alignItems: "center"}}>
        <Typography variant="h4" gutterBottom style={{ fontWeight: "bold" }}>KAYIT OL</Typography>

        {step === 1 && (
          <>
            <TextField label="Telefon" variant="outlined" fullWidth margin="normal" value={phone} onChange={(e) => setPhone(e.target.value)} style={{ width: "50%" }} />
            <Button variant="contained" onClick={handlePhoneSubmit} style={{ marginTop: "10px", backgroundColor: "#00C7D5", color: "#fff", maxWidth: "150px" }}>
              Devam Et
            </Button>
          </>
        )}
        {step === 2 && (
          <>
            <TextField label="Doğrulama Kodu" variant="outlined" fullWidth margin="normal" value={verificationCode} onChange={(e) => setVerificationCode(e.target.value)} style={{ width: "50%" }} />
            <Button variant="contained" onClick={handleVerificationSubmit} style={{ marginTop: "20px", backgroundColor: "#00C7D5", color: "#fff", maxWidth: "150px" }}>
              Doğrula
            </Button>
          </>
        )}
       
      </Grid>

      {/* Right Side: Image & Content */}
      <Grid item xs={12} md={6} className="right-content">
        <div className="image-container">
          <img src="src/assets/images/telefonlar.jpg" alt="Telefonlar" className="side-image phone-image" />
          <div className="text-box">
            <Typography variant="h6" gutterBottom>UYGULAMAMIZI İNDİRDİNİZ Mİ?</Typography>
            <Typography variant="body2" className="text-primary" gutterBottom>
              Tusverse mobil uygulaması ile videolara mobil cihazınızdan erişebilir, deneme sınavlarını çözebilirsiniz.
            </Typography>
          </div>
          <img src="src/assets/images/sürec.png" alt="Süreç" className="side-image process-image" />
        </div>
      </Grid>
    </Grid>
  );
};

export default RegisterPage;
