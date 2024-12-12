import React from 'react';
import './Blog.css';
import imgBlog1 from '../../assets/Imagens/ImgBlog1.jpeg';
import imgBlog2 from '../../assets/Imagens/imgBlog2.png';
import imgBlog3 from '../../assets/Imagens/imgBlog3.jpg';
import { Link } from 'react-router-dom';

const Blog = () => {
  const articles = [
    {
      id: 1,
      title: 'Como se proteger contra phishing',
      description: 'Aprenda a identificar e evitar ataques de phishing com estas dicas essenciais.',
      date: '2023-05-15',
      link: '#',
      image: imgBlog1, 
    },
    {
      id: 2,
      title: 'A importância da autenticação de dois fatores',
      description: 'Descubra por que a autenticação de dois fatores é crucial para a segurança de suas contas online.',
      date: '2023-05-10',
      link: '#',
      image: imgBlog2, 
    },
    {
      id: 3,
      title: 'Melhores práticas de segurança para trabalho remoto',
      description: 'Mantenha-se seguro enquanto trabalha de casa com estas dicas de cibersegurança.',
      date: '2023-04-25',
      link: '#',
      image: imgBlog3, 
    },
  ];

  return (
    <div className="blog">
      <h1>Blog de Cibersegurança</h1>
      <div className="blog-grid">
        {articles.map((article) => (
          <div key={article.id} className="blog-card">
            <div className="blog-image">
              <img src={article.image} alt={article.title} /> 
            </div>
            <div className="blog-content">
              <h3>{article.title}</h3>
              <p>{article.description}</p>
              <span>{article.date}</span>
              <Link to={`/blog/article/${article.id}`}>Leia mais</Link> {/* Redireciona com o ID */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;

