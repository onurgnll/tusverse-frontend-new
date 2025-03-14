import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom"; 
import questionIcon from "../assets/soruicon.png";
import cargoIcon from "../assets/kargoicon.png";
import BookIcon from "@mui/icons-material/Book";
import "./book.css";
import patoloji from '../assets/patoloji.png';
const BookSection = () => {
  return (
    <>
      <Row className="mb-3 d-flex justify-content-center w-100">
        <Col className="d-flex justify-content-center w-100">
          <h3 className="mt-3 " style={{ fontWeight: "bold" }}>
            Kitaplar
          </h3>
        </Col>
      </Row>
      <Row className="mb-5 justify-content-center">
        {Array(3)
          .fill(null)
          .map((_, idx) => (
            <Col
              lg={4}
              md={6}
              sm={8}
              xs={12}
              className="d-flex justify-content-center mb-4"
              key={idx}
            >
              <Card
                className="h-100 book-card"
                style={{ width: "100%", maxWidth: "350px" }}
              >
                <Card.Header className="text-center book-title">
                  <strong>Patoloji Sorularla Son Tekrar Kitap</strong>
                </Card.Header>
                <Link to="/kitapdetay" className="text-decoration-none">
                  <Card.Img
                    variant="top"
                    src={patoloji}
                    style={{ width: "100%", height: "auto" }}
                    alt="Book Cover"
                    className="book-image"
                  />
                </Link>
                <Card.Body>
                  <div>
                    <span>Doç Dr. Emrullah Beyazyıldız</span>
                  </div>
                  <div className="icon-row d-flex align-items-center">
                    <div
                      className="d-flex justify-content-center align-items-center"
                      style={{
                        width: 28,
                        height: 28,
                        borderRadius: "50%",
                        backgroundColor: "green",
                        color: "white",
                      }}
                    >
                      <BookIcon sx={{ fontSize: 14 }} />
                    </div>
                    <span className="ms-1">232 Sayfa</span>
                  </div>
                  <div className="icon-row d-flex align-items-center">
                    <img
                      src={questionIcon}
                      alt="Question Icon"
                      className="custom-icon"
                      style={{ width: 28, height: 28 }}
                    />
                    <span className="ms-1">500 Soru</span>
                  </div>
                  <div className="icon-row d-flex align-items-center">
                    <img
                      src={cargoIcon}
                      alt="Cargo Icon"
                      className="custom-icon"
                      style={{ width: 28, height: 28 }}
                    />
                    <span className="ms-1">Hızlı Kargo</span>
                  </div>
                </Card.Body>
               
                <Button className="cart-button">
                  <span>50₺</span>
                </Button>
              </Card>
            </Col>
          ))}
      </Row>
    </>
  );
};

export default BookSection;
