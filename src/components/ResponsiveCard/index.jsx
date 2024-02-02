import React from "react";
import styled from "styled-components";



const Card = styled.div`
  width: 300px;
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
  
  const {cliente, data, produto, valor, pago} = item.encomenda;
  
  const dataFormatada = data.toLocaleString();

  return (
    <Card>
      <CardTitle>{cliente}</CardTitle>
      <CardContent>
        <div>
          <strong>Data:</strong> {dataFormatada}
        </div>
        <div>
          <strong>Produto:</strong> {produto}
        </div>
        <div>
          <strong>Valor:</strong> {valor}
        </div>
        <div>
          <strong>Pago:</strong> {pago ? 'Sim' : 'Não'}
        </div>
      </CardContent>
    </Card>
  )};