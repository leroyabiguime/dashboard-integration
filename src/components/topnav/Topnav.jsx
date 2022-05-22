import React from 'react'
import './topnav.css'
import '../dropdown/Dropdown'
import Dropdown from '../dropdown/Dropdown'
import notifications from '../../assets/JsonData/notification.json'
import { Link } from 'react-router-dom'

const renderNotificationItem = (item, index) => (
    <div className="notification-item" key={index}>
        <i className={item.icon}></i>
        <span>{item.content}</span>
    </div>
)

const Topnav = () => {
  return (
    <div>
        <div className="topnav">
            <div className="topnav__search">
                <input type="text" placeholder='Search here ...' />
                <i className='bx bx-search'></i>
            </div>
            <div className="topnav__right">
                <div className="topnav__right-item">
                    <Dropdown
                    icon='bx bx-user'
                    />
                </div>
                <div className="topnav__right-item">
                <Dropdown
                icon='bx bx-bell'
                badge='12'
                contentData={notifications}
                renderItems={(item, index) => renderNotificationItem(item, index)}
                renderFooter={() => <Link to='/'>View All </Link>}
                />
                </div>
                <div className="topnav__right-item">
                <Dropdown

                />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Topnav