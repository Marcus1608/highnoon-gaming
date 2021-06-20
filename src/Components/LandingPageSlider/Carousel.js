import React, { useState } from 'react';
import { Images } from './sliderImage';
import Arrows from './Arrows';
import Nav from './Nav';
import SliderContent from './SliderContent';
import './slider.scss';

const len = Images.length - 1;
function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <div className="slider-container">
        <SliderContent activeIndex={activeIndex} />

        <Arrows
          prevSlide={() =>
            setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
          }
          nextSlide={() =>
            setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
          }
        />

        <Nav
          activeIndex={activeIndex}
          onclick={(activeIndex) => setActiveIndex(activeIndex)}
        />
      </div>
    </>
  );
}

export default Carousel;
