import React from "react";
import { Container, Row, Col, Card, Image, Accordion } from "react-bootstrap";
import playIcon from "../../assets/images/videopaket.png"; // Play ikon yolu
import videoThumbnail from "../../assets/images/sontekrar.png"; // Video görsel yolu

const VideoPackagesPage = () => {
  const videos = [
    {
      id: 1,
      title: "Patoloji Sorularla Son Tekrar Video Paketi",
      date: "15.12.2024",
      instructor: "Doç. Dr. Emrullah Beyazyalız",
      videoCount: 35,
      thumbnail: videoThumbnail,
      sections: [
        { id: 1, name: "Patoloji - Konu Kamp - 01- A Hücre Zedelenmesi", time: "22:05" },
        { id: 2, name: "Patoloji - Konu Kamp - 02- B Hücre Onarımı", time: "18:30" },
      ],
    },
    {
      id: 2,
      title: "Farmakoloji Video Paketi",
      date: "20.12.2024",
      instructor: "Prof. Dr. Ahmet Özkan",
      videoCount: 20,
      thumbnail: videoThumbnail,
      sections: [
        { id: 1, name: "Farmakoloji - Konu 01 - Giriş", time: "15:45" },
        { id: 2, name: "Farmakoloji - Konu 02 - İlaç Metabolizması", time: "25:30" },
      ],
    },
  ];

  return (
    <Container className="mt-5">
      {/* Başlık ve Video Paketleri */}
      <Row className="mb-4">
        {/* Sayfa Başlığı */}
        <Col xs={12} className="text-center mb-4">
          <h4 className="fw-bold">
            <Image src={playIcon} width={100} height={60} className="me-2" alt="Play Icon" />
            Video Paketlerim
          </h4>
        </Col>

        {/* Video Paketleri */}
        <Col xs={12}>
          {videos.map((video) => (
            <Card key={video.id} className="shadow-sm p-3 mb-4 mx-auto" style={{ maxWidth: "800px" }}>
              <Row className="g-3 align-items-center">
                {/* Thumbnail */}
                <Col xs={12} md={3} className="text-center">
                  <Image
                    src={video.thumbnail}
                    className="img-fluid rounded"
                    alt="Video Thumbnail"
                  />
                </Col>

                {/* Detaylar */}
                <Col xs={12} md={6}>
                  <h5 className="fw-bold">{video.title}</h5>
                  <p className="text-muted mb-1">Satın Alma Tarihi: {video.date}</p>
                  <p className="text-muted">{video.instructor}</p>
                </Col>

                {/* Bölümler */}
                <Col xs={12} md={3}>
                  <Accordion>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Bölümler ({video.videoCount} Video)</Accordion.Header>
                      <Accordion.Body>
                        {video.sections.map((section) => (
                          <div
                            key={section.id}
                            className="d-flex justify-content-between border-bottom py-2"
                          >
                            <span>{section.name}</span>
                            <span className="text-muted">{section.time}</span>
                          </div>
                        ))}
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </Col>
              </Row>
            </Card>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default VideoPackagesPage;
