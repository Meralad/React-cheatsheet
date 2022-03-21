import React from 'react';
import logo from '../logo.svg'
import { Link } from 'react-router-dom';
import '../assets/styles/HeaderStyle.css';
import { HomeOutlined } from '@ant-design/icons';

function Header() {
    return (
        <div className='header'>
            <Link to='/'>
                <HomeOutlined />
            </Link>
            <div className ='Reacticon'>
                <a href="https://ru.reactjs.org/docs/getting-started.html">React</a>
                <img src={logo} className="App-logo" alt="logo" />
            </div>
        </div>
    );
}

export default Header;