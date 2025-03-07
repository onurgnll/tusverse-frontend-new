import React, { useEffect, useState }  from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import AssignmentIcon from "@mui/icons-material/Assignment";
import QuizIcon from "@mui/icons-material/Quiz";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Carousel } from "antd";
import "./home.css";
import EgitmenlerPage from "../EgitmenlerPage/EgitmenlerPage";
import FaqSection from "../../components/FaqSections";
import { requestWithoutAuth } from "../../helpers/requests";
import { useDispatch, useSelector } from "react-redux";

const InfoBox = ({ title, value, icon, color }) => { //deneme sınavı exambox
  return (
    <div className="info-box" style={{ borderColor: color, boxShadow: `0 4px 8px ${color}` }}>
      <div className="info-box-content">
        <div>
          <h5 className="info-title">{title}</h5>
          <h3 className="info-value" style={{ color: color }}>{value}</h3>
        </div>
        <img src={icon} alt={title} className="info-icon" />
      </div>
    </div>
  );
};
const Homepage = () => {
  


   const instructors = [ //redux state olarak tut useselectorle seç
    {
      id: 1,
      name: "Ahmet Yılmaz",
      section: "İç Hastalıkları Uzmanı",
      image: "src/assets/images/doktor.png"
    },
    {
      id: 2,
      name: "Mehmet Kaya",
      section: "Kardiyoloji Uzmanı",
      image: "src/assets/images/doktor.png"
    },
    {
      id: 3,
      name: "Ayşe Yılmaz",
      section: "Nöroloji Uzmanı",
      image: "src/assets/images/doktor.png"
    },
    {
      id: 4,
      name: "Ahmet Yılmaz",
      section: "İç Hastalıkları Uzmanı",
      image: "src/assets/images/doktor.png"
    },
    {
      id: 5,
      name: "Mehmet Kaya",
      section: "Kardiyoloji Uzmanı",
      image: "src/assets/images/doktor.png"
    },
    {
      id: 6,
      name: "Ayşe Yılmaz",
      section: "Nöroloji Uzmanı",
      image: "src/assets/images/doktor.png"
    }
   
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const products = [
    {
      title: "2024-Patoloji Sorularla Son Tekrar Soru Kampı",
      description: `Sorularla Son Tekrar Tüm güncel bilgileri içeren kapsamlı TUS'a yönelik yeni nesil patoloji soru kitabı 6. Baskısı hazır. `,
      price: "3.999 TL",
      button: "Sepete Ekle",
      image: "src/assets/images/kitap1.png",
    },
    {
      title: "DUS için Temel & Oral Patoloji",
      description: `3 Ay - 3 İzleme: Tüm konulara dair temel bilgiler ve sık çıkan soruların çözüm yolları.`,
      price: "3.999 TL",
      button: "Sepete Ekle",
      image: "src/assets/images/kitap2.png",
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? products.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === products.length - 1 ? 0 : prevIndex + 1));
  };
  return (
    <>
      <Container fluid className="p-4">
        <div className="carousel-container">
          <Carousel
            autoplay
            dots={{ className: "custom-dots" }}
            dotPosition="bottom"
          >
            {/* Slide 1 */}
            <div>
              <Row className="align-items-center mb-5">
                <Col md={6}>
                  <img
                    src="src/assets/images/telefonlar.jpg"
                    alt="Mobile App"
                    className="img-1"
                  />
                </Col>
                <Col md={6}>
                  <h5 className="text-primary">Tusverse uygulaması ile bir adım öteye</h5>
                  <h2>Mobil uygulamamız ile her yerde öğrenin</h2>
                  <p>
                    Tusverse mobil uygulaması ile videolara ve mobil
                    cihazlarınızdan erişebilir, deneme sınavlarını çözebilirsiniz.
                  </p>
                </Col>
              </Row>
            </div>

            {/* Slide 2 */}
            <div>
              <Row className="align-items-center mb-5">
                <Col md={6}>
                  <img
                    src="src/assets/images/telefonlar.jpg"
                    alt="Mobile App"
                    className="img-1"
                  />
                </Col>
                <Col md={6}>
                  <h5 className="text-primary">Tusverse uygulaması ile bir adım öteye</h5>
                  <h2>Mobil uygulamamız ile her yerde öğrenin</h2>
                  <p>
                    Tusverse mobil uygulaması ile videolara ve mobil
                    cihazlarınızdan erişebilir, deneme sınavlarını çözebilirsiniz.
                  </p>
                </Col>
              </Row>
            </div>

            {/* Slide 3 */}
            <div>
              <Row className="align-items-center mb-5">
                <Col md={6}>
                  <img
                    src="src/assets/images/telefonlar.jpg"
                    alt="Mobile App"
                    className="img-1"
                  />
                </Col>
                <Col md={6}>
                  <h5 className="text-primary">Tusverse uygulaması ile bir adım öteye</h5>
                  <h2>Mobil uygulamamız ile her yerde öğrenin</h2>
                  <p>
                    Tusverse mobil uygulaması ile videolara ve mobil
                    cihazlarınızdan erişebilir, deneme sınavlarını çözebilirsiniz.
                  </p>
                </Col>
              </Row>
            </div>
          </Carousel>
        </div>
      </Container>
    

      <Container fluid className="p-4">
  {/* Orta Kısım */}
  <Row className="mb-5">
  <Col md={4} className="text-left ">
    <h3 className="text-dark">Tusverse</h3>
    <p>Uzmanlar tarafından hazırlanmış</p>

    <div className="custom-section mb-4">
      <div className="gradient-div">
        <PlayCircleOutlineIcon className="div-icon" />
        <span>Konu anlatım ve soru videoları</span>
      </div>
    </div>

    <div className="custom-section mb-4">
      <p className="section-text">Kendini deneyebileceğin onlarca</p>
      <div className="gradient-div1">
        <AssignmentIcon className="div-icon" />
        <span>Online ve Offline TUS deneme sınavları</span>
      </div>
    </div>

    <div className="custom-section">
      <p className="section-text">Binlerce soruyu ve konu içeriğini barındıran</p>
      <div className="gradient-div2">
        <QuizIcon className="div-icon" />
        <span>Uzmanlarca hazırlanmış konu ve soru  kitapları</span>
      </div>
    </div>
  </Col>

  <Col md={8} className="d-flex align-items-center ">
    <Row className="w-100">
      <Col md={6} className="mb-3 ">
        <img
          src="src/assets/images/img.jpg"
          alt="Feature 1"
          className="img-2 w-100"
        />
      </Col>
    </Row>
  </Col>
</Row>

 
</Container>


<div className="carousel-container">
      <Carousel autoplay dots={{ className: "custom2-dots" }} dotPosition="bottom">
        {/* Deneme 1 */}
        <div>
          <Row className="text-center alt-kisim">
            <Col>
              <p className="text-danger fw-bold">
                SINAVIN BAŞLAMASINA KALAN SÜRE: 1 Gün 15 Saat 47 Dakika
              </p>
              <Card className="mx-auto card-custom" style={{ maxWidth: "350px" }}>
                <Card.Body>
                  <h4 className="card-title">1. TÜRKİYE GENELİ TUS DENEME SINAVI</h4>
                  <p className="card-date">25.12.2024 09:00</p>
                  <Button variant="light" className="card-button">
                    Kayıt Yap
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>

        {/* Deneme 2 */}
        <div>
          <Row className="text-center alt-kisim">
            <Col>
              <p className="text-danger fw-bold">
                SINAVIN BAŞLAMASINA KALAN SÜRE: 3 Gün 10 Saat 30 Dakika
              </p>
              <Card className="mx-auto card-custom" style={{ maxWidth: "350px" }}>
                <Card.Body>
                  <h4 className="card-title">2. TÜRKİYE GENELİ TUS DENEME SINAVI</h4>
                  <p className="card-date">28.12.2024 14:00</p>
                  <Button variant="light" className="card-button">
                    Kayıt Yap
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>

        {/* Deneme 3 */}
        <div>
          <Row className="text-center alt-kisim">
            <Col>
              <p className="text-danger fw-bold">
                SINAVIN BAŞLAMASINA KALAN SÜRE: 5 Gün 7 Saat 20 Dakika
              </p>
              <Card className="mx-auto card-custom" style={{ maxWidth: "350px" }}>
                <Card.Body>
                  <h4 className="card-title">3. TÜRKİYE GENELİ TUS DENEME SINAVI</h4>
                  <p className="card-date">30.12.2024 11:00</p>
                  <Button variant="light" className="card-button">
                    Kayıt Yap
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </Carousel>
    </div>


    <EgitmenlerPage />
          <div className="container-fluid ">
      <div className="d-flex justify-content-between align-items-center mt-5">
        {/* Sol Ok */}
        <button className="btn btn-outline-secondary" onClick={handlePrev}>
          &lt;
        </button>

        <Row className="flex-grow-1 mx-2 justify-content-center align-items-center">
  {/* Küçük ekranda sadece 1 kart göster ve ortala */}
  <Col xs={12} md={6} key={currentIndex} className="d-flex justify-content-center">
    <div className="card2 same-size-card">
      <img
        src={products[currentIndex].image}
        className="card2-img-left"
        alt={products[currentIndex].title}
      />
      <div className="card2-body">
        <h5 className="card2-title">{products[currentIndex].title}</h5>
        <p className="card2-text">{products[currentIndex].description}</p>
        <Button variant="primary" className="mt-auto">
          {products[currentIndex].price}
          <ShoppingCartIcon style={{ marginLeft: "8px" }} />
        </Button>
      </div>
    </div>
  </Col>

  {/* Büyük ekranda ikinci kartı göster ve ortala */}
  <Col xs={12} md={6} className="d-none d-lg-flex justify-content-center">
    <div className="card2 same-size-card">
      <img
        src={products[(currentIndex + 1) % products.length].image}
        className="card2-img-left"
        alt={products[(currentIndex + 1) % products.length].title}
      />
      <div className="card2-body">
        <h5 className="card2-title">{products[(currentIndex + 1) % products.length].title}</h5>
        <p className="card2-text">{products[(currentIndex + 1) % products.length].description}</p>
        <Button variant="primary" className="mt-auto">
          {products[(currentIndex + 1) % products.length].price}
          <ShoppingCartIcon style={{ marginLeft: "8px" }} />
        </Button>
      </div>
    </div>
  </Col>
</Row>



        {/* Sağ Ok */}
        <button className="btn btn-outline-secondary" onClick={handleNext}>
          &gt;
        </button>
      </div>
    </div>
    <div className=" text-center mt-5">
      <div className="info-box-row d-flex flex-wrap justify-content-center mb-5">
       
        <InfoBox
          title="Kitap İçeriği"
          value="62"
          icon="src/assets/images/icon1.png" // İkon yolunuza göre düzenleyin
          color="#008000"
        />
        <InfoBox
          title="Video İçeriği"
          value="62"
          icon="src/assets/images/icon2.png"
          color="#FF0000"
        />   
       
        <InfoBox
          title="Kayıtlı Kullanıcı"
          value="11,603"
         icon="src/assets/images/newicon.png"
          color="#0B115F"
        />
      </div>
    </div>
    <FaqSection />
    
      
      
    </>
  );
};

export default Homepage;