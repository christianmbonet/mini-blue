import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import '../components/index.css';
import { Link } from 'gatsby'

const Home = () => {
     
    const [on, setOn] = useState(false);
  
    const lightSwitchCenter = () => setOn(on => !on);
    const lightSwitchPink = () => setOn(on => !on);
  
    return <div className='page'>
      <div className='switch'>
      <div className='container'>
          <div className='topRow'>
          <button onClick={lightSwitchPink} className={on ? 'topLeftv1' : 'topLeftv2'}></button>
          <Link to='/carousel' className={on ? 'topMiddlev1' : 'topMiddlev2'}></Link>
          <button onClick={lightSwitchPink} className={on ? 'topRightv1' : 'topRightv2'}></button>
      </div>
      <div className='middleRow'>
          <Link to='/carousel' className={on ? 'middleLeftv1': 'middleLeftv2'}></Link>
          <button onClick={lightSwitchCenter} className='middleMiddle'></button>
          <Link to='/carousel' className={on ? 'middleRightv1' : 'middleRightv2'}></Link>
      </div>
      <div className='bottomRow'>
          <button onClick={lightSwitchPink} className={on ? 'bottomLeftv1' : 'bottomLeftv2'}></button>
          <Link to='/carousel' className={on ? 'bottomMiddlev1' : 'bottomMiddlev2'}></Link>
          <div onClick={lightSwitchPink} className={on? 'bottomRightv1' : 'bottomRightv2'}></div>
      </div>
    </div>
    </div>
    <div className='secondRowWebPage'>
      <Navigation className='cc'/>
    </div>      
    </div>
  }

export default Home;