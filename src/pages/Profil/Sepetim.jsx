import React from "react";
import { Container, Row, Col, Card, Button, ListGroup } from "react-bootstrap";


const CartPage = () => {
  const cartItems = [
    {
      title: "Kadın Doğum Sorularla Son Tekrar Kitabı",
      subtitle: "(Doç. Dr. Oktay KAYMAK)",
      type: "Fiziksel Kitap",
      price: 600,
    },
    {
      title: "Patoloji Sorularla Son Tekrar Video Paketi",
      subtitle: "Video Paketi - 35 Video",
      price: 3999,
    },
  ];

  const recommendedProducts = [
    {
      title: "Jinekoloji Videoları",
      subtitle: "125 Video",
      details: "Videolara Sınırsız Erişim",
      price: 3999,
      badge: "green",
    },
    {
      title: "Jinekoloji (E-Kitap)",
      subtitle: "325 Sayfa",
      details: "5000+ Soru",
      price: 599,
      badge: "blue",
    },
    {
      title: "Patoloji Sorularla Son Tekrar Kitap",
      subtitle: "325 Sayfa",
      details: "5000+ Soru",
      price: 599,
      badge: "blue",
    },
  ];

  const calculateTotal = () =>
    cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <Container className="py-4">
      <Row>
        {/* Cart Items (Left) */}
        <Col lg={8} className="mb-4">
          <Card>
            <Card.Header className="text-center bg-light">
              <h5>Sepet İçeriği</h5>
            </Card.Header>
            <ListGroup variant="flush">
              {cartItems.map((item, index) => (
                <ListGroup.Item
                  key={index}
                  className="d-flex justify-content-between align-items-center"
                >
                  <div>
                    <h6>{item.title}</h6>
                    <p className="text-muted mb-0">{item.subtitle}</p>
                    <p className="text-muted">{item.type}</p>
                  </div>
                  <h6>{item.price} TL</h6>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Card>
        </Col>

        {/* Order Summary (Right) */}
        <Col lg={4} className="mb-4">
          <Card>
            <Card.Header className="text-center bg-light">
              <h5>Sipariş Toplamı</h5>
            </Card.Header>
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
      </Row>

      {/* Recommended Products (Below) */}
      <Row className="mt-4">
        <Col>
          <h5 className="mb-3">Bu Ürünleri Alanlar Şunları da Aldı:</h5>
          <Row>
            {recommendedProducts.map((product, index) => (
              <Col md={4} sm={6} xs={12} key={index} className="mb-4">
                <Card>
                  <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      {product.subtitle}
                    </Card.Subtitle>
                    <Card.Text>{product.details}</Card.Text>
                    <Button variant="primary">{product.price} TL</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default CartPage;
