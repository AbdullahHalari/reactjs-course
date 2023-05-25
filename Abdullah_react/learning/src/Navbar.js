import { Link } from "react-router-dom";
export const Navbar = () => {
    return (
      <div>
        <Link to="/"> Home </Link>
        <Link to="/user"> User </Link>
        <Link to="/listing"> Listing </Link>
        <Link to="/button">Button</Link>
        <Link to="/api">Api</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Register</Link>
        <Link to="/read">Read</Link>
        <Link to="/firestore">Firestore</Link>
      </div>
    );
};