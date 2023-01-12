/* eslint-disable jsx-a11y/control-has-associated-label */
import { FC } from 'react';
import classnames from 'classnames';
import { Phone } from '../../types/Phone';
import './ProductOptions.scss';

interface Props {
  product: Phone;
}

export const ProductOptions: FC<Props> = ({ product }) => {
  const { id, capacity } = product;

  return (
    <div className="ProductOptions">
      <div className="color">
        <div className="color__header">
          <div className="color__header__text">Available colors</div>
          <div className="color__header__id">{`ID:${id}`}</div>
        </div>
        <div className="color__colors">
          <button className="color__col-gold" type="button" />
          <button className="color__col-green" type="button" />
          <button className="color__col-space-gray" type="button" />
          <button className="color__col-white" type="button" />
        </div>
        <hr />
        <div className="capacity">
          <div className="capacity__header">
            <span className="capacity__header__text">Select capacity</span>
          </div>
          <div className="capacity__options">
            <button
              className={classnames('capacity__option', {
                active: capacity === '64GB',
              })}
              type="button"
            >
              64 GB
            </button>
            <button
              className={classnames('capacity__option', {
                active: capacity === '256GB',
              })}
              type="button"
            >
              256 GB
            </button>
            <button
              className={classnames('capacity__option', {
                active: capacity === '512GB',
              })}
              type="button"
            >
              512 GB
            </button>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};
