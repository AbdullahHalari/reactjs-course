import React, { Component,useState } from 'react'
import {userRegister } from './databse'

 const Register =()=>  {
  const [email,setemail] =useState("")
  const [password,setpassword] =useState("")
    return (
    <div>

      <input type={'text'} onChange={(e)=>setemail(e.target.value)} placeholder='enter email'/>
      <input type={'text'} onChange={(e)=>setpassword(e.target.value)} placeholder='enter password'/>
      <button onClick={()=>userRegister(email,password)}>Register</button>
    </div>
    )
  }


export default Register