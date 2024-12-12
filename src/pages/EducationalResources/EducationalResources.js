import React from 'react';
import './EducationalResources.css';

const EducationalResources = () => {
   return (
      <div className="educational-resources-container">
         <h1>O que é Cibersegurança?</h1>
         <div className="educational-content">
            <div className="image-placeholder">
               <img
                  src="caminho-da-sua-imagem"
                  alt="Imagem relacionada à cibersegurança"
                  className="educational-image"
               />
            </div>
            <div className="educational-text">
               <p>
                  Cibersegurança refere-se à prática de proteger sistemas, redes e programas de ataques digitais.
                  É crucial entender a importância de proteger suas informações pessoais e dados contra ameaças
                  digitais em um mundo cada vez mais conectado.
               </p>
               <p>Leia mais sobre como proteger sua segurança digital!</p>
            </div>
         </div>
      </div>
   );
};

export default EducationalResources;
