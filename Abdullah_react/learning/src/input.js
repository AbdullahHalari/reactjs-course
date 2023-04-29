import React, { useState, useEffect,Component } from "react";

export const  Inputex =() => {
      const [input, setInput] = useState("");

      const handdleInputChange = (event) => {
          setInput(event.target.value);
      }
      useEffect(()=>{
        console.log("mounted");    //restrict mode first check mount then unmount the mount for checking work properly
        return()=>{
            console.log("unmounted");
        }
      })
    return (
        <div>

       <div>
        <input type={'text'} onChange={handdleInputChange} placeholder='enter text'/> 
        {input}
      </div>
      <br></br>
        </div>
    )
  
}
export default Inputex