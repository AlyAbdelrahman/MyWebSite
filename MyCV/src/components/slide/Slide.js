import React from 'react';
import Sphere from 'containers/sphere/Sphere';

const Slide = ({
  text, backgroundImage, subHeader, slideNumber, backgroundComponent, showMeButtonLink,
}) => (
    <div className="slideContainer" >
        <div className="slide__text">
            <div className="slide__text__container">
                <h1 className="slide__text__header">{text}</h1>
                <div className="underLines__container">
                    <span className="line"></span>
                    <span className="line"></span>
                </div>
                <div className="slide__text__discription">
                    <p className="slide__text__details">{subHeader}</p>
                </div>
               { showMeButtonLink && <a href="/" className="showMeButtonLink">Show me more</a>}
            </div>
        </div>
        {backgroundImage && <div className="slide__image">
            <img src={backgroundImage}></img>
        </div>}
        {backgroundComponent && <Sphere />}
        {slideNumber >= 1
        && <div className="pageNumberContainer">
            <p className="pageNumber">{slideNumber}</p>
        </div>
        }

    </div>
);

export default Slide;
