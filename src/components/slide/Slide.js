import React from 'react';

import './Slide.scss';

function Slide({ slideData }) {
  const { name, url, productImageUrl, productImageAltText, price } = slideData;

  return (
    <div className="slide">
      <div className="slide__inner">
        <img className="slide__image" src={productImageUrl} alt={productImageAltText} />
        <h3 className="slide__title">{name}</h3>
        <h5 className="slide__price">{price.currency} {price.formattedValue}</h5>
        <a href={url} className="slide__button">Buy now</a>
      </div>
    </div>
  );
}

export default Slide;
