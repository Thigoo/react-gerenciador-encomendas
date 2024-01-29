import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ResponsiveCard } from '../ResponsiveCard';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

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

const ResponsiveTable = ({ data }) => (
  <Table>
    <thead>
      <tr>
        <Th>Cliente</Th>
        <Th>Data</Th>
        <Th>Produto</Th>
        <Th>Valor</Th>
        <Th>Pago</Th>
      </tr>
    </thead>
    <tbody>
      {data.map((item, index) => (
        <tr key={index}>
          <Td>{item.cliente}</Td>
          <Td>{item.data}</Td>
          <Td>{item.produto}</Td>
          <Td>{item.valor}</Td>
          <Td>{item.pago ? 'Sim' : 'Não'}</Td>
        </tr>
      ))}
    </tbody>
  </Table>
);

const ResponsiveComponent = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Dados para exibir
  const data = [
    
      {
        "cliente": "Kathy Wyman MD",
        "data": "2023-02-01T02:21:18.929Z",
        "produto": "Modern Frozen Chips",
        "valor": "81.00",
        "pago": false,
        "id": "1"
      },
      {
        "cliente": "Dr. Ora Hilll",
        "data": "2021-04-19T22:35:58.510Z",
        "produto": "Refined Granite Table",
        "valor": "462.00",
        "pago": true,
        "id": "2"
      },
      {
        "cliente": "Victor Kuhic",
        "data": "2041-12-05T02:50:55.608Z",
        "produto": "Gorgeous Metal Shirt",
        "valor": "301.00",
        "pago": false,
        "id": "3"
      },
      {
        "cliente": "Rodolfo Pouros",
        "data": "2047-09-26T06:20:36.256Z",
        "produto": "Handmade Metal Keyboard",
        "valor": "369.00",
        "pago": true,
        "id": "4"
      },
      {
        "cliente": "Josefina Braun",
        "data": "2083-06-29T22:40:25.182Z",
        "produto": "Small Bronze Tuna",
        "valor": "147.00",
        "pago": true,
        "id": "5"
      }
    ]
    // Adicione mais objetos conforme necessário
  ;

  return (
    <Container>
      {isMobile ? (
        data.map((item, index) => (
          <ResponsiveCard key={index} item={item} />
        ))
      ) : (
        <ResponsiveTable data={data} />
      )}
    </Container>
  );
};

export default ResponsiveComponent;

