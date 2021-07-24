import React from 'react';
import sketch from '../images/sketch.jpg';
import '../components/index.css';

const sketchPage = () => {
    return (
        <div className='sketchPage'>
        <img src= {sketch} alt='sketch'></img>
    </div>
    )
}

export default sketchPage;