import React from 'react'
import '../Home/style.css'
import Card from '../../components/Card'
import SideBar from '../../components/SideBar'

function Home() {
  return (
    <div className='home-container'>
      <SideBar />
      <div className='home-main'>
        <div className="home-header">
          Minhas encomendas
        </div>
        <div className="home-content">
          <Card />
        </div>
      </div>
    </div>

  )
}

export default Home