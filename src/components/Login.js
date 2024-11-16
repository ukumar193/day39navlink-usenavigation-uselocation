import React, { useRef } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

function Login() {
  let emailInutRef =useRef();
  let passInutRef =useRef();
  let messInutRef =useRef();
  let navigate =useNavigate();

  return (
    <div>
     <form>
      <h2>Enter the Details</h2>
     <div>
     <label>Email</label>
     <input type='eamil' ref={emailInutRef}></input>
     </div>
     <div>
     <label>Password</label>
     <input type='pasword'ref={passInutRef}></input>
     </div>
     <div>
     <label>Message</label>
     <input ref={messInutRef}></input>
     </div>
     <br></br>
     <div>
     <button className="bn2" onClick={()=>{
      let email =emailInutRef.current.value;
      let pass= passInutRef.current.value;
      let mess =messInutRef.current.value;
      if(email === "kumar@gmail.com" &&
        pass ==="kumar#1234"
      ){navigate("/home",{state:{msg:mess}});}
      else{alert("Invalid email/password")}
      
     }}>Login</button>
     </div>
     <p>New User ? Create an account</p>
     <div>
     <NavLink to="/signup" className="bn1">Signup</NavLink>
     </div>
     </form>
    </div>
  )
}

export default Login