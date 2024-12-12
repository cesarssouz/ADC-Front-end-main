import React from "react";
import "./ConsultationCyberSupport.css";

const ConsultationCyberSupport = () => {
  return (
    <div className="cyber-consultation-page">
      <h1>Agendar Consulta com Amparo Digital Cibernético</h1>
      <div className="cyber-consultation-content">
        <div className="cyber-image-placeholder">
          {/* Substitua por uma imagem relevante */}
        </div>
        <form className="cyber-consultation-form">
          <input type="text" placeholder="Nome completo" />
          <input type="email" placeholder="E-mail" />
          <input type="tel" placeholder="Telefone" />
          <input type="date" placeholder="Data preferencial" />
          <input type="time" placeholder="Horário preferencial" />
          <textarea
            placeholder="Breve descrição da sua necessidade"
            rows="4"
          ></textarea>
          <button type="submit">Agendar Consulta</button>
        </form>
      </div>
      <div className="cyber-consultation-benefits">
        <h2>Por que consultar o Amparo Digital Cibernético?</h2>
        <ul>
          <li>Avaliação completa da sua segurança digital.</li>
          <li>Identificação de vulnerabilidades em seus sistemas.</li>
          <li>Recomendações personalizadas para melhorar sua proteção online.</li>
          <li>Suporte na implementação de medidas de segurança.</li>
          <li>Orientação sobre as melhores práticas em cibersegurança.</li>
        </ul>
      </div>
    </div>
  );
};

export default ConsultationCyberSupport;
