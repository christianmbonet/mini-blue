import React from 'react';
import sketch from '../images/sketch.jpg';
import '../components/index.css';
import Navigation from '../components/Navigation';


const sketchPage = () => {
    return (
        <div className='sketchPage'>
        <img className='sketch' src= {sketch} alt='sketch'></img>
        <div className='secondRowWebPage'>
            <Navigation className='redNav'/>
        </div>
    </div>
    )
}

export default sketchPage;