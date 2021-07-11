import React, {useState} from 'react';
import Navigation from '../components/Navigation.js';
import doit from '../images/doit.jpg';
import power from '../images/power.jpg';
import reserved from '../images/reserved.jpg';
import sketch from '../images/sketch.jpg';
import smoker from '../images/smoker.jpg';
import start from '../images/start.jpg';
import '../components/index.css';

const Carousel = () => {
    let carouselArr = [
    <div>
        <img className='doit' src={doit} alt='doit'/>
        <div><span class='titleBoldCollection'>Artist:&nbsp;</span>GH</div>
        <div><span class='titleBoldCollection'>Title:&nbsp;</span>Eight Dollars</div>
        <div><span class='titleBoldCollection'>Date:&nbsp;</span>Un dia fue</div>
    </div>,
    <div>
        <img className='power' src={power} alt='power'/>
        <div><span class='titleBoldCollection'>Artist:&nbsp;</span>CB</div>
        <div><span class='titleBoldCollection'>Title:&nbsp;</span>El bano</div>
        <div><span class='titleBoldCollection'>Date:&nbsp;</span>Un dia fue</div>
    </div>,
    <div>
        <img className='reserved' src={reserved} alt='reserved'/>
        <div><span class='titleBoldCollection'>Artist:&nbsp;</span>No One</div>
        <div><span class='titleBoldCollection'>Title:&nbsp;</span>Reserved</div>
        <div><span class='titleBoldCollection'>Date:&nbsp;</span>Un dia</div>
    </div>,
    <div>
        <img className='sketch' src={sketch} alt='sketch'/>
        <div><span class='titleBoldCollection'>Artist:&nbsp;</span>GH</div>
        <div><span class='titleBoldCollection'>Title:&nbsp;</span>GH</div>
        <div><span class='titleBoldCollection'>Date:&nbsp;</span>Un dia</div>
    </div>,
    <div>
        <img className='smoker' src={smoker} alt='smoker'/>
        <div><span class='titleBoldCollection'>Artist:&nbsp;</span>Smokers</div>
        <div><span class='titleBoldCollection'>Title:&nbsp;</span>Post</div>
        <div><span class='titleBoldCollection'>Date:&nbsp;</span>Un dia</div>
    </div>
    ,
    <div>
        <img className='start' src={start} alt='start'/>
        <div><span class='titleBoldCollection'>Artist:&nbsp;</span>CB</div>
        <div><span class='titleBoldCollection'>Title:&nbsp;</span>Start here</div>
        <div><span class='titleBoldCollection'>Date:&nbsp;</span>Un dia</div>
    </div>,

];
    const [carousel, setCarousel] = useState(0);
    const goLeft = () => {
        setCarousel(carousel + 100);
    };

    const goRight = () => {
        setCarousel(carousel - 100);
        (carousel === -100 * (carouselArr.length - 1)) ? setCarousel(0) : setCarousel(carousel - 100);
    };

    return (
        <div>
        <Navigation/>
        <div className='carouselPage'>
            <div className='items'>
            {carouselArr.map((item, index) => {
                return (
                    <div key={index} className='carouselItem' style={{transform: `translateX(${carousel}%)`}}>
                        {item}
                    </div>
                );
            })}
            <div className='directionalArrows'>
                <button className='leftArrow' onClick={goLeft}>&nbsp;</button>
                <button className='rightArrow' onClick={goRight}>&nbsp;</button>
            </div>
            </div>
        </div>
        </div>
    )
}

export default Carousel;