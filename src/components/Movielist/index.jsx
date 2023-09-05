import React, { useEffect, useState } from "react";
import Moviecard from "../Moviecard";
import "./list.css";
import axios from "axios";
import { useMovieContext } from "../../context";

const Movielist = () => {
    const { movie } = useMovieContext();
    const [response, setResponse] = useState([]);

    useEffect(() => {
        if (!movie) return;
        axios
            .get(`https://www.omdbapi.com/?s=${movie}&apikey=7754db9b&type=movie`)
            .then(res => {
                setResponse(res.data.Search);
            })
            .catch(err => {
                console.log("Error:", err.message);
            });
    }, [movie]);

    return (
        <div className="movielist">
            <h2>Movies</h2>
            {response.map((movie, i) => (
                <Moviecard result={movie} key={i} index={i} />
            ))}
        </div>
    );
};

export default Movielist;
