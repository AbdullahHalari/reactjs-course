import './App.css';
import Firestore from './firestore';
import Read from './read';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./navbar";

function App() {
  return (
    // <div className="App">
    //   <Read />
    //   <Firestore />
    // </div>
    <div>

    <Router>
      <Navbar />
      <Routes>
        <Route path="/firestore" element={<Firestore />} />
        <Route path="/read" element={<Read />} />
        <Route path="*" element={<h1> PAGE NOT FOUND</h1>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
