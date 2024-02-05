import React from 'react'
import { MdErrorOutline } from "react-icons/md";
"react-icons/sl";
import '../NoOrders/style.css'


function NoOrders() {
  return (
    <div className='no-container'>
      <div className="info">
        <h2>Oops, nenhuma encomenda cadastrada.</h2>
        <p>Adicione uma nova encomenda</p>
      </div>
      <span className='icon'>
        <MdErrorOutline
        />
      </span>
    </div>
  )
}

export default NoOrders