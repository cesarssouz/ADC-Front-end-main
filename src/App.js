import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Componentes
import Header from './Componentes/layout/Header/Header.js';
import AccountTypeHeader from './Componentes/layout/Header/AccountTypeHeader.js';
import Footer from './Componentes/layout/Footer/Footer';
import HeroSection from './Componentes/layout/HeroSection/HeroSection';
import ServiceSection from './Componentes/layout/services/ServiceSection';
import SupportSection from './Componentes/layout/support/SupportSection';
import WhyADCSection from './Componentes/layout/WhyADC/WhyADCSection';

// Páginas
import About from './pages/About/About.js';
import Solution from './pages/Solution/Solution.js';
import Support from './pages/Support/Support.js';
import Sign from './pages/Sign/Sign.js';
import AccountType from './pages/Sign/AccountType.js';
import Login from './pages/Sign/Login.js';
import EducationalResources from './pages/EducationalResources/EducationalResources.js';
import TechnicalRecovery from './pages/TechnicalRecovery/TechnicalRecovery.js';
import SpecializedReferral from './pages/SpecializedReferral/SpecializedReferral.js';
import Blog from './pages/Blog/Blog.js';
import Plans from './pages/Plans/Plans.js';
import Resources from './pages/Resources/Resources.js';
import Organization from './pages/Organization/Organization.js';
import Checkout from './pages/Plans/Checkout.js';
import ArticlePage from './pages/Blog/ArticlePage.js';
import ConsultationLawyer from "./pages/SpecializedReferral/ConsultationLawyer";
import ConsultationPsychologist from "./pages/SpecializedReferral/ConsultationPsychologist";
import ConsultationCyberSupport from "./pages/SpecializedReferral/ConsultationCyberSupport";
import GeneralConsultation from "./pages/SpecializedReferral/GeneralConsultation.js";


import './App.css';

function App() {
  const location = useLocation();
  const currentPath = location.pathname;

  // Rotas que não devem renderizar o Header ou Footer
  const noHeaderFooterRoutes = ['/criar-conta', '/login', '/boxsign', '/account-type'];

  // Rotas que devem usar o AccountTypeHeader
  const accountTypeHeaderRoutes = [
    '/planos',
    '/recursos-educativos',
    '/recuperacao-tecnica',
    '/encaminhamento-especializado',
    '/organização',
    '/checkout',
    '/blog',
    '/consulta-advogado', 
    '/consulta-psicologo', 
    '/consulta-cibernetico',
    '/consulta-geral',
  ];

  // Lógica de renderização
  const shouldRenderMainHeader =
    !noHeaderFooterRoutes.includes(currentPath) &&
    !accountTypeHeaderRoutes.some((path) => currentPath.startsWith(path));
  const shouldRenderAccountTypeHeader = accountTypeHeaderRoutes.some((path) =>
    currentPath.startsWith(path)
  );
  const shouldRenderFooter = !noHeaderFooterRoutes.includes(currentPath);

  return (
    <div className="App">
      {/* Renderiza Header Principal ou AccountTypeHeader */}
      {shouldRenderMainHeader && <Header />}
      {shouldRenderAccountTypeHeader && <AccountTypeHeader />}

      {/* Rotas */}
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <HeroSection />
              <ServiceSection />
              <SupportSection />
              <WhyADCSection />
            </div>
          }
        />
        <Route path="/sobre-nos" element={<About />} />
        <Route path="/servicos" element={<Solution />} />
        <Route path="/apoio-vitima" element={<Support />} />
        <Route path="/criar-conta" element={<Sign />} />
        <Route path="/account-type" element={<AccountType />} />
        <Route path="/login" element={<Login />} />
        <Route path="/recursos-educativos" element={<Resources />} />
        <Route path="/recuperacao-tecnica" element={<TechnicalRecovery />} />
        <Route path="/encaminhamento-especializado" element={<SpecializedReferral />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/planos" element={<Plans />} />
        <Route path="/recursos" element={<Resources />} />
        <Route path="/organização" element={<Organization />} />
        <Route path="/checkout/:planTitle" element={<Checkout />} />
        <Route path="/blog/article/:id" element={<ArticlePage />} />
        <Route path="/consulta-advogado" element={<ConsultationLawyer />} />
        <Route path="/consulta-psicologo" element={<ConsultationPsychologist />} />
        <Route path="/consulta-cibernetico" element={<ConsultationCyberSupport />} />
        <Route path="/consulta-geral" element=
        {<GeneralConsultation />} />
      </Routes>

      {/* Renderiza Footer se necessário */}
      {shouldRenderFooter && <Footer />}
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
