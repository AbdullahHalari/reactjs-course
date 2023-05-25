import React, { Component,useState } from 'react'
import {logOut, resetPassword, userLogin} from './databse'

 const Login =()=>  {
  const [email,setemail] =useState("")
  const [resetemail,setresetemail] =useState("")
  const [password,setpassword] =useState("")
    return (
    <div>

      <input type={'text'} onChange={(e)=>setemail(e.target.value)} placeholder='enter email'/>
      <input type={'text'} onChange={(e)=>setpassword(e.target.value)} placeholder='enter password'/>
      <button onClick={()=>userLogin(email,password)}>Login</button>
      <button onClick={()=>logOut()}>signOut</button>
      <input type={'text'} onChange={(e)=>setresetemail(e.target.value)} placeholder='enter password'/>
      <button onClick={()=>resetPassword(resetemail)}>Reset</button>
      
      
    </div>
    )
  }


export default Login