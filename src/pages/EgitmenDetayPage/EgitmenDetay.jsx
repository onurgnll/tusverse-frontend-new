import React from "react";
import { Container, Row, Col, Card, Dropdown, Button } from "react-bootstrap";

import BookSection from "../../components/BookSection";
import { 
  Facebook as FacebookIcon, 
  Instagram as InstagramIcon, 
  YouTube as YouTubeIcon 
} from "@mui/icons-material";

import videoicon from "../../assets/videoicon.png";
import questionIcon from "../../assets/soruicon.png";
import cargoIcon from "../../assets/kargoicon.png";
import "./egitmendetay.css";
import "../../components/videosection.css"; // VideoSection ile ilgili stiller
import VideoSection from "../../components/VideoSection"
import doktor2 from '../../assets/doktor2.png'
const EgitmenDetay = () => {
  return (
    <>
      <Container className="profile-container">
        {/* Profil Resmi ve Başlık */}
        <div className="profile-section">
          <img
            src={doktor2}
            alt="Profile"
            className="profile-image"
          />
          <h2 className="profile-title">Doç. Dr. Emrullah Beyazyıldız</h2>
        </div>

        <div className="biography-section">
          <h3>Özgeçmiş</h3>
          <p>
            Göz Hekimliği yanında 2008 yılından bu yana tıpta uzmanlık sınavı
            öğrencilerine yönelik Patoloji dersleri anlatmaktadır. 2008-2020
            yılları arasında TUSEM dersanesi bünyesinde Türkiye'nin bir çok
            şehir ve üniversitesinde tıp hekimleri ve adaylarına yönelik
            Patoloji dersi anlatmıştır.
          </p>
        </div>

        
        <BookSection />
        <div style={{ textAlign: "left", marginLeft: "-55px", marginBottom: "0px"}}>
  <VideoSection />
</div>

        

        <div className="social-media-section mb-5">
          <h5>Sosyal Medyada Emrullah Beyazyıldız</h5>
          <div className="d-flex justify-content-center mt-3">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-3"
            >
              <FacebookIcon  size={60} color="#3b5998" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-3"
            >
              <InstagramIcon  size={60} color="#E1306C" />
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-3"
            >
              <YouTubeIcon  size={60} color="#FF0000" />
            </a>
          </div>
        </div>
      </Container>
    </>
  );
};

export default EgitmenDetay;
