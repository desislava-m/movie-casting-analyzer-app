import { NavLink } from "react-router-dom";
import { useReturnToUploaderPage } from "../hooks/useReturnToUploader";


export default function Navbar() {

  const returnToUploaderPage = useReturnToUploaderPage()

  return (
    <nav>
      <button onClick={returnToUploaderPage} className="back-button">Go back</button> 
      <div className="nav-links">
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/actors">Actors</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </div>
    </nav>
  );
}
