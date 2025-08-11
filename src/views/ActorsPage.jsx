import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";


export default function ActorsPage() {

    const { actors } = useContext(DataContext);
    

    return (
        <div className="actor-list-container">
            
            <Navbar />
            <div className="image-list-container">
                <div className="list-container">
                    <h1>All actors:</h1>
                    <ul className="list">
                        {actors.map((actor) => {
                            return (
                                <li key={actor.id}>
                                    <Link to={`/actor/${actor.id}`}>{actor.fullname}</Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className="image-container">
                </div>   
            </div>   
        </div>
    )
}