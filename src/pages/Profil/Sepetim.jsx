import React from "react";
import { Container, Row, Col, Card, Button, ListGroup } from "react-bootstrap";
import BookSection from "../../components/BookSection"
const CartPage = () => {
  const cartItems = [
    {
      title: "Kadın Doğum Sorularla Son Tekrar Kitabı",
      subtitle: "(Doç. Dr. Oktay KAYMAK)",
      type: "Fiziksel Kitap",
      price: 600,
      image: "src/assets/kitap1.png", // Replace with actual image path
    },
    {
      title: "Patoloji Sorularla Son Tekrar Video Paketi",
      subtitle: "Video Paketi - 35 Video",
      price: 3999,
      image: "src/assets/kitap1.png", // Replace with actual image path
    },
  ];

  const recommendedProducts = [
    {
      title: "Jinekoloji Videoları",
      subtitle: "125 Video",
      details: "Videolara Sınırsız Erişim",
      price: 3999,
      badge: "green",
      image: "src/assets/kitap1.png", // Replace with actual image path
    },
    {
      title: "Jinekoloji (E-Kitap)",
      subtitle: "325 Sayfa",
      details: "5000+ Soru",
      price: 599,
      badge: "blue",
      image: "src/assets/kitap1.png", // Replace with actual image path
    },
    {
      title: "Patoloji Sorularla Son Tekrar Kitap",
      subtitle: "325 Sayfa",
      details: "5000+ Soru",
      price: 599,
      badge: "blue",
      image: "src/assets/kitap1.png", // Replace with actual image path
    },
  ];

  const calculateTotal = () =>
    cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <Container className="py-4">
      <Row className="gy-4">
       
        <Col lg={9} md={12} sm={12}> 
          <Card
            style={{ transform: "none", boxShadow: "none", maxWidth: "850px" }}
            className="mb-4"
          >
          <div className="mt-3">
          <h5>SEPET İÇERİĞİ</h5>

          </div>
              
            
            <ListGroup variant="flush">
              {cartItems.map((item, index) => (
                <ListGroup.Item
                  key={index}
                  className="d-flex justify-content-between align-items-center"
                >
                  <div className="d-flex align-items-center">
                    <img
                      src={item.image}
                      alt={item.title}
                      style={{
                        width: "100px",
                        height: "auto",
                        marginRight: "55px",
                        objectFit: "cover",
                      }}
                    />
                    <div>
                      <h6>{item.title}</h6>
                      <p className="text-muted mb-0">{item.subtitle}</p>
                      <p className="text-muted">{item.type}</p>
                    </div>
                  </div>
                  <h6>{item.price} TL</h6>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Card>
        </Col>

        {/* Order Summary */}
        <Col lg={3} md={12} sm={12}> {/* Adjusted to fit the layout */}
          <Card
            style={{ transform: "none", boxShadow: "none" }}
            className="mb-4"
          >
             <div className="mt-3">
          <h5>SİPARİŞ TOPLAMI </h5>

          </div>
            <Card.Body>
              <ListGroup variant="flush" className="mb-3">
                {cartItems.map((item, index) => (
                  <ListGroup.Item
                    key={index}
                    className="d-flex justify-content-between"
                  >
                    <span>{item.title}</span>
                    <span>{item.price} TL</span>
                  </ListGroup.Item>
                ))}
              </ListGroup>
              <h5 className="text-center">Toplam: {calculateTotal()} TL</h5>
              <Button variant="success" className="w-100 mt-3">
                Sepeti Onayla
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <h5 className="mb-3">Bu Ürünleri Alanlar Şunları da Aldı:</h5>
        <BookSection />

        {/* Recommended Products 
        <Col xs={12}>
          <h5 className="mb-3">Bu Ürünleri Alanlar Şunları da Aldı:</h5>
          <Row className="g-4">
            {recommendedProducts.map((product, index) => (
              <Col lg={4} md={6} sm={12} xs={12} key={index}>
                <Card>
                  <Card.Body>
                    <div className="d-flex align-items-center mb-3">
                      <img
                        src={product.image}
                        alt={product.title}
                        style={{
                          width: "60px",
                          height: "auto",
                          marginRight: "15px",
                          objectFit: "cover",
                        }}
                      />
                      <div>
                        <Card.Title>{product.title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                          {product.subtitle}
                        </Card.Subtitle>
                      </div>
                    </div>
                    <Card.Text>{product.details}</Card.Text>
                    <Button variant="primary" className="w-100">
                      {product.price} TL
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col> */}
      </Row>
    </Container>
  );
};

export default CartPage;
