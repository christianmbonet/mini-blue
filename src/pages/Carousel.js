import React, {useState} from 'react';
import Navigation from '../../components/Navigation';
import doit from '../images/doit.jpeg';
import power from '../images/power.jpeg';
import reserved from '../images/reserved.jpeg';
import sketch from '../images/sketch.jpeg';
import smoker from '../images/smoker.jpeg';
import start from '../images/start.jpeg';
import './index.css';

const Carousel = () => {
    let carouselArr = [
    <div>
        <img className='angel' src={doit}/>
        <div><span class='titleBoldCollection'>Artist:&nbsp;</span>Botticelli</div>
        <div><span class='titleBoldCollection'>Title:&nbsp;</span>Annunciation</div>
        <div><span class='titleBoldCollection'>Date:&nbsp;</span>1485-1492</div>
    </div>,
    <div>
        <img className='caballoImage' src={power}/>
        <div><span class='titleBoldCollection'>Artist:&nbsp;</span>Han Gan</div>
        <div><span class='titleBoldCollection'>Title:&nbsp;</span>Night Shining White</div>
        <div><span class='titleBoldCollection'>Date:&nbsp;</span>750</div>
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