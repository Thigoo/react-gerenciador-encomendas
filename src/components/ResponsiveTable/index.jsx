import React from 'react';
import styled from 'styled-components';
import '../ResponsiveTable/style.css'
import { MdOutlineEditCalendar } from 'react-icons/md'
import { BsFillTrash3Fill } from "react-icons/bs";

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

const ResponsiveTable = ({ data, formatarData, handleClick }) => {
  return (
    <Table>
      <thead>
        <tr>
          <Th>Cliente</Th>
          <Th>Data</Th>
          <Th>Produto</Th>
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
            <Td>{formatarData(item.encomenda.data)}</Td>
            <Td>{item.encomenda.produto}</Td>
            <Td>{item.encomenda.valor}</Td>
            <Td>{item.encomenda.pago ? 'Sim' : 'Não'}</Td>
            <Td>
              <button
                className='btn-edit'>
                <MdOutlineEditCalendar />
              </button>
            </Td>
            <Td>
              <button
                className='btn-delete'
                handleClick={handleClick}>
                <BsFillTrash3Fill />
              </button>
            </Td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
export default ResponsiveTable;



