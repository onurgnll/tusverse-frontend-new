import React from "react";
import { Row, Col, Card, Dropdown, Button } from "react-bootstrap";
import videoicon from "../assets/images/videoicon.png";
import questionIcon from "../assets/images/soruicon.png";
import cargoIcon from "../assets/images/kargoicon.png";
import "./videosection.css"; // General styles for VideoSection

const VideoSection = ({ className }) => {
  return (
    <div className={`video-section ${className || ""}`}>
     <Row className="mb-3 mt-5 d-flex justify-content-center">
  <Col xs={12} className="d-flex justify-content-center">
    <h3>Videolar</h3>
  </Col>
</Row>

      <Row >
        {Array(3)
          .fill(null)
          .map((_, idx) => (
            <Col
              md={4}
              sm={6}
              xs={12}
              className="d-flex justify-content-center" // Removed mb-4 to avoid space between cards
              key={idx}
            >
              <Card className="h-100 book-card">
                {/* Title */}
                <Card.Header className="text-center book-title">
                  <strong>Jinekoloji Videoları</strong>
                </Card.Header>

                {/* Image */}
                <Card.Img
                  variant="top"
                  src="src/assets/images/jine.png" // Replace with the video cover URL
                  alt="Video Cover"
                  className="book-image"
                />

                {/* Content */}
                <Card.Body>
                  <div className="icon-row">
                    <img
                      src={videoicon}
                      alt="Video Icon"
                      className="custom-icon"
                    />
                    <span> 125 Video</span>
                  </div>
                  <div className="icon-row">
                    <img
                      src={questionIcon}
                      alt="Question Icon"
                      className="custom-icon"
                    />
                    <span>Kitaplar pakete dahil değildir</span>
                  </div>
                  <div className="icon-row" style={{ display: 'flex', alignItems: 'center' }}>
                    <img
                      src={cargoIcon}
                      alt="Cargo Icon"
                      className="custom-icon"
                    />
                    <span>Videolara sınırsız erişim</span>
                  </div>
                </Card.Body>

                {/* Footer */}
                <Card.Footer className="text-center">
                  <Dropdown>
                    <Dropdown.Toggle
                      variant="secondary"
                      className="dropdown-toggle"
                      id={`dropdown-${idx}`}
                    >
                      Konu Anlatımı
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="#">Soru Kampı</Dropdown.Item>
                      <Dropdown.Item href="#">Tekrar Kampı</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>

                  <Button variant="success" className="cart-button">
                    <span>50₺</span>
                  </Button>
                </Card.Footer>
              </Card>
            </Col>
          ))}
      </Row>
    </div>
  );
};

export default VideoSection;
