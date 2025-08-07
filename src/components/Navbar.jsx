import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/actors">Actors</NavLink>
      <NavLink to="/movies">Movies</NavLink>
    </nav>
  );
}
