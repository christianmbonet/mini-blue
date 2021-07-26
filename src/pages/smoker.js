import React from 'react';
import smoker from '../images/smoker.jpg';
import '../components/index.css';

const smokerPage = () => {
    return (
        <div className='smokerPage'>
        <img className='smoker' src= {smoker} alt='smoker'></img>
    </div>
    )
}

export default smokerPage;