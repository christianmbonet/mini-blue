import React from 'react';
import start from '../images/start.jpg';
import '../components/index.css';
import Navigation from '../components/Navigation';


const startPage = () => {
    return (
        <div className='startPage'>
        <img className='start' src= {start} alt='start'></img>
        <div className='secondRowWebPage'>
            <Navigation className='redNav'/>
        </div>
    </div>
    )
}

export default startPage;