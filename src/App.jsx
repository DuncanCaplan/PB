import "../public/style.css";
import React from "react";
import { NavBar, Home, Movies, Favouritelist } from "./components";
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<NavBar />}>
                    <Route index element={<Home />} />
                    <Route path="/movies" element={<Movies />} />
                    <Route path="/favourites" element={<Favouritelist />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
