import React from 'react';
import reserved from '../images/reserved.jpg';
import '../components/index.css';

const reservedPage = () => {
    return (
        <div className='reservedPage'>
        <img src= {reserved} alt='reserved'></img>
    </div>
    )
}

export default reservedPage;