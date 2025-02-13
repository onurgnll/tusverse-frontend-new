import React from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { Row, Col, Card, Button, Dropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import videoicon from "../../../assets/images/videoicon.png";
import questionIcon from "../../../assets/images/soruicon.png";
import cargoIcon from "../../../assets/images/kargoicon.png";
import "./video.css";

const VideoSatis = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  // Function to handle card click
  const handleCardClick = (videoId) => {
    navigate(`/videoizleme`); // Redirect to video detail page
  };

  // Function to handle dropdown click (to prevent navigation)
  const handleDropdownClick = (e) => {
    e.stopPropagation(); // Prevent card click handler from firing
  };

  // Function to handle button click (to prevent navigation)
  const handleButtonClick = (e) => {
    e.stopPropagation(); // Prevent card click handler from firing
  };

  return (
    <>
      <Row className="mb-3">
        <Col className="text-center-title">
          <h3>Videolar</h3>
        </Col>
      </Row>
      <Row className="cards-container">
        {Array(6)
          .fill(null)
          .map((_, idx) => (
            <Col md={4} sm={6} xs={12} className="mb-4" key={idx}>
              <Card
                className="h-100 book-card"
                onClick={() => handleCardClick(idx)} // Add click event to navigate
              >
                {/* Title */}
                <Card.Header className="text-center book-title">
                  <strong>Jinekoloji Videoları</strong>
                </Card.Header>

                {/* Image */}
                <Card.Img
                  variant="top"
                  src="src/assets/images/jine.png" // Replace with the actual video image URL
                  alt="Video Cover"
                  className="book-image"
                />

                {/* Content with icons */}
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
                  <div className="icon-row">
                    <img
                      src={cargoIcon}
                      alt="Cargo Icon"
                      className="custom-icon"
                    />
                    <span>Videolara sınırsız erişim</span>
                  </div>
                </Card.Body>

                <Card.Footer className="text-center">
                  {/* Dropdown Button for "Konu Anlatımı" */}
                  <Dropdown onClick={handleDropdownClick}>
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

                  <Button
                    variant="success"
                    className="cart-button"
                    onClick={handleButtonClick} // Prevent card click
                  >
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

export default VideoSatis;
