import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom"; // Ensure you import Link from react-router-dom
import doktor2 from '../../assets/doktor2.png';
import "./egitmenler.css"; // Import the CSS file

const instructors = [
  {
    name: "Doç. Dr. Emrullah Beyazyıldız",
    specialization: "Patoloji",
    image: doktor2, 
  },
  {
    name: "Doç. Dr. Emrullah Beyazyıldız",
    specialization: "Patoloji",
    image: doktor2, 
  },
  {
    name: "Doç. Dr. Emrullah Beyazyıldız",
    specialization: "Patoloji",
    image: doktor2, 
  },
  {
    name: "Doç. Dr. Emrullah Beyazyıldız",
    specialization: "Patoloji",
    image: doktor2, 
  },
  {
    name: "Doç. Dr. Emrullah Beyazyıldız",
    specialization: "Patoloji",
    image: doktor2,  
  },
  {
    name: "Doç. Dr. Emrullah Beyazyıldız",
    specialization: "Patoloji",
    image: doktor2, 
  },
];

const EgitmenlerPage = () => {
  return (
    <>
      <Container className="egitmenler-container">
        <Row>
          <Col className="text-center mb-4">
            <h3 className="egitmenler-title">Eğitmenlerimiz</h3>
          </Col>
        </Row>
        <Row className="egitmenler-row">
          {instructors.map((instructor, index) => (
            <Col key={index} md={4} sm={6} xs={12} className="mb-4">
              <Link to="/egitmendetay" style={{ textDecoration: 'none' }}>
                <Card className="shadow-sm">
                  <Card.Img
                    variant="top"
                    src={instructor.image}
                    className="card-img"
                  />
                  <Card.Body>
                    <Card.Title className="text-center">{instructor.name}</Card.Title>
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
    </>
  );
};

export default EgitmenlerPage;
