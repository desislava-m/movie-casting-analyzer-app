import { createContext, useContext } from "react";
import { useState } from "react";


export const DataContext = createContext();


export default function DataProvider({ children }) {

    const [ actors, setActors ] = useState([]);
    const [ roles, setRoles ] = useState([]);
    const [ movies, setMovies ] = useState([]);

    return (
        <DataContext.Provider value = {{
            actors, setActors,
            roles, setRoles,
            movies, setMovies
        }}>
            {children}
        </DataContext.Provider>
    )

}