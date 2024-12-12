import React from 'react';
import './TechnicalRecovery.css';

const TechnicalRecovery = () => {
  return (
    <div className="recovery-page">
      <header className="recovery-header">
        <h1>Recuperação Técnica</h1>
        <p>Guia completo para identificar, mitigar e recuperar-se de ciberataques</p>
      </header>

      <section className="attack-types">
        <h2>Tipos de Ciberataques Comuns</h2>
        <div className="attack-cards">
          <div className="attack-card">
            <h3>Phishing</h3>
            <p>Tentativas fraudulentas de obter informações sensíveis.</p>
          </div>
          <div className="attack-card">
            <h3>Malware</h3>
            <p>Software malicioso projetado para danificar ou se infiltrar em sistemas.</p>
          </div>
          <div className="attack-card">
            <h3>Ransomware</h3>
            <p>Malware que criptografa dados e exige resgate para liberá-los.</p>
          </div>
          <div className="attack-card">
            <h3>Ataques DDoS</h3>
            <p>Sobrecarrega sistemas para torná-los inacessíveis.</p>
          </div>
        </div>
      </section>

      <section className="identification">
  <h2>Identificação de Ciberataques</h2>
  <div className="identification-content">
    <div className="identification-text">
      <p>
        Reconhecer os sinais de um ciberataque é crucial para uma resposta rápida e eficaz.<br/>
        Fique atento a:
      </p>
      <ul>
        <li>Atividades incomuns em suas contas</li>
        <li>Lentidão inexplicável do sistema</li>
        <li>Arquivos ou programas desconhecidos</li>
        <li>Alterações não autorizadas em configurações</li>
        <li>Mensagens de erro frequentes ou incomuns</li>
      </ul>
      <a href="/identificacao" className="learn-more">
        Saiba mais sobre identificação de ciberataques
      </a>
    </div>
    <div className="identification-image">
     
      <img src="https://lh6.googleusercontent.com/MZPF2hSTSHV6_Bfcdrz_Ev3c4-v5qJl7BSLm-2clu68mV3OIuTIhRIpcj5wST2JCcnZad_7qr1_l5t1LaPU9STna_tsfJFv_wlhvMn7xI7hCB-l0SAJvfdOxpHLdfnRDRjB7bvqK" alt="Identificação de Ciberataques" />
    </div>
  </div>
</section>


<section className="mitigation-steps">
  <h2>Passos Imediatos para Mitigação</h2>
  <div className="mitigation-cards">
    <div className="mitigation-card">
      <i className="fas fa-shield-alt"></i>
      <span>Isole os sistemas afetados</span>
    </div>
    <div className="mitigation-card">
      <i className="fas fa-database"></i>
      <span>Faça backup dos dados importantes</span>
    </div>
    <div className="mitigation-card">
      <i className="fas fa-lock"></i>
      <span>Altere todas as senhas</span>
    </div>
    <div className="mitigation-card">
      <i className="fas fa-exclamation-triangle"></i>
      <span>Notifique as autoridades competentes</span>
    </div>
    <div className="mitigation-card">
      <i className="fas fa-undo-alt"></i>
      <span>Restaure sistemas a partir de backups limpos</span>
    </div>
  </div>
</section>

<section className="tools">
  <h2>Ferramentas de Recuperação</h2>
  <p className="tools-description">
    Recomendamos as seguintes ferramentas para ajudar na recuperação após um ataque:
  </p>
  <div className="tool-cards">
    <div className="tool-card">
      <h3>Antivírus<br/><br/></h3>
      <p>Use um antivírus confiável para detectar e remover malware.</p>
      <a href="/antivirus">Recomendações de Antivírus</a>
    </div>
    <div className="tool-card">
      <h3>Software de Recuperação de Arquivos</h3>
      <p>Recupere arquivos perdidos ou danificados durante o ataque.</p>
      <a href="/recuperacao-arquivos">Opções de Recuperação</a>
    </div>
    <div className="tool-card">
      <h3>Sistema de Backup</h3>
      <p>Implemente um sistema robusto de backup para proteger seus dados.</p>
      <a href="/backup">Soluções de Backup</a>
    </div>
  </div>
</section>


      <section className="consulting">
        <h2>Consultoria Técnica</h2>
        <div className="consulting-card">
          <p>Precisa de ajuda profissional?<br/>Nossos especialistas estão prontos para auxiliar na recuperação e fortalecimento da sua segurança digital.</p>
          <button className="consult-button">Agendar Consulta</button>
        </div>
      </section>
    </div>
  );
};

export default TechnicalRecovery;
