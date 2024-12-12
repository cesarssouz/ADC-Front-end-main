import React from "react";
import "./ConsultationLawyer.css";

const ConsultationLawyer = () => {
  return (
    <div className="lawyer-consultation">
      <div className="lawyer-container">
        <div className="lawyer-image-container">
          <img src="image-placeholder.png" alt="Placeholder Image" />
        </div>
        <div className="lawyer-form-container">
          <h2>Agendar Consulta com Advogado</h2>
          <form className="lawyer-form">
            <label htmlFor="name">Nome completo</label>
            <input type="text" id="name" placeholder="Digite seu nome" />
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" placeholder="Digite seu e-mail" />
            <label htmlFor="phone">Telefone</label>
            <input type="tel" id="phone" placeholder="Digite seu telefone" />
            <label htmlFor="date">Data preferencial</label>
            <input type="date" id="date" />
            <label htmlFor="time">Horário preferencial</label>
            <input type="time" id="time" />
            <label htmlFor="description">Breve descrição do caso</label>
            <textarea id="description" placeholder="Descreva brevemente seu caso"></textarea>
            <button type="submit">Agendar Consulta</button>
          </form>
        </div>
      </div>
      <div className="lawyer-description-container">
        <div className="lawyer-description">
          <h3>Por que consultar um advogado especializado?</h3>
          <ul>
            <li>Orientação legal específica para casos de ciberataques.</li>
            <li>Auxílio na notificação às autoridades competentes.</li>
            <li>Suporte em processos de indenização por danos.</li>
            <li>Proteção de seus direitos digitais.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ConsultationLawyer;
