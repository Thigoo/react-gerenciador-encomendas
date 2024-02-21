import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import UpdateOrder from '../pages/Orders/UpdateOrder'
import AddOrder from '../pages/Orders/AddOrder'
import Products from '../pages/Products'
import AddProducts from '../pages/AddProducts'

function AppRouter() {
  return (
    <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/updateOrder/:id' element={<UpdateOrder />}></Route>
        <Route path='/addOrder' element={<AddOrder />}></Route>
        <Route path='/products' element={<Products />}></Route>
        <Route path='/addProducts' element={<AddProducts />}></Route>
        <Route path='/updateProducts' element={<AddProducts />}></Route>
    </Routes>
  )
}

export default AppRouter