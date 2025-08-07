import { useContext } from "react"
import { DataContext } from "../context/DataContext"
import { useNavigate } from "react-router-dom"


export default function HomePage() {

const navigate = useNavigate()

const { actors, setActors, roles, setRoles, movies, setMovies } = useContext(DataContext);

function returnToUploaderPage() {
    localStorage.clear();
    setActors([]);
    setRoles([]);
    setMovies([]);
    navigate('/')
}


    return(
        <>
        <button onClick={() => returnToUploaderPage()} >Go back</button>
        </>
    )
}