import React, { useContext } from 'react';
import { UserContext } from '../../utils/context/Context';
import './CardItem.scss';
import { Favourites } from '../../images/icons/Favourites';
import { Phone } from '../../types/Phone';

type Props = {
  phone: Phone;
  phones: Phone[];
};

export const CardItem: React.FC<Props> = ({ phone, phones }) => {
  const {
    id,
    name,
    price,
    fullPrice,
    screen,
    capacity,
    ram,
    image,
  } = phone;

  const {
    setTotalPoduct, totalProduct, shop, setShop,
  }
    = useContext(UserContext);

  const handleShop = () => {
    if (shop.find((product: Phone) => product.id === id)) {
      const filtredStorageList = shop.filter(
        (products: Phone) => products.id !== id,
      );

      setShop(filtredStorageList);
      setTotalPoduct(filtredStorageList);
    } else {
      const findNewPhone = phones.find((product: Phone) => product.id === id);

      setShop([...shop, findNewPhone] as Phone[]);
      setTotalPoduct([...totalProduct, findNewPhone] as Phone[]);
    }
  };

  const isSelected = !!shop.find((product) => product.id === id);

  return (
    <div className="card">
      <img src={image} alt="" className="card__image" />

      <h2 className="card__title">{`${name} (iMT9G2FS/A)`}</h2>

      <p className="card__price">
        <span className="card__sell-price">{`$${price}`}</span>
        <span className="card__full-price">{`$${fullPrice}`}</span>
      </p>

      <hr className="card__line" />

      <div className="card__features">
        <p className="card__feature">
          <span className="card__feature-name">Screen</span>
          <span className="card__feature-name--value">{screen}</span>
        </p>

        <p className="card__feature">
          <span className="card__feature-name">Capacity</span>
          <span className="card__feature-name--value">{capacity}</span>
        </p>

        <p className="card__feature">
          <span className="card__feature-name">RAM</span>
          <span className="card__feature-name--value">{ram}</span>
        </p>
      </div>

      <div className="card__buttons">
        <button
          type="button"
          className={isSelected ? 'card__button-added' : 'card__button-add'}
          onClick={handleShop}
        >
          {isSelected ? 'Added' : 'Add to cart'}
        </button>

        <button type="button" className="card__button-like">
          <Favourites />
        </button>
      </div>
    </div>
  );
};
