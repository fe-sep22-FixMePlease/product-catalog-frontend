import React from 'react';
import cardsFromServer from './cards.json';
import './CardItem.scss';

export const CardItem: React.FC = () => {
  // const [cards, setCards] = useState(cardsFromServer);
  const cards = cardsFromServer;
  const card = cards[0];

  return (
    <div className="card">
      <img src="" alt="" className="card__image" />

      <h2 className="card__title">{`${card.name} (iMT9G2FS/A)`}</h2>

      <p className="card__price">
        <span className="card__sell-price">{`$${card.price}`}</span>
        <span className="card__full-price">{`$${card.fullPrice}`}</span>
      </p>

      <div className="card__features">
        <p className="card__feature">
          <span className="card__feature-name">Screen</span>
          <span className="card__feature-name--value">{card.screen}</span>
        </p>

        <p className="card__feature">
          <span className="card__feature-name">Capacity</span>
          <span className="card__feature-name--value">{card.capacity}</span>
        </p>

        <p className="card__feature">
          <span className="card__feature-name">RAM</span>
          <span className="card__feature-name--value">{card.ram}</span>
        </p>
      </div>

      <div className="card__buttons">
        <button type="button" className="card__button-add">
          La la la
        </button>

        <button type="button" className="card__button-like">
          La la la
        </button>
      </div>
    </div>
  );
};
