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
    if(actorsArray.length < 2) {
        console.log("Movie has less than two actors")
        return;
    }

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

  if(!actors.length === 0 || movies.length === 0 || roles.length === 0) {
    return <p>Loading data...</p>
  }


const { mostFrequentPair, freqPairMovies, maxCount } = mostFrequentActors(roles);
const pairArray = mostFrequentPair.split('-');
const actor1Id = pairArray[0];
const actor2Id = pairArray[1];

const actor1Obj = actors.find((a) => a.id == actor1Id);
const actor2Obj = actors.find((a) => a.id == actor2Id);

const movieTitlesArr = [];

freqPairMovies.forEach(element => {
    const movieObject = movies.find((m) => m.id == element);
    const title = movieObject.title;
    movieTitlesArr.push(title);
});



    return(
        <>
        <Navbar />
        <button onClick={() => returnToUploaderPage()} >Go back</button>
        <h1>Top Actor Pair</h1>
        <h2>{`${actor1Obj.fullname} - ${actor2Obj.fullname}`}</h2>
        <p>{`Appeared in ${maxCount} movies together`}</p>
        <ul>
            {movieTitlesArr.map((title, index) => {
                return (
                    <li key={index}>{title}</li>
                )
            })}
        </ul>
        </>
    )
}