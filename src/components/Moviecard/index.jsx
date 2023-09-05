import React, { useEffect } from "react";
import "./card.css";
import Favourite from "../Favourite";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators } from "../../store/action-creators";
import { bindActionCreators } from "redux";

const Moviecard = ({ result, index }) => {
    const favouriteList = useSelector(state => state.favouriteList);

    const dispatch = useDispatch();

    const { addFavourite } = bindActionCreators(actionCreators, dispatch);

    const handleClick = e => {
        e.preventDefault();
        addFavourite(result);
    };

    return (
        <figure className="movie">
            <div className="moviehero">
                <img src={result.Poster} alt="Rambo" className="movieimg" />
            </div>
            <div className="moviecontent">
                <div className="movietitle">
                    <h1 className="headingprimary">{result.Title}</h1>
                    <div className="movietag movietag--1">#action</div>
                    <div className="movietag movietag--2">#thriller</div>
                </div>
                <p className="moviedescription">
                    {result.Title + " is a movie created in:" + result.Year}
                </p>

                <Favourite i={index} handleClick={handleClick} />
            </div>
        </figure>
    );
};

export default Moviecard;
