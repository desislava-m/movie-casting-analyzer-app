import { useContext, useState } from "react"
import { DataContext } from "../context/DataContext"

export default function FileUploader() {

const { roles, setRoles, actors, setActors, movies, setMovies } = useContext(DataContext);
const [ error, setError ] = useState('');


function parseCsv(text) {
  try {
    const lines = text.trim().split("\n");
    const headers = lines[0].split(",").map(h => h.trim().toLowerCase());
    const rows = lines.slice(1);
    const result = rows.map((row) => {
      const elementsInRow = row.split(",");
      const obj = {};
      headers.forEach((header, index) => {
        obj[header] = elementsInRow[index].trim();
      });

      return obj;
    });

    return { headers, data: result };
  } catch (err) {
    setError("Error parsing file");

  }
}



function handleFileUpload(e) {
    const file = e.target.files[0];
    
    if(!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
        const parsed = parseCsv(event.target.result);
        console.log(parsed)

         const { headers, data } = parsed;

        if (headers.includes("birthdate")) {
            
            setActors(data);
            localStorage.setItem("actors", JSON.stringify(data));

        }else if (headers.includes("title")) {
            setMovies(data);
            localStorage.setItem("movies", JSON.stringify(data));
        
        }else if (headers.includes("rolename")) {
            setRoles(data);
            localStorage.setItem("roles", JSON.stringify(data));

        }else {
            setError("Unknown file type")
        }
    }
    reader.readAsText(file);
    
}

    return (
        <>
            <div>
                <h2>Please upload your Actors, Movies and Roles csv files.</h2>
                <input type="file" accept=".csv" onChange={handleFileUpload} />
                {error && <p style={{ color: "red" }}>{error}</p>}
            </div>

            <button onClick={() => {
                localStorage.clear();
                setActors([]);
                setMovies([]);
                setRoles([]);
            }}>Clear</button>
        </>
    )
}