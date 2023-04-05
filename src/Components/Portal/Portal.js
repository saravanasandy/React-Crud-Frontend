import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../NavBar.js/NavBar'
import SideBar from '../SideBar.js/SideBar'


const Portal = () => {
  return (
    <div id="wrapper">
        <SideBar/>
      <div id="content-wrapper" className="d-flex flex-column">
      <div id="content">
       <NavBar/>
        <Outlet/>
        </div>
        </div>
    </div>
    
  )
}

export default Portal