import React from 'react';
import './Header.css';
import logo from './Logo/logo.png'
const Header = () => {
    return (
        <div className = "header-style justify-content-center align-items-center">
            <div>
                <img src={logo} alt=""/>
            </div>
            <div className="text-center ml-5">
                <h1>2021 Argentina 16 Football <br/> Players Information</h1>
            </div>
        </div>
    );
};

export default Header;