import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header  >
        <p>
          My name is Abdullah Halari
        </p>
        
      </header>
     

      <User name="Abdullah" contact={1234541212} email="abc@gmail@com"  />
     </div>
    
    
  );
}
const User = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h1>{props.contact}</h1>
      <h1>{props.email}</h1>
    </div>
  )
}

export default App;
