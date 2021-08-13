import React from 'react';
import no from '../images/no.jpg';
import '../components/index.css';
import Navigation from '../components/Navigation';

const noPage = () => {
    return (
        <div className='noPage'>
        <img className='no' src= {no} alt='no'></img>
        <div className='secondRowWebPage'>
            <Navigation className='redNav'/>
        </div>
    </div>
    )
}

export default noPage;