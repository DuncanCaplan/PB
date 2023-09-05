import React, { useState, useContext, createContext } from "react";

const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
    const [movie, setMovie] = useState();

    return <MovieContext.Provider value={{ movie, setMovie }}>{children}</MovieContext.Provider>;
};

export const useMovieContext = () => useContext(MovieContext);
