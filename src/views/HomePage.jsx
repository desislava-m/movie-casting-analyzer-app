import { useContext, useEffect } from "react"
import { DataContext } from "../context/DataContext"
import { useNavigate } from "react-router-dom"
import Navbar from "../components/Navbar"


function mostFrequentActors(roles) {

   const actorsByMovie = {};

   roles.forEach(role => {
    const movieID = role.movieid;
    const actorID = role.actorid;

    if(!actorsByMovie[movieID]) {
        actorsByMovie[movieID] = [];
    }

    actorsByMovie[movieID].push(actorID);
   });

   const pairCount = {};

   for(const movieIDkey in actorsByMovie) {
    const actorsArray = actorsByMovie[movieIDkey];

    for(let i = 0; i < actorsArray.length; i++) {
        for(let j = i + 1; j < actorsArray.length; j++) {

            const actor1Id = actorsArray[i];
            const actor2Id = actorsArray[j];

            const pairKey = [actor1Id, actor2Id].sort((a,b) => a - b).join('-');

            if(!pairCount[pairKey]) {
                pairCount[pairKey] = [];
            }

            pairCount[pairKey].push(movieIDkey);
        }
    }
   }

   let maxCount = 0;
   let mostFrequentPair = '';
   let freqPairMovies = [];

   for(const pairKey in pairCount) {
        const currentPairArr = pairCount[pairKey];
        const currentCount = currentPairArr.length;
        
        if(currentCount > maxCount) {
            maxCount = currentCount;
            mostFrequentPair = pairKey;
            freqPairMovies = pairCount[pairKey]
        }
   }

   return {mostFrequentPair, freqPairMovies, maxCount};

}



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

 useEffect(() => {
    const missingData = actors.length === 0 || movies.length === 0 || roles.length === 0;

    if (missingData) {
      navigate("/");
    }
  }, [actors, movies, roles]);



    return(
        <>
        <Navbar />
        <button onClick={() => returnToUploaderPage()} >Go back</button>
        </>
    )
}