import React, { useState, useEffect } from 'react';
import classNames from 'classnames';

import './SliderNav.scss';

type Props = {
  children: React.ReactNode;
};

export const SliderNav: React.FC<Props> = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = (newIndex: number) => {
    if (newIndex < 0) {
      const updatedIndex = React.Children.count(children) - 1;

      setActiveIndex(updatedIndex);
    } else if (newIndex >= React.Children.count(children)) {
      setActiveIndex(0);
    } else {
      setActiveIndex(newIndex);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      updateIndex(activeIndex + 1);
    }, 5000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  return (
    <>
      <div className="slider__container">
        <button
          type="button"
          className="slider__button"
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          <svg
            width="6"
            height="10"
            viewBox="0 0 6 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              // eslint-disable-next-line max-len
              d="M5.47124 0.528758C5.21089 0.268409 4.78878 0.268409 4.52843 0.528758L0.528433 4.52876C0.268083 4.78911 0.268083 5.21122 0.528433 5.47157L4.52843 9.47157C4.78878 9.73192 5.21089 9.73192 5.47124 9.47157C5.73159 9.21122 5.73159 8.78911 5.47124 8.52876L1.94265 5.00016L5.47124 1.47157C5.73159 1.21122 5.73159 0.789108 5.47124 0.528758Z"
              fill="#0F0F11"
            />
          </svg>
        </button>
        <div className="slider">
          <div
            className="slider__items-container"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {children}
          </div>
        </div>
        <button
          type="button"
          className="slider__button"
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          <svg
            width="6"
            height="10"
            viewBox="0 0 6 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              // eslint-disable-next-line max-len
              d="M0.528758 0.528758C0.789108 0.268409 1.21122 0.268409 1.47157 0.528758L5.47157 4.52876C5.73192 4.78911 5.73192 5.21122 5.47157 5.47157L1.47157 9.47157C1.21122 9.73192 0.789108 9.73192 0.528758 9.47157C0.268409 9.21122 0.268409 8.78911 0.528758 8.52876L4.05735 5.00016L0.528758 1.47157C0.268409 1.21122 0.268409 0.789108 0.528758 0.528758Z"
              fill="#0F0F11"
            />
          </svg>
        </button>
      </div>

      <div className="slider__indicators">
        {React.Children.map(children, (child, index) => {
          return (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
            <div
              className={classNames('slider__indicator', {
                'slider__indicator-active': index === activeIndex,
              })}
              onClick={() => {
                updateIndex(index);
              }}
            />
          );
        })}
      </div>
    </>
  );
};
