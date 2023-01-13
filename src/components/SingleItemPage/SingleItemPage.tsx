import React, { FC, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../api/phones';
import { PhoneDataFromServer as Data } from '../../types/PhoneDataFromServer';

import { ImageBlock } from '../../ImageBlock';
import { ProductOptions } from '../ProductOptions';
import { Loader } from '../Loader';
import './SingleItemPage.scss';
import { BackButton } from '../../images/icons/BackButton';
// import { Phone } from '../../types/Phone';

export const SingleItemPage: FC = () => {
  const [phoneData, setPhoneData] = useState<Data>();
  // const [phones, setPhones] = useState<Phone[]>([]);
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
  }, []);

  if (!phoneData) {
    return (
      <div className="loader-container">
        <Loader />
      </div>
    );
  }

  const { name, images, description } = phoneData;

  return (
    <div className="container-item-page">
      <BackButton />
      <h1>{`${name} (iMT9G2FS/A)`}</h1>
      <div className="grid-container">
        <ImageBlock images={images} activeImage={images[0]} />
        <ProductOptions product={phoneData} />
        <div className="about">
          <h2>About</h2>
          <hr />
          {description.map(({ title, text }) => (
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
        <div className="specs">
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
