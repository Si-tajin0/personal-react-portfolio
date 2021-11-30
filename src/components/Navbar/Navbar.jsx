import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import logo from '../../img/logo_tajin.png'

const Navbar = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    return (
        <nav className="navbar">
            <div className="nav-container">
                <NavLink to='/' className="nav-logo">
                    <img width="10%" src={logo} alt="" />
                </NavLink>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item">
                    <NavLink to='/home' activeClassName="active" className="nav-link">
                    Home
                </NavLink>
                    </li>
                    {/* <li className="nav-item" href="#about">
                    <NavLink to="/about"  activeClassName="active" className="nav-link">
                    About
                </NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink to='/portfolio' activeClassName="active" className="nav-link">
                    Portfolio
                </NavLink>
                    </li> */}
                    <li className="nav-item">
                    <NavLink to='/blog' activeClassName="active" className="nav-link">
                    Blog
                </NavLink>
                    </li>
                    {/* <li className="nav-item">
                    <NavLink to='/contact' activeClassName="active" className="nav-link">
                    Contact
                </NavLink>
                    </li> */}
                </ul>
                <div className="nav-icon " onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
            </div>
        </nav>
           
    );
};

export default Navbar;