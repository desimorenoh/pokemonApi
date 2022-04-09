import React from 'react';
import './style.css';
import pokeapi from "../img/pokeapi.png"

function Navbar() {
    return (
        <div className="Navbar">
            <img className="logo-img" src={pokeapi} alt=""/>

            <div className="lucas"><h3>Soy LucasToys</h3>
            </div>
        </div>
    );
}

export default Navbar;