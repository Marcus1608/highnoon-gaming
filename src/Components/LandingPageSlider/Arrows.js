import React from 'react';

function Arrows(props) {
  return (
    <>
      <div className="arrows">
        <span className="prev" onClick={props.prevSlide}>
          <i class="fas fa-arrow-circle-left"></i>
        </span>
        <span className="next" onClick={props.nextSlide}>
          <i class="fas fa-arrow-circle-right"></i>
        </span>
      </div>
    </>
  );
}

export default Arrows;
