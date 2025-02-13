import React from "react";
import { useNavigate } from "react-router-dom";
import "./smallheader.css"
const Smallheader = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div
      className="smallheader position-absolute"
      onClick={() => handleNavigation("/")}
    >
      <img src="src/assets/images/siyah_logo.png" alt="Logo" className="smallheader-logo" />
    </div>
  );
};

export default Smallheader;
