"use client"

import { useEffect } from "react"
import { Container, Row, Col, Card, Button, ProgressBar } from "react-bootstrap"
import {
  Celebration,
  EmojiEvents,
  Timeline,
  CheckCircle,
  Cancel,
  ArrowBack,
  CheckCircleOutline,
  CancelOutlined,
  HelpOutline,
} from "@mui/icons-material"
import {
  Chip,
  Avatar,
  Divider,
  Paper,
  Rating,
  CircularProgress,
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material"
import { useNavigate, useParams } from "react-router-dom"
import "./sonuc.css"

const ExamResult = () => {
  const navigate = useNavigate()
  const { examId } = useParams()

  // Mock data for the exam result
  const resultData = {
    examTitle: "TUSVERSE 5. Türkiye Geneli TUS Denemesi",
    totalQuestions: 120,
    correctAnswers: 87,
    wrongAnswers: 28,
    emptyAnswers: 5,
    score: 435,
    ranking: 156,
    totalParticipants: 3245,
    percentile: 95.2,
    subjectPerformance: [
      { subject: "Anatomi", correct: 18, total: 20, percentage: 90 },
      { subject: "Fizyoloji", correct: 15, total: 20, percentage: 75 },
      { subject: "Biyokimya", correct: 12, total: 15, percentage: 80 },
      { subject: "Patoloji", correct: 14, total: 20, percentage: 70 },
      { subject: "Farmakoloji", correct: 16, total: 20, percentage: 80 },
      { subject: "Mikrobiyoloji", correct: 12, total: 15, percentage: 80 },
      { subject: "Dahiliye", correct: 10, total: 15, percentage: 67 },
    ],
  }

  // Calculate performance metrics
  const correctPercentage = (resultData.correctAnswers / resultData.totalQuestions) * 100
  const wrongPercentage = (resultData.wrongAnswers / resultData.totalQuestions) * 100
  const emptyPercentage = (resultData.emptyAnswers / resultData.totalQuestions) * 100

  // Confetti effect simulation with CSS animations
  useEffect(() => {
    const confettiElements = document.querySelectorAll(".confetti")
    confettiElements.forEach((element) => {
      element.classList.add("animate")
    })

    return () => {
      confettiElements.forEach((element) => {
        element.classList.remove("animate")
      })
    }
  }, [])

  const handleBackToExams = () => {
    navigation.navigate("/denemelerim")
  }

  
  const getPerformanceRating = (percentile) => {
    if (percentile >= 90) return 5
    if (percentile >= 80) return 4
    if (percentile >= 70) return 3
    if (percentile >= 60) return 2
    return 1
  }

  // Function to determine progress bar variant
  const getVariant = (percentage) => {
    if (percentage >= 80) return "success"
    if (percentage >= 60) return "info"
    if (percentage >= 40) return "warning"
    return "danger"
  }

  return (
    <Container fluid className="mt-4 mb-5 exam-result-container">
     
      <div className="confetti-container">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="confetti"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              backgroundColor: `hsl(${Math.random() * 360}, 100%, 50%)`,
            }}
          ></div>
        ))}
      </div>

      <Button variant="outline-secondary" className="mb-4 d-flex align-items-center" onClick={handleBackToExams}>
        <ArrowBack className="me-2" /> Sınavlarıma Dön
      </Button>

      {/* Header with exam title and celebration icon */}
      <Row className="mb-4">
        <Col xs={12} className="text-center">
          <h3 className="fw-bold d-flex align-items-center justify-content-center flex-wrap">
            <Celebration className="me-2 text-warning" fontSize="large" />
            <span>{resultData.examTitle}</span>
            <Celebration className="ms-2 text-warning" fontSize="large" />
          </h3>
          <p className="text-muted">Sonuçlarınız aşağıda detaylı olarak gösterilmiştir.</p>
        </Col>
      </Row>

      {/* Main stats card */}
      <Row className="justify-content-center mb-4">
        <Col xs={12} md={10} lg={8}>
          <Card className="shadow result-summary-card">
            <Card.Body>
              <Row>
                <Col xs={12} md={6} className="text-center mb-4 mb-md-0">
                  <div className="circular-progress-container">
                    <Box position="relative" display="inline-flex" className="progress-box">
                      <CircularProgress
                        variant="determinate"
                        value={correctPercentage}
                        size={160}
                        thickness={5}
                        className="circular-progress-success"
                      />
                      <Box
                        top={0}
                        left={0}
                        bottom={0}
                        right={0}
                        position="absolute"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Typography variant="h4" component="div" color="textSecondary">
                          {Math.round(correctPercentage)}%
                        </Typography>
                      </Box>
                    </Box>
                    <Typography variant="subtitle1" className="mt-2">
                      Başarı Oranı
                    </Typography>
                  </div>

                  <div className="answer-stats mt-4">
                    <div className="d-flex align-items-center mb-2 justify-content-center">
                      <CheckCircleOutline className="text-success me-2" />
                      <span>Doğru: {resultData.correctAnswers}</span>
                    </div>
                    <div className="d-flex align-items-center mb-2 justify-content-center">
                      <CancelOutlined className="text-danger me-2" />
                      <span>Yanlış: {resultData.wrongAnswers}</span>
                    </div>
                    <div className="d-flex align-items-center justify-content-center">
                      <HelpOutline className="text-secondary me-2" />
                      <span>Boş: {resultData.emptyAnswers}</span>
                    </div>
                  </div>
                </Col>
                <Col xs={12} md={6}>
                  <h4 className="text-center mb-3">Sınav Özeti</h4>
                  <div className="d-flex justify-content-between mb-2">
                    <span>Toplam Soru:</span>
                    <span className="fw-bold">{resultData.totalQuestions}</span>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <span className="text-success">Doğru:</span>
                    <span className="fw-bold text-success">{resultData.correctAnswers}</span>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <span className="text-danger">Yanlış:</span>
                    <span className="fw-bold text-danger">{resultData.wrongAnswers}</span>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <span className="text-secondary">Boş:</span>
                    <span className="fw-bold text-secondary">{resultData.emptyAnswers}</span>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <span className="text-primary">Net Puan:</span>
                    <span className="fw-bold text-primary">{resultData.score}</span>
                  </div>
                  <Divider className="my-3" />
                  <div className="d-flex justify-content-between align-items-center">
                    <span>Performans:</span>
                    <Rating value={getPerformanceRating(resultData.percentile)} readOnly size="large" />
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Ranking information */}
      <Row className="justify-content-center mb-4">
        <Col xs={12} md={10} lg={8}>
          <Paper elevation={3} className="p-4 ranking-card">
            <h4 className="text-center mb-4 d-flex align-items-center justify-content-center">
              <EmojiEvents className="me-2 text-warning" />
              Sıralama Bilgileri
            </h4>
            <Row className="text-center">
              <Col xs={12} sm={4} className="mb-3 mb-sm-0">
                <div className="ranking-item">
                  <div className="ranking-value">{resultData.ranking}</div>
                  <div className="ranking-label">Sıralama</div>
                </div>
              </Col>
              <Col xs={12} sm={4} className="mb-3 mb-sm-0">
                <div className="ranking-item">
                  <div className="ranking-value">{resultData.totalParticipants}</div>
                  <div className="ranking-label">Toplam Katılımcı</div>
                </div>
              </Col>
              <Col xs={12} sm={4}>
                <div className="ranking-item">
                  <div className="ranking-value">%{resultData.percentile}</div>
                  <div className="ranking-label">Yüzdelik Dilim</div>
                </div>
              </Col>
            </Row>
          </Paper>
        </Col>
      </Row>

      <Row className="justify-content-center mb-4">
  <Col xs={12} md={12} lg={8}> 
  <Card className="shadow" style={{ width: '100%', maxWidth: '600px',  left:'0' }}>

      <Card.Body>
        <h4 className="text-center mb-4 d-flex align-items-center justify-content-center">
          <Timeline className="me-2 text-info" />
          Konu Bazlı Performans
        </h4>

        
        <div className="d-block d-md-none">
          {resultData.subjectPerformance.map((subject, index) => (
            <div key={index} className="mb-3">
              <div className="d-flex justify-content-between mb-1">
                <span>{subject.subject}</span>
                <span>
                  <span className="text-success">{subject.correct}</span>/{subject.total}
                </span>
              </div>
              <ProgressBar
                now={subject.percentage}
                label={`${subject.percentage}%`}
                variant={getVariant(subject.percentage)}
                className="subject-progress"
              />
            </div>
          ))}
        </div>

        
        <div className="d-none d-md-block">
          <TableContainer component={Paper} className="subject-table">
            <Table aria-label="subject performance table">
              <TableHead>
                <TableRow>
                  <TableCell>Konu</TableCell>
                  <TableCell align="center">Doğru</TableCell>
                  <TableCell align="center">Toplam</TableCell>
                  <TableCell align="center">Başarı</TableCell>
                  <TableCell align="right">Performans</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {resultData.subjectPerformance.map((subject, index) => (
                  <TableRow key={index}>
                    <TableCell component="th" scope="row">
                      {subject.subject}
                    </TableCell>
                    <TableCell align="center">{subject.correct}</TableCell>
                    <TableCell align="center">{subject.total}</TableCell>
                    <TableCell align="center">{subject.percentage}%</TableCell>
                    <TableCell align="right" width="40%"> {/* Daha fazla alan bıraktık */}
                      <ProgressBar
                        now={subject.percentage}
                        variant={getVariant(subject.percentage)}
                        className="subject-progress"
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </Card.Body>
    </Card>
  </Col>
</Row>

     
      {/* <Row className="justify-content-center">
        <Col xs={12} md={10} lg={8}>
          <Card className="shadow recommendation-card">
            <Card.Body>
              <h4 className="text-center mb-3">Öneriler</h4>
              <Row>
                <Col xs={12} md={6} className="mb-3">
                  <div className="d-flex align-items-start">
                    <CheckCircle className="text-success me-2 mt-1" />
                    <div>
                      <h6 className="mb-1">Güçlü Yönleriniz</h6>
                      <p className="text-muted">
                        Anatomi ve Farmakoloji konularında oldukça başarılısınız. Bu alanlardaki bilginizi koruyun.
                      </p>
                    </div>
                  </div>
                </Col>
                <Col xs={12} md={6} className="mb-3">
                  <div className="d-flex align-items-start">
                    <Cancel className="text-danger me-2 mt-1" />
                    <div>
                      <h6 className="mb-1">Geliştirilmesi Gereken Alanlar</h6>
                      <p className="text-muted">
                        Dahiliye konusunda daha fazla çalışmanız önerilir. Bu alandaki performansınızı artırabilirsiniz.
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
              {/* <div className="text-center mt-3">
                <Chip
                  avatar={<Avatar>🎯</Avatar>}
                  label="Bir sonraki sınavda hedef: İlk 100'e girmek!"
                  color="primary"
                  variant="outlined"
                  className="goal-chip"
                />
              </div> 
            </Card.Body>
          </Card>
        </Col>
      </Row> */}
    </Container>
  )
}

export default ExamResult

