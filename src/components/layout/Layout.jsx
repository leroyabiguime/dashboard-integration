import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import Sidebar from '../sidebar/Sidebar'
import  RoutesList  from '../Routes'
import './layout.css'
import Topnav from '../topnav/Topnav'


const Layout = () => {
  return (
    <BrowserRouter>
                <div className='layout'>
                    <Sidebar/>
                <div className='layout__content'>
                    <Topnav/>
                    <div className='layout__content-main'>
                        <RoutesList />
                    </div>
                </div>
                </div>
        
    </BrowserRouter>
  )
}

export default Layout