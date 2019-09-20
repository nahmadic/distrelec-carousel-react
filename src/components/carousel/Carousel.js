import React from 'react';

import './Carousel.scss';
import Slide from 'components/slide/Slide';

function Carousel({ slideData }) {

  console.log(slideData);

  return (
    <div className="Carousel">
      <h2>Carousel goes here</h2>
      {slideData.map(slide => {
        return <Slide key={slide.code} code={slide.code} />
      })}
    </div>
  );
}

export default Carousel;
