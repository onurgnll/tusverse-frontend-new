import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import questionIcon from "../assets/images/soruicon.png";
import cargoIcon from "../assets/images/kargoicon.png";
import BookIcon from "@mui/icons-material/Book";

const BookSection = () => {
  return (
    <>
      <Row className="mb-3 d-flex justify-content-center">
        <Col className="d-flex justify-content-center">
          <h3 className="mt-3">Kitaplar</h3> {/* Margin top added */}
        </Col>
      </Row>
      <Row>
        {Array(3)
          .fill(null)
          .map((_, idx) => (
            <Col md={4} sm={6} xs={12} className="mb-4 d-flex justify-content-center" key={idx}>
              <Card className="h-100 book-card">
                {/* Title */}
                <Card.Header className="text-center book-title">
                  <strong>Patoloji Sorularla Son Tekrar Kitap</strong>
                </Card.Header>

                {/* Image */}
                <Card.Img
                  variant="top"
                  src="src/assets/images/patoloji.png" // Replace with the book image URL
                  alt="Book Cover"
                  className="book-image"
                />

                {/* Content with icons */}
                <Card.Body>
                  <div>
                    <span>Doç Dr. Emrullah Beyazyıldız</span>
                  </div>
                  <div className="icon-row" style={{ display: 'flex', alignItems: 'center' }}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: 24, // Adjust width and height to match other icons
                        height: 24,
                        borderRadius: "50%",
                        backgroundColor: "green",
                        color: "white",
                      }}
                    >
                      <BookIcon sx={{ fontSize: 14 }} /> {/* Adjust size */}
                    </div>
                    <span style={{ marginLeft: '20px' }}>232 Sayfa</span> {/* Margin for spacing */}
                  </div>
                  <div className="icon-row" style={{ display: 'flex', alignItems: 'center' }}>
                    <img
                      src={questionIcon}
                      alt="Question Icon"
                      className="custom-icon"
                      style={{ width: 24, height: 24 }} // Make sure icons have consistent size
                    />
                    <span style={{ marginLeft: '10px' }}>500 Soru</span>
                  </div>
                  <div className="icon-row" style={{ display: 'flex', alignItems: 'center' }}>
                    <img
                      src={cargoIcon}
                      alt="Cargo Icon"
                      className="custom-icon"
                      style={{ width: 24, height: 24 }} // Make sure icons have consistent size
                    />
                    <span style={{ marginLeft: '10px' }}>Hızlı Kargo</span>
                  </div>
                </Card.Body>

                {/* Footer with cart button */}
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
