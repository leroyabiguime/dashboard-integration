import React from 'react'

import {Route, Routes} from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import Customers from '../pages/Customers'

const RoutesList = () => {
  return (
      <Routes>
        <Route path="/" exact element={<Dashboard/>} />
        <Route path="/customers" exact  element={<Customers/>}/>
        
        </Routes>

  )
}
export default RoutesList
