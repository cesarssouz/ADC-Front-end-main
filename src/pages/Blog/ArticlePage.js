import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './ArticlePage.css';
import imgBlog1 from '../../assets/Imagens/ImgBlog1.jpeg';
import imgBlog2 from '../../assets/Imagens/imgBlog2.png';
import imgBlog3 from '../../assets/Imagens/imgBlog3.jpg';

const ArticlePage = () => {
  const { id } = useParams(); // Obtém o ID do artigo da URL

  // Lista de artigos
  const articles = [
    {
      id: '1',
      title: 'Como se proteger contra phishing',
      image: imgBlog1,
      content: `
        Phishing é uma técnica de fraude online que visa obter informações sensíveis, como senhas e dados de cartão de crédito, disfarçando-se como uma entidade confiável em uma comunicação eletrônica. Aqui estão algumas dicas para se proteger contra ataques de phishing:
        <br /><br />
        1. <strong>Verifique o remetente:</strong> <br />Sempre verifique cuidadosamente o endereço de e-mail do remetente. Fraudadores muitas vezes usam endereços que parecem legítimos, mas contêm pequenos erros.
        <br /><br />
        2. <strong>Não clique em links suspeitos:</strong> <br />Evite clicar em links em e-mails não solicitados. Em vez disso, digite o URL diretamente no seu navegador ou use um favorito salvo anteriormente.
        <br /><br />
        3. <strong>Mantenha seu software atualizado:</strong> <br />Mantenha seu sistema operacional, navegador e software de segurança atualizados para se proteger contra as últimas ameaças.
        <br /><br />
        4. <strong>Use autenticação de dois fatores:</strong><br />Sempre que possível, ative a autenticação de dois fatores em suas contas online para adicionar uma camada extra de segurança.
        <br /><br />
        5. <strong>Seja cético:</strong><br /> Se uma oferta parecer boa demais para ser verdade, provavelmente é. Seja cético em relação a e-mails que pedem informações pessoais ou financeiras.
      `,
      date: '2023-05-15',
    },
    {
      id: '2',
      title: 'A importância da autenticação de dois fatores',
      image: imgBlog2,
      content: `
        A autenticação de dois fatores (2FA) é uma camada adicional de segurança usada para garantir que as pessoas tentando acessar uma conta online são quem dizem ser. Aqui está por que é tão importante:
        <br /><br />
        1. <strong>Segurança aprimorada:</strong><br />A 2FA adiciona uma camada extra de segurança, tornando muito mais difícil para hackers acessarem suas contas, mesmo que eles tenham sua senha.
        <br /><br />
        2. <strong>Proteção contra ataques de phishing:</strong><br /> Mesmo que alguém caia em um ataque de phishing e revele sua senha, o atacante ainda precisaria do segundo fator de autenticação para acessar a conta
        <br /><br />
        3. <strong>Alerta de tentativas acesso não autorizadas:</strong><br />Muitos sistemas de 2FA notificam o usuário quando há uma tentativa de login, alertando sobre possíveis atividades suspeitas.
        <br /><br />
        4. <strong>Conformidade com regulamentações</strong><br /> Muitas regulamentações de segurança de dados agora exigem 2FA para determinados tipos de contas ou acesso a informações sensíveis.
        <br /><br />
        5. <strong>Fácil de implementar</strong><br /> Com muitas opções disponíveis, desde apps de autenticação até chaves de segurança físicas, a 2FA é relativamente fácil de configurar e usar.
      `,
      date: '2023-05-10',
    },
    {
      id: '3',
      title: 'Melhores práticas de segurança para trabalho remoto',
      image: imgBlog3,
      content: `
        Com o aumento do trabalho remoto, é crucial manter boas práticas de segurança cibernética. Aqui estão algumas dicas essenciais:
        <br /><br />
        1. <strong>Use uma VPN:</strong> Sempre use uma VPN (Rede Privada Virtual) ao se conectar a redes públicas ou não confiáveis. Isso criptografa seu tráfego de internet, protegendo seus dados.
        <br /><br />
        2. <strong>Mantenha seu software atualizado:</strong> Certifique-se de que seu sistema operacional, antivírus e todos os aplicativos estejam atualizados com as últimas correções de segurança
        <br /><br />
        3. <strong>Crie senhas fortes:</strong> <br />Crie senhas únicas e complexas para todas as suas contas e use um gerenciador de senhas para armazená-las com segurança.
        <br /><br />
        4. <strong>Implemente autenticação de dois fatores</strong><br />Ative a autenticação de dois fatores em todas as contas que oferecem essa opção para uma camada extra de segurança.
        <br /><br />
        5. <strong> Seja cauteloso com e-mails e links</strong><br /> Fique atento a e-mails de phishing e não clique em links suspeitos. Verifique sempre a fonte antes de abrir anexos ou fornecer informações.
      `,
      date: '2023-04-25',
    },
  ];

  // Encontra o artigo com base no ID
  const article = articles.find((article) => article.id === id);

  // Se não encontrar o artigo, mostra uma mensagem de erro
  if (!article) {
    return <p>Artigo não encontrado!</p>;
  }

  return (
    <div className="article-background">
      {/* Container branco que cobre o fundo azul */}
      <div className="article-page">
        {/* Link para voltar */}
        <Link to="/blog">← Voltar para o blog</Link>

        {/* Imagem */}
        <img src={article.image} alt={article.title} className="article-image" />

        {/* Conteúdo do artigo */}
        <div className="article-content">
          <h1>{article.title}</h1>
          <p><strong></strong> {article.date}</p>
          <div dangerouslySetInnerHTML={{ __html: article.content }} />
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;
