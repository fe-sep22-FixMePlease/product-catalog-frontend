import { FC } from 'react';
import { ImageBlock } from '../../ImageBlock';
import { ProductOptions } from '../ProductOptions';
import { images, productDataMock } from '../../api/TempMock/Mock';
import './SingleItemPage.scss';

export const SingleItemPage: FC = () => {
  return (
    <div className="container-item-page">
      <h1>{productDataMock.name}</h1>
      <ImageBlock images={images} activeImage={productDataMock.image} />
      <ProductOptions product={productDataMock} />
    </div>
  );
};
