import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import bookIcon from "../../assets/bookicon.png"; // Replace with actual book icon path
import bookImage from "../../assets/kitap1.png"; // Replace with actual book image path
import deliveredIcon from "../../assets/delivered.png"; // Teslim Edildi icon
import preparingIcon from "../../assets/preparing.png"; // Hazırlanıyor icon
import Cargo from "../../assets/cargo.png"; // Kargoda icon

const BooksPage = () => {
  const books = [
    {
      id: 1,
      title: "Patoloji Sorularla Son Tekrar Kitap",
      author: "Doç. Dr. Emrullah Beyazyalız",
      pages: 325,
      questions: "5000+ Soru",
      purchaseDate: "15.12.2024",
      status: "Teslim Edildi",
      image: bookImage,
    },
    {
      id: 2,
      title: "Patoloji Sorularla Son Tekrar Kitap",
      author: "Doç. Dr. Emrullah Beyazyalız",
      pages: 325,
      questions: "5000+ Soru",
      purchaseDate: "15.12.2024",
      status: "Kargoda",
      image: bookImage,
    },
    {
      id: 3,
      title: "Patoloji Sorularla Son Tekrar Kitap",
      author: "Doç. Dr. Emrullah Beyazyalız",
      pages: 325,
      questions: "5000+ Soru",
      purchaseDate: "15.12.2024",
      status: "Hazırlanıyor",
      image: bookImage,
    },
    {
        id: 4,
        title: "Patoloji Sorularla Son Tekrar Kitap",
        author: "Doç. Dr. Emrullah Beyazyalız",
        pages: 325,
        questions: "5000+ Soru",
        purchaseDate: "15.12.2024",
        status: "Teslim Edildi",
        image: bookImage,
      },
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case "Teslim Edildi":
        return deliveredIcon; // Teslim Edildi icon
      case "Kargoda":
        return Cargo; // Kargoda icon
      case "Hazırlanıyor":
        return preparingIcon; // Hazırlanıyor icon
      default:
        return null;
    }
  };

  return (
    <Container fluid className="mt-5 px-0">
      {/* Header */}
      <Row className="mb-4">
        <Col xs={12} className="text-center">
          <h4 className="fw-bold d-flex align-items-center justify-content-center">
            <Image src={bookIcon} width={30} height={30} className="me-2" alt="Book Icon" />
            Kitaplarım
          </h4>
        </Col>
      </Row>

      {/* Books */}
      <Row className="mt-4 justify-content-start mx-0">
        {books.map((book) => (
          <Col key={book.id} xs={12} sm={6} md={4} lg={3} className="mb-3">
            <Card className="h-100 shadow-sm" style={{ maxWidth: "300px", margin: "0 auto" }}>
              <Card.Body className="d-flex flex-column align-items-center">
                <Card.Img
                  variant="top"
                  src={book.image}
                  alt="Book Image"
                  className="img-fluid rounded mb-3"
                  style={{
                    width: "100px",
                    height: "150px",
                    objectFit: "cover",
                  }}
                />
                <Card.Title className="fw-bold text-center">{book.title}</Card.Title>
                <Card.Text className="text-muted text-center mb-2">{book.author}</Card.Text>
                <Card.Text className="text-muted text-center mb-2">
                  Satın Alma Tarihi: {book.purchaseDate}
                </Card.Text>
                <div className="d-flex align-items-center justify-content-center">
                  <Image
                    src={getStatusIcon(book.status)}
                    width={20}
                    height={20}
                    className="me-2"
                    alt={`${book.status} Icon`}
                  />
                  <span
                    className={`fw-bold ${
                      book.status === "Teslim Edildi"
                        ? "text-success"
                        : book.status === "Kargoda"
                        ? "text-primary"
                        : "text-warning"
                    }`}
                  >
                    {book.status}
                  </span>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BooksPage;
