import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function ActorsPage() {

    const { actors } = useContext(DataContext);

    return (
        <>
        <Navbar />
        <h1>All actors:</h1>
        <ul>
            {actors.map((actor) => {
                return (
                    <li key={actor.id}>
                        <Link to={`/actor/${actor.id}`}>{actor.fullname}</Link>
                    </li>
                )
            })}
        </ul>
        </>
    )
}