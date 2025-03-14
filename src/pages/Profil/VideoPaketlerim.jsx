import React, { useState } from "react";
import { Container, Row, Col, Card, Image, Button } from "react-bootstrap";
import { Menu, MenuItem } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import playIcon from "../../assets/videopaket.png";
import videoThumbnail from "../../assets/sontekrar.png";

const VideoPackagesPage = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedSections, setSelectedSections] = useState([]);

  const handleClick = (event, sections) => {
    setAnchorEl(event.currentTarget);
    setSelectedSections(sections);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
      <Row className="mb-4">
        <Col xs={12} className="text-center mb-4">
          <h4 className="fw-bold">
            <Image src={playIcon} width={100} height={60} className="me-2" alt="Play Icon" />
            Video Paketlerim
          </h4>
        </Col>
        <Col xs={12}>
          {videos.map((video) => (
            <Card key={video.id} className="shadow-sm p-3 mb-4 mx-auto" style={{ maxWidth: "800px", position: "relative" }}>
              <Row className="g-3 align-items-center">
                <Col xs={12} md={3} className="text-center">
                  <Image src={video.thumbnail} className="img-fluid rounded" alt="Video Thumbnail" />
                </Col>
                <Col xs={12} md={6}>
                  <h5 className="fw-bold">{video.title}</h5>
                  <p className="text-muted mb-1">Satın Alma Tarihi: {video.date}</p>
                  <p className="text-muted">{video.instructor}</p>
                </Col>
                <Col xs={12} md={3} className="text-center">
                  <Button variant="outline-primary" onClick={(e) => handleClick(e, video.sections)}>
                    Bölümler ({video.videoCount} Video)
                  </Button>
                </Col>
              </Row>
            </Card>
          ))}
        </Col>
      </Row>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        {selectedSections.map((section) => (
          <MenuItem key={section.id} onClick={handleClose}>
            {section.name} - <span className="text-muted">{section.time}</span>
          </MenuItem>
        ))}
      </Menu>
    </Container>
  );
};

export default VideoPackagesPage;
