import React from 'react'
import '../Home/style.css'
import SideBar from '../../components/SideBar'
import Button from '../../components/Button'
import ResponsiveTable from '../../components/ResponsiveTable'
import Title from '../../components/Title'

function Home() {
  return (
    <div className='home-container'>
      <SideBar />
      <div className='home-main'>
        <Title title={'Minhas encomendas'}/>
        <div className="home-button-add">
          <Button title={'Adicionar'}/>
        </div>
        <div className="home-content">
          <ResponsiveTable />
        </div>
      </div>
    </div>

  )
}

export default Home