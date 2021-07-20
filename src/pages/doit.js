import React from 'react';
import doit from '../images/doit.jpg';
import '../components/index.css';

const doitPage = () => {
    return (
        <div className='doitPage'>
        <img src= {doit} alt='doit'></img>
    </div>
    )
}

export default doitPage;