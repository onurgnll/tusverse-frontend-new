import React from "react";
import { Grid, Card, CardContent, Typography, Button } from "@mui/material";
import { AccessTime, CalendarToday, HelpOutline } from "@mui/icons-material";
import { useNavigate } from "react-router-dom"; // useNavigate import edilmesi gerekiyor
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

const CardItem = ({ price, priceLabel, examId }) => {
  const navigate = useNavigate(); // navigate hook'u

  // Kartın üzerine tıklandığında yönlendirme fonksiyonu
  const handleCardClick = () => {
    navigate(`/denemesınavı`); // examId'yi kullanarak yönlendirme
  };

  return (
    <Card
      variant="outlined"
      sx={{ borderRadius: "12px", boxShadow: 3, maxWidth: "300px", cursor: "pointer" }} // mouse pointer ekledik
      onClick={handleCardClick} // tıklama olayını ekledik
    >
      <CardContent>
        <Typography variant="h6" fontWeight="bold" textAlign="center" mb={2}>
          TUSVERSE 5. Türkiye Geneli TUS Denemesi
        </Typography>
        <Typography display="flex" alignItems="center" mb={1}>
          <AccessTime fontSize="small" sx={{ marginRight: "8px" }} /> 3 Saat
        </Typography>
        <Typography display="flex" alignItems="center" mb={1}>
          <CalendarToday fontSize="small" sx={{ marginRight: "8px" }} /> 02.01.2025 10:00 - 13:00
        </Typography>
        <Typography display="flex" alignItems="center" mb={1}>
          <HelpOutline fontSize="small" sx={{ marginRight: "8px" }} />
          Bu deneme sınavına web tarayıcısından erişilebilir
        </Typography>
        <Typography display="flex" alignItems="center" mb={3}>
          <HelpOutline fontSize="small" sx={{ marginRight: "8px" }} /> 120 Soru
        </Typography>
        <Button
          fullWidth
          variant="contained"
          color={price === "Ücretsiz" ? "success" : "primary"}
        >
          {priceLabel}
        </Button>
      </CardContent>
    </Card>
  );
};

export default function PricingPage() {
  const cards = [
    { price: "199 TL", priceLabel: "199 TL", examId: 1 },
    { price: "299 TL", priceLabel: "299 TL", examId: 2 },
    { price: "Ücretsiz", priceLabel: "Ücretsiz", examId: 3 },
    { price: "399 TL", priceLabel: "399 TL", examId: 4 },
    { price: "249 TL", priceLabel: "249 TL", examId: 5 },
    { price: "Ücretsiz", priceLabel: "Ücretsiz", examId: 6 },
    { price: "499 TL", priceLabel: "499 TL", examId: 7 },
  ];

  return (
    <>
      <Grid
        container
        spacing={3}
        justifyContent="center"
        alignItems="center"
        sx={{ mt: "5px", minHeight: "80vh", marginBottom: "10px" }} // Header'dan 10px boşluk
      >
        {cards.map((card, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            display="flex"
            justifyContent="center" // Kartları ortalıyor
            key={index}
          >
            <CardItem {...card} />
          </Grid>
        ))}
      </Grid>
      
    </>
  );
}
