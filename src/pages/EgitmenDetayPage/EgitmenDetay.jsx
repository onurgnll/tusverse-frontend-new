import React from "react";
import { Container } from "react-bootstrap";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BookSection from "../../components/BookSection";
import VideoSection from "../../components/VideoSection";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import "./egitmendetay.css"; // CSS dosyanızı eklediğinizden emin olun.

const EgitmenDetay = () => {
  return (
    <>
      <Header />
      <Container className="profile-container">

        {/* Profil Resmi ve Başlık */}
        <div className="profile-section">
          <img
            src="src/assets/images/doktor2.png"
            alt="Profile"
            className="profile-image"
          />
          <h2 className="profile-title">Doç. Dr. Emrullah Beyazyıldız</h2>
        </div>

        {/* Özgeçmiş Bölümü */}
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
        <VideoSection />

        {/* Sosyal Medya Bağlantıları */}
        <div className="social-media-section mt-5">
          <h5>Sosyal Medyada Emrullah Beyazyıldız</h5>
          <div className="d-flex justify-content-center mt-3">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-3"
            >
              <FaFacebook size={40} color="#3b5998" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-3"
            >
              <FaInstagram size={40} color="#E1306C" />
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-3"
            >
              <FaYoutube size={40} color="#FF0000" />
            </a>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default EgitmenDetay;
