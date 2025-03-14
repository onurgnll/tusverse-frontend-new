/*import React, { useState } from "react";
import { Box } from "@mui/material";
import { Button, Container, Dropdown, Row, Col } from "react-bootstrap";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import QuizIcon from "@mui/icons-material/Quiz";
import GroupIcon from "@mui/icons-material/Group";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";
import "./header.css";

const routes = [
  {
    text: "Ders Videoları",
    colorClass: "green",
    icon: <VideoLibraryIcon />,
    path: "/videosatis",
  },
  {
    text: "Kitaplar",
    colorClass: "gold",
    icon: <MenuBookIcon />,
    path: "/kitapsatis",
  },
  {
    text: "Deneme Sınavları",
    colorClass: "brown",
    icon: <QuizIcon />,
    path: "/denemeler",
  },
  {
    text: "Eğitmen Kadromuz",
    colorClass: "forestgreen",
    icon: <GroupIcon />,
    path: "/egitmenler",
  },
];

const Header = () => {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <>
      <div className="header-container">
      <img
  className="logo"
  src="src/assets/siyah_logo.png"
  alt="Logo"
  onClick={() => handleNavigation("/")}
  style={{ cursor: "pointer" }} 
/>


        <div className="button-container d-none d-md-flex">
          <Box className="button-row">
            <Button className="custom-button green" onClick={() => handleNavigation("/giris")}> <GroupIcon /> Giriş Yap </Button>
            <Button className="custom-button gold" onClick={() => handleNavigation("/")}> <ShoppingCartIcon /> Sepetim </Button>
          </Box>
          <Box className="button-row">
            {routes.map((item, index) => (
              <Button
                key={index}
                className={`custom-button ${item.colorClass}`}
                onClick={() => handleNavigation(item.path)}
              >
                {item.icon} <span className="button-label">{item.text}</span>
              </Button>
            ))}
          </Box>
        </div>
        
       
  <div className="d-md-none d-lg-none mobile-menu">
    <Dropdown show={showDropdown} onToggle={() => setShowDropdown(!showDropdown)}>
      <Dropdown.Toggle className="custom-button green">Menü</Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item onClick={() => handleNavigation("/giris")}>Giriş Yap</Dropdown.Item>
        <Dropdown.Item onClick={() => handleNavigation("/")}>Sepetim</Dropdown.Item>
        <Dropdown.Divider />
        {routes.map((item, index) => (
          <Dropdown.Item key={index} onClick={() => handleNavigation(item.path)}>
            {item.icon} {item.text}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  </div>

      </div>
    </>
  );
};

export default Header; */


import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";
import { Button, Dropdown } from "react-bootstrap";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import QuizIcon from "@mui/icons-material/Quiz";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { useNavigate } from "react-router-dom";
import "./header.css";
import siyahlogo from '../assets/siyah_logo.png'
const routes = [
  {
    text: "Ders Videoları",
    colorClass: "green",
    icon: <VideoLibraryIcon />,
    path: "/videosatis",
  },
  {
    text: "Kitaplar",
    colorClass: "gold",
    icon: <MenuBookIcon />,
    path: "/kitapsatis",
  },
  {
    text: "Deneme Sınavları",
    colorClass: "brown",
    icon: <QuizIcon />,
    path: "/denemeler",
  },
  {
    text: "Eğitmen Kadromuz",
    colorClass: "forestgreen",
    icon: <PersonIcon />,
    path: "/egitmenler",
  },
];

const Header = () => {
  const navigate = useNavigate();
  const logged = useSelector((state) => state.auth.logged); // Redux logged state
  const [showDropdown, setShowDropdown] = useState(false);

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="header-container">
      <img
        className="logo"
        src={siyahlogo}
        alt="Logo"
        onClick={() => handleNavigation("/")}
        style={{ cursor: "pointer" }}
      />

      <div className="button-container d-none d-md-flex">
        
        <Box className="button-row">
          {logged ? (
            <Dropdown>
              <Dropdown.Toggle className="custom-button green">
                <PersonIcon /> Profilim
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => handleNavigation("/denemelerim")}>
                  <QuizIcon /> Deneme Sınavlarım
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleNavigation("/kitaplarım")}>
                  <MenuBookIcon /> Kitaplarım
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleNavigation("/videopaketlerim")}>
                  <VideoLibraryIcon /> Videolarım
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleNavigation("/profilim")}>
                  <PersonIcon /> Profilim
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item onClick={() => handleNavigation("/logout")}>
                  <ExitToAppIcon /> Çıkış Yap
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          ) : (
            <Button
              className="custom-button green"
              onClick={() => handleNavigation("/giris")}
            >
              <PersonIcon /> Giriş Yap
            </Button>
          )}
          {/* Sepetim Butonu */}
          <Button
            className="custom-button gold"
            onClick={() => handleNavigation("/sepetim")}
          >
            <ShoppingCartIcon /> Sepetim
          </Button>
        </Box>

        {/* Diğer Rota Butonları */}
        <Box className="button-row">
          {routes.map((item, index) => (
            <Button
              key={index}
              className={`custom-button ${item.colorClass}`}
              onClick={() => handleNavigation(item.path)}
            >
              {item.icon} <span className="button-label">{item.text}</span>
            </Button>
          ))}
        </Box>
      </div>

      {/* Mobil Dropdown */}
      <div className="d-md-none d-lg-none mobile-menu">
  <Dropdown
    show={showDropdown}
    onToggle={() => setShowDropdown(!showDropdown)}
  >
    <Dropdown.Toggle className="custom-button green">Menü</Dropdown.Toggle>
    <Dropdown.Menu>
      {/* Profilim Dropdown Menüsü */}
      {logged ? (
        <Dropdown>
          <Dropdown.Toggle className="custom-button green" as="a">
            Profilim
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => handleNavigation("/denemelerim")}>
              <QuizIcon /> Deneme Sınavlarım
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleNavigation("/kitaplarım")}>
              <MenuBookIcon /> Kitaplarım
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleNavigation("/videopaketlerim")}>
              <VideoLibraryIcon /> Videolarım
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleNavigation("/profilim")}>
              <PersonIcon /> Profilim
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={() => handleNavigation("/")}>
              <ExitToAppIcon /> Çıkış Yap
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      ) : (
        <Dropdown.Item onClick={() => handleNavigation("/giris")}>
          Giriş Yap
        </Dropdown.Item>
      )}
      
      {/* Sepetim */}
      <Dropdown.Item onClick={() => handleNavigation("/sepetim")}>
        <ShoppingCartIcon /> Sepetim
      </Dropdown.Item>

      <Dropdown.Divider />

      {/* Diğer Rota Butonları */}
      {routes.map((item, index) => (
        <Dropdown.Item key={index} onClick={() => handleNavigation(item.path)}>
          {item.icon} {item.text}
        </Dropdown.Item>
      ))}
    </Dropdown.Menu>
  </Dropdown>
</div>

    </div>
  );
};

export default Header;