import React, { useState } from "react";
import "./Organization.css";

const Organization = () => {
  const [activeTab, setActiveTab] = useState("missao");

  const renderContent = () => {
    switch (activeTab) {
      case "missao":
        return (
          <div className="content">
            <h3>🔒 Nossa Missão</h3>
            <p>
              Nossa missão é ser a principal fonte de educação e proteção em
              cibersegurança, proporcionando aos nossos usuários as ferramentas,
              o conhecimento e os recursos necessários para proteger sua
              privacidade e integridade digital.
            </p>
          </div>
        );
      case "visao":
        return (
          <div className="content">
            <h3>💡 Nossa Visão</h3>
            <p>
              Nossa visão é ser reconhecida como uma autoridade confiável e
              acessível em cibersegurança, criando um mundo digital mais seguro,
              transparente e resiliente.
            </p>
          </div>
        );
      case "valores":
        return (
          <div className="valores">
            <h3>💜 Nossos Valores</h3>
            <div className="valores-grid">
              <div className="card">
                <h4>🔒 Segurança Proativa</h4>
                <p>Soluções de cibersegurança para prevenir vulnerabilidades.</p>
              </div>
              <div className="card">
                <h4>📘 Educação Contínua</h4>
                <p>Capacitar nossos usuários com conhecimento sobre riscos.</p>
              </div>
              <div className="card">
                <h4>🤝 Ética e Integridade</h4>
                <p>Atuar com transparência e respeito à privacidade.</p>
              </div>
              <div className="card">
                <h4>🚀 Inovação Constante</h4>
                <p>Adotar novas tecnologias e práticas de segurança eficazes.</p>
              </div>
              <div className="card">
                <h4>🙌 Acessibilidade</h4>
                <p>Cibersegurança acessível a todos, independente do nível.</p>
              </div>
              <div className="card">
                <h4>🤝 Colaboração</h4>
                <p>Trabalhar em parceria para amplificar nosso impacto.</p>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="about-container">
      <h1 className="title">Sobre Nós</h1>
      <p className="description">
        Somos uma equipe dedicada a fornecer suporte completo para vítimas de
        ciberataques. Nossa missão é oferecer recuperação técnica, encaminhamento
        advocacional e psicológico, além de recursos educativos para prevenir
        futuros incidentes.
      </p>
      <div className="tabs">
        <button
          className={`tab ${activeTab === "missao" ? "active" : ""}`}
          onClick={() => setActiveTab("missao")}
        >
          Missão
        </button>
        <button
          className={`tab ${activeTab === "visao" ? "active" : ""}`}
          onClick={() => setActiveTab("visao")}
        >
          Visão
        </button>
        <button
          className={`tab ${activeTab === "valores" ? "active" : ""}`}
          onClick={() => setActiveTab("valores")}
        >
          Valores
        </button>
      </div>
      {renderContent()}
    </div>
  );
};

export default Organization;
