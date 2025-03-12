import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Badge,
  Tabs,
  Tab,
} from "react-bootstrap";
import {
  CheckCircleFill,
  ArrowLeft,
  PlayCircleFill,
} from "react-bootstrap-icons";
import { useParams, useNavigate, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "./video.css";

const VideoDetay = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("description");

 
  const videoData = {
    id: Number.parseInt(id),
    title: "Patoloji Videoları",
    instructor: "ÇAĞLAYAN TEKBAŞ",
    instructorTitle: "Doç. Dr.",
    videoCount: 120,
    features: ["Altyapısı yeniden inşa edildi", "Videolara 3 gün erişim"],
    price: 3999,
    discountPrice: null,
    color: "#FF9800",
    description:
      "Bu video serisinde patoloji konuları detaylı olarak anlatılmaktadır. Tüm önemli konular ve sınavda çıkabilecek sorular kapsamlı bir şekilde ele alınmıştır.",
    videoList: [
      { id: 1, title: "Patolojiye Giriş", duration: "45:20" },
      { id: 2, title: "Hücre Hasarı ve Adaptasyonları", duration: "52:15" },
      { id: 3, title: "İnflamasyon", duration: "48:30" },
      { id: 4, title: "Doku Yenilenmesi ve Tamir", duration: "39:45" },
      { id: 5, title: "Hemodinamik Bozukluklar", duration: "55:10" },
    ],
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <Container className="py-4 justify-content-start">
      <Button variant="outline-secondary" className="mb-4" onClick={goBack}>
        <ArrowLeft className="me-2" /> Geri Dön
      </Button>
      <Row>
        
        <Col md={8} className="mb-4">
          <Row>
            
            <Col md={5}>
              <Card className="mb-4">
                <Card.Img
                  variant="top"
                  src="src/assets/images/jine.png" 
                  alt="Video Image"
                  style={{ objectFit: "cover", width: "100%", height: "300px" }}
                />
              </Card>
            </Col>

            
            <Col md={7}>
              <Card>
                <Card.Body>
                  <Tabs
                    activeKey={activeTab}
                    onSelect={(k) => setActiveTab(k)}
                    className="mb-3"
                  >
                    <Tab eventKey="description" title="Açıklama">
                      <h4>{videoData.title}</h4>
                      <p className="text-muted">
                        {videoData.instructorTitle} {videoData.instructor}{" "}
                        tarafından hazırlanmıştır
                      </p>
                      <p>{videoData.description}</p>

                      <h5 className="mt-4">Bu kursta öğrenecekleriniz:</h5>
                      <ul>
                        {videoData.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </Tab>
                    <Tab eventKey="videos" title="Video Listesi">
                      <div className="list-group">
                        {videoData.videoList.map((video) => (
                          <div
                            key={video.id}
                            className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                          >
                            <div className="d-flex justify-content-start align-items-center">
                              <PlayCircleFill
                                className="me-2"
                                style={{ color: videoData.color }}
                              />
                              {video.title}
                            </div>

                            <Badge bg="secondary ms-2">{video.duration}</Badge>
                          </div>
                        ))}
                      </div>
                    </Tab>
                  </Tabs>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>

        
        <Col md={4}>
          <Card className="sticky-top" style={{ top: "20px" }}>
            <Card.Header
              style={{ backgroundColor: videoData.color, color: "white" }}
            >
              <h5 className="mb-0">Kurs Bilgileri</h5>
            </Card.Header>
            <Card.Body>
              <div className="d-flex align-items-center mb-3">
                <CheckCircleFill className="me-2 text-success" />
                <span>{videoData.videoCount} Video</span>
              </div>

              {videoData.features.map((feature, index) => (
                <div key={index} className="d-flex align-items-center mb-2">
                  <CheckCircleFill className="me-2 text-success" size={14} />
                  <small>{feature}</small>
                </div>
              ))}

              <hr />

              <div className="mb-3">
                <h5>Fiyat:</h5>
                {videoData.discountPrice ? (
                  <div>
                    <del className="text-muted">
                      {videoData.price.toLocaleString()} TL
                    </del>
                    <h4 className="text-success">
                      {videoData.discountPrice.toLocaleString()} TL
                    </h4>
                  </div>
                ) : (
                  <h4>{videoData.price.toLocaleString()} TL</h4>
                )}
              </div>

              <Button variant="info" className="w-50 mb-2 text-white">
                <i className="bi bi-cart me-1"></i> Satın Al
              </Button>

              <Button variant="outline-info" className="w-100 mb-2">
  <Link to={`/videoizleme`} style={{ textDecoration: 'none', color: 'inherit' }}>
    Satın Almadan İzle <i className="ms-1">→</i>
  </Link>
</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default VideoDetay;
