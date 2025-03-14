import React from "react";
import { Container, Row, Col, Card, Image, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; 
import examIcon from "../../assets/examicon.jpg"; 
import "./denemelerim.css";

const ExamsPage = () => {
  const navigate = useNavigate(); 

  const exams = [
    {
      id: 1,
      title: "TUSVERSE 5. Türkiye Geneli TUS Denemesi",
      duration: "3 Saat",
      date: "02.01.2025",
      time: "10:00 - 13:00",
      info: "Bu deneme sınavına web tarayıcısından erişilebilir",
      questions: "120 Soru",
      buttonText: "Başlamasına 3 Saat",
      buttonVariant: "success",
    },
    {
      id: 2,
      title: "TUSVERSE 5. Türkiye Geneli TUS Denemesi",
      duration: "3 Saat",
      date: "02.01.2025",
      time: "10:00 - 13:00",
      info: "Bu deneme sınavına web tarayıcısından erişilebilir",
      questions: "120 Soru",
      buttonText: "Sonuçları Görüntüle",
      buttonVariant: "info",
      navigateToResults: true, 
    },
  ];

  const handleButtonClick = (exam) => {
    if (exam.navigateToResults) {
      navigate("sonuclarim"); 
    }
  };

  return (
    <Container fluid className="mt-5 mb-5">
      {/* Header */}
      <Row className="mb-4">
        <Col xs={12} className="text-center">
          <h4 className="fw-bold d-flex align-items-center justify-content-center">
            <Image src={examIcon} width={30} height={30} className="me-2" alt="Exam Icon" />
            Deneme Sınavlarım
          </h4>
        </Col>
      </Row>

      {/* Exam Cards */}
      <Row className="justify-content-center">
        {exams.map((exam) => (
          <Col key={exam.id} xs={12} sm={6} md={4} lg={3} className="mb-3">
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title className="fw-bold text-center mb-3">{exam.title}</Card.Title>
                <Card.Text>
                  <div className="d-flex align-items-center mb-2">
                    <i className="bi bi-clock me-2"></i> {exam.duration}
                  </div>
                  <div className="d-flex align-items-center mb-2">
                    <i className="bi bi-calendar me-2"></i> {exam.date} {exam.time}
                  </div>
                  <div className="d-flex align-items-center mb-2">
                    <i className="bi bi-info-circle me-2"></i> {exam.info}
                  </div>
                  <div className="d-flex align-items-center mb-2">
                    <i className="bi bi-question-circle me-2"></i> {exam.questions}
                  </div>
                </Card.Text>
                <div className="text-center">
                  <Button
                    variant={exam.buttonVariant}
                    className="px-4 py-2 enlarge-button"
                    onClick={() => handleButtonClick(exam)} 
                  >
                    {exam.buttonText}
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ExamsPage;
