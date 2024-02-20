import React from 'react'
import '../Home/style.css'
import SideBar from '../../components/SideBar'
import Button from '../../components/Button'
import Title from '../../components/Title'
import ResponsiveComponent from '../../components/ResponsiveComponent'

function Home() {
  
  return (
    <div className='home-container'>
      <SideBar />
      <div className='home-main'>
        <Title title={'Minhas encomendas'}/>
        <div className="home-button-add">
          <Button title={'Adicionar'} rota={'/create'}/>
        </div>
        <div className="home-content">
          <ResponsiveComponent />
        </div>
      </div>
    </div>

  )
}

export default Home