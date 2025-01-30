import React, { useState, useEffect } from "react";
import { Box, Grid, Typography, Card, List, ListItem, ListItemText, Button } from "@mui/material";

const ExamPage = () => {
  // Sabit bir dosya içeriği (burada .txt formatında simüle ediyorum)
  const fileContent = `
Soru: Trafik kazası sonucu orbitanın medial duvarında kırık...
Crista lacrimalis anterior
Lamina perpendicularis (os ethmoidale)
Processus frontalis (Maxill)
Corpus ossis sphenoidalis

Soru: Beyin sapı üzerinde yer alan hangi yapı daha büyüktür...
Medulla oblongata
Pons
Mesencephalon
Cerebellum

Soru: Aşağıdaki hangi kemik kafatasının parçasıdır...
Os frontale
Os temporale
Os sphenoidale
Os nasale
Soru: Trafik kazası sonucu orbitanın medial duvarında kırık...
Crista lacrimalis anterior
Lamina perpendicularis (os ethmoidale)
Processus frontalis (Maxill)
Corpus ossis sphenoidalis

Soru: Beyin sapı üzerinde yer alan hangi yapı daha büyüktür...
Medulla oblongata
Pons
Mesencephalon
Cerebellum

Soru: Aşağıdaki hangi kemik kafatasının parçasıdır...
Os frontale
Os temporale
Os sphenoidale
Os nasale
Soru: Trafik kazası sonucu orbitanın medial duvarında kırık...
Crista lacrimalis anterior
Lamina perpendicularis (os ethmoidale)
Processus frontalis (Maxill)
Corpus ossis sphenoidalis

Soru: Beyin sapı üzerinde yer alan hangi yapı daha büyüktür...
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
  const questionsPerPage = 6; // Sayfada gösterilecek soru sayısı

  // Dosya içeriğini çözümleme fonksiyonu
  const parseQuestions = (fileContent) => {
    const lines = fileContent.split("\n"); // Satırlara ayırıyoruz
    const extractedQuestions = [];

    let currentQuestion = null;
    
    lines.forEach((line) => {
      // Soruları tespit et
      if (line.startsWith("Soru:")) {
        if (currentQuestion) {
          extractedQuestions.push(currentQuestion); // Önceki soruyu kaydediyoruz
        }
        currentQuestion = { question: line.slice(5).trim(), options: [] }; // Yeni soru başlıyor
      } else if (line.trim()) {
        currentQuestion?.options.push(line.trim()); // Seçenekler ekleniyor
      }
    });

    if (currentQuestion) {
      extractedQuestions.push(currentQuestion); // Son soruyu da kaydediyoruz
    }

    setQuestions(extractedQuestions); // Soruları state'e kaydediyoruz
  };

  // Sayfada gösterilecek soruları almak için slice kullanıyoruz
  const currentQuestions = questions.slice(
    (currentPage - 1) * questionsPerPage,
    currentPage * questionsPerPage
  );

  // Sayfa değişimi fonksiyonu
  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= Math.ceil(questions.length / questionsPerPage)) {
      setCurrentPage(newPage);
    }
  };

  // Bileşen render edildikten sonra parseQuestions fonksiyonunu çalıştırıyoruz
  useEffect(() => {
    parseQuestions(fileContent); // Dosya içeriğini parse ediyoruz
  }, []);

  return (
    <Box sx={{ p: 4, backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
      <Grid container spacing={3}>
        {/* Sol Bölüm */}
        <Grid item xs={8}>
          <Card sx={{ p: 3 }}>
            <Typography variant="h6" fontWeight="bold" mb={2}>
              TUSVERSE
            </Typography>
            <Typography variant="subtitle1" mb={3}>
              1. Türkiye Geneli TUS Deneme Sınavı
            </Typography>
            {/* Soruları dinamik olarak render et */}
            <Box mb={3}>
              {currentQuestions.map((q, index) => (
                <Box key={index} mb={3}>
                  <Typography variant="body1" fontWeight="bold">
                    {index + 1}. {q.question}
                  </Typography>
                  <List>
                    {q.options.map((option, idx) => (
                      <ListItem
                        key={idx}
                        button
                        sx={{
                          border: "1px solid #ddd",
                          borderRadius: "8px",
                          mb: 1,
                        }}
                      >
                        <ListItemText primary={option} />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              ))}
            </Box>
            {/* Sayfa Numaraları */}
            <Box display="flex" justifyContent="space-between">
              <Button
                variant="outlined"
                color="primary"
                onClick={() => handlePageChange(currentPage - 1)}
              >
                Önceki Sayfa
              </Button>
              <Typography variant="body1">{`Sayfa ${currentPage}`}</Typography>
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

        {/* Sağ Bölüm */}
        <Grid item xs={4}>
          <Card sx={{ p: 3 }}>
            {/* Sayaç */}
            <Typography
              variant="h6"
              fontWeight="bold"
              color="error"
              textAlign="center"
              mb={2}
            >
              2 Saat 16 Dakika 43 Saniye Kaldı
            </Typography>

            {/* Soru Numaraları */}
            <Grid container spacing={1}>
              {[...Array(20)].map((_, idx) => (
                <Grid item xs={2} key={idx}>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: idx < 5 ? "#4caf50" : "#ddd",
                      color: idx < 5 ? "#fff" : "#000",
                    }}
                    fullWidth
                  >
                    {idx + 1}
                  </Button>
                </Grid>
              ))}
            </Grid>

            {/* Navigasyon Butonları */}
            <Box mt={4} display="flex" justifyContent="space-between">
              <Button variant="outlined" color="primary">
                Önceki Sayfa
              </Button>
              <Button variant="outlined" color="success">
                Sınavı Tamamla
              </Button>
              <Button variant="outlined" color="primary">
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
