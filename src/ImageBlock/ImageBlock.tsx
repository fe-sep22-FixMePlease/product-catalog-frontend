import React, { useState } from 'react';
import classNames from 'classnames';
import './ImageBlock.scss';

interface Props {
  activeImage: string;
  images: { id: number; source: string }[];
}

export const ImageBlock: React.FC<Props> = ({ activeImage, images }) => {
  const [activePhoto, setActivePhoto] = useState(activeImage);

  return (
    <div className="image__block">
      <div className="image__block__hero">
        <img
          src={activePhoto}
          alt="product"
          className="image-hero"
        />
      </div>

      <div className="image__block__secondary">
        {images.map(({ id, source }) => (
          <button
            type="button"
            key={id}
            className={classNames('image__block__secondary__wrapper', {
              'image__block-active': source === activePhoto,
            })}
            onClick={() => setActivePhoto(source)}
            aria-label={`Switch image to ${id}`}
          >
            <div className="image-wrapper">
              <img
                src={source}
                alt={`product view ${id}`}
                className="image-secondary"
                style={{ width: '100%', height: '100%' }}
              />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};
