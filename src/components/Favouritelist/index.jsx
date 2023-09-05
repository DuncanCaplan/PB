import React from "react";
import { useSelector } from "react-redux";

import Moviecard from "../Moviecard";

const Favouritelist = () => {
    const favouriteList = useSelector(state => state.favouriteList);

    return (
        <div className="movielist">
            <h2>Movies</h2>
            {favouriteList.map((movie, i) => (
                <Moviecard result={movie} key={i} index={i} />
            ))}
        </div>
    );
};

export default Favouritelist;
