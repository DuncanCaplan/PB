import React, { useState } from "react";
import "./search.css";
import { useMovieContext } from "../../context";

const Search = () => {
    const [inputText, setInputText] = useState("");
    const { setMovie } = useMovieContext();

    const handleInput = e => {
        setInputText(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();

        // Prevent empty search
        if (!inputText) return;

        setMovie(inputText);
        setInputText("");
    };

    return (
        <form className="search-box" onSubmit={handleSubmit}>
            <button className="btn-search">
                <i className="fas fa-search"></i>
            </button>
            <input
                value={inputText}
                onChange={handleInput}
                type="text"
                className="input-search"
                placeholder="Type to Search..."
            />
        </form>
    );
};

export default Search;
