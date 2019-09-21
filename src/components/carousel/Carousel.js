import React from 'react';

import './Carousel.scss';
import Slide from 'components/slide/Slide';

function Carousel({ slideData }) {

  console.log(slideData);

  return (
    <div className="carousel">
      <div className="carousel__inner">
        {slideData.map(slide => <Slide key={slide.code} slideData={slide}/>)}
      </div>
    </div>
  );
}

export default Carousel;
