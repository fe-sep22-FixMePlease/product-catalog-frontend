/* eslint-disable jsx-a11y/control-has-associated-label */
import { FC } from 'react';
import classnames from 'classnames';
import './ProductOptions.scss';
import { PhoneDataFromServer as Data } from '../../types/PhoneDataFromServer';

interface Props {
  product: Data;
}

export const ProductOptions: FC<Props> = ({ product }) => {
  const {
    colorsAvailable,
    color,
    capacityAvailable,
    capacity,
    priceRegular,
    priceDiscount,
    screen,
    ram,
    resolution,
    processor,
  } = product;

  return (
    <div className="ProductOptions">
      <div className="color">
        <div className="color__header">
          <div className="color__header__text title">Available colors</div>
          <div className="color__header__id">ID:802390</div>
        </div>
        <div className="colors-block__container">
          <div className="colors-block__container">
            {colorsAvailable.map((colorOption) => (
              <div
                className={classnames('colors-block__wrapper', {
                  'colors-block__wrapper-active': colorOption === color,
                })}
                key={colorOption}
              >
                <div
                  className={`colors-block__picker colors-block__picker-iphone-${colorOption}`}
                />
              </div>
            ))}
          </div>
        </div>
        <hr />
        <div className="capacity">
          <div className="capacity__header">
            <span className="capacity__header__text title">
              Select capacity
            </span>
          </div>
          <div className="capacity__options">
            {capacityAvailable.map((option) => (
              <button
                className={classnames('capacity__option', {
                  active: capacity === option,
                })}
                type="button"
                key={option}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
        <hr />
      </div>

      <div className="price">
        <span className="price__current">{priceRegular}</span>
        <span className="price__full">{priceDiscount}</span>
      </div>

      <div className="specs">
        <div className="spec-item">
          <span className="spec-title">Screen</span>
          <span className="spec-value">{screen}</span>
        </div>

        <div className="spec-item">
          <span className="spec-title">Resolution</span>
          <span className="spec-value">{resolution}</span>
        </div>

        <div className="spec-item">
          <span className="spec-title">Processor</span>
          <span className="spec-value">{processor}</span>
        </div>

        <div className="spec-item">
          <span className="spec-title">Ram</span>
          <span className="spec-value">{ram}</span>
        </div>
      </div>
    </div>
  );
};
