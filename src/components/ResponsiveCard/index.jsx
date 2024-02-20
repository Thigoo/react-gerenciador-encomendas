import { deleteDoc, doc } from "firebase/firestore";
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { db } from "../../services/firebase";
import { MdOutlineEditCalendar } from 'react-icons/md'
import { BsFillTrash3Fill } from "react-icons/bs";
import '../ResponsiveCard/style.css'

const Card = styled.div`
  width: 90%;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  margin: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: 2rem;
`;

const CardTitle = styled.div`
  background-color: #333;
  color: #fff;
  padding: 16px;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
  padding: 16px;

  div {
    margin-bottom: 8px;
  }
`;

export const ResponsiveCard = ({ item }) => {

  // const { cliente, produto, tema, valor, pago } = item;

  const navigate = useNavigate();

  // const dataFormatada = data.toLocaleString();

  const irParaUpdate = (id) => {
    navigate(`/update/${id}`);
  }

  const deletar = async (id) => {
    const confirmacao = confirm(`Você tem certeza?`);

    if (confirmacao) {
      const encDocRef = doc(db, 'encomendas', id);
      try {
        await deleteDoc(encDocRef);
      } catch (error) {
        alert(error)
      }
    }
  }

  return (
    <Card>
      <CardTitle>{item.encomenda.cliente}</CardTitle>
      <CardContent>
        {/* <div>
          <strong>Data:</strong> {dataFormatada}
        </div> */}
        <div>
          <strong>Produto:</strong> {item.encomenda.produto}
        </div>
        <div>
          <strong>Tema:</strong> {item.encomenda.tema}
        </div>
        <div>
          <strong>Valor:</strong> {item.encomenda.valor}
        </div>
        <div>
          <strong>Pago:</strong> {item.encomenda.pago ? 'Sim' : 'Não'}
        </div>
        <div className="card-btn">
          <button
            className="card-btn-edit"
            onClick={() => irParaUpdate(item.id)}>
            <MdOutlineEditCalendar />
          </button>
          <button
            className="card-btn-delete"
            onClick={() => deletar(item.id)}>
            <BsFillTrash3Fill />
          </button>
        </div>
      </CardContent>
    </Card>
  )
};