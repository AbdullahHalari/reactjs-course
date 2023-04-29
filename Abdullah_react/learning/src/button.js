import React, { useState, useEffect } from "react";

const Button = () => {
  
      const [getage, setAge] = useState(0);

      const increase = () => {
          setAge(getage + 1);
      }
    const decrease = () => {
        setAge(getage - 1);
    }
    const zero = () => {
        setAge(0);
    }
      
    return (
      <div>
            <div>
                {getage}
                <button onClick={increase} > increase </button>
                <button onClick={decrease} > decrease </button>
                <button onClick={zero} >zero </button>
            </div>
            <br></br>
      </div>
    )
  
}
export default Button