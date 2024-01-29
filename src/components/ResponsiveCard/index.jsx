import React from "react";
import styled from "styled-components";



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

export const ResponsiveCard = ({ item }) => (
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