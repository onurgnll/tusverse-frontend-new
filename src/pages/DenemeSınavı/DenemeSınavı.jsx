import React, { useState, useEffect } from "react";
import {
  Box,
  Grid,
  Typography,
  Card,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel
} from "@mui/material";
import orbitaImage from "../../assets/images/orbita.jpg";

const ExamPage = () => {
  const fileContent = `
Soru: Trafik kazası sonucu orbitanın medial duvarında kırık olduğunu nasıl anlarız ?
Crista lacrimalis anterior
Lamina perpendicularis (os ethmoidale)
Processus frontalis (Maxill)
Corpus ossis sphenoidalis

Soru: Beyin sapı üzerinde yer alan hangi yapı daha büyüktür?
Medulla oblongata
Pons
Mesencephalon
Cerebellum

Soru: Aşağıdaki hangi kemik kafatasının parçasıdır...
Os frontale
Os temporale
Os sphenoidale
Os nasale
  `;

  const [questions, setQuestions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const questionsPerPage = 5;
  const [answers, setAnswers] = useState({});

  const parseQuestions = (fileContent) => {
    const lines = fileContent.split("\n");
    const extractedQuestions = [];
    let currentQuestion = null;
    
    lines.forEach((line) => {
      if (line.startsWith("Soru:")) {
        if (currentQuestion) {
          extractedQuestions.push(currentQuestion);
        }
        currentQuestion = { question: line.slice(5).trim(), options: [] };
      } else if (line.trim()) {
        currentQuestion?.options.push(line.trim());
      }
    });

    if (currentQuestion) {
      extractedQuestions.push(currentQuestion);
    }

    while (extractedQuestions.length < 20) {
      extractedQuestions.push({
        question: `Örnek Soru ${extractedQuestions.length + 1}`,
        options: ["Şık A", "Şık B", "Şık C", "Şık D"]
      });
    }

    setQuestions(extractedQuestions);
  };

  useEffect(() => {
    parseQuestions(fileContent);

    // Sayfa yüklendiğinde tam ekran aç
    const enterFullScreen = () => {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      }
    };
    enterFullScreen();
  }, []);

  const handleAnswerChange = (questionIndex, selectedOption) => {
    setAnswers((prev) => ({ ...prev, [questionIndex]: selectedOption }));
  };

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= Math.ceil(questions.length / questionsPerPage)) {
      setCurrentPage(newPage);
    }
  };

  const currentQuestions = questions.slice(
    (currentPage - 1) * questionsPerPage,
    currentPage * questionsPerPage
  );

  return (
    <Box sx={{ p: 4, backgroundColor: "#f8f9fa", minHeight: "100vh", width: "100vw" }}>
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <Card sx={{ p: 3 }}>
            <Typography variant="h6" fontWeight="bold" mb={2}>
              TUSVERSE Deneme Sınavı
            </Typography>
            <Typography variant="subtitle1" mb={3}>
              1. Türkiye Geneli TUS Deneme Sınavı
            </Typography>
            {currentQuestions.map((q, index) => (
              <Box key={index} mb={3}>
                {currentPage === 1 && index === 0 && (
                  <Box mb={2}>
                    <img src={orbitaImage} alt="Soru 1 Resmi" width="50%" />
                  </Box>
                )}
                <Typography variant="body1" fontWeight="bold">
                  {index + 1}. {q.question}
                </Typography>
                <RadioGroup
                  value={answers[index] || ""}
                  onChange={(e) => handleAnswerChange(index, e.target.value)}
                >
                  {q.options.map((option, idx) => (
                    <FormControlLabel
                      key={idx}
                      value={option}
                      control={<Radio />}
                      label={option}
                    />
                  ))}
                </RadioGroup>
              </Box>
            ))}
            <Box display="flex" justifyContent="space-between">
              <Button
                variant="outlined"
                color="primary"
                onClick={() => handlePageChange(currentPage - 1)}
              >
                Önceki Sayfa
              </Button>
              <Typography variant="body1">Sayfa {currentPage}</Typography>
              <Button
                variant="outlined"
                color="primary"
                onClick={() => handlePageChange(currentPage + 1)}
              >
                Sonraki Sayfa
              </Button>
            </Box>
          </Card>
        </Grid>

        <Grid item xs={4}>
          <Card sx={{
              p: 3,
              position: "sticky",
              top: 100, 
              transition: "top 0.3s ease-in-out",
            }}>
            <Typography
              variant="h6"
              fontWeight="bold"
              color="error"
              textAlign="center"
              mb={2}
            >
              2 Saat 16 Dakika 43 Saniye Kaldı
            </Typography>
            <Grid container spacing={1}>
              {[...Array(questions.length)].map((_, idx) => (
                <Grid item xs={2} key={idx}>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: answers[idx] ? "#4caf50" : "#ddd",
                      color: answers[idx] ? "#fff" : "#000",
                    }}
                    fullWidth
                  >
                    {idx + 1}
                  </Button>
                </Grid>
              ))}
            </Grid>
            <Box mt={4} display="flex" justifyContent="space-between">
              <Button
                variant="outlined"
                color="primary"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Önceki Sayfa
              </Button>
              <Button variant="outlined" color="success">
                Sınavı Tamamla
              </Button>
              <Button
                variant="outlined"
                color="primary"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === Math.ceil(questions.length / questionsPerPage)}
              >
                Sonraki Sayfa
              </Button>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ExamPage;
