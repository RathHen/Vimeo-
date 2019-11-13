import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import './App.css';



const content = [
    {
        title: 'Hunt for the WilderPeople',
        description:
            'Raised on hip-hop and foster case, defiant city kid Ricky gets a fresh start in the New Zealand countryside. From the director of What We Do In The Shadows.',
        button: 'Buy Now',
        buttonTwo: 'Watch Trailer',
        image: 'https://in.bmscdn.com/iedb/movies/images/website/poster/large/hunt-for-the-wilderpeople-et00044767-17-04-2017-22-36-41.jpg',
        background: "background1"


    },
    {
        title: 'Nights Passiert',
        description:
            'A Swiss family takes a ski vacation and runs into trouble when the father, the titular decent man, finds himself in a series of moral quandaries.',
        button: 'Buy Now',
        buttonTwo: 'Watch Trailer',
        image: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Nichtspassiertplakat_CC.jpg',
        background: "background2"


    },
    {
        title: 'Vice Versa',
        description:
            'Come along with the Good Company crew as they travel throughout the US, Japan, BC, and Quebec to showcase skiing in the best way possible.',
        button: 'Buy now',
        buttonTwo: 'Watch Trailer',
        image: 'https://is3-ssl.mzstatic.com/image/thumb/Video62/v4/35/b9/a2/35b9a22f-6c95-7977-ebda-252245aa4688/pr_source.png/268x0w.png',
        background: "background3"

    },
    {
        title: 'The Fourth Phase',
        description:
            'From the creators of The Art of Flight, Red Bull Media House presents THE FOURTH PHASE, a snowboarding epic starring iconic athletes Travis Rice.',
        button: 'Buy Now',
        buttonTwo: 'Watch Trailer',
        image: 'http://www.gstatic.com/tv/thumb/v22vodart/12392207/p12392207_v_v8_aa.jpg',
        background: "background4"

    },
    {
        title: 'Full Moon',
        description:
            'Be inspired by women who push boundaries. FULL MOON showcases the legends, current icons and future prodigies of this ever-evolving lifestyle sport.',
        button: 'Buy Now',
        buttonTwo: 'Watch Trailer',
        image: 'https://ksr-ugc.imgix.net/assets/012/216/351/dec5b95922645c2f247e200a03b32a26_original.jpg?ixlib=rb-2.1.0&crop=faces&w=1552&h=873&fit=crop&v=1463743069&auto=format&frame=1&q=92&s=de7d2d8d065f1e35d3b13dacd2328606',
        background: "background5"

    }
];

function onClick() {
    window.location.href="https://play.google.com/store/movies?hl=en_US";
}

function onClickTwo() {
    window.location.href="https://www.rottentomatoes.com/trailers/";
}



function Carousel() {


    return(
        <div>
            <Slider>
                {content.map((item, index) => (
                    <div
                        key={index}
                        className="slider-content">
                        <div className={item.background}></div>
                        <div className="wrapper">
                            <img style={{ width: '15%',
                                height: '80%',alignItems: 'center', paddingBottom: '10%'}} src={item.image}
                                 alt="new"
                                 className="center"/>
                            <div style={{textAlign: 'left', width: '40%',  paddingLeft: "30px", paddingBottom: "10%", flexWrap: 'nowrap' }}>
                                <h2 style={{color: 'white', fontFamily: "Arial"}}>{item.title}</h2>
                                <p style={{color: 'white', fontFamily: "Courier"}}>{item.description}</p>
                                <button id="bt" className="buttonStyleOne" onClick={onClick}>{item.button}</button>
                                <button id="bt2" className="buttonStyleTwo" onClick={onClickTwo}>{item.buttonTwo}</button>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}
export default Carousel;