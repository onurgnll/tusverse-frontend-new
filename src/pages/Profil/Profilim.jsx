import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import usersicon from "../../assets/images/usersicon.png";
import kitap1 from "../../assets/images/kitap1.png";

const UserProfile = () => {
  const purchases = [
    {
      id: 1,
      title: "Kadın Doğum Sorularla Son Tekrar Kitabı (Doç. Dr. Oktay KAYMAK)",
      type: "Fiziksel Kitap",
      time: "15:25 27.12.2024",
      image: kitap1, // Örnek kitap görseli
    },
    {
      id: 2,
      title: "Kadın Doğum Sorularla Son Tekrar Kitabı (Doç. Dr. Oktay KAYMAK)",
      type: "Fiziksel Kitap",
      time: "15:25 27.12.2024",
      image: kitap1
    },
  ];

  return (
    <Container className="mt-4">
      {/* Büyük ekranlarda yan yana, küçük ekranlarda alt alta */}
      <Row className="g-4">
        {/* Kişisel Bilgiler Sol Taraf */}
        <Col lg={6} md={12} className="pe-lg-5">
          <Card className="shadow-sm p-3">
            <Card.Body>
              <Row className="align-items-center">
                <Col xs="auto">
                  <Image
                    src={usersicon}
                    roundedCircle
                    alt="Avatar"
                    width="90"
                  />
                </Col>
                <Col>
                  <Card.Title className="fw-bold d-flex align-items-center">
                    Kişisel Bilgiler
                    <span className="ms-2 text-primary" role="button">✏️</span>
                  </Card.Title>
                  <p className="mb-1"><strong>Ad Soyad:</strong> Onur Gönüllü</p>
                  <p className="mb-1"><strong>Tc Kimlik No:</strong> 4555212131321</p>
                  <p className="mb-1"><strong>Telefon Numarası:</strong> 0545 204 91 26</p>
                  <p className="mb-0"><strong>E-mail Adresi:</strong> onr.gnll@outlook.com</p>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>

        {/* Satın Alınanlar Sağ Taraf */}
        <Col lg={6} md={12}>
          <Card className="shadow-sm p-3">
            <Card.Body>
              <Card.Title className="fw-bold d-flex align-items-center">
                <span className="me-2">🛒</span> Son Satın Alınanlar
              </Card.Title>
              {purchases.map((item) => (
                <Card key={item.id} className="border-0 p-2 mb-2 shadow-sm">
                  <Row className="align-items-center">
                    <Col xs="auto">
                      <Image src={item.image} width={80} height={100} rounded />
                    </Col>
                    <Col>
                      <Card.Text className="fw-bold">{item.title}</Card.Text>
                      <Card.Text className="text-muted">{item.type}</Card.Text>
                    </Col>
                    <Col xs="auto" className="text-end text-muted">
                      {item.time}
                    </Col>
                  </Row>
                </Card>
              ))}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default UserProfile;
