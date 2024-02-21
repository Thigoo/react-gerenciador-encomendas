import React from 'react'
import './style.css'
import FormAddOrder from '../../../components/Forms/OrderForms/FormAddOrder'
import SideBar from '../../../components/SideBar'
import Title from '../../../components/Title'

function AddOrder() {
  return (
    <div className="add-order-container">
      <SideBar />
      <div className="add-order-main">
        <Title title={'Adicionar encomenda'} />
        <div className="add-order-content">
          <FormAddOrder />
        </div>
      </div>
    </div>
  )
}

export default AddOrder