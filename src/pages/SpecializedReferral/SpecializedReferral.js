import React from "react";
import { Link } from "react-router-dom"; // Importação do Link
import "./SpecializedReferral.css";
import suportejuridico from "../../assets/Imagens/imgsuportejuridico.jpg";
import suportepsicologico from "../../assets/Imagens/imgsuportepsicologico.png";
import suportetecnico from "../../assets/Imagens/imgsuportetecnico.jpg";

const SpecializedReferral = () => {
  return (
    <div className="referral-section">
      <h2 className="referral-title">Encaminhamento Especializado</h2>
      <div className="referral-cards">
        {/* Card: Suporte Jurídico */}
        <div className="referral-card">
          <img
            src={suportejuridico}
            alt="Ícone de Suporte Jurídico"
            className="referral-image"
          />
          <h3>Suporte Jurídico</h3>
          <p>
            Nossos advogados especializados em direito digital estão prontos
            para ajudar você com questões legais relacionadas a ciberataques,
            vazamento de dados e crimes digitais.
          </p>
          <Link to="/consulta-advogado" className="referral-button">
            Agendar Consulta com Advogado
          </Link>
        </div>

        {/* Card: Apoio Psicológico */}
        <div className="referral-card">
          <img
            src={suportepsicologico}
            alt="Ícone de Apoio Psicológico"
            className="referral-image"
          />
          <h3>Apoio Psicológico</h3>
          <p>
            Conte com o suporte de psicólogos experientes para lidar com o
            impacto emocional de ser vítima de um ciberataque, incluindo
            estresse, ansiedade e outros desafios psicológicos.
          </p>
          <Link to="/consulta-psicologo" className="referral-button">
            Agendar Consulta com Psicólogo
          </Link>
        </div>

        {/* Card: Amparo Digital Cibernético */}
        <div className="referral-card">
          <img
            src={suportetecnico}
            alt="Ícone de Amparo Digital Cibernético"
            className="referral-image"
          />
          <h3>Amparo Digital Cibernético</h3>
          <p>
            Nossa equipe especializada em cibersegurança oferece consultoria
            técnica para identificar, mitigar e prevenir ameaças digitais,
            garantindo a proteção dos seus dados e sistemas.
          </p>
          <Link to="/consulta-cibernetico" className="referral-button">
            Agendar Consulta com ADC
          </Link>
        </div>
      </div>

      {/* Botão Geral */}
      <div className="immediate-help">
        <p>Precisa de ajuda imediata?</p>
        <Link to="/consulta-geral" className="general-button">
          Agendar Consulta Geral
        </Link>
      </div>
    </div>
  );
};

export default SpecializedReferral;
