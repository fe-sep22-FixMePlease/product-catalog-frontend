import React, { useState } from 'react';
import classNames from 'classnames';
import './ImageBlock.scss';

const BASE_URL
  // eslint-disable-next-line max-len
  = 'https://raw.githubusercontent.com/mate-academy/product_catalog/main/public/';

interface Props {
  activeImage: string;
  images: string[];
}

export const ImageBlock: React.FC<Props> = ({ activeImage, images }) => {
  const [activePhoto, setActivePhoto] = useState(activeImage);

  return (
    <div className="image__block">
      <div className="image__block__secondary">
        {images.map((source, id) => (
          <button
            type="button"
            key={source}
            className={classNames('image__block__secondary__wrapper', {
              'image__block-active': source === activePhoto,
            })}
            onClick={() => setActivePhoto(source)}
            aria-label={`Switch image to ${id}`}
          >
            <img
              src={`${BASE_URL}${source}`}
              alt={`product view ${id}`}
              className="image-secondary"
            />
          </button>
        ))}
      </div>
      <div className="image__block__hero">
        <img
          src={`${BASE_URL}${activePhoto}`}
          alt="product"
          className="image-hero"
        />
      </div>
    </div>
  );
};
