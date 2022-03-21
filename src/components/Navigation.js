import React from 'react';
import { NavLink } from 'react-router-dom';
import '../assets/styles/NavStyle.css';

function Navigation() {
    return (
        <div className='themes'>
            <div className='themes__link'>
                <NavLink to='/components'>Components</NavLink>
            </div>
            <div className='themes__link'>
                <NavLink to='/props'>Props</NavLink>
            </div>
            <div className='themes__link'>
                <NavLink to='/state'>State</NavLink>
            </div>
            <div className='themes__link'>
                <NavLink to='/lifecycle'>Lifecycle</NavLink>
            </div>
            <div className='themes__link'>
                <NavLink to='/events'>Events</NavLink>
            </div>
            <div className='themes__link'>
                <NavLink to='/key'>Key</NavLink>
            </div>
            <div className='themes__link'>
                <NavLink to='/refs'>Refs</NavLink>
            </div>
            <div className='themes__link'>
                <NavLink to='/async'>Async</NavLink>
            </div>
            <div className='themes__link'>
                <NavLink to='/virtual-dom'>Virtual DOM</NavLink>
            </div>
            <div className='themes__link'>
                <NavLink to='/fragment'>Fragment</NavLink>
            </div>
            <div className='themes__link'>
                <NavLink to='/react-memo'>React.memo</NavLink>
            </div>
            <div className='themes__link'>
                <NavLink to='/useEffect'>useEffect</NavLink>
            </div>
            <div className='themes__link'>
                <NavLink to='/router'>Router</NavLink>
            </div>
            <div className='themes__link'>
                <NavLink to='/context'>Context</NavLink>
            </div>
            <div className='themes__link'>
                <NavLink to='/form'>Form</NavLink>
            </div>
        </div >
    );
}

export default Navigation;