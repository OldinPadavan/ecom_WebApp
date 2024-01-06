import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
import Cart from '../components/Cart/Cart'
import NavigationBar from '../components/NavigationBar/NavigationBar'
import Footer from '../components/Footer/Footer'
import Product from '../components/Product/Product'
import ProductInfo from '../components/ProductInfo/ProductInfo'
import OrderCreating from '../components/OrderCreating/OrderCreating'
import Order from '../components/Order/Order'
import OrderDetails from '../components/Order/OrderDetails'

const CustomerRoutes = () => {
  return (
    <div>
        <div>
        <NavigationBar/>
        </div>
        <Routes>
            <Route path='/' element={<HomePage/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='/:levelOne/:levelTwo/:levelThree' element={<Product/>}></Route>
            <Route path='/product/:productId' element={<ProductInfo/>}></Route>
            <Route path='/ordercreating' element={<OrderCreating/>}></Route>
            <Route path='/account/order' element={<Order/>}></Route>
            <Route path='/account/order/:orderId' element={<OrderDetails/>}></Route>


    {/*<Order/>*/}
    {/*<OrderDetails/>*/}
            
        </Routes>
        <div>
        <Footer/>
        </div>
    </div>
  )
}

export default CustomerRoutes