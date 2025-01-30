import React, { useState } from "react";
import { Container, Row, Col, ListGroup, Card } from "react-bootstrap";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./videoizleme.css"

const VideoPage = ({ videoWidth = "100%", videoHeight = "450px" }) => {
  // Define the list of videos with their respective YouTube embed URLs
  const videoList = [
    { id: 1, title: "1- Patoloji - Konu Kamp - 01-A Hücre Zedelenmesi", src: "https://www.youtube.com/embed/hvChw5vzpbQ" },
    { id: 2, title: "2- Patoloji - Konu Kamp - 02-A İltihap", src: "https://www.youtube.com/embed/FxKOlZPmUDA" },
    { id: 3, title: "3- Patoloji - Konu Kamp - 03-A Doku Tamiri", src: "https://www.youtube.com/embed/Cq0aamOWyJ4" },
    { id: 4, title: "4- Patoloji - Konu Kamp - 04-A Tümör Patolojisi", src: "https://www.youtube.com/embed/oiVIR4GkOCc" },
  ];

  // Set the initial video to the first item in the list
  const [selectedVideo, setSelectedVideo] = useState(videoList[0]);

  return (
    <>
      <Header />
      <Container className="my-5">
        <Row>
          {/* Left Column - Video Player */}
          <Col md={8}>
            <Card className="mb-4">
              <div
                className="video-container"
                style={{ width: videoWidth, height: videoHeight }}
              >
                <iframe
                  src={selectedVideo.src}  // Update iframe source with selected video
                  title="Video"
                  allowFullScreen
                  style={{ border: 0, width: "100%", height: "100%" }}
                ></iframe>
              </div>
              <Card.Body>
                <Card.Title>{selectedVideo.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          {/* Right Column - Video List */}
          <Col md={4}>
            <Card>
              <Card.Header>
                <h5>2024 - Patoloji Hızlı Tekrar Konu Kampı</h5>
              </Card.Header>
              <ListGroup variant="flush">
                {videoList.map((video) => (
                  <ListGroup.Item
                    key={video.id}
                    className="d-flex justify-content-between align-items-center text-start"
                    onClick={() => setSelectedVideo(video)} // Set selected video when clicked
                    style={{ cursor: 'pointer' }} // Change cursor to indicate it's clickable
                  >
                    <span>{video.title}</span>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card>
          </Col>
        </Row>

        {/* Description Section */}
        <Row className="mt-4">
          <Col>
           
            <p className="text-muted">
              Beyazyıldız Patoloji Hızlı Tekrar Kamp Kitabı (120 sayfa) ile takip önerilir.
              Temel ve Klinik Patoloji konu kitabınız ile de kampı takip edebilirsiniz.
            </p>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default VideoPage;
