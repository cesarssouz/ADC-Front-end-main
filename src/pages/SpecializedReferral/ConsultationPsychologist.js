import React from "react";
import "./ConsultationPsychologist.css";

const ConsultationPsychologist = () => {
  return (
    <div className="psychologist-main-wrapper">
      <div className="psychologist-consultation-page">
        <h1>Agendar Consulta com Psicólogo</h1>
        <div className="psychologist-container">
          <div className="psychologist-image-container">
            <img src="image-placeholder.png" alt="Placeholder Image" />
          </div>
          <div className="psychologist-form-container">
            <h2>Preencha os dados abaixo</h2>
            <form className="psychologist-form">
              <input type="text" placeholder="Nome completo" />
              <input type="email" placeholder="E-mail" />
              <input type="tel" placeholder="Telefone" />
              <input type="date" placeholder="Data preferencial" />
              <input type="time" placeholder="Horário preferencial" />
              <textarea placeholder="Breve descrição do caso" rows="4"></textarea>
              <button type="submit">Agendar Consulta</button>
            </form>
          </div>
        </div>
        <div className="psychologist-description">
          <h3>Como um psicólogo pode ajudar?</h3>
          <ul>
            <li>Lidar com o estresse e ansiedade pós-ciberataque.</li>
            <li>Desenvolver estratégias de enfrentamento.</li>
            <li>Restaurar a sensação de segurança e controle.</li>
            <li>Superar traumas relacionados à violação de privacidade.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ConsultationPsychologist;
