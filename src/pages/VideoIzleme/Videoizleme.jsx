import React, { useState } from "react";
import { Container, Row, Col, ListGroup, Card } from "react-bootstrap";
import "./videoizleme.css"
const videos = [
  { id: 1, title: "1- Patoloji - Konu Kamp - 01-A Hücre Zedelenmesi", src: "https://www.youtube.com/embed/hvChw5vzpbQ" },
  { id: 2, title: "2- Patoloji - Konu Kamp - 02-A İltihap", src: "https://www.youtube.com/embed/FxKOlZPmUDA" },
  { id: 3, title: "3- Patoloji - Konu Kamp - 03-A Doku Tamiri", src: "https://www.youtube.com/embed/Cq0aamOWyJ4" },
  { id: 4, title: "4- Patoloji - Konu Kamp - 04-A Tümör Patolojisi", src: "https://www.youtube.com/embed/oiVIR4GkOCc" }
];

const VideoPage = () => {
  const [selectedVideo, setSelectedVideo] = useState(videos[0]);

  return (
    <Row className="my-5 ">
      <Row>
        <Col md={8} lg={8} className="video-container">
          <div className="w-100">
            <div>
              <div className="ratio ratio-16x9">
                <iframe
                  width="100%"
                  height="400"
                  src={selectedVideo.src}
                  title={selectedVideo.title}
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
              <h4 className="mb-4 mt-4">{selectedVideo.title}</h4>
            </div>
          </div>
        </Col>
        <Col md={4}>
          <h5>2024-Patoloji Hızlı Tekrar Konu Kampı</h5>
          <ListGroup>
            {videos.map((video) => (
              <ListGroup.Item
                key={video.id}
                action
                active={video.id === selectedVideo.id}
                onClick={() => setSelectedVideo(video)}
              >
                {video.title}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={12} className="text-center">
          <p>Beyazyıldız Patoloji Hızlı Tekrar Kamp Kitabı (120 sayfa) ile takip önerilir.
          Temel ve Klinik Patoloji konu kitabınız ile de kampı takip edebilirsiniz.</p>
        </Col>
      </Row>
    </Row>
  );
};

export default VideoPage;
