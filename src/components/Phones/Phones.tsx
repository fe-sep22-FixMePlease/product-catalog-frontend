import './Phones.scss';
import { CardList } from '../CardList';

export const Phones: React.FC = () => {
  return (
    <>
      <section className="phones">
        <div className="container">
          <CardList />
        </div>
      </section>
    </>
  );
};
