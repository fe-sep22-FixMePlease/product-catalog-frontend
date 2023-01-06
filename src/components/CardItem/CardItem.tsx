import React from 'react';
import cardsFromServer from './cards.json';
import './CardItem.scss';
import { Favourites } from '../../images/icons/Favourites';

export const CardItem: React.FC = () => {
  // const [cards, setCards] = useState(cardsFromServer);
  const cards = cardsFromServer;
  const card = cards[0];

  return (
    <div className="card">
      <img
        /* eslint-disable-next-line max-len */
        src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQJQGrGoRJOlfxJtroHXe2f-91FlEZsQUncf3aWDXfr4wO1oLrpg2j5dOBToubmJMGod52p9_PZ2XTD8UGNL1SajKEWYt37A1ei9Wa8C6xDm1r_j3hDesI5&usqp=CAc"
        alt=""
        className="card__image"
      />

      <h2 className="card__title">{`${card.name} (iMT9G2FS/A)`}</h2>

      <p className="card__price">
        <span className="card__sell-price">{`$${card.price}`}</span>
        <span className="card__full-price">{`$${card.fullPrice}`}</span>
      </p>

      <hr className="card__line" />

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
          Add to cart
        </button>

        <button type="button" className="card__button-like">
          <Favourites />
        </button>
      </div>
    </div>
  );
};
