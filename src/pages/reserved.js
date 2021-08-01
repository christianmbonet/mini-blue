import React from 'react';
import reserved from '../images/reserved.jpg';
import '../components/index.css';
import Navigation from '../components/Navigation';


const reservedPage = () => {
    return (
        <div className='reservedPage'>
        <img className='reserved' src= {reserved} alt='reserved'></img>
        <div className='secondRowWebPage'>
            <Navigation className='redNav'/>
        </div>
    </div>
    )
}

export default reservedPage;