import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import '../SideBar/style.css'

const SidebarWrapper = styled.div`
  width: 300px; /* Largura da barra lateral */
  height: 100%; /* Altura ocupando toda a altura da tela */
  background-color: #333; /* Cor de fundo */
  color: #fff; /* Cor do texto */
  padding: 20px; /* Espaçamento interno */
  box-sizing: border-box; /* Garante que o padding não aumente a largura total */

  @media screen and (max-width: 480px) {
    width: 100%;
    height: auto;
    text-decoration: none;
    })
`;

function SideBar() {

  return (
    <SidebarWrapper>
      <div className="header">
        <img src="#" alt="Logo" />
      </div>
      <div className='links'>
      <Link to={'/'} className='link'>Home</Link>
      </div>
    </SidebarWrapper>
  )
}

export default SideBar