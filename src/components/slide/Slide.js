import React from 'react';

import './Slide.scss';

function Slide({ slideData, slideWidth }) {
  const { name, url, productImageUrl, productImageAltText, price } = slideData;
  const slideStyle = { width: slideWidth + 'px'};

  return (
    <div className="slide" style={slideStyle}>
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
