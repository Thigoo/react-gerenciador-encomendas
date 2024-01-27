import React from 'react'
import SideBar from '../../components/SideBar'
import '../Create/style.css'
import Title from '../../components/Title'
import FormAdd from '../../components/FormAdd'

function Create() {
  return (
    <div className="create-container">
      <SideBar />
      <div className="create-main">
        <Title title={'Adicionar encomenda'}/>
      <div className="create-content">
        <FormAdd />
      </div>
      </div>
    </div>
    )
}

export default Create