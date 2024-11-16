import React from 'react'
import Navigation from './Navigation'
import { useLocation } from 'react-router-dom'

function Home() {
     let loc =useLocation();
  return (
    <div>
     <Navigation/>
     <h1>Home</h1>
     {/* <h2>{loc.state.msg}</h2> */}
     <h2>{loc && loc.state && loc.state.msg?loc.state.msg:"know more"}</h2>
    </div>
  )
}

export default Home