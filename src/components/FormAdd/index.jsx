import React, { useState } from 'react';
import styled from 'styled-components';

import { db } from '../../services/firebase'
import { Timestamp, addDoc, collection } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin: 20px auto;
  padding: 0 1rem;
`;

const Label = styled.label`
  margin-bottom: 8px;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 8px;
  margin-bottom: 16px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  margin-top: 1rem;
`;

const FormAdd = () => {
  const [cliente, setCliente] = useState('');
  const [produto, setProduto] = useState('');
  const [tema, setTema] = useState('');
  const [valor, setValor] = useState('');
  const [pago, setPago] = useState(false);

  const navigate = useNavigate();

  const adicionar = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, 'encomendas'), {
        cliente: cliente,
        data: Timestamp.now(),
        produto: produto,
        tema: tema,
        valor: valor,
        pago: pago
      });

      navigate('/');
    } catch (error) {
      alert(error);
    }

    setCliente('');
    setProduto('');
    setValor('');
    setPago(false);
  };

  return (
    <Form onSubmit={adicionar}>
      <Label>Cliente:</Label>
      <Input
        type="text"
        value={cliente}
        onChange={(e) => setCliente(e.target.value)}
        required
      />

      <Label>Tema:</Label>
      <Input
        type="text"
        value={tema}
        onChange={(e) => setTema(e.target.value)}
        required
      />

      <Label>Produto:</Label>
      <Input
        type="text"
        value={produto}
        onChange={(e) => setProduto(e.target.value)}
        required
      />

      <Label>Valor:</Label>
      <Input
        type="number"
        value={valor}
        onChange={(e) => setValor(e.target.value)}
        required
      />

      <Label>Pago:</Label>
      <select
        value={pago.toString()}
        onChange={(e) => setPago(e.target.value === "true")}
        required
      >
        <option value="">Selecione</option>
        <option value="true">Sim</option>
        <option value="false">Não</option>
      </select>

      <Button type="submit">Adicionar Encomenda</Button>
    </Form>
  );
};

export default FormAdd;
