import React, { useState } from "react";
import { TextField, Button, Grid, Typography } from "@mui/material";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom"; // For navigation
import { Alert } from 'antd'; // Import Ant Design's Alert

const RegisterForm = ({
  phone,
  firstName,
  lastName,
  email,
  setFirstName,
  setLastName,
  setEmail,
  tcNumber,
  setTcNumber,
  dob,
  setDob,
  password,
  setPassword,
  handleRegister,
}) => {
  const navigate = useNavigate(); // Hook to navigate programmatically
  const [error, setError] = useState(null); // State to track validation error

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Simple validation to check if all fields are filled
    if (
      !firstName ||
      !lastName ||
      !email ||
      !tcNumber ||
      !dob ||
      !password
    ) {
      setError("Lütfen tüm alanları doldurun."); // Error message if fields are empty
    } else {
      setError(null); // Clear the error if everything is filled
      handleRegister(); // Proceed with the register logic
      navigate("/"); // Redirect to homepage after successful registration
    }
  };

  const handleLogoClick = () => {
    navigate("/"); // Navigate to homepage when logo is clicked
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: "100vh" }}
    >
      <div
        style={{
          position: "fixed",
          top: "-80px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 10,
          cursor: "pointer", // Make it clickable
        }}
        onClick={handleLogoClick} // Logo click handler
      >
        <img
          src="src/assets/images/siyah_logo.png"
          alt="Logo"
          style={{ width: "300px", height: "auto" }}
        />
      </div>

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
        }}
      >
        <Typography variant="h4" gutterBottom style={{ fontWeight: "bold" }}>
          KAYIT OL
        </Typography>

        {/* Show error alert if any */}
        {error && (
          <Alert
            message="Hata"
            description={error}
            type="error"
            showIcon
            style={{ width: "100%", marginBottom: "20px" }}
          />
        )}

        <form
          onSubmit={handleFormSubmit} // Updated to handle validation
          style={{ width: "100%", maxWidth: "400px" }}
        >
          <TextField
            label="Ad"
            variant="outlined"
            fullWidth
            margin="normal"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <TextField
            label="Soyad"
            variant="outlined"
            fullWidth
            margin="normal"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <TextField
            label="E-posta"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="TC Kimlik No"
            variant="outlined"
            fullWidth
            margin="normal"
            value={tcNumber}
            onChange={(e) => setTcNumber(e.target.value)}
            inputProps={{ maxLength: 11 }}
          />
          <DatePicker
            selected={dob}
            onChange={(date) => setDob(date)}
            dateFormat="dd/MM/yyyy"
            placeholderText="Doğum Tarihi"
            className="react-datepicker__input"
            wrapperClassName="react-datepicker-wrapper"
            customInput={
              <TextField variant="outlined" fullWidth margin="normal" />
            }
          />
          <TextField
            label="Şifre"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            variant="contained"
            style={{
              marginTop: "20px",
              backgroundColor: "#00C7D5",
              color: "#fff",
            }}
          >
            Kayıt Ol
          </Button>
        </form>
      </Grid>

      {/* Right Side: Image & Content */}
      <Grid item xs={12} md={6} className="right-content">
        <div className="image-container">
          <img
            src="src/assets/images/telefonlar.jpg"
            alt="Telefonlar"
            className="side-image phone-image"
          />
          <div className="text-box">
            <Typography variant="h6" gutterBottom>
              UYGULAMAMIZI İNDİRDİNİZ Mİ?
            </Typography>
            <Typography variant="body2" className="text-primary" gutterBottom>
              Tusverse mobil uygulaması ile videolara mobil cihazınızdan
              erişebilir, deneme sınavlarını çözebilirsiniz.
            </Typography>
          </div>
          <img
            src="src/assets/images/sürec.png"
            alt="Süreç"
            className="side-image process-image"
          />
        </div>
      </Grid>
    </Grid>
  );
};

export default RegisterForm;
