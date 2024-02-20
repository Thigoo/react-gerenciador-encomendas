import React from 'react'
import { MdErrorOutline } from "react-icons/md";
"react-icons/sl";
import '../NoOrders/style.css'


function NoOrders({title, description}) {
  return (
    <div className='no-container'>
      <div className="info">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <span className='icon'>
        <MdErrorOutline
        />
      </span>
    </div>
  )
}

export default NoOrders