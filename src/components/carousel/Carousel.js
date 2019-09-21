import React, { useState } from 'react';

import './Carousel.scss';
import Slide from 'components/slide/Slide';

function Carousel ({ slideData }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const length = slideData.length;

  const previousSlide = () => {
    const lastSlide = slideData.length - 1;
    const shouldResetSlide = currentSlide === 0;
    const newSlide =  shouldResetSlide ? lastSlide : currentSlide - 1;

    setCurrentSlide(newSlide);
  }

  const nextSlide = () => {
    const lastSlide = slideData.length - 1;
    const shouldResetSlide = currentSlide === lastSlide;
    const newSlide =  shouldResetSlide ? 0 : currentSlide + 1;

    setCurrentSlide(newSlide);
  }

  return (
    length > 0 && (
      <div className="carousel">
        <div className="carousel__button carousel__button--prev"></div>
        <div className="carousel__inner">
          <div className="carousel__track">
            {slideData.map((slide, index) => <Slide key={index} slideData={slide}/>)}
          </div>
        </div>
        <div className="carousel__button carousel__button--next"></div>
      </div>
    )
  );
}

export default Carousel;
