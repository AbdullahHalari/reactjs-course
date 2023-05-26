import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div className="App">      
      <Link to="/read">Answer</Link>
      <Link to="/firestore">Question</Link>
    </div>
  );
};
