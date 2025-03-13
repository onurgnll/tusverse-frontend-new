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
      image: kitap1,
    },
  ];

  return (
    <Container className="mt-4 d-flex justify-content-center align-items-center">
      {/* Büyük ekranlarda alt alta, küçük ekranlarda alt alta */}
      <Row className="g-4 d-flex justify-content-center align-items-center">
        {/* Kişisel Bilgiler Sol Taraf */}
        <Col lg={12} md={12} className="d-flex justify-content-center align-items-center">
          <Card style={{ width: "100%", minWidth: "800px",transform: "none", boxShadow: "none" }} className="shadow-sm p-3 align-items-start px-5">
            <Card.Body className="text-start" style={{ paddingLeft: 0, marginLeft:0 }}>
              <Card.Title className="fw-bold d-flex align-items-center">
              <Image src={usersicon} width={40} height={40} roundedCircle className="me-3" />
                Kişisel Bilgiler
                <span className="ms-2 text-primary" role="button">✏️</span>
              </Card.Title>
              <p className="mb-1"><strong>Ad Soyad:</strong> Onur Gönüllü</p>
              <p className="mb-1"><strong>Tc Kimlik No:</strong> 4555212131321</p>
              <p className="mb-1"><strong>Telefon Numarası:</strong> 0545 204 91 26</p>
              <p className="mb-0"><strong>E-mail Adresi:</strong> onr.gnll@outlook.com</p>
            </Card.Body>
          </Card>
        </Col>

        {/* Satın Alınanlar Sağ Taraf */}
        <Col lg={12} md={12} className="d-flex justify-content-center align-items-center" >
        <Card style={{ width: "100%", minWidth: "800px", transform: "none", boxShadow: "none" }} className="shadow-sm p-3">
  <Card.Body>
    <Card.Title className="fw-bold d-flex align-items-center">
      <span className="me-2">🛒</span> Son Satın Alınanlar
    </Card.Title>
    {purchases.map((item) => (
     <Card
     key={item.id}
     className="border-0 p-2 mb-2 shadow-sm"
     style={{ width: "100%", minWidth: "700px" }} // Increase width of the inner card here
   >
        <Row className="align-items-center">
          <Col xs="auto" className="d-flex justify-content-center">
            <Image src={item.image} width={120} height={150} rounded />
          </Col>
          <Col className="d-flex flex-column">
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
