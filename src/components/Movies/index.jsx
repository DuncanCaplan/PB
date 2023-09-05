import React from "react";
import Search from "../Search";
import Movielist from "../Movielist";

const Movies = () => {
    return (
        <div className="movieList">
            <Search />
            <Movielist />
        </div>
    );
};

export default Movies;
