import React, { useState, useEffect } from 'react';

import './Carousel.scss';
import Slide from 'components/slide/Slide';

function Carousel ({ slideData }) {
  const [position, setPosition] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);
  const [trackWidth, setTrackWidth] = useState(0);

  const length = slideData.length;
  let trackStyles = { left: position + 'px'}

  const windowRef = element => {
    if (element) {
      setWindowWidth(element.offsetWidth);
    }
  }

  const trackRef = element => {
    if (element) {
      setPosition(parseInt(window.getComputedStyle(element).left, 10));
      setTrackWidth(element.offsetWidth);
    }
  }

  useEffect(() => {
    windowRef();
    setSlideWidth(windowWidth/4);
    trackRef();
  })

  const previousSlide = () => {
    if (position !== 0) {
      if (position > 0) {
        setPosition(0);
      } else {
        setPosition(position + slideWidth);
      }
    } 
  }

  const nextSlide = () => {
    if (Math.abs(position - slideWidth) === (trackWidth - (slideWidth * 4)) || Math.abs(position - slideWidth) > (trackWidth - (slideWidth * 4))) {
      setPosition(-Math.abs(trackWidth - (slideWidth * 4)));
    } else {
      setPosition(position - slideWidth);
    }
  }

  return (
    length > 0 && (
      <div className="carousel">
        <div className="carousel__button carousel__button--prev" onClick={() => previousSlide()}></div>
        <div className="carousel__inner" ref={windowRef}>
          <div className="carousel__track" ref={trackRef} style={trackStyles}>
            {slideData.map((slide, index) => <Slide key={index} slideData={slide} slideWidth={slideWidth} />)}
          </div>
        </div>
        <div className="carousel__button carousel__button--next" onClick={() => nextSlide()}></div>
      </div>
    )
  );
}

export default Carousel;
