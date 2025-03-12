import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Badge,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { CheckCircleFill } from "react-bootstrap-icons";
import jineImage from "../assets/images/jine.png";
import { Link } from "react-router-dom";
import "./videosection.css";

const VideoSatis = () => {
  // Sample video course data
  const videoCourses = [
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
  ];

  return (
    <Container
      className="container w-100 d-flex flex-column justify-content-start"
      style={{ minHeight: "100vh" }} // Ekran yüksekliğini %100 yapar
    >
      {/* Title */}
      <div className="d-flex justify-content-center">
        <h2
          className="text-center"
          style={{
            fontSize: "36px",
            fontWeight: "bolder",
            marginLeft: "500px",
            letterSpacing: "2px",
            marginBottom: "20px",
          }}
        >
          Online Ders Videoları
        </h2>
      </div>

      {/* Courses Display */}
      <Row className="g-4 d-flex justify-content-center">
        {videoCourses.map((course) => (
          <Col key={course.id} xs={12} sm={6} md={6} lg={3} xl={3}>
            {/* Genişliği değiştirdik */}
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
                    }}
                  >
                    {course.title}
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
    </Container>
  );
};

export default VideoSatis;
