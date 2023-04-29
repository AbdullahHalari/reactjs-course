import logo from './logo.svg';
import './App.css';
import Button from "./button"
import Inputex from './input';
import Listing from './listing';
import User from './component';
import Api from './api'

function App() {
  const age = 8;
  const color = true;

  return (
    <div className='App'>
      {age === 5 ? <h1>five</h1> : <h1>is not five</h1>   }
      <h1 style={{color: color ? "red": "green" }} >color condition</h1>
      <Button />
      <User name="Abdullah" contact={1234541212} email="abc@gmail@com"  />      
      <Inputex />
      <Listing />
      <Api />

     
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
