import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const NavBar = () => {
    return (
        <>
            <nav className="navbar">
                <h1>Pirate Bay</h1>
                <div className="links">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/movies">Movies</NavLink>
                    <NavLink to="/favourites">Favourites</NavLink>
                </div>
            </nav>
            <main>
                <Outlet />
            </main>
        </>
    );
};

export default NavBar;
