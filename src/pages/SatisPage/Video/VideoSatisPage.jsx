import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Badge,
  Tabs,
  Tab,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { CheckCircleFill } from "react-bootstrap-icons";
import jineImage from "../../../assets/images/jine.png";
import { Link } from "react-router-dom";
import "./video.css";

const VideoSatis = () => {
  const [activeCategory, setActiveCategory] = useState("konu-anlatimi");

  // Sample video course data
  const videoCourses = {
    "konu-anlatimi": [
      {
        id: 1,
        title: "Patoloji Videoları",
        instructor: "ÇAĞLAYAN TEKBAŞ",
        instructorTitle: "Doç. Dr.",
        videoCount: 120,
        features: ["Altyapısı yeniden inşa edildi", "Videolara 3 gün erişim"],
        price: 3999,
        discountPrice: null,
        image: jineImage,
        color: "#FF9800",
      },
      {
        id: 2,
        title: "Jinekoloji Videoları",
        instructor: "AHMET YILDIRIM",
        instructorTitle: "Prof. Dr.",
        videoCount: 120,
        features: ["Altyapısı yeniden inşa edildi", "Videolara 5 mrtez erişim"],
        price: 3999,
        discountPrice: 2999,
        image: jineImage,
        color: "#E91E63",
      },
      {
        id: 3,
        title: "Patoloji Videoları",
        instructor: "ÇAĞLAYAN TEKBAŞ",
        instructorTitle: "Doç. Dr.",
        videoCount: 120,
        features: ["Altyapısı yeniden inşa edildi", "Videolara 3 gün erişim"],
        price: 3999,
        discountPrice: null,
        image: jineImage,
        color: "#FF5722",
      },
      {
        id: 4,
        title: "Jinekoloji Videoları",
        instructor: "AHMET YILDIRIM",
        instructorTitle: "Prof. Dr.",
        videoCount: 120,
        features: ["Altyapısı yeniden inşa edildi", "Videolara 5 mrtez erişim"],
        price: 3999,
        discountPrice: 2999,
        image: jineImage,
        color: "#4CAF50",
      },
    ],
    "soru-kampi": [
      {
        id: 5,
        title: "Anatomi Soru Kampı",
        instructor: "MEHMET YILMAZ",
        instructorTitle: "Prof. Dr.",
        videoCount: 85,
        features: ["Tüm sınav konuları kapsanır", "Videolara 7 gün erişim"],
        price: 2499,
        discountPrice: null,
        image: jineImage,
        color: "#2196F3",
      },
      {
        id: 6,
        title: "Fizyoloji Soru Kampı",
        instructor: "AYŞE KAYA",
        instructorTitle: "Doç. Dr.",
        videoCount: 90,
        features: ["500+ soru çözümü", "Videolara 7 gün erişim"],
        price: 2699,
        discountPrice: 1999,
        image: jineImage,
        color: "#4CAF50",
      },
      {
        id: 7,
        title: "Anatomi Soru Kampı",
        instructor: "MEHMET YILMAZ",
        instructorTitle: "Prof. Dr.",
        videoCount: 85,
        features: ["Tüm sınav konuları kapsanır", "Videolara 7 gün erişim"],
        price: 2499,
        discountPrice: null,
        image: jineImage,
        color: "#2196F3",
      },
      {
        id: 8,
        title: "Fizyoloji Soru Kampı",
        instructor: "AYŞE KAYA",
        instructorTitle: "Doç. Dr.",
        videoCount: 90,
        features: ["500+ soru çözümü", "Videolara 7 gün erişim"],
        price: 2699,
        discountPrice: 1999,
        image: jineImage,
        color: "#4CAF50",
      },
    ],
    "tekrar-kampi": [
      {
        id: 9,
        title: "Biyokimya Tekrar Kampı",
        instructor: "ALİ YILDIRIM",
        instructorTitle: "Prof. Dr.",
        videoCount: 65,
        features: [
          "Hızlı tekrar için özel hazırlandı",
          "Videolara 5 gün erişim",
        ],
        price: 1999,
        discountPrice: null,
        image: jineImage,
        color: "#9C27B0",
      },
      {
        id: 10,
        title: "Mikrobiyoloji Tekrar Kampı",
        instructor: "ZEYNEP KARA",
        instructorTitle: "Doç. Dr.",
        videoCount: 70,
        features: ["Sınav odaklı tekrar", "Videolara 5 gün erişim"],
        price: 2199,
        discountPrice: 1799,
        image: jineImage,
        color: "#FF5722",
      },
      {
        id: 11,
        title: "Biyokimya Tekrar Kampı",
        instructor: "ALİ YILDIRIM",
        instructorTitle: "Prof. Dr.",
        videoCount: 65,
        features: [
          "Hızlı tekrar için özel hazırlandı",
          "Videolara 5 gün erişim",
        ],
        price: 1999,
        discountPrice: null,
        image: jineImage,
        color: "#9C27B0",
      },
      {
        id: 12,
        title: "Mikrobiyoloji Tekrar Kampı",
        instructor: "ZEYNEP KARA",
        instructorTitle: "Doç. Dr.",
        videoCount: 70,
        features: ["Sınav odaklı tekrar", "Videolara 5 gün erişim"],
        price: 2199,
        discountPrice: 1799,
        image: jineImage,
        color: "#FF5722",
      },
    ],
  };
  return (
    <div className="container-fluid w-100 d-flex flex-column align-items-center m-5">
      {/* Title */}
      <div classname=" w-50">
        <h2
          className="text-center d-block w-100"
          style={{
            fontSize: "36px",
            fontWeight: "bolder",

            letterSpacing: "2px",
            marginBottom: "20px",
          }}
        >
          Online Ders Videoları
        </h2>

        {/* Category Tabs */}
        <Tabs
          activeKey={activeCategory}
          onSelect={(k) => setActiveCategory(k)}
          className="mb-4 d-flex justify-content-center"
          style={{
            fontSize: "18px",
            borderWidth: "5px",
            fontWeight: "bolder",

            letterSpacing: "2px",
            marginBottom: "30px",
          }}
        >
          <Tab eventKey="konu-anlatimi" title="📖 Konu Anlatımı" />
          <Tab eventKey="soru-kampi" title="❓ Soru Kampı" />
          <Tab eventKey="tekrar-kampi" title="🔄 Tekrar Kampı" />
        </Tabs>
      </div>
      <Row className="g-4">
        {videoCourses[activeCategory].map((course) => (
         <Col key={course.id} xs={12} sm={6} md={4} lg={4} xl={4}> 
            
            <Card className="h-100 shadow-sm border-light">
              <Card.Header className="bg-white border-bottom-0 pt-3 pb-0">
                <h5 className="text-center mb-0">{course.title}</h5>
              </Card.Header>
              <Card.Body className="d-flex flex-column">
                <div className="d-flex mb-3">
                  <div style={{ minWidth: "100px" }}>
                    <Link to={`/videodetay`}>
                      <img
                        src={course.image || "/placeholder.svg"}
                        alt={course.instructor}
                        className="img-fluid rounded"
                        style={{
                          border: `2px solid ${course.color}`,
                          maxHeight: "150px",
                        }}
                      />
                    </Link>
                  </div>
                  <div className="ms-3">
                    <div className="mb-1" style={{ color: course.color }}>
                      <strong>{course.instructorTitle}</strong>
                    </div>
                    <div className="mb-2">
                      <strong>{course.instructor}</strong>
                    </div>
                  </div>
                </div>

                <div className="mb-3">
                  <Badge
                    bg="success"
                    className="d-flex align-items-center mb-2"
                    style={{ width: "fit-content" }}
                  >
                    <CheckCircleFill className="me-1" /> {course.videoCount}{" "}
                    Video
                  </Badge>

                  {course.features.map((feature, index) => (
                    <div key={index} className="d-flex align-items-center mb-1">
                      <CheckCircleFill
                        className="me-1 text-success"
                        size={14}
                      />
                      <small>{feature}</small>
                    </div>
                  ))}
                </div>

                <div className="mt-auto">
                <Button
  variant="outline-secondary"
  size="sm"
  className="w-100 mb-2"
  style={{
    height: 30,
    backgroundColor: course.color,
    color: "white",
    borderColor: course.color,
    marginTop: 'auto'
  }}
>
  {activeCategory === 'konu-anlatimi' ? 'Konu Anlatımı' : 
   activeCategory === 'soru-kampi' ? 'Soru Kampı' : 
   activeCategory === 'tekrar-kampi' ? 'Tekrar Kampı' : activeCategory}
</Button>



                  <Button variant="outline-info" className="w-100 mb-2">
                    <Link
                      to={`/videoizleme`}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      Satın Almadan İzle <i className="ms-1">→</i>
                    </Link>
                  </Button>

                  <Button variant="info" className="w-100 text-white">
                    <i className="bi bi-cart me-1"></i> Satın Al
                    <span className="ms-2">
                      {course.discountPrice ? (
                        <>
                          <del className="me-1 small">
                            {course.price.toLocaleString()} TL
                          </del>
                          <strong>
                            {course.discountPrice.toLocaleString()} TL
                          </strong>
                        </>
                      ) : (
                        <strong>{course.price.toLocaleString()} TL</strong>
                      )}
                    </span>
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default VideoSatis;
