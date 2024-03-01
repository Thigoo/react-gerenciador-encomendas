import React, { useState } from 'react'
import '../FormAddProd/style.css'
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Timestamp, addDoc, collection } from 'firebase/firestore';
import { db } from '../../../../services/firebase';

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

function FormAddProd() {

  const [produto, setProduto] = useState('');
  const [valor, setValor] = useState('');

  const navigate = useNavigate();

  const addProduct = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, 'products'), {
        produto: produto,
        valor: valor,
        data: Timestamp.now()
      })
      navigate('/product');
    } catch (error) {
      console.log(error);
    }
    setProduto('');
    setValor('');
  }

  return (
    <Form onSubmit={addProduct}>
      <Label>Produto:</Label>
      <Input 
        type='text'
        value={produto}
        onChange={(e) => setProduto(e.target.value)}
        required
      />
      <Label>Valor:</Label>
      <Input 
        type='text'
        value={valor}
        onChange={(e) => setValor(e.target.value)}
        required
      />
      <Button type='submit'>Adicionar Produto</Button>
    </Form>
  )
}

export default FormAddProd