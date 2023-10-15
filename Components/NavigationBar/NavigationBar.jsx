import React from 'react'
import { NavLink } from 'react-router-dom'
import ROUTES, { MENUS } from '../../Constants/routes'
import './NavigationBar.css'

function NavigationBar({ children }) {
  return (
    <div>
      <div className='navbar'>
        <h1 className='title'>Tech Giant</h1>
        <div className='nav-btn-container'>
          {MENUS.map((item, index) =>
            <NavLink key={index} to={item.path} className='nav-btn'>{item.title}</NavLink>
          )}
        </div>
      </div>
      <div className='main-content'>{children}</div>
    </div>
  )
}

export default NavigationBar