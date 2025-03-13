import React, { useState } from "react";
import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./faqsection.css";

const FaqSection = () => {
  const faqItems = [
    {
      id: 1,
      question: "Tusverse uygulamasını nasıl indirebilirim?",
      answer: "Tusverse uygulamasını App Store veya Google Play üzerinden indirebilirsiniz.",
    },
    {
      id: 2,
      question: "Tusverse'e nasıl kayıt olabilirim?",
      answer: "Web sitemize veya mobil uygulamamıza giriş yaparak kolayca kayıt olabilirsiniz.",
    },
    {
      id: 3,
      question: "Tusverse'deki içerikler nelerdir?",
      answer: "Tusverse, videolar, soru bankaları, deneme sınavları ve çok daha fazlasını içerir.",
    },
  ];

  return (
    <section className="faq-section">
      <h2 className="text-center mb-5">Sık Sorulan Sorular</h2>
      <div className="faq-container mb-5">
        {faqItems.map((item) => (
          <Accordion key={item.id} sx={{ marginBottom: "10px" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${item.id}-content`}
              id={`panel${item.id}-header`}
            >
              <Typography>{item.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{item.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
