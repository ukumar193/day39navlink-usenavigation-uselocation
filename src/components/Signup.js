import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

function Signup() {
     let navigate =useNavigate();

  return (
    <div>
     <form>
     <h2>Create your account</h2>
     <div>
     <label> Full Name</label>
     <input></input>
     </div>
     <div>
     <label>Email</label>
     <input type='email'></input>
     </div>
     <div>
     <label>Mobile Number</label>
     <input type='Number'></input>
     </div>
     <div>
     <label>Password</label>
     <input type='Password'></input>
     </div>
     <div>
     <label>Profile</label>
     <input type='file'></input>
     </div>
     <button type='submit' className='bn1' onClick={()=>{
          navigate("/");
     }}>Upload </button>
     <div><NavLink to="/" className="bn2">Log In</NavLink></div>
     </form>
    </div>
  )
}

export default Signup