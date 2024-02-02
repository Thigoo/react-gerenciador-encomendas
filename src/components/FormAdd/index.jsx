import React, { useState } from 'react';
import styled from 'styled-components';

import { db } from '../../services/firebase'
import { Timestamp, addDoc, collection } from 'firebase/firestore';

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
  const [data, setData] = useState('');
  const [produto, setProduto] = useState('');
  const [valor, setValor] = useState('');
  const [pago, setPago] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, 'encomendas'), {
        cliente: cliente,
        data: Timestamp.now(),
        produto: produto,
        valor: valor,
        pago: false

      });
    } catch (error) {
      alert(error);
    }

    setCliente('');
    setData('');
    setProduto('');
    setValor('');
    setPago('');

  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>Cliente:</Label>
      <Input
        type="text"
        value={cliente}
        onChange={(e) => setCliente(e.target.value)}
        required
      />

      <Label>Data:</Label>
      <Input
        type="text"
        value={data}
        onChange={(e) => setData(e.target.value)}
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
        value={pago}
        onChange={(e) => setPago(e.target.value)}
        required
      >
        <option value="">Selecione</option>
        <option value="true">Sim</option>
        <option value="false">Não</option>
      </select>

      <Button type="submit">Inserir</Button>
    </Form>
  );
};

export default FormAdd;
