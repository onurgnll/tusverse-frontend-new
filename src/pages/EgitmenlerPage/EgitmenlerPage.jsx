import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom"; // Ensure you import Link from react-router-dom
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./egitmenler.css"; // Import the CSS file

const instructors = [
  {
    name: "Doç. Dr. Emrullah Beyazyıldız",
    specialization: "Patoloji",
    image: "src/assets/images/doktor2.png", 
  },
  {
    name: "Doç. Dr. Emrullah Beyazyıldız",
    specialization: "Patoloji",
    image: "src/assets/images/doktor2.png", 
  },
  {
    name: "Doç. Dr. Emrullah Beyazyıldız",
    specialization: "Patoloji",
    image: "src/assets/images/doktor2.png", 
  },
  {
    name: "Doç. Dr. Emrullah Beyazyıldız",
    specialization: "Patoloji",
    image: "src/assets/images/doktor2.png", 
  },
  {
    name: "Doç. Dr. Emrullah Beyazyıldız",
    specialization: "Patoloji",
    image: "src/assets/images/doktor2.png", 
  },
  {
    name: "Doç. Dr. Emrullah Beyazyıldız",
    specialization: "Patoloji",
    image: "src/assets/images/doktor2.png", 
  },
];

const EgitmenlerPage = () => {
  return (
    <>
      <Header />
      <Container className="mt-4">
        <h3 className="text-center mb-4">Eğitmenlerimiz</h3>
        <Row>
          {instructors.map((instructor, index) => (
            <Col key={index} md={3} sm={6} xs={12} className="mb-4">
              <Link to="/egitmendetay" style={{ textDecoration: 'none' }}> 
                <Card className="shadow-sm">
                  <Card.Img
                    variant="top"
                    src={instructor.image}
                    className="card-img"
                  />
                  <Card.Body>
                    <Card.Title className="text-center">
                      {instructor.name}
                    </Card.Title>
                    <Card.Text className="text-center text-muted">
                      {instructor.specialization}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default EgitmenlerPage;
