import React from 'react'
import { NavLink } from 'react-router-dom'

function Navigation() {
  return (
    <div >
     <nav>
     <NavLink to="/home" className='link1'>Home</NavLink>
     <NavLink to="/about" className='link1'>About</NavLink>
     <NavLink to="/profile" className='link1'>Profile</NavLink>
     <NavLink to="/logout" className='link1'>Logout</NavLink>
     
     </nav>
    </div>
  )
}

export default Navigation