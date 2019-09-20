import React, { useEffect, useState } from 'react';
import SlideData from '../../data.json';

import './App.scss';
import Carousel from 'components/carousel/Carousel.js';

function App() {
  const [slideData, setSlideData] = useState([]);

  useEffect(() => {
    setSlideData(SlideData.carouselData);
  }, [slideData]);

  return (
    <div className="App">
      <header className="header">
        <h1 className="header__title">Distrelec Carousel</h1>
      </header>
      <main className="content">
        <Carousel slideData={slideData} />
      </main>
    </div>
  );
}

export default App;
