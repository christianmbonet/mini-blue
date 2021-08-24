import React from 'react';
import ex from '../images/ex.jpg';
import '../components/index.css';
import Navigation from '../components/Navigation';

const exPage = () => {
    return (
        <div className='itPage'>
        <img className='ex' src= {ex} alt='ex'></img>
        <div className='secondRowWebPage'>
            <Navigation className='redNav'/>
        </div>
    </div>
    )
}

export default exPage;