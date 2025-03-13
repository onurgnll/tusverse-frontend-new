import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Avatar, Menu, Dropdown } from "antd";
import { Box } from "@mui/system";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import QuizIcon from "@mui/icons-material/Quiz";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import {
  PlayCircleOutlined, // VideoLibraryOutlined yerine
  InfoCircleOutlined, // QuestionCircleOutlined yerine
  IdcardOutlined, // UserOutlined yerine
  ShoppingOutlined, // ShoppingCartOutlined yerine
  PoweroffOutlined, // LogoutOutlined yerine
  FileOutlined, // FileTextOutlined yerine
  ReadOutlined, // BookOutlined yerine
  CameraOutlined // VideoCameraOutlined yerine
} from "@ant-design/icons";

import { Button } from "react-bootstrap";
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
    icon: <PersonIcon />,
    path: "/egitmenler",
  },
];

const Header = () => {
  const navigate = useNavigate();
  const logged = useSelector((state) => state.auth.logged);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isShrunk, setIsShrunk] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsShrunk(true);
      } else {
        setIsShrunk(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (path) => {
    navigate(path);
  };

  // Profil Menüsü
  const profileMenu = (
    <Menu>
      <Menu.Item key="1" icon={<FileOutlined />} onClick={() => handleNavigation("/denemelerim")}>
        Deneme Sınavlarım
      </Menu.Item>
      <Menu.Item key="2" icon={<ReadOutlined />} onClick={() => handleNavigation("/kitaplarım")}>
        Kitaplarım
      </Menu.Item>
      <Menu.Item key="3" icon={<CameraOutlined />} onClick={() => handleNavigation("/videopaketlerim")}>
        Videolarım
      </Menu.Item>
      <Menu.Item key="4" icon={<IdcardOutlined />} onClick={() => handleNavigation("/profilim")}>
        Profilim
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="5" icon={<PoweroffOutlined />} onClick={() => handleNavigation("/logout")}>
        Çıkış Yap
      </Menu.Item>
    </Menu>
  );

  return (
    <div className={`header-container ${isShrunk ? "shrunk" : ""}`}>
      <img
        className="logo"
        src="src/assets/images/siyah_logo.png"
        alt="Logo"
        onClick={() => handleNavigation("/")}
        style={{ cursor: "pointer" }}
      />

      <div className={`button-container ${isShrunk ? "shrunk" : ""}`}>
        <Box className="button-row">
          {logged ? (
            <Dropdown overlay={profileMenu} placement="bottomRight" trigger={["click"]}>
              <Button className="custom-button green">
                <Avatar icon={<PersonIcon />} style={{ marginRight: 8 }} />
                Profilim
              </Button>
            </Dropdown>
          ) : (
            <Button className="custom-button green" onClick={() => handleNavigation("/giris")}>
              <PersonIcon /> Giriş Yap
            </Button>
          )}

          <Button className="custom-button gold" onClick={() => handleNavigation("/sepetim")}>
            <ShoppingCartIcon /> Sepetim
          </Button>
        </Box>

        <Box className="button-row">
          {routes.map((item, index) => (
            <Button key={index} className={`custom-button ${item.colorClass}`} onClick={() => handleNavigation(item.path)}>
              {item.icon} <span className="button-label">{item.text}</span>
            </Button>
          ))}
        </Box>
      </div>

      <div className="d-md-none d-lg-none mobile-menu">
        <Dropdown
          overlay={
            <Menu>
              {logged ? (
                <>
                  <Menu.Item key="1" icon={<FileOutlined />} onClick={() => handleNavigation("/denemelerim")}>
                    Deneme Sınavlarım
                  </Menu.Item>
                  <Menu.Item key="2" icon={<ReadOutlined />} onClick={() => handleNavigation("/kitaplarım")}>
                    Kitaplarım
                  </Menu.Item>
                  <Menu.Item key="3" icon={<CameraOutlined />} onClick={() => handleNavigation("/videopaketlerim")}>
                    Videolarım
                  </Menu.Item>
                  <Menu.Item key="4" icon={<PersonIcon />} onClick={() => handleNavigation("/profilim")}>
                    Profilim
                  </Menu.Item>
                  <Menu.Divider />
                  <Menu.Item key="5" icon={<PoweroffOutlined />} onClick={() => handleNavigation("/logout")}>
                    Çıkış Yap
                  </Menu.Item>
                </>
              ) : (
                <Menu.Item key="6" onClick={() => handleNavigation("/giris")}>
                  <PersonIcon /> Giriş Yap
                </Menu.Item>
              )}
              <Menu.Item key="7" icon={<ShoppingCartIcon />} onClick={() => handleNavigation("/sepetim")}>
                Sepetim
              </Menu.Item>
              <Menu.Divider />
              {routes.map((item, index) => (
                <Menu.Item key={index + 8} icon={item.icon} onClick={() => handleNavigation(item.path)}>
                  {item.text}
                </Menu.Item>
              ))}
            </Menu>
          }
          trigger={["click"]}
        >
          <Button className="custom-button green">Menü</Button>
        </Dropdown>
      </div>
    </div>
  );
};

export default Header;
