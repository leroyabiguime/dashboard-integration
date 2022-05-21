import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import Sidebar from '../sidebar/Sidebar'
import  RoutesList  from '../Routes'
import './layout.css'

const Layout = () => {
  return (
    <BrowserRouter>
                <div className='layout'>
                    <Sidebar/>
                <div className='layout__content'>
                    <div className='layout__content-main'>
                        <RoutesList />
                    </div>
                </div>
                </div>
        
    </BrowserRouter>
  )
}

export default Layout