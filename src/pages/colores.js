import React from 'react';
import colores from '../images/colores.jpg';
import '../components/index.css';
import Navigation from '../components/Navigation';

const coloresPage = () => {
    return (
        <div className='coloresPage'>
        <img className='colores' src= {colores} alt='colores'></img>
        <div className='secondRowWebPage'>
            <Navigation className='redNav'/>
        </div>
    </div>
    )
}

export default coloresPage;