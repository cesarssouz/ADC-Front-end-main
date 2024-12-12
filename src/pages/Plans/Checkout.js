import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './Checkout.css';

const Checkout = () => {
  const { planTitle } = useParams();
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    numeroCartao: '',
    dataExpiracao: '',
    cvv: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};

    // Validação de Nome (não vazio e sem números)
    if (!formData.nome.trim() || /\d/.test(formData.nome)) {
      newErrors.nome = 'Por favor, insira um nome válido.';
    }

    // Validação de E-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Por favor, insira um e-mail válido.';
    }

    // Validação de Número do Cartão (16 dígitos)
    if (!/^\d{16}$/.test(formData.numeroCartao)) {
      newErrors.numeroCartao = 'Por favor, insira um número de cartão válido.';
    }

    // Validação de Data de Expiração (MM/AA)
    if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(formData.dataExpiracao)) {
      newErrors.dataExpiracao = 'Por favor, insira uma data válida no formato MM/AA.';
    }

    // Validação de CVV (3 dígitos)
    if (!/^\d{3}$/.test(formData.cvv)) {
      newErrors.cvv = 'Por favor, insira um CVV válido.';
    }

    setErrors(newErrors);

    // Retorna true se não houver erros
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert('Compra realizada com sucesso!');
      // backend
    }
  };

  return (
    <div className="checkout-container">
      <h1>Comprar Plano {planTitle}</h1>
      <form className="checkout-form" onSubmit={handleSubmit}>
        {/* Nome Completo */}
        <label>Nome Completo</label>
        <input
          type="text"
          name="nome"
          placeholder="Nome Completo"
          value={formData.nome}
          onChange={handleChange}
        />
        {errors.nome && <span className="error">{errors.nome}</span>}

        {/* E-mail */}
        <label>E-mail</label>
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <span className="error">{errors.email}</span>}

        {/* Número do Cartão */}
        <label>Número do Cartão</label>
        <input
          type="text"
          name="numeroCartao"
          placeholder="Número do Cartão"
          value={formData.numeroCartao}
          onChange={handleChange}
        />
        {errors.numeroCartao && <span className="error">{errors.numeroCartao}</span>}

        <div className="card-details">
  <div>
    <label>Data de Expiração</label>
    <input
      type="text"
      name="dataExpiracao"
      placeholder="MM/AA"
      value={formData.dataExpiracao}
      onChange={handleChange}
    />
    {errors.dataExpiracao && <span className="error">{errors.dataExpiracao}</span>}
  </div>
  <div>
    <label>CVV</label>
    <input
      type="text"
      name="cvv"
      placeholder="CVV"
      value={formData.cvv}
      onChange={handleChange}
    />
    {errors.cvv && <span className="error">{errors.cvv}</span>}
  </div>
</div>


        {/* Botão de Confirmar */}
        <button type="submit">Confirmar Compra</button>
      </form>
      <a href="/planos">Voltar para Planos</a>
    </div>
  );
};

export default Checkout;

