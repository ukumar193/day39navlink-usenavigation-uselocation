import React from 'react'
import { Link } from 'react-router-dom'
import Navigation from './Navigation'

function Logout() {
  return (
    <div>
      <Navigation/>
     <h1>logout</h1>
     <p>Are you sure ? you want to logout </p>
     <div><Link to="/" className='bn1'>YES</Link></div>
    <div> <Link to="/Home" className='bn2'>No</Link></div>
    </div>
  )
}

export default Logout