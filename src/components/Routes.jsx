import React from 'react'

import {Route, Routes} from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import Customers from '../pages/Customers'
import Categories from '../pages/Categories'
import Products from '../pages/Products'
import Analytics from '../pages/Analytics'
import Orders from '../pages/Orders'
const RoutesList = () => {
  return (
      <Routes>
        <Route path="/" exact element={<Dashboard/>} />
        <Route path="/customers" exact  element={<Customers/>}/>
        <Route path="/categories" exact  element={<Categories/>}/>
        <Route path="/products" exact  element={<Products/>}/>
        <Route path="/orders" exact  element={<Orders/>}/>
        <Route path="/analytics" exact  element={<Analytics/>}/>
        
        </Routes>

  )
}
export default RoutesList
