import React from 'react';
import logo from '../logo.svg'
import { Link } from 'react-router-dom';
import '../assets/styles/HeaderStyle.css';

function Header() {
    return (
        <div className='header'>
            <Link to='/'>
                <a href='/' class="shine-button">Home</a>
            </Link>
            <div className ='Reacticon'>
                <a href="https://ru.reactjs.org/docs/getting-started.html">React</a>
                <img src={logo} className="App-logo" alt="logo" />
            </div>
        </div>
    );
}

export default Header;