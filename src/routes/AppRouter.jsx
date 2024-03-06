import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import UpdateOrder from '../pages/Orders/UpdateOrder'
import AddOrder from '../pages/Orders/AddOrder'
import Products from '../pages/Products'
import AddProducts from '../pages/Products/AddProducts'
import UpdateProduct from '../pages/Products/UpdateProduct'
import Login from '../pages/Login'
import Register from '../pages/Register'
import ResetPassword from '../pages/ResetPassword'

function AppRouter() {
  return (
    <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/updateOrder/:id' element={<UpdateOrder />}></Route>
        <Route path='/addOrder' element={<AddOrder />}></Route>
        <Route path='/products' element={<Products />}></Route>
        <Route path='/addProduct' element={<AddProducts />}></Route>
        <Route path='/updateProduct/:id' element={<UpdateProduct />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/reset' element={<ResetPassword />}></Route>
    </Routes>
  )
}

export default AppRouter