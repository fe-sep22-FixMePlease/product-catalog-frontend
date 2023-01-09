import { FC } from 'react';
import { CardItem } from '../CardItem';
import phonesFromServer from './cards.json';

import './CardList.scss';

export const CardList: FC = () => {
  const phones = phonesFromServer;

  return (
    <ul className="card-list grid">
      {phones.map((phone) => (
        <li key={phone.id} className="card-list__item">
          <CardItem phone={phone} />
        </li>
      ))}
    </ul>
  );
};
