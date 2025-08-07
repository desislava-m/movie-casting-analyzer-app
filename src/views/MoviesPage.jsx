import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";


export default function MoviesPage() {

    const { movies } = useContext(DataContext);

    return (
        <div className="movies-container">
        <Navbar />
        <h2>Movies</h2>
        <ul>
          {movies.map((movie) => {
            return (
                <li key={movie.id}>
                    <Link>{movie.title}</Link>
                </li>
            )
          })}
        </ul>
        </div>
    )
}