import React, { useState, useEffect } from "react";
import {
  Box,
  Grid,
  Typography,
  Card,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  useMediaQuery,
  useTheme,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@mui/material";
import orbitaImage from "../../assets/images/orbita.jpg";
import { Menu as MenuIcon } from "@mui/icons-material";
import "./denemesınavı.css";

const ExamPage = () => {
  const fileContent = `Soru: Trafik kazası sonucu orbitanın medial duvarında kırık olduğunu nasıl anlarız ?
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
Os nasale`;

  const [questions, setQuestions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const questionsPerPage = 5;
  const [answers, setAnswers] = useState({});
  const [openDialog, setOpenDialog] = useState(false); 
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

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
        options: ["Şık A", "Şık B", "Şık C", "Şık D"],
      });
    }

    setQuestions(extractedQuestions);
  };

  useEffect(() => {
    parseQuestions(fileContent);
  }, []);

  const handleAnswerChange = (questionIndex, selectedOption) => {
    setAnswers((prev) => {
      if (prev[questionIndex] === selectedOption) {
        return { ...prev, [questionIndex]: null };
      }
      return { ...prev, [questionIndex]: selectedOption };
    });
  };

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= Math.ceil(questions.length / questionsPerPage)) {
      setCurrentPage(newPage);
    }
  };

  const currentQuestions = isMobile
    ? questions.slice(0, currentPage * questionsPerPage)
    : questions.slice(
        (currentPage - 1) * questionsPerPage,
        currentPage * questionsPerPage
      );

  const handleMenuClick = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <Box sx={{ p: 4, backgroundColor: "#f8f9fa", minHeight: "100vh", width: "100vw" }} className="exam-page-start">
      <Grid container spacing={3}>
        <Grid item xs={isMobile ? 12 : 8}>
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
                disabled={currentPage === 1}
                className="page-navigation-button"
              >
                Önceki Sayfa
              </Button>
              <Typography variant="body1">Sayfa {currentPage}</Typography>
              <Button
                variant="outlined"
                color="primary"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === Math.ceil(questions.length / questionsPerPage)}
                className="page-navigation-button"
              >
                Sonraki Sayfa
              </Button>
            </Box>
          </Card>
        </Grid>

        {!isMobile && (
          <Grid item xs={12} sm={4} className="exam-page-right-grid">
          <Card
            sx={{
              p: 3,
              position: "sticky",
              top: 100,
              transition: "top 0.3s ease-in-out",
              height: 'auto', 
            }}
          >
            <Typography
              variant="h6"
              fontWeight="bold"
              color="error"
              textAlign="center"
              mb={2}
            >
              2 Saat 16 Dakika 43 Saniye Kaldı
            </Typography>
            
           
            <div className="question-buttons-container">
              {[...Array(questions.length)].map((_, idx) => (
                <Button
                  key={idx}
                  variant="contained"
                  sx={{
                    backgroundColor: answers[idx] ? "#4caf50" : "#ddd",
                    color: answers[idx] ? "#fff" : "#000",
                  }}
                  className="question-button"
                >
                  {idx + 1}
                </Button>
              ))}
            </div>
        
            <Box mt={4} className="page-navigation-container" >
              <Button
                variant="outlined"
                color="primary"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="page-navigation-button"
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
                className="page-navigation-button"
              >
                Sonraki Sayfa
              </Button>
            </Box>
          </Card>
        </Grid>
        
        
        )}
      </Grid>

      {isMobile && (
       <Box
       sx={{
         position: "fixed",
         bottom: 10,
         right: 20,
         zIndex: 1000,
         backgroundColor: "#4caf50",
         borderRadius: "50%",
         p: 2,
       }}
       className="floating-menu-button"
     >
       <IconButton color="white" onClick={handleMenuClick}>
         <MenuIcon />
       </IconButton>
     </Box>
     
      )}
<Dialog open={openDialog} onClose={handleCloseDialog} fullWidth maxWidth="sm" className="dialog-container">
  <DialogTitle className="dialog-title">İçerik</DialogTitle>
  <DialogContent className="dialog-content">
    <Typography variant="h6" fontWeight="bold">
      2 Saat 16 Dakika 43 Saniye Kaldı
    </Typography>
    <Grid container spacing={1} justifyContent="center" alignItems="center">
      {[...Array(questions.length)].map((_, idx) => (
        <Grid item xs={2} sm={2} md={1} key={idx} className="question-button">
          <Button
            variant="contained"
            sx={{
              backgroundColor: answers[idx] ? "#4caf50" : "#ddd",
              color: answers[idx] ? "#fff" : "#000",
              fontSize: '0.8rem', 
              padding: '6px', 
              width: '40px', 
              height: '40px', 
              minWidth: '40px', 
            }}
          >
            {idx + 1}
          </Button>
        </Grid>
      ))}
    </Grid>
  </DialogContent>
  <DialogActions className="dialog-actions">
    <Button onClick={handleCloseDialog} color="primary" className="dialog-button">
      Kapat
    </Button>
  </DialogActions>
</Dialog>


    </Box>
  );
};

export default ExamPage;
