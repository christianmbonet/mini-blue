import React from 'react';
import './index.css';
import { Link } from 'gatsby';

const Navigation = () => {
    return (
        <div className='container'>
            <div className='nav'>
                <div className='homeButton'>
                    <Link to='/' className='home'>MINI-BLUE</Link>
                </div>
                </div>
            </div>
    )
}

export default Navigation