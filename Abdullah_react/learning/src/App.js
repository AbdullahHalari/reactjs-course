import logo from './logo.svg';
import './App.css';
import Button from "./button"
import Inputex from './input';
import Listing from './listing';
import User from './component';
import Login from './login';
import Api from './api'
import Firestore from './firebasedata';
import Read from './getfireabase';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from './Navbar';
import handleSubmit from './handlesubmit';
import { useRef } from 'react';
// import { collection } from "@firebase/firestore"
import  db  from "./firebase";
import React, { useState, useEffect } from 'react';
import { collection, getDocs } from "firebase/firestore"; 
import Register from './signup';

function App() {
  const age = 8;
  const color = true;
  const dataRef = useRef()

  const fetchBlogs = async () => {
        // const [info, setInfo] = useState([]);

    const querySnapshot = await getDocs(
      collection(db, "question/qReJW2NfA4u92tpZdXO7/answer")
    );
    
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
      // var data = doc.data()
      // setInfo((arr) => [...arr, data]);
      
    });
   
  }
  const submithandler = (e) => {
    e.preventDefault()
    handleSubmit(dataRef.current.value)
    dataRef.current.value = ""
  }
  return (
    <div className="App">
      {age === 5 ? <h1>five</h1> : <h1>is not five</h1>}
      <h1 style={{ color: color ? "red" : "green" }}>color condition</h1>
      <form onSubmit={submithandler}>
        <input type="text" ref={dataRef} />
        <button type="submit">Save</button>
      </form>
      <button onClick={fetchBlogs}>get data</button>

      <Router>
        <Navbar />
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/api" element={<Api />} />
          <Route
            path="/user"
            element={
              <User
                name="Abdullah"
                contact={1234541212}
                email="abc@gmail@com"
              />
            }
          />
          <Route path="/button" element={<Button />} />
          <Route path="/listing" element={<Listing />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/firestore" element={<Firestore />} />
          <Route path="/read" element={<Read />} />
          <Route path="*" element={<h1> PAGE NOT FOUND</h1>} />
        </Routes>
      </Router>
    </div>
  );
}
// const User = (props) => {
//   return (
//     <div>
//       <h1>{props.name}</h1>
//       <h1>{props.contact}</h1>
//       <h1>{props.email}</h1>
//     </div>
//   )
// }

export default App;
