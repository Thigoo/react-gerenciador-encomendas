import React from 'react'
import SideBar from '../../components/SideBar'
import '../Products/style.css'
import Title from '../../components/Title'
import Button from '../../components/Button'

function Produtos() {
  return (
    <div className="produtos-container">
        <SideBar />
        <div className="produtos-main">
            <Title  title={"Meus Produtos"}/>
            <div className="produtos-btn-add">
                <Button title={"Adicionar"}/>
            </div>
            <div className="produtos-content">
                
            </div>
        </div>
    </div>
  )
}

export default Produtos