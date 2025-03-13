import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material"; 
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import playIcon from "../../assets/images/videopaket.png";
import videoThumbnail from "../../assets/images/sontekrar.png"; 

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
         
             
             <Col xs={12} md={3} className="position-relative">
               <Accordion>
                 <AccordionSummary
                   expandIcon={<ExpandMoreIcon />}
                   aria-controls={`panel-${video.id}-content`}
                   id={`panel-${video.id}-header`}
                 >
                   <Typography>Bölümler ({video.videoCount} Video)</Typography>
                 </AccordionSummary>
                 <AccordionDetails
                   sx={{
                     position: "absolute", 
                     top: "-100%", 
                     left: 0,
                     width: "100%", 
                     zIndex: 10, 
                     backgroundColor: "white", 
                     boxShadow: "0px -4px 6px rgba(0, 0, 0, 0.1)", 
                     padding: "10px",
                     maxHeight: "none",
                     overflowY: "auto", 
                   }}
                 >
                   {video.sections.map((section) => (
                     <div key={section.id} className="d-flex justify-content-between border-bottom py-2">
                       <span>{section.name}</span>
                       <span className="text-muted">{section.time}</span>
                     </div>
                   ))}
                 </AccordionDetails>
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
