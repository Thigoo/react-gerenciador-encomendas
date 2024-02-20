import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Update from '../pages/Update'
import Create from '../pages/Create'
import Produtos from '../pages/Products'
import AddProducts from '../pages/AddProducts'



function AppRouter() {
  return (
    <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/update/:id' element={<Update />}></Route>
        <Route path='/create' element={<Create />}></Route>
        <Route path='/produtos' element={<Produtos />}></Route>
        <Route path='/adicionarProdutos' element={<AddProducts />}></Route>
    </Routes>
  )
}

export default AppRouter