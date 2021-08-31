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
          <div className='rowOne'>
          <Link to='/start' onClick={lightSwitchPink} className={on ? 'topLeftv1' : 'topLeftv2'}></Link>
          <Link to='/doit' className={on ? 'topMiddlev1' : 'topMiddlev2'}></Link>
          <Link to='/power' onClick={lightSwitchPink} className={on ? 'topRightv1' : 'topRightv2'}></Link>
          <Link to='/ex' className='rowOneColumnFour'></Link>
      </div>
      <div className='rowTwo'>
          <Link to='/sketch' className={on ? 'middleLeftv1': 'middleLeftv2'}></Link>
          <button onClick={lightSwitchCenter} className='middleMiddle'></button>
          <button className={on ? 'middleRightv1' : 'middleRightv2'}></button>
          <Link to='/bird' className='rowTwoColumnFour'></Link>
      </div>
      <div className='rowThree'>
          <Link to='/smoker' onClick={lightSwitchPink} className={on ? 'bottomLeftv1' : 'bottomLeftv2'}></Link>
          <button className={on ? 'bottomMiddlev1' : 'bottomMiddlev2'}></button>
          <Link to='/reserved' onClick={lightSwitchPink} className={on? 'bottomRightv1' : 'bottomRightv2'}></Link>
          <Link to='/it' className='rowThreeColumnFour'></Link>
      </div>
      <div className='rowFour'>
        <Link to='/no' className='rowFourColumnOne'></Link>
      </div>
    </div>
    </div>
    <div className='secondRowWebPage'>
      <Navigation className='redNav'/>
    </div>
    </div>
  }

export default Home;