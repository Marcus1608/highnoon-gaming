import React from 'react';
import { Images } from './sliderImage';

function Nav(props) {
  return (
    <>
      <div className="all-navigation">
        {Images.map((slide, index) => (
          <span
            key={index}
            className={props.activeIndex === index ? 'nav active-nav' : 'nav'}
            onClick={(event) => props.onclick((event.target.value = index))}
          >
            <p
              key={index}
              className={props.activeIndex === index ? 'active-title' : 'title'}
            >
              {slide.title}
            </p>
          </span>
        ))}
      </div>
    </>
  );
}

export default Nav;
