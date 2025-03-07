import { Row, Col, Card, Dropdown, Button } from "react-bootstrap"
import videoicon from "../assets/images/videoicon.png"
import questionIcon from "../assets/images/soruicon.png"
import cargoIcon from "../assets/images/kargoicon.png"
import "./videosection.css"

const VideoSection = ({ className }) => {
  return (
    <div className={`video-section ${className || ""}`}>
      <Row className="mb-4 mt-5">
        <Col xs={12} className="text-center">
          <h3 className="section-title">Videolar</h3>
          <div className="title-underline"></div>
        </Col>
      </Row>

      <Row className="justify-content-center">
        {Array(3)
          .fill(null)
          .map((_, idx) => (
            <Col lg={4} md={6} sm={12} className="mb-4 d-flex justify-content-center" key={idx}>
              <Card className="video-card">
                <div className="card-ribbon">Popüler</div>

                <Card.Header className="text-center card-header">
                  <strong>Jinekoloji Videoları</strong>
                </Card.Header>

                <div className="card-img-container">
                  <Card.Img variant="top" src="src/assets/images/jine.png" alt="Video Cover" className="card-image" />
                  <div className="img-overlay">
                    <div className="play-button">
                      <i className="fa fa-play"></i>
                    </div>
                  </div>
                </div>

                <Card.Body className="card-body">
                  <div className="info-container">
                    <div className="icon-row">
                      <div className="icon-wrapper">
                        <img src={videoicon || "/placeholder.svg"} alt="Video Icon" className="custom-icon" />
                      </div>
                      <span className="info-text">125 Video</span>
                    </div>

                    <div className="icon-row">
                      <div className="icon-wrapper">
                        <img src={questionIcon || "/placeholder.svg"} alt="Question Icon" className="custom-icon" />
                      </div>
                      <span className="info-text">Kitaplar pakete dahil değildir</span>
                    </div>

                    <div className="icon-row">
                      <div className="icon-wrapper">
                        <img src={cargoIcon || "/placeholder.svg"} alt="Cargo Icon" className="custom-icon" />
                      </div>
                      <span className="info-text">Videolara sınırsız erişim</span>
                    </div>
                  </div>
                </Card.Body>

                <Card.Footer className="card-footer">
                  <Dropdown className="mb-2">
                    <Dropdown.Toggle variant="secondary" className="dropdown-toggle" id={`dropdown-${idx}`}>
                      Konu Anlatımı
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="dropdown-menu">
                      <Dropdown.Item href="#">Soru Kampı</Dropdown.Item>
                      <Dropdown.Item href="#">Tekrar Kampı</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>

                  <Button variant="success" className="cart-button">
                    <span className="price">50₺</span>
                    <span className="button-text">Sepete Ekle</span>
                  </Button>
                </Card.Footer>
              </Card>
            </Col>
          ))}
      </Row>
    </div>
  )
}

export default VideoSection

