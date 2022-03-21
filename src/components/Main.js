import React from 'react';
import roadmap from '../images/roadmap.jpeg';
import '../assets/styles/MainStyle.css';

function Main() {
    return (
        <div className='main'>
            <img src={roadmap} alt='img' />
        </div>
    );
}

export default Main;