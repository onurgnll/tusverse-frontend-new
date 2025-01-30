import React from "react";
import { Box, TextField } from "@mui/material";
import { Button, Container, Row, Col } from "react-bootstrap";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import QuizIcon from "@mui/icons-material/Quiz";
import GroupIcon from "@mui/icons-material/Group";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";
import "./header.css";

const Header = () => {
  const navigate = useNavigate(); // React Router's navigation hook

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <Box className="header-container">
      <Container fluid>
        {/* Logo */}
        <Row>
          <Col>
            <Box className="logo-container"
            onClick={() => handleNavigation("/")} // Logoya tıklandığında ana sayfaya yönlendir
            style={{ cursor: "pointer" }}>
              <img
                src="src/assets/images/siyah_logo.png"
                alt="TUSverse Logo"
              />
            </Box>
          </Col>
        </Row>

        {/* Search Bar */}
        <Row>
          <Col xs={12}>
            <Box className="search-bar">
              <TextField variant="outlined" placeholder="Ara..." fullWidth />
            </Box>
          </Col>
        </Row>

        {/* Buttons Section */}
        <Row>
          <Col>
            <Box className="button-container">
              {/* Top Row: Giriş Yap and Sepetim */}
              <Box className="button-row">
                <Button
                  className="custom-button green"
                  onClick={() => handleNavigation("/giris")}
                >
                  <GroupIcon />
                  Giriş Yap
                </Button>
                <Button
                  className="custom-button gold"
                  onClick={() => handleNavigation("/")}
                >
                  <ShoppingCartIcon />
                  Sepetim
                </Button>
              </Box>

              {/* Bottom Row: Other Buttons */}
              <Box className="button-row">
                {[
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
                ].map((item, index) => (
                  <Button
                    key={index}
                    className={`custom-button ${item.colorClass}`}
                    onClick={() => handleNavigation(item.path)}
                  >
                    {item.icon}
                    <span className="button-label">{item.text}</span>
                  </Button>
                ))}
              </Box>
            </Box>
          </Col>
        </Row>
      </Container>
    </Box>
  );
};

export default Header;
