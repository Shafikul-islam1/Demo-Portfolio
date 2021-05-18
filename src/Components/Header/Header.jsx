import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt="logo" />
            <h1>e-commerce website</h1>
        </div>
    );
};

export default Header;
