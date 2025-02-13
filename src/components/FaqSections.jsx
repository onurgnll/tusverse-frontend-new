import React, { useState } from "react";
import "./faqsection.css"

const FaqSection = () => {
  const [activeKey, setActiveKey] = useState(null);

  const toggleAccordion = (key) => {
    setActiveKey(activeKey === key ? null : key);
  };

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
          <div key={item.id} className="faq-item ">
            <div
              className="faq-question d-flex justify-content-between align-items-center p-3"
              onClick={() => toggleAccordion(item.id)}
              style={{ cursor: "pointer", background: "#f8f9fa", borderRadius: "8px" }}
            >
              <span>{item.question}</span>
              <span>{activeKey === item.id ? "▲" : "▼"}</span>
            </div>
            {activeKey === item.id && (
              <div className="faq-answer p-3" style={{ background: "#ffffff", borderRadius: "8px", border: "1px solid #ddd" }}>
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
