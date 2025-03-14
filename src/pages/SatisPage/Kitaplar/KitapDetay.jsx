"use client";

import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Row,
  Col,
  Card,
  Button,
  Container,
  Breadcrumb,
  Modal,
} from "react-bootstrap";
import BookIcon from "@mui/icons-material/Book";
import questionIcon from "../../../assets/soruicon.png";
import cargoIcon from "../../../assets/kargoicon.png";
import "./bookdetail.css";
import exdeneme from '../../../assets/exdeneme.png';
const KitapDetay = () => {
  const { id } = useParams();
  const [book, setBook] = useState({
    id: id,
    title: "Patoloji Sorularla Son Tekrar Kitap",
    author: "Doç Dr. Emrullah Beyazyıldız",
    image: "src/assets/patoloji.png",
    pages: 232,
    questions: 500,
    price: 50,
    description:
      "Bu kitap, patoloji alanında kapsamlı bir tekrar kaynağı olarak hazırlanmıştır. İçerisinde 500 soru ve detaylı açıklamalar bulunmaktadır. Tıp öğrencileri ve uzmanlık sınavlarına hazırlananlar için ideal bir kaynaktır.",
    features: [
      "Kapsamlı soru bankası",
      "Detaylı çözümler",
      "Görsel destekli içerik",
      "Kolay anlaşılır anlatım",
    ],
    inStock: true,
    samplePages: [
      {
        id: 1,
        thumbnail: exdeneme,
        fullImage: exdeneme,
        title: "İçindekiler",
      },
      {
        id: 2,
        thumbnail: exdeneme,
        fullImage: exdeneme,
        title: "Örnek Soru 1",
      },
      {
        id: 3,
        thumbnail: exdeneme,
        fullImage: exdeneme,
        title: "Örnek Soru 2",
      },
      {
        id: 4,
        thumbnail: exdeneme,
        fullImage: exdeneme,
        title: "Çözüm Örneği",
      },
    ],
  });
  const [loading, setLoading] = useState(true);
  const [selectedSamplePage, setSelectedSamplePage] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  useEffect(() => {
    setSelectedSamplePage(book.samplePages[0]); // Set first sample page as default
    setLoading(false);
  }, [id]);
  const openImageModal = (page) => {
    setModalImage(page);
    setShowModal(true);
  };
  const navigateModal = (direction) => {
    if (!book || !modalImage) return;

    const currentIndex = book.samplePages.findIndex(
      (page) => page.id === modalImage.id
    );
    let newIndex;

    if (direction === "next") {
      newIndex = (currentIndex + 1) % book.samplePages.length;
    } else {
      newIndex =
        (currentIndex - 1 + book.samplePages.length) % book.samplePages.length;
    }

    setModalImage(book.samplePages[newIndex]);
  };

  return (
    <Container fluid className="py-5 book-detail-container">
      <Row>
        <Col lg={10} md={12}>
          {/* <Breadcrumb>
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
              Ana Sayfa
            </Breadcrumb.Item>
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/kitaplar" }}>
              Kitaplar
            </Breadcrumb.Item>
            <Breadcrumb.Item active>{book.title}</Breadcrumb.Item>
          </Breadcrumb> */}
        </Col>
      </Row>

      <Row>
        {/* Main Content - Left and Center */}
        <Col lg={9} md={12}>
          <Row className="mt-4">
            <Col lg={5} md={6} className="mb-4">
              <div className="book-detail-image-container">
                <img
                  src={book?.image || "/placeholder.svg"}
                  alt={book?.title}
                  className="book-detail-image img-fluid"
                />
              </div>
            </Col>
            <Col lg={7} md={6}>
              <h2 className="book-detail-title">{book.title}</h2>
              <p className="book-detail-author">{book.author}</p>

              <div className="book-detail-info">
                <div className="info-item d-flex align-items-center mb-2">
                  <div
                    className="d-flex justify-content-center align-items-center"
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: "50%",
                      backgroundColor: "green",
                      color: "white",
                    }}
                  >
                    <BookIcon sx={{ fontSize: 16 }} />
                  </div>
                  <span className="ms-2">{book.pages} Sayfa</span>
                </div>

                <div className="info-item d-flex align-items-center mb-2">
                  <img
                    src={questionIcon || "/placeholder.svg"}
                    alt="Question Icon"
                    style={{ width: 32, height: 32 }}
                  />
                  <span className="ms-2">{book.questions} Soru</span>
                </div>

                <div className="info-item d-flex align-items-center mb-2">
                  <img
                    src={cargoIcon || "/placeholder.svg"}
                    alt="Cargo Icon"
                    style={{ width: 32, height: 32 }}
                  />
                  <span className="ms-2">Hızlı Kargo</span>
                </div>
              </div>

              <div className="book-detail-price-container mt-4">
                <h3 className="book-detail-price" style={{ fontSize: "20px" }}>
                  {book.price}₺
                </h3>

                <Button className="add-to-cart-btn" size="md">
                  Sepete Ekle
                </Button>
              </div>

              <div className="book-detail-stock mt-3">
                {book.inStock ? (
                  <span className="text-success">✓ Stokta mevcut</span>
                ) : (
                  <span className="text-danger">✗ Stokta yok</span>
                )}
              </div>
            </Col>
          </Row>

          <Row className="mt-5">
            <Col lg={7}>
              <Card>
                <Card.Header as="h4">Kitap Açıklaması</Card.Header>
                <Card.Body>
                  <p>{book.description}</p>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={5}>
              <Card>
                <Card.Header as="h4">Özellikler</Card.Header>
                <Card.Body>
                  <ul className="feature-list">
                    {book.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>

        {/* Sample Pages - Right Side */}
        <Col lg={3} md={12} className="mt-4 mt-lg-0">
          <Card className="sample-pages-sidebar">
            <Card.Header as="h4">Örnek Sayfalar</Card.Header>
            <Card.Body>
              {selectedSamplePage && (
                <div
                  className="selected-sample-page mb-3"
                  onClick={() => openImageModal(selectedSamplePage)}
                >
                  <img
                    src={selectedSamplePage.fullImage || "/placeholder.svg"}
                    alt={selectedSamplePage.title}
                    className="img-fluid selected-page-image"
                  />
                  <p className="text-center mt-2">{selectedSamplePage.title}</p>
                  <div className="zoom-hint">
                    <span>Büyütmek için tıklayın</span>
                  </div>
                </div>
              )}

              <div className="sample-pages-thumbnails-vertical">
                {book.samplePages.map((page) => (
                  <div
                    key={page.id}
                    className={`sample-page-thumbnail ${
                      selectedSamplePage?.id === page.id ? "active" : ""
                    }`}
                    onClick={() => {
                      setSelectedSamplePage(page);
                    }}
                  >
                    <img
                      src={page.thumbnail || "/placeholder.svg"}
                      alt={page.title}
                      className="img-fluid thumbnail-image"
                    />
                    <p className="thumbnail-title">{page.title}</p>
                  </div>
                ))}
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Image Modal */}
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        size="lg"
        centered
        className="sample-page-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>{modalImage?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-image-container">
            {modalImage && (
              <img
                src={modalImage.fullImage || "/placeholder.svg"}
                alt={modalImage.title}
                className="img-fluid modal-image"
              />
            )}

            <Button
              variant="light"
              className="modal-nav-button modal-prev-button"
              onClick={() => navigateModal("prev")}
            >
              &lt;
            </Button>

            <Button
              variant="light"
              className="modal-nav-button modal-next-button"
              onClick={() => navigateModal("next")}
            >
              &gt;
            </Button>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="modal-thumbnails">
            {book.samplePages.map((page) => (
              <div
                key={page.id}
                className={`modal-thumbnail ${
                  modalImage?.id === page.id ? "active" : ""
                }`}
                onClick={() => setModalImage(page)}
              >
                <img
                  src={page.thumbnail || "/placeholder.svg"}
                  alt={page.title}
                  className="img-fluid"
                />
              </div>
            ))}
          </div>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Kapat
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};
export default KitapDetay;
