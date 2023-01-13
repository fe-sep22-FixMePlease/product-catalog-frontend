import './HomePage.scss';
import { Slider } from './Slider';

export const HomePage: React.FC = () => {
  return (
    <div className="home container">
      <h1 className="home__title">Welcome to Nice Gadgets store!</h1>

      <Slider />
    </div>
  );
};
