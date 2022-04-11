import React from "react";
import "../Header/header.css"


function Header() {
    return (
    <header>
        <h1>Proyecto Integrador Franco Leone y Timoteo Masic. </h1>
        <section>
            <p>Ordenar ASC/ DESC</p>
            <i className="fas fa-th"></i>
            <i className="fas fa-align-justify"></i>
            <form action="">
                <input type="text" name="search" id="" placeholder="Search">
                <button type="submit"><i className="fas fa-search"></i></button>
            </form>
        </section>
    </header>
    );
}

export default Header;