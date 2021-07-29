import React from 'react';
import smoker from '../images/smoker.jpg';
import '../components/index.css';
import Navigation from '../components/Navigation';


const smokerPage = () => {
    return (
        <div className='smokerPage'>
        <img className='smoker' src= {smoker} alt='smoker'></img>
        <div className='secondRowWebPage'>
            <Navigation className='redNav'/>
        </div>
    </div>
    )
}

export default smokerPage;