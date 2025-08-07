import { useContext } from "react"
import { DataContext } from "../context/DataContext"
import { useNavigate } from "react-router-dom"
import Navbar from "../components/Navbar"


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
        <Navbar />
        <button onClick={() => returnToUploaderPage()} >Go back</button>
        </>
    )
}