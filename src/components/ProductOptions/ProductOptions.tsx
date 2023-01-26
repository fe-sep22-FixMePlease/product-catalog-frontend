/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { FC } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import classnames from 'classnames';
// import { UserContext } from '../../utils/context/Context';
import './ProductOptions.scss';
import { PhoneDataFromServer as Data } from '../../types/PhoneDataFromServer';
import { Favourites } from '../../images/icons/Favourites';
// import { Phone } from '../../types/Phone';

interface Props {
  product: Data;
}

export const ProductOptions: FC<Props> = ({ product }) => {
  const {
    id,
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
  const navigate = useNavigate();

  const handleColorChange = (newColor: string) => {
    const newId = id.replace(color, newColor);

    navigate(`/phones/${newId}`);
    window.location.reload();
  };

  // const {
  //   setTotalPoduct, totalProduct, shop, setShop,
  // } = useContext(UserContext);

  // const handleShop = (event: React.MouseEvent) => {
  //   event.preventDefault();

  //   if (shop.find((item: Phone) => item.id === id)) {
  //     const filtredStorageList = shop.filter(
  //       (products: Phone) => products.id !== id,
  //     );

  //     setShop(filtredStorageList);
  //     setTotalPoduct(filtredStorageList);
  //   } else {
  //     const findNewPhone = phones.find((item: Phone) => item.id === id);

  //     setShop([...shop, findNewPhone] as Phone[]);
  //     setTotalPoduct([...totalProduct, findNewPhone] as Phone[]);
  //   }
  // };

  // const isSelected = shop.some((item) => item.id === id);

  const isSelected = false;

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
              <Link
                to={`/phones/${id.replace(color, colorOption)}`}
                onClick={() => handleColorChange(colorOption)}
              >
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
              </Link>
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

      <div className="buttons">
        <button
          type="button"
          className={
            isSelected ? 'buttons__button-added' : 'buttons__button-add'
          }
          // onClick={handleShop}
        >
          {isSelected ? 'Added' : 'Add to cart'}
        </button>

        <button type="button" className="buttons__button-like">
          <Favourites />
        </button>
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
