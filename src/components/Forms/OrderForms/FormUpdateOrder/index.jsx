import { doc, updateDoc } from 'firebase/firestore';
import React, { useState } from 'react'
import styled from 'styled-components';
import { db } from '../../../../services/firebase';
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


function FormUpdate({ id, clienteAntigo, produtoAntigo, temaAntigo, valorAntigo, pagoAntigo }) {

  const [cliente, setCliente] = useState(clienteAntigo);
  const [produto, setProduto] = useState(produtoAntigo);
  const [tema, setTema] = useState(temaAntigo);
  const [valor, setValor] = useState(valorAntigo);
  const [pago, setPago] = useState(pagoAntigo === 'true');

  const navigate = useNavigate();

  const updateOrder = async (e) => {
    e.preventDefault();

    const encDocRef = doc(db, 'encomendas', id);
    try {
      await updateDoc(encDocRef, {
        cliente: cliente,
        produto: produto,
        tema: tema,
        valor: valor,
        pago: pago
      })
      alert('Produto atualizado com sucesso!')
      navigate('/');
    } catch (error) {
      alert(error);
    }
  }

  const handleChangePago = (e) => {
    setPago(e.target.value === "true");
    console.log("Valor de pago:", e.target.value);
  };

  return (
    <Form onSubmit={updateOrder}>
      <Label>Cliente:</Label>
      <Input
        type="text"
        value={cliente}
        onChange={(e) => setCliente(e.target.value)}
        required
      />
      <Label>Produto:</Label>
      <Input
        type="text"
        value={produto}
        onChange={(e) => setProduto(e.target.value)}
        required
      />
      <Label>Tema:</Label>
      <Input
        type="text"
        value={tema}
        onChange={(e) => setTema(e.target.value)}
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
        // onChange={(e) => setPago(e.target.value)}
        onChange={handleChangePago}
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