import React from "react";
import { Container, Row, Col, Card, Dropdown, Button } from "react-bootstrap";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BookSection from "../../components/BookSection";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import videoicon from "../../assets/images/videoicon.png";
import questionIcon from "../../assets/images/soruicon.png";
import cargoIcon from "../../assets/images/kargoicon.png";
import "./egitmendetay.css";
import "../../components/videosection.css"; // VideoSection ile ilgili stiller
import VideoSatisPage from "../SatisPage/Video/VideoSatisPage";
const EgitmenDetay = () => {
  return (
    <>
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

        {/* Kitap Bölümü */}
        <BookSection />
        <div style={{ textAlign: "left", marginLeft: "-55px" }}>
  <VideoSatisPage />
</div>

        

        {/* Video Bölümü 
        <div className="video-section mt-5">
  
  
    <Col xs={12}>
      <h3 className="text-center">Videolar</h3>
    </Col>


  
  <Row>
    {Array(3)
      .fill(null)
      .map((_, idx) => (
        <Col
          md={4}
          sm={6}
          xs={12}
          className="d-flex justify-content-center"
          key={idx}
        >
          <Card className="h-100 book-card">
            
            <Card.Header className="text-center book-title">
              <strong>Jinekoloji Videoları</strong>
            </Card.Header>

           
            <Card.Img
              variant="top"
              src="src/assets/images/jine.png"
              alt="Video Cover"
              className="book-image"
            />

            
            <Card.Body>
              <div className="icon-row">
                <img
                  src={videoicon}
                  alt="Video Icon"
                  className="custom-icon"
                />
                <span> 125 Video</span>
              </div>
              <div className="icon-row">
                <img
                  src={questionIcon}
                  alt="Question Icon"
                  className="custom-icon"
                />
                <span>Kitaplar pakete dahil değildir</span>
              </div>
              <div
                className="icon-row"
                style={{ display: "flex", alignItems: "center" }}
              >
                <img
                  src={cargoIcon}
                  alt="Cargo Icon"
                  className="custom-icon"
                />
                <span>Videolara sınırsız erişim</span>
              </div>
            </Card.Body>

            
            <Card.Footer className="text-center">
              <Dropdown>
                <Dropdown.Toggle
                  variant="secondary"
                  className="dropdown-toggle"
                  id={`dropdown-${idx}`}
                >
                  Konu Anlatımı
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#">Soru Kampı</Dropdown.Item>
                  <Dropdown.Item href="#">Tekrar Kampı</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Button variant="success" className="cart-button">
                <span>50₺</span>
              </Button>
            </Card.Footer>
          </Card>
        </Col>
      ))}
  </Row>
</div>

*/}
        {/* Sosyal Medya Bağlantıları */}
        <div className="social-media-section mt-5 mb-5">
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
    </>
  );
};

export default EgitmenDetay;
