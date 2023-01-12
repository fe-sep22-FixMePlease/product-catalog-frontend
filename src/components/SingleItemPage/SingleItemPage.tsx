import { FC } from 'react';
import { ImageBlock } from '../../ImageBlock';
import { ProductOptions } from '../ProductOptions';
import { images, productDataMock } from '../../api/TempMock/Mock';
import './SingleItemPage.scss';

export const SingleItemPage: FC = () => {
  return (
    <div className="container-item-page">
      <h1>{`${productDataMock.name} (iMT9G2FS/A)`}</h1>
      <ImageBlock images={images} activeImage={productDataMock.image} />

      <ProductOptions product={productDataMock} />

      <div className="specs">
        <div className="spec-item">
          <span className="spec-title">Screen</span>
          <span className="spec-value">{productDataMock.screen}</span>
        </div>

        <div className="spec-item">
          <span className="spec-title">Memory</span>
          <span className="spec-value">{productDataMock.capacity}</span>
        </div>

        <div className="spec-item">
          <span className="spec-title">Ram</span>
          <span className="spec-value">{productDataMock.ram}</span>
        </div>

        <div className="spec-item">
          <span className="spec-title">Year</span>
          <span className="spec-value">{productDataMock.year}</span>
        </div>
      </div>
    </div>
  );
};
