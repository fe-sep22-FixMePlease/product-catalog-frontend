import { useEffect, useState } from 'react';
import { ProductSlider } from '../ProductSlider';
import './HomePage.scss';
import { Slider } from './Slider';
import { getAllProducts } from '../../api/phones';
import { Phone } from '../../types/Phone';

export const HomePage: React.FC = () => {
  const [phones, setPhones] = useState<Phone[]>([]);

  const loadPhones = async () => {
    const allFromServer = await getAllProducts();

    setPhones(allFromServer);
  };

  useEffect(() => {
    loadPhones();
  }, []);

  return (
    <div className="home container">
      <h1 className="home__title">Welcome to Nice Gadgets store!</h1>

      <Slider />
      <ProductSlider title="Hot prices" products={phones} />
    </div>
  );
};
