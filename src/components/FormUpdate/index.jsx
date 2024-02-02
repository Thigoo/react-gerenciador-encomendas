import { doc, updateDoc } from 'firebase/firestore';
import React, { useState } from 'react'
import styled from 'styled-components';
import { db } from '../../services/firebase';

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

function FormUpdate({id}) {

    const [cliente, setCliente] = useState('');
    const [data, setData] = useState();
    const [produto, setProduto] = useState('');
    const [valor, setValor] = useState('');
    const [pago, setPago] = useState('');

    const atualizar = async (e) => {
        e.preventDefault();

        const encDocRef = doc(db, 'encomendas', id)
        try {
            await updateDoc(encDocRef, {
                cliente: cliente,
                data: data,
                produto: produto,
                valor: valor,
                pago: pago
            })
        } catch (error) {
            alert(error);
        }
    }

  return (
    <Form onSubmit={atualizar}>
      <Label>Cliente:</Label>
      <Input
        type="text"
        value={cliente}
        onChange={(e) => setCliente(e.target.value)}
        required
      />
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

      <Button type="submit">Atualizar</Button>
    </Form>
  );
  
}

export default FormUpdate