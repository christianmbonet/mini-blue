import React from 'react';
import it from '../images/it.jpg';
import '../components/index.css';
import Navigation from '../components/Navigation';

const itPage = () => {
    return (
        <div className='itPage'>
        <img className='it' src= {it} alt='it'></img>
        <div className='secondRowWebPage'>
            <Navigation className='redNav'/>
        </div>
    </div>
    )
}

export default itPage;