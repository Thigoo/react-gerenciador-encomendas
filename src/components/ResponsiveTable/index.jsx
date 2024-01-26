import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const Card = styled.div`
  width: 300px;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  margin: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
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

const ResponsiveCard = ({ item }) => (
  <Card>
    <CardTitle>{item.cliente}</CardTitle>
    <CardContent>
      <div>
        <strong>Data:</strong> {item.data}
      </div>
      <div>
        <strong>Produto:</strong> {item.produto}
      </div>
      <div>
        <strong>Valor:</strong> {item.valor}
      </div>
      <div>
        <strong>Pago:</strong> {item.pago ? 'Sim' : 'Não'}
      </div>
    </CardContent>
  </Card>
);

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
      cliente: 'Cliente 1',
      data: '2022-01-01',
      produto: 'Produto A',
      valor: 100.0,
      pago: true,
    },
    {
      cliente: 'Cliente 2',
      data: '2022-02-01',
      produto: 'Produto B',
      valor: 150.0,
      pago: false,
    },
    // Adicione mais objetos conforme necessário
  ];

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

