import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const MovieContext = createContext(
    {
        movies: [],
        loading: true,
    }
);

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    console.log('Here movies are: ', movies);

    useEffect(() => {
        axios.get("https://softgenie.org/api/movies")
        .then((response) => {
            setMovies(response.data.results);
            setLoading(false);
        })
        .catch((error) => {
            console.error("Error fetching data: ", error);
        });
    }, []);

    const contextValues = {
        movies,
        loading,
    }
    return (
        <MovieContext.Provider value={contextValues}>
            {children}
        </MovieContext.Provider>
    );
}
