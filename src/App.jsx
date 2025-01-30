import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import HomePage from "./pages/HomePage/HomePage";
import EgitmenlerPage from "./pages/EgitmenlerPage/EgitmenlerPage";
import EgitmenDetay from "./pages/EgitmenDetayPage/EgitmenDetay"
import VideoSatis from "./pages/SatisPage/Video/VideoSatisPage";
import KitapSatis from "./pages/SatisPage/Kitaplar/Kitapsatis";
import Denemeler from "./pages/SatisPage/Denemeler/Denemeler"
import VideoIzleme from "./pages/VideoIzleme/Videoizleme"
import DenemeSınavı from "./pages/DenemeSınavı/DenemeSınavı"
import "./App.css"

const App = () => {
  return (
    <>
      <Routes>
        
        <Route path="/giris" element={<LoginPage />} />
        <Route path="/kayit" element={<RegisterPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/egitmenler" element={<EgitmenlerPage />} />
        <Route path="/egitmendetay" element={<EgitmenDetay />} />
        <Route path="/videosatis" element={<VideoSatis />} />
        <Route path="/kitapsatis" element={<KitapSatis />} />
        <Route path="/denemeler" element={<Denemeler />} />
        <Route path="/videoizleme" element={<VideoIzleme />} />
        <Route path="/denemesınavı" element={<DenemeSınavı />} />
        

        
      </Routes>
    </>
  );
};

export default App;