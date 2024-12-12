import React from "react";
import "./Resources.css";
import imgBlog4 from "../../assets/Imagens/imgBlog4.jpg";
import imgAntivirus from "../../assets/Imagens/imgAntivirus.jpg"; // Imagem do Antivírus
import imgVPN from "../../assets/Imagens/imgVPN.jpg"; // Imagem da VPN
import imgFirewall from "../../assets/Imagens/imgFirewall.jpg"; // Imagem do Firewall
import imgCriptografia from "../../assets/Imagens/imgCriptografia.jpg"; // Imagem de Criptografia de Arquivos
import imgGerenciadorSenhas from "../../assets/Imagens/imgGerenciadorSenhas.jpg"; // Imagem do Gerenciador de Senhas
import img2FA from "../../assets/Imagens/img2FA.jpg"; // Imagem da Autenticação de Dois Fatores (2FA)

const Resources = () => {
  const guias = [
    { title: "Guia de Proteção de Dados Pessoais", description: "Aprenda como manter seus dados pessoais e financeiros seguros na internet." },
    { title: "Dicas para Navegação Segura", description: "Descubra como identificar sites seguros e evitar armadilhas online." },
    { title: "Proteção contra Malware e Phishing", description: "Saiba como se proteger contra vírus, spyware e ataques de phishing." },
    { title: "Segurança em Redes Sociais", description: "Aprenda a proteger suas contas de redes sociais contra roubo de identidade." },
  ];

  const ferramentas = [
    { name: "Antivírus", image: imgAntivirus, description: "Ferramentas essenciais para detectar e remover vírus e malwares." },
    { name: "VPN", image: imgVPN, description: "Protege sua privacidade online e mascarar seu endereço IP." },
    { name: "Gerenciador de Senhas", image: imgGerenciadorSenhas, description: "Organize e proteja suas senhas de maneira segura." },
    { name: "Autenticação de Dois Fatores (2FA)", image: img2FA, description: "Adicione uma camada extra de segurança às suas contas." },
    { name: "Firewall", image: imgFirewall, description: "Protege sua rede e sistemas contra acessos não autorizados." },
    { name: "Criptografia de Arquivos", image: imgCriptografia, description: "Garantia de que seus arquivos sejam ilegíveis sem a chave de decriptação." },
  ];

  const videos = [
    { title: "Introdução à Cibersegurança (Um Guia Completo)", description: "Um guia completo sobre os fundamentos da cibersegurança.", url: "https://www.youtube.com/embed/M6RRytk5MQM" },
    { title: "Dicas de Segurança On-line do Google - Como Criar Senhas Fortes", description: "Como criar e gerenciar senhas fortes.", url: "https://www.youtube.com/embed/fnX-wFqk8V4" },
    { title: "O que é Phishing? Como se proteger?", description: "Entenda o phishing e como se proteger.", url: "https://www.youtube.com/embed/PctNh8AxVow" },
  ];

  return (
    <div className="resources">
      <h1>Recursos Educativos e Preventivos</h1>

      {/* Seção 1: O que é Cibersegurança */}
      <div className="section">
        <h2 className="section-title">O que é Cibersegurança?</h2>
        <div className="content">
          <div className="image-placeholder">
            <img src={imgBlog4} alt="Cibersegurança" className="image" />
          </div>
          <div className="text">
            <p>
              Cibersegurança refere-se à prática de proteger sistemas, redes e programas de ataques digitais. É crucial entender a importância de
              proteger suas informações pessoais e dados contra ameaças digitais em um mundo cada vez mais conectado.
            </p>
            <a href="#learn-more">Leia mais sobre Cibersegurança</a>
          </div>
        </div>
      </div>

      {/* Seção 2: Guias e Tutoriais */}
      <div className="section">
        <h2 className="section-title">Guias e Tutoriais</h2>
        <div className="grid-guias">
          {guias.map((item, index) => (
            <div key={index} className="card">
              <div className="image-placeholder" />
              <div className="card-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <a href="#learn-more">Saiba mais</a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Seção 3: Ferramentas de Segurança Recomendadas */}
      <div className="section">
        <h2 className="section-title">Ferramentas de Segurança Recomendadas</h2>
        <div className="grid-ferramentas">
          {ferramentas.map((tool, index) => (
            <div key={index} className="card">
              {tool.image && (
                <div className="image-placeholder">
                  <img src={tool.image} alt={tool.name} className="image" />
                </div>
              )}
              <div className="card-content">
                <h3>{tool.name}</h3>
                <p>{tool.description}</p>
                <a href="#learn-more">Saiba mais</a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Seção 4: Vídeos Educativos */}
      <div className="section">
        <h2 className="section-title">Vídeos Educativos</h2>
        <div className="grid-videos">
          {videos.map((video, index) => (
            <div key={index} className="card">
              <iframe
                width="100%"
                height="200"
                src={video.url}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <div className="card-content">
                <h3>{video.title}</h3>
                <p>{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resources;