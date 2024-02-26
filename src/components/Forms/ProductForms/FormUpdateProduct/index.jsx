import { doc } from 'firebase/firestore';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
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

function FormUpdateProduct({ oldProduct, oldValue }) {

  const [product, setProduct] = useState(oldProduct);
  const [value, setValue] = useState(oldValue);

  const navigate = useNavigate();

  const updateProduct = async (e) => {
    e.preventDefault();

    const prodDocRef = doc(db, 'products'.id);

    try {
      await updateProduct(prodDocRef, {
        product: product,
        value: value
      });
      alert('Produto atualizado com sucesso!');
      navigate('/products');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Form onSubmit={updateProduct}>
      <Label>Produto:</Label>
      <Input
        type='text'
        value={product}
        onChange={(e) => setProduct(e.target.value)}
        required
      />
      <Label>Valor:</Label>
      <Input
        type='number'
        value={value}
        onChange={(e) => setValue(e.target.value)}
        required
      />
      <Button type='submit'>Atualizar</Button>
    </Form>
  )
}

export default FormUpdateProduct