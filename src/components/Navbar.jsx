import { NavLink } from "react-router-dom";

export default function Navbar({ onGoBack }) {

  return (
    <nav>
      <button onClick={onGoBack} className="back-button">Go back</button> 
      <div className="nav-links">
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/actors">Actors</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </div>
    </nav>
  );
}
