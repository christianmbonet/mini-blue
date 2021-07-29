import React from 'react';
import doit from '../images/doit.jpg';
import '../components/index.css';
import Navigation from '../components/Navigation';

const doitPage = () => {
    return (
        <div className='doitPage'>
        <img src= {doit} alt='doit'></img>
        <div className='secondRowWebPage'>
            <Navigation className='redNav'/>
        </div>
    </div>
    )
}

export default doitPage;