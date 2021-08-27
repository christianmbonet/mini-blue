import React from 'react';
import bird from '../images/bird.jpg';
import '../components/index.css';
import Navigation from '../components/Navigation';

const birdPage = () => {
    return (
        <div className='birdPage'>
        <img className='bird' src= {bird} alt='bird'></img>
        <div className='secondRowWebPage'>
            <Navigation className='redNav'/>
        </div>
    </div>
    )
}

export default birdPage;