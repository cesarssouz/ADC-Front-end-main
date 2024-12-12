import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Plans.css';
import { FaCode, FaShieldAlt, FaUserSecret, FaFire } from 'react-icons/fa';

const Plans = () => {
  const navigate = useNavigate();

  const plans = [
    {
      icon: <FaCode />,
      title: "Script Kiddie",
      price: "R$ 0,00",
      description: "Plano Gratuito",
      features: [
        "Acesso Limitado ao Chatbot: Respostas básicas sobre temas de cibersegurança",
        "Artigos Educativos: Acesso a uma seleção rotativa de conteúdos gratuitos do blog",
        "Newsletter Semanal: Dicas rápidas de segurança digital por e-mail",
        "Opção de Doação: Apoie nosso site para ajudar a manter e expandir os recursos",
      ],
      buttonText: "Começar Agora",
    },
    {
      icon: <FaShieldAlt />,
      title: "White Hat",
      price: "R$ 19,90/mês",
      description: "Plano Básico",
      features: [
        "Acesso Completo ao Chatbot: Atendimento sobre cibersegurança com informações detalhadas",
        "Artigos do Blog: Acesso total ao conteúdo educativo",
        "Parcerias com Profissionais: Acesso ao diretório de advogados e psicólogos parceiros",
        "Vídeos Educativos: Acesso a vídeos curtos com dicas práticas",
      ],
      buttonText: "Escolher Plano",
    },
    {
      icon: <FaUserSecret />,
      title: "Grey Hat",
      price: "R$ 49,90/mês",
      description: "Plano Avançado",
      features: [
        "Chatbot Avançado: Atendimento prioritário e análises de risco personalizadas",
        "Conteúdo Exclusivo: Guias aprofundados, e-books e acesso antecipado a novos materiais",
        "Descontos em Parcerias: Tarifas reduzidas para consultas com profissionais parceiros",
        "Publicidade Reduzida: Experiência de navegação com menos anúncios",
        "Programa de Indicações: Benefícios por recomendar o site",
      ],
      buttonText: "Escolher Plano",
    },
    {
      icon: <FaFire />,
      title: "Red Team",
      price: "R$ 99,90/mês",
      description: "Plano Premium",
      features: [
        "Chatbot Premium com Consultoria Personalizada: Relatórios detalhados de análise de risco",
        "Consultoria com Especialistas: Uma consulta gratuita anual com profissionais parceiros",
        "Acesso Completo ao Conteúdo: Artigos, e-books e vídeos educativos",
        "Sem Publicidade: Experiência livre de anúncios",
        "Consultoria em Ferramentas de Segurança: Orientação personalizada",
        "Ofertas Exclusivas de Afiliados: Descontos em produtos de segurança digital",
      ],
      buttonText: "Escolher Plano",
    },
  ];

  const handleSelectPlan = (planTitle) => {
    navigate(`/checkout/${planTitle}`);
  };

  return (
    <div className="plans-container">
      <h1>Nossos Planos</h1>
      <div className="plans-grid">
        {plans.map((plan, index) => (
          <div key={index} className="plan-card">
            <div className="plan-header">
              <span className="plan-icon">{plan.icon}</span>
              <h2>{plan.title}</h2>
            </div>
            <p className="price">{plan.price}</p>
            <p className="description">{plan.description}</p>
            <ul>
              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <button onClick={() => handleSelectPlan(plan.title)}>{plan.buttonText}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
