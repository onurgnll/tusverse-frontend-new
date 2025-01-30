import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { TextField, Button, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { setLoggedStatus } from "../../redux/features/authSlice";
import { requestWithoutAuth } from "../../helpers/requests";
import "./login.css";

const LoginPage = () => {
  const [phone, setPhone] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [isPhoneNumberSubmitted, setIsPhoneNumberSubmitted] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
 // Simulate valid phone number for testing
 const validPhoneNumber = "5468959972";

 // Handle login when phone number is submitted
 const handlePhoneSubmit = async (e) => {
   e.preventDefault();

   // Check if the entered phone number matches the valid one
   if (phone === validPhoneNumber) {
     setIsPhoneNumberSubmitted(true); // Show verification code input
   } else {
     alert("Telefon numarası hatalı veya kayıtlı değil.");
   }
 };

 // Handle verification code submission
 const handleVerificationSubmit = async (e) => {
   e.preventDefault();

   // Simulate verification success if the phone number is valid
   if (phone === validPhoneNumber && verificationCode === "123456") {
     localStorage.setItem("token", "dummy-token"); // Simulate a token
     dispatch(setLoggedStatus(true));
     navigate("/");
   } else {
     alert("Doğrulama kodu hatalı.");
   }
 };

 return (
  <Grid container justifyContent="center" alignItems="center" style={{ minHeight: "100vh" }}>
    <Grid
      item
      xs={12}
      md={6}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        position: "relative",
      }} //bunları class olarak kullanckmışım
    >
      <div
        style={{
          position: "absolute",
          top: "-290px",
          left: "95%",
          transform: "translateX(-50%)",
          zIndex: 10,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          src="src/assets/images/siyah_logo.png"
          alt="Logo"
          style={{ width: "300px", height: "auto" }}
        />
      </div>
      <Typography variant="h4" gutterBottom style={{ fontWeight: "bold" }}>
        GİRİŞ YAP
      </Typography>
      
      {/* Phone Number Form */}
      <form onSubmit={handlePhoneSubmit} style={{ width: "100%", maxWidth: "400px" }}>
        <TextField
          label="Telefon Numarası"
          variant="outlined"
          fullWidth
          margin="normal"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          inputProps={{ maxLength: 10 }}
          disabled={isPhoneNumberSubmitted} // Disable phone input after submission
        />
        
        {!isPhoneNumberSubmitted && (
          <Button
            type="submit"
            variant="contained"
            style={{
              marginTop: "20px",
              backgroundColor: "#00C7D5",
              color: "#fff",
              borderRadius: "12px",
            }}
          >
            Giriş Yap
          </Button>
        )}
      </form>
 
      {/* Verification Code Form */}
      {isPhoneNumberSubmitted && (
        <form onSubmit={handleVerificationSubmit} style={{ width: "100%", maxWidth: "400px", marginTop: "20px" }}>
          <TextField
            label="Doğrulama Kodu"
            variant="outlined"
            fullWidth
            margin="normal"
            value={verificationCode}
            onChange={(e) => setVerificationCode(e.target.value)}
          />
          <Button
            type="submit"
            variant="contained"
            style={{
              marginTop: "20px",
              backgroundColor: "#00C7D5",
              color: "#fff",
              borderRadius: "12px",
            }}
          >
            Doğrula
          </Button>
        </form>
      )}

      <div style={{ marginTop: "10px", display: "flex", justifyContent: "center", marginLeft: "25px" }}>
        <Typography
          variant="body2"
          color="textSecondary"
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/kayit")}
        >
          Hesabınız yok mu ?
        </Typography>
      </div>
    </Grid>

    {/* Add images and content for the right grid */}
    <Grid item xs={12} md={6} style={{ textAlign: "center", padding: "20px", position: "relative" }}>
      {/* Mobile App Promo */}
      <div style={{ position: "absolute", top: "-180px", left: "10%", transform: "translateX(-50%)", zIndex: 10 }}>
        <img src="src/assets/images/telefonlar.jpg" alt="Telefonlar" style={{ width: "300px", height: "auto" }} />
      </div>
      <div style={{ position: "absolute", top: "-120px", left: "55%", transform: "translateX(-50%)", zIndex: 10 }}>
        <Typography variant="h6" gutterBottom>
          UYGULAMAMIZI İNDİRDİNİZ Mİ?
        </Typography>
        <Typography variant="body2" color="#00C7D5" gutterBottom>
          Tusverse mobil uygulaması ile videolara mobil cihazınızdan erişebilir, deneme sınavlarını çözebilirsiniz.
        </Typography>
      </div>
      
      <div
        style={{
          position: "absolute",
          top: "40px",
          left: "70%",
          transform: "translateX(-50%)",
          zIndex: 10,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          src="src/assets/images/sürec.png"
          alt="Telefonlar"
          style={{ width: "300px", height: "auto" }}
        />
      </div>
    </Grid>
  </Grid>
);


};

export default LoginPage;
