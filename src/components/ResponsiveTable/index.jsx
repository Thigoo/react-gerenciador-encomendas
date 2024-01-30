import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ResponsiveCard } from '../ResponsiveCard';
import { collection, onSnapshot, query } from 'firebase/firestore';
import { db } from '../../services/firebase';

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
          <Td>{item.encomenda.cliente}</Td>
          <Td>{item.encomenda.data.toDate().toLocaleString()}</Td>
          <Td>{item.encomenda.produto}</Td>
          <Td>{item.encomenda.valor}</Td>
          <Td>{item.encomenda.pago ? 'Sim' : 'Não'}</Td>
        </tr>
      ))}
    </tbody>
  </Table>
);

const ResponsiveComponent = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const [encomendas, setEncomendas] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const q = query(collection(db, 'encomendas'));
    onSnapshot(q, (QuerySnapshot) => {
      setEncomendas(QuerySnapshot.docs.map(doc => ({
        id: doc.id,
        encomenda: doc.data()
      })))
    })
  }, []);

  return (
    <Container>
      {isMobile ? (
        encomendas.map((item, index) => (
          <ResponsiveCard key={index} item={item} />
        ))
      ) : (
        <ResponsiveTable data={encomendas} />
      )}
    </Container>
  );
};

export default ResponsiveComponent;

