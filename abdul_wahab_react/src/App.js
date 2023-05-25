import './App.css';
import Firestore from './firestore';
import Read from './read';
function App() {
  return (
    <div className="App">
      <Read />
      <Firestore />
    </div>
  );
}

export default App;
