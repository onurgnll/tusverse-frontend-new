import React, { useState } from "react";
import { TextField, Button, Grid, Typography } from "@mui/material";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import { Alert, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/actions/authActions";

const RegisterForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [tcNumber, setTcNumber] = useState("");
  const [dob, setDob] = useState(null);
  const [password, setPassword] = useState("");
  const [formError, setFormError] = useState({});

  // sendMessage function to show messages using Ant Design message
  

  // Form validation
  const validateForm = () => {
    const errors = {};
    if (!firstName) errors.firstName = "Ad alanı boş olamaz.";
    if (!lastName) errors.lastName = "Soyad alanı boş olamaz.";
    if (!email) errors.email = "E-posta alanı boş olamaz.";
    if (!/\S+@\S+\.\S+/.test(email)) errors.email = "Geçerli bir e-posta adresi girin.";
    if (!tcNumber || tcNumber.length !== 11) errors.tcNumber = "TC Kimlik No geçerli olmalıdır.";
    if (!dob) errors.dob = "Doğum tarihi boş olamaz.";
    if (!password) errors.password = "Şifre alanı boş olamaz.";
    if (password.length < 6) errors.password = "Şifre en az 6 karakter olmalıdır.";

    setFormError(errors);
    return Object.keys(errors).length === 0;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    
    if (validateForm()) {
      const userData = {
        name: firstName,
        surname: lastName,
        email,
        password,
        tcNo: tcNumber,
        birthYear: dob.getFullYear().toString(),
      };

     
      const sendMessage = async (messagee, success) => {
        if (success == 1) {
            message.success(messagee)
        } else {
            message.error(messagee)
        }
    }

    
      dispatch(register({ body: userData, navigate: navigate, sendMessage: sendMessage }))
        
        
      
    }
  };

  const handleLogoClick = () => {
    navigate("/");
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
          cursor: "pointer",
        }}
        onClick={handleLogoClick}
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

        

        <form
          onSubmit={handleFormSubmit}
          style={{ width: "100%", maxWidth: "400px" }}
        >
          <TextField
            label="Ad"
            variant="outlined"
            fullWidth
            margin="normal"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            error={!!formError.firstName}
            helperText={formError.firstName}
          />
          <TextField
            label="Soyad"
            variant="outlined"
            fullWidth
            margin="normal"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            error={!!formError.lastName}
            helperText={formError.lastName}
          />
          <TextField
            label="E-posta"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={!!formError.email}
            helperText={formError.email}
          />
          <TextField
            label="TC Kimlik No"
            variant="outlined"
            fullWidth
            margin="normal"
            value={tcNumber}
            onChange={(e) => setTcNumber(e.target.value)}
            inputProps={{ maxLength: 11 }}
            error={!!formError.tcNumber}
            helperText={formError.tcNumber}
          />
          <DatePicker
            selected={dob}
            onChange={(date) => setDob(date)}
            dateFormat="dd/MM/yyyy"
            placeholderText="Doğum Tarihi"
            className="react-datepicker__input"
            wrapperClassName="react-datepicker-wrapper"
            customInput={
              <TextField
                variant="outlined"
                fullWidth
                margin="normal"
                error={!!formError.dob}
                helperText={formError.dob}
              />
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
            error={!!formError.password}
            helperText={formError.password}
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
