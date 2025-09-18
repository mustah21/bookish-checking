import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './styles/navbar.css';
// import logo from "../images/logo.svg"


export const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
            <nav>
                <div className="logo-title">
                    <Link to='/' className="title">
                        <span className="title">Bookish</span>
                        {/* <img src={logo} alt="logo" /> see if you would like to add a logo here or not*/}
                    </Link>
                </div>
                <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul className={menuOpen ? "open" : ""}>
                    <div className='nav-center'>
                    <li><NavLink to="/">Home</NavLink></li><span></span>
                    <li><NavLink to="/about-us">About us</NavLink></li>
                    <li><NavLink to="/contact-us">Contact us</NavLink></li>
                    </div>
                <div className='nav-right'>
                    <li><NavLink to="/login">Sign in </NavLink></li>
                    <li><NavLink to="/signup">Get Started</NavLink></li>
                </div>
                </ul>

            </nav>
    )
}

export default NavBar;
