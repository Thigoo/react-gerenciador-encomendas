import React from 'react';
import styled from 'styled-components';
import './style.css'
import { MdOutlineEditCalendar } from 'react-icons/md'
import { BsFillTrash3Fill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../../services/firebase';

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 16px;
`;

const Th = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
  background: #333;
  color: #fafafa;
`;

const Td = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;

const OrderTable = ({ data }) => {

  const navigate = useNavigate();

  const goUpdateOrder = (id) => {
    navigate(`/updateOrder/${id}`);
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
    <Table>
      <thead>
        <tr>
          <Th>Cliente</Th>
          <Th>Produto</Th>
          <Th>Tema</Th>
          <Th>Valor</Th>
          <Th>Pago</Th>
          <Th>Editar</Th>
          <Th>Excluir</Th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <Td>{item.encomenda.cliente}</Td>
            {/* <Td>{formatarData(item.encomenda.data)}</Td> */}
            <Td>{item.encomenda.produto}</Td>
            <Td>{item.encomenda.tema}</Td>
            <Td>{item.encomenda.valor}</Td>
            <Td>{item.encomenda.pago ? 'Sim' : 'Não'}</Td>
            <Td>
              <button
                className='btn-edit'
                onClick={() => goUpdateOrder(item.id)}>
                <MdOutlineEditCalendar />
              </button>
            </Td>
            <Td>
              <button
                className='btn-delete'
                onClick={() => deletar(item.id)}>
                <BsFillTrash3Fill />
              </button>
            </Td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
export default OrderTable;



