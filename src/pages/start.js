import React from 'react';
import start from '../images/start.jpg';
import '../components/index.css';

const startPage = () => {
    return (
        <div className='startPage'>
        <img className='start' src= {start} alt='start'></img>
    </div>
    )
}

export default startPage;