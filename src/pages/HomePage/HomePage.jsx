import React, { useState }  from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import AssignmentIcon from "@mui/icons-material/Assignment";
import QuizIcon from "@mui/icons-material/Quiz";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Carousel } from "antd";
import "./home.css";


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

const FaqSection = () => {
  const [activeKey, setActiveKey] = useState(null);

  const toggleAccordion = (key) => {
    setActiveKey(activeKey === key ? null : key);
  };

  const faqItems = [
    {
      id: 1,
      question: "Tusverse uygulamasını nasıl indirebilirim?",
      answer: "Tusverse uygulamasını App Store veya Google Play üzerinden indirebilirsiniz.",
    },
    {
      id: 2,
      question: "Tusverse'e nasıl kayıt olabilirim?",
      answer: "Web sitemize veya mobil uygulamamıza giriş yaparak kolayca kayıt olabilirsiniz.",
    },
    {
      id: 3,
      question: "Tusverse'deki içerikler nelerdir?",
      answer: "Tusverse, videolar, soru bankaları, deneme sınavları ve çok daha fazlasını içerir.",
    },
  ];

  return (
    <section className="faq-section my-5">
      <h2 className="text-center mb-4">Sık Sorulan Sorular</h2>
      <div className="faq-container">
        {faqItems.map((item) => (
          <div key={item.id} className="faq-item mb-3">
            <div
              className="faq-question d-flex justify-content-between align-items-center p-3"
              onClick={() => toggleAccordion(item.id)}
              style={{ cursor: "pointer", background: "#f8f9fa", borderRadius: "8px" }}
            >
              <span>{item.question}</span>
              <span>{activeKey === item.id ? "▲" : "▼"}</span>
            </div>
            {activeKey === item.id && (
              <div className="faq-answer p-3" style={{ background: "#ffffff", borderRadius: "8px", border: "1px solid #ddd" }}>
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
const Homepage = () => {
   // Static array of instructors
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
           <Header /> {/* Header bileşeni */}
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
    <Col md={4} className="text-left">
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
  </Row>
  <Col md={8}>
    <Row>
      <Col md={6} className="mb-3">
        <img
          src="src/assets/images/img.jpg"
          alt="Feature 1"
          className="img-2"
        />
      </Col>
    </Row>
  </Col>
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


    <section className="trainings-section mt-5">
  <h3 className="text-center mb-4">Eğitmenlerimiz</h3>
  
  {/* Container eklendi */}
  <Container>
    <Row className="justify-content-center">
      {/* Eğitmen Kartları */}
      {instructors.map((instructor) => (
        <Col xs={12} sm={6} md={4} lg={3} key={instructor.id} className="d-flex justify-content-center mb-4">
          <Card className="instructor-card">
            <Card.Img
              variant="top"
              src={instructor.image}
              alt={`Instructor ${instructor.name}`}
              className="instructor-img"
            />
            <Card.Body>
              <Card.Title>{instructor.name}</Card.Title>
              <Card.Text>{instructor.section}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
</section>
          <div className="container my-5">
      <div className="d-flex justify-content-between align-items-center">
        {/* Sol Ok */}
        <button className="btn btn-outline-secondary" onClick={handlePrev}>
          &lt;
        </button>

        {/* Kartlar */}
        <div className="row flex-grow-1 mx-2">
          {[0, 1].map((offset) => {
            const productIndex = (currentIndex + offset) % products.length;
            const product = products[productIndex];

            return (
              <div className="col-md-6" key={productIndex}>
                <div className="card2 mb-4 d-flex flex-row">
                  <img
                    src={product.image}
                    className="card2-img-left"
                    alt={product.title}
                    style={{ width: "150px", height: "auto", objectFit: "cover", borderRadius: "8px" }}
                  />
                  <div className="card2-body">
                    <h5 className="card2-title">{product.title}</h5>
                    <p className="card2-text">{product.description}</p>                    
                    <button className="btn btn-primary d-flex align-items-center">
                      {product.price}
                      <ShoppingCartIcon style={{ marginLeft: "8px" }} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Sağ Ok */}
        <button className="btn btn-outline-secondary" onClick={handleNext}>
          &gt;
        </button>
      </div>
    </div>
    <div className="container text-center my-5">
      <div className="info-box-row d-flex flex-wrap justify-content-center">
        {/* İlk Satırdaki 2 Kutucuk */}
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
      </div>
      <div className="info-box-center mt-4">
        {/* Alttaki Ortalanmış Kutucuk */}
        <InfoBox
          title="Kayıtlı Kullanıcı"
          value="11,603"
         icon="src/assets/images/newicon.png"
          color="#0B115F"
        />
      </div>
    </div>
    <FaqSection />
    
      
      <Footer /> {/* Footer bileşeni */}
    </>
  );
};

export default Homepage;
