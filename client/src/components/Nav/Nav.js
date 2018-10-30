import React from "react";
import './Nav.css';
import logo from './logo.svg';


const Nav = () => (


<nav className="navbar navbar-expand-md barraNavegacion">
    <div className="navbar-collapse  w-100 order-1 order-md-0 dual-collapse2">
        <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <a className="nav-link" href="/About">ABOUT US</a>
            </li>
        </ul>
    </div>
    <div className="mx-auto order-0">
        <a className="navbar-brand mx-auto" href="/"><img src={logo} className="App-logo" alt="logo" /></a>
        
    </div>
    <div className="navbar-collapse  w-100 order-3 dual-collapse2">
        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <a className="nav-link" href="/Register">SIGN UP</a>
            </li>
          
            <li className="nav-item">
                <a className="nav-link" href="/Profile">MY PROFILE</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/Login">LOG IN</a>
            </li>
        </ul>
    </div>
</nav>
);

export default Nav;
