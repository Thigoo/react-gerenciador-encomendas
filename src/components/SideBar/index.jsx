import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';

const SidebarWrapper = styled.div`
  width: 200px; /* Largura da barra lateral */
  height: 100%; /* Altura ocupando toda a altura da tela */
  background-color: #333; /* Cor de fundo */
  color: #fff; /* Cor do texto */
  padding: 20px; /* Espaçamento interno */
  box-sizing: border-box; /* Garante que o padding não aumente a largura total */

  @media screen and (max-width: 480px) {
    width: 100%;
    height: auto;
    color: yellow;
    text-decoration: none;
    })
`;

function SideBar() {

  return (
    <SidebarWrapper>
      <Link to={'/'}
        style={{
          color: '#FFFFFF', textDecoration: 'none'
        }}>
        Home
      </Link>
    </SidebarWrapper>
  )
}

export default SideBar