import React from 'react';
import ServiceItem from './ServiceItem';
import './ServiceSection.css';

const services = [
  {
    title: "Assessoria Técnica",
    description: "Oferecemos suporte técnico especializado para diagnóstico e solução de problemas tecnológicos, proporcionando confiabilidade e eficiência para suas operações.",
    imageUrl: "https://img.freepik.com/fotos-gratis/homem-tiro-medio-usando-oculos-vr_23-2149126949.jpg"
  },
  {
    title: "Assessoria Psicológica",
    description: "Nossos profissionais oferecem apoio emocional personalizado para ajudar você a enfrentar desafios, estresse e conflitos, promovendo equilíbrio emocional e qualidade de vida.",
    imageUrl: "https://img.freepik.com/fotos-gratis/conceito-de-colagem-de-avatar-metaverso_52683-96427.jpg"
  },
  {
    title: "Conteúdo Educativo",
    description: "Desenvolvemos conteúdos educativos de alta qualidade com foco no aprendizado dinâmico, utilizando recursos interativos para melhorar o engajamento e facilitar o conhecimento em diversos temas.",
    imageUrl: "https://img.freepik.com/fotos-gratis/conceito-de-colagem-de-numerologia_23-2150061749.jpg"
  }
];

function ServiceSection() {
  return (
    <section className="service-section">
      <h2>Nossos serviços</h2>
      <div className="service-content">
        {services.map((service, index) => (
          <div 
            key={index} 
            className={`service-item ${index === 1 ? "reverse-layout" : ""}`}
          >
            <ServiceItem 
              imageUrl={service.imageUrl} 
              title={service.title} 
              description={service.description}
            />
            <div className="service-texts">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ServiceSection;
