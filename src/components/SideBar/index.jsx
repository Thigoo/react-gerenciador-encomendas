import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import '../SideBar/style.css'
import { logout } from '../../services/firebase';

const SidebarWrapper = styled.div`
  width: 230px; /* Largura da barra lateral */
  height: 100%; /* Altura ocupando toda a altura da tela */
  background-color: #333; /* Cor de fundo */
  color: #fff; /* Cor do texto */
  padding: 20px; /* Espaçamento interno */
  box-sizing: border-box; /* Garante que o padding não aumente a largura total */
  position: fixed;
  @media screen and (max-width: 480px) {
    width: 100%;
    height: auto;
    text-decoration: none;
    position: relative;
    })
`;

function SideBar({name}) {

  return (
    <SidebarWrapper>
      <div className="header">
        <div className="img">
          <img src="#" alt="Logo" />
        </div>

        <p>{name}</p>
      </div>
      <div className='links'>
        <Link to={'/home'} className='link'>Encomendas</Link>
        <Link to={'/products'} className='link'>Produtos</Link>        
      </div>
      <div className="logout">
        <button className='logout-btn' onClick={logout}>Sair</button>
        </div>
    </SidebarWrapper>
  )
}

export default SideBar