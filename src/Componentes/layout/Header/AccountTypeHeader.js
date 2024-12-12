// src/Componentes/layout/Header/AccountTypeHeader.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AccountTypeHeader.css'; // Certifique-se de criar estilos para esse Header

const AccountTypeHeader = () => {
  const navigate = useNavigate();

  const goToEducationalResources = () => navigate('/recursos-educativos');
  const goToTechnicalRecovery = () => navigate('/recuperacao-tecnica');
  const goToSpecializedReferral = () => navigate('/encaminhamento-especializado');
  const goToResources = () => navigate('/recursos');
  const goToBlog = () => navigate('/blog');
  const goToPlans = () => navigate('/planos');
  const goToOrganization = () => navigate('/organização');

  return (
    <header className="adc-header">
      <h1 className="adc-logo">ADC</h1>
      <nav className="adc-navigation">
        <ul>
          <li>
            <a onClick={goToTechnicalRecovery}>Recuperação Técnica</a>
          </li>
          <li>
            <a onClick={goToSpecializedReferral}>Encaminhamento</a>
          </li>
          <li>
            <a onClick={goToEducationalResources}>Recursos</a>
          </li>
          <li>
            <a onClick={goToBlog}>Blog</a>
          </li>
          <li>
            <a onClick={goToPlans}>Planos</a>
          </li>
          <li>
            <a onClick={goToOrganization}>Organização</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default AccountTypeHeader;
