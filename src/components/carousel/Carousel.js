import React from 'react';

import './Carousel.scss';
import Slide from 'components/slide/Slide';

function Carousel({ slideData }) {

  console.log(slideData);

  return (
    <div className="carousel">
      <div className="carousel__button carousel__button--prev"></div>
      <div className="carousel__inner">
        <div className="carousel__track">
          {slideData.map(slide => <Slide key={slide.code} slideData={slide}/>)}
        </div>
      </div>
      <div className="carousel__button carousel__button--next"></div>
    </div>
  );
}

export default Carousel;
