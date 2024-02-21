import React from 'react'
import '../Home/style.css'
import SideBar from '../../components/SideBar'
import Button from '../../components/Button'
import Title from '../../components/Title'
import OrderResponsiveComponent from '../../components/ResponsiveComponents/OrderResponsiveComponent'

function Home() {
  
  return (
    <div className='home-container'>
      <SideBar />
      <div className='home-main'>
        <Title title={'Minhas encomendas'}/>
        <div className="home-button-add">
          <Button title={'Adicionar'} rota={'/addOrder'}/>
        </div>
        <div className="home-content">
          <OrderResponsiveComponent />
        </div>
      </div>
    </div>

  )
}

export default Home