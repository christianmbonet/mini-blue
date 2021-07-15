import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import '../components/index.css';
import { Link } from 'gatsby'

const Home = () => {
     
    const [on, setOn] = useState(false);
  
    const lightSwitchCenter = () => setOn(on => !on);
    const lightSwitchPink = () => setOn(on => !on);
  
    return <div className='page'>
        <Navigation/>
          <div className='switch'>
          <div className='container'>
          <div className='topRow'>
          <button onClick={lightSwitchPink} className={on ? 'topLeftPink' : 'topLeftLightBlue'}></button>
          <Link to='/carousel' className={on ? 'topMiddleBlue' : 'topMiddlePink'}></Link>
          <button onClick={lightSwitchPink} className={on ? 'topRightPink' : 'topRightLightBlue'}></button>
      </div>
      <div className='middleRow'>
          <div className={on ? 'middleLeftBlue': 'middleLeftPink'}></div>
          <button onClick={lightSwitchCenter} className='middleMiddle'></button>
          <div className={on ? 'middleRightBlue' : 'middleRightPink'}></div>
      </div>
      <div className='bottomRow'>
          <button onClick={lightSwitchPink} className={on ? 'bottomLeftPink' : 'bottomLeftLightBlue'}></button>
          <div className={on ? 'bottomMiddleBlue' : 'bottomMiddlePink'}></div>
          <div onClick={lightSwitchPink} className={on? 'bottomRightPink' : 'bottomRightLightBlue'}></div>
      </div>
    </div>
    </div>
    </div>
  }

export default Home;