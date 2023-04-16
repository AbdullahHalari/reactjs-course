import logo from './logo.svg';
import './App.css';
import Text from "react"

function App() {
  const age = 8;
  const color = true;

  const planet = [
    { name: "Mars", isGasPlanet: false },
    { name: "Earth", isGasPlanet: false },
    { name: "Jupiter", isGasPlanet: true },
    { name: "Venus", isGasPlanet: false },
    { name: "Neptune", isGasPlanet: true },
    { name: "Uranus", isGasPlanet: true },
  ];
  return (
    <div >
     {age == 5 ? <h1>five</h1> : <h1>is not five</h1>   }
    <h1 style={{color: color ? "red": "green" }} >color condition</h1>

      <User name="Abdullah" contact={1234541212} email="abc@gmail@com"  />
      <div>
        {planet.map(
          (planet, key) => <h1> {planet.name} {planet.isGasPlanet ? <p>heloo</p> : <p>hi</p> } </h1> ,
         
        )}
      </div>
      <div>
        {planet.map(
          (planet, key) => !planet.isGasPlanet && <h1> {planet.name} </h1>
        )}
      </div>
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
