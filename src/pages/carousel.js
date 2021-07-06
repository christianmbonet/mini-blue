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
        <img className='angel' src={doit}/>
        <div><span class='titleBoldCollection'>Artist:&nbsp;</span>GH</div>
        <div><span class='titleBoldCollection'>Title:&nbsp;</span>Eight Dollars</div>
        <div><span class='titleBoldCollection'>Date:&nbsp;</span>Un dia fue</div>
    </div>,
    <div>
        <img className='caballoImage' src={power}/>
        <div><span class='titleBoldCollection'>Artist:&nbsp;</span>CB</div>
        <div><span class='titleBoldCollection'>Title:&nbsp;</span>El bano</div>
        <div><span class='titleBoldCollection'>Date:&nbsp;</span>Un dia fue</div>
    </div>,
    <div>
        <img className='degasImage' src={reserved}/>
        <div><span class='titleBoldCollection'>Artist:&nbsp;</span>Edgar Degas</div>
        <div><span class='titleBoldCollection'>Title:&nbsp;</span>Dance Class</div>
        <div><span class='titleBoldCollection'>Date:&nbsp;</span>1874</div>
    </div>,
    <div>
        <img className='diego' src={sketch}/>
        <div><span class='titleBoldCollection'>Artist:&nbsp;</span>Diego Velazquez</div>
        <div><span class='titleBoldCollection'>Title:&nbsp;</span>Juan de Pareja</div>
        <div><span class='titleBoldCollection'>Date:&nbsp;</span>1650</div>
    </div>,
    <div>
        <img className='loversImage' src={smoker}/>
        <div><span class='titleBoldCollection'>Artist:&nbsp;</span>Riza-yi'Abassi</div>
        <div><span class='titleBoldCollection'>Title:&nbsp;</span>The Lovers</div>
        <div><span class='titleBoldCollection'>Date:&nbsp;</span>A.D. 1630</div>
    </div>
    ,
    <div>
        <img className='rem' src={start}/>
        <div><span class='titleBoldCollection'>Artist:&nbsp;</span>Rembrandt</div>
        <div><span class='titleBoldCollection'>Title:&nbsp;</span>Aristotle with a Bust of Homer</div>
        <div><span class='titleBoldCollection'>Date:&nbsp;</span>1653</div>
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
                <button className='leftArrow' onClick={goLeft}>Left</button>
                <button className='rightArrow' onClick={goRight}>Right</button>
            </div>
            </div>
        </div>
        </div>
    )
}

export default Carousel;