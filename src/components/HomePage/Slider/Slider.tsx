import React from 'react';

import { SliderNav } from './SliderNav';
import './Slider.scss';

export const Slider: React.FC = () => {
  return (
    <div className="SliderNav">
      <SliderNav>
        <div className="slider-item slider-item__1" />
        <div className="slider-item slider-item__2" />
        <div className="slider-item slider-item__3" />
      </SliderNav>
    </div>
  );
};
