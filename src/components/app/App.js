import React, { useEffect, useState } from 'react';
import SlideData from '../../data.json';

import './App.scss';

function App() {
  const [slideData, setSlideData] = useState([]);

  useEffect(() => {
    setSlideData(SlideData.carouselData);
  });

  return (
    <div className="App">
      <header className="header">
        <h1 className="header__title">Distrelec Carousel</h1>
      </header>
    </div>
  );
}

export default App;
