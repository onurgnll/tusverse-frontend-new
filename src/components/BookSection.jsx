import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import questionIcon from "../assets/images/soruicon.png";
import cargoIcon from "../assets/images/kargoicon.png";
import BookIcon from "@mui/icons-material/Book";
import "./book.css";

const BookSection = () => {
  return (
    <>
      <Row className="mb-3 d-flex justify-content-center">
        <Col className="d-flex justify-content-center">
          <h3 className="mt-3">Kitaplar</h3>
        </Col>
      </Row>
      <Row className="justify-content-center">
        {Array(3)
          .fill(null)
          .map((_, idx) => (
            <Col
              lg={4} md={6} sm={8} xs={12}
              className="d-flex justify-content-center mb-4"
              key={idx}
            >
              <Card className="h-100 book-card" style={{ width: "100%", maxWidth: "250px" }}>
                <Card.Header className="text-center book-title">
                  <strong>Patoloji Sorularla Son Tekrar Kitap</strong>
                </Card.Header>
                <Card.Img
                  variant="top"
                  src="src/assets/images/patoloji.png"
                  alt="Book Cover"
                  className="book-image"
                />
                <Card.Body>
                  <div>
                    <span>Doç Dr. Emrullah Beyazyıldız</span>
                  </div>
                  <div className="icon-row d-flex align-items-center">
                    <div className="d-flex justify-content-center align-items-center" style={{ width: 24, height: 24, borderRadius: "50%", backgroundColor: "green", color: "white" }}>
                      <BookIcon sx={{ fontSize: 14 }} />
                    </div>
                    <span className="ms-2">232 Sayfa</span>
                  </div>
                  <div className="icon-row d-flex align-items-center">
                    <img src={questionIcon} alt="Question Icon" className="custom-icon" style={{ width: 24, height: 24 }} />
                    <span className="ms-2">500 Soru</span>
                  </div>
                  <div className="icon-row d-flex align-items-center">
                    <img src={cargoIcon} alt="Cargo Icon" className="custom-icon" style={{ width: 24, height: 24 }} />
                    <span className="ms-2">Hızlı Kargo</span>
                  </div>
                </Card.Body>
                <Card.Footer className="text-center">
                  <Button variant="success" className="cart-button">
                    <span>50₺</span>
                  </Button>
                </Card.Footer>
              </Card>
            </Col>
          ))}
      </Row>
    </>
  );
};

export default BookSection;
