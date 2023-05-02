import logo from './logo.svg';
import './App.css';
import Button from "./button"
import Inputex from './input';
import Listing from './listing';
import User from './component';
import Api from './api'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from './Navbar';

function App() {
  const age = 8;
  const color = true;

  return (
    <div className='App'>
      {age === 5 ? <h1>five</h1> : <h1>is not five</h1>   }
      <h1 style={{color: color ? "red": "green" }} >color condition</h1>
      <Router>
        <Navbar />
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/api" element={<Api />} />
          <Route path="/user" element={<User name="Abdullah" contact={1234541212} email="abc@gmail@com" />} />
          <Route path="/button" element={<Button />} />
          <Route path="/listing" element={<Listing/>} />
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
