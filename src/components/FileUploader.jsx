import { useContext, useState } from "react"
import { DataContext } from "../context/DataContext"

export default function FileUploader() {

const { roles, setRoles, actors, setActors, movies, setMovies } = useContext(DataContext);
const [ error, setError ] = useState('');
const [ fileHeader, setFileHeader ] = useState([]);

function parseCsv(text) {
  try {
    const lines = text.trim().split("\n");
    const headers = lines[0].split(",");
    const lowCaseHeader = headers.map(h => h.trim().toLowerCase());
    setFileHeader(lowCaseHeader);
    const rows = lines.slice(1);
    const result = rows.map((row) => {
      const elementsInRow = row.split(",");
      const obj = {};
      headers.forEach((header, index) => {
        obj[header] = elementsInRow[index]?.trim() || "";
      });

      return obj;
    });
    
    return result;
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

        if (fileHeader.includes("birthdate")) {
            setActors(parsed);
            
        }else if (fileHeader.includes("title")) {
            setMovies(parsed);
        
        }else if (fileHeader.includes("rolename")) {
            setRoles(parsed);

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
            </div>

            <button>Clear</button>
        </>
    )
}