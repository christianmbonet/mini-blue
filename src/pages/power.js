import React from 'react';
import power from '../images/power.jpg';
import '../components/index.css';
import Navigation from '../components/Navigation';

const powerPage = () => {
    return (
        <div className='powerPage'>
        <img src= {power} alt='power'></img>
        <div className='secondRowWebPage'>
            <Navigation className='redNav'/>
        </div>
    </div>
    )
}

export default powerPage;