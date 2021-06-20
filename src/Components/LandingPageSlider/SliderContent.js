import React from 'react';
import { Images } from './sliderImage';

function SliderContent(props) {
  return (
    <>
      <section>
        {Images.map((slide, index) => (
          <div
            key={index}
            className={index === props.activeIndex ? 'active' : 'inactive'}
          >
            {slide.img}
          </div>
        ))}
      </section>
    </>
  );
}

export default SliderContent;
