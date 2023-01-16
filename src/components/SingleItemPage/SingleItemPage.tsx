import React, { FC, useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getProductById } from '../../api/phones';
import { PhoneDataFromServer as Data } from '../../types/PhoneDataFromServer';

import { ImageBlock } from '../../ImageBlock';
import { ProductOptions } from '../ProductOptions';
import { Loader } from '../Loader';
import './SingleItemPage.scss';
import { BackButton } from '../../images/icons/BackButton';

export const SingleItemPage: FC = () => {
  const [phoneData, setPhoneData] = useState<Data>();
  const { phoneId } = useParams();

  const loadPhone = async () => {
    try {
      if (phoneId) {
        const dataFromServer: Data = await getProductById(phoneId);

        setPhoneData(dataFromServer);
      }
    } catch (error) {
      throw new Error('error while loading');
    }
  };

  useEffect(() => {
    loadPhone();
  }, [phoneId]);

  return !phoneData ? (
    <Loader />
  ) : (
    <div className="container-item-page">
      <Link to="/">
        <button type="button" className="cart-page__button-back">
          <div className="cart-page__back-img">
            <BackButton />
          </div>

          <div className="cart-page__back-title">Back</div>
        </button>
      </Link>
      <h1>{`${phoneData.name} (iMT9G2FS/A)`}</h1>
      <div className="grid">
        <div
          className="
          grid__item--mobile-1-4
          grid__item--tablet-1-7
          grid__item--desktop-1-12"
        >
          <ImageBlock images={phoneData.images} />
        </div>
        <div
          className="
        grid__item--mobile-1-4
        grid__item--tablet-8-12
        grid__item--desktop-13-24"
        >
          <ProductOptions product={phoneData} />
        </div>
        <div
          className="
        about
        grid__item--mobile-1-4
        grid__item--tablet-1-12
        grid__item--desktop-1-12"
        >
          <h2>About</h2>
          <hr />
          {phoneData.description.map(({ title, text }) => (
            <article key={title}>
              <h4>{title}</h4>
              <div>
                {text.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
        <div
          className="
        specs
         grid__item--mobile-1-4
         grid__item--tablet-1-12
         grid__item--desktop-13-24"
        >
          <h2>Tech Specs</h2>
          <hr />
          <div className="spec-item">
            <span className="spec-title__main">Screen</span>
            <span className="spec-value__main">{phoneData.screen}</span>
          </div>
          <div className="spec-item">
            <span className="spec-title__main">Resolution</span>
            <span className="spec-value__main">{phoneData.resolution}</span>
          </div>
          <div className="spec-item">
            <span className="spec-title__main">Processor</span>
            <span className="spec-value__main">{phoneData.processor}</span>
          </div>
          <div className="spec-item">
            <span className="spec-title__main">RAM</span>
            <span className="spec-value__main">{phoneData.ram}</span>
          </div>
          <div className="spec-item">
            <span className="spec-title__main">Built in memory</span>
            <span className="spec-value__main">{phoneData.capacity}</span>
          </div>
          <div className="spec-item">
            <span className="spec-title__main">Built in memory</span>
            <span className="spec-value__main">{phoneData.capacity}</span>
          </div>
          <div className="spec-item">
            <span className="spec-title__main">Zoom</span>
            <span className="spec-value__main">{phoneData.zoom}</span>
          </div>
          <div className="spec-item">
            <span className="spec-title__main">Cell</span>
            <span className="spec-value__main">
              {phoneData.cell.join(', ')}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
