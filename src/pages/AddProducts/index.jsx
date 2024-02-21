import React from 'react'
import SideBar from '../../components/SideBar'
import Title from '../../components/Title'
import "../AddProducts/style.css"
import FormAddProd from '../../components/Forms/ProductForms/FormAddProd'

function AddProducts() {
  return (
    <div className="add-products-container">
        <SideBar />
        <div className="add-products-main">
            <Title title={"Adicionar Produto"} />
            <div className="add-products-content">
              <FormAddProd />
            </div>
        </div>
    </div>
  )
}

export default AddProducts