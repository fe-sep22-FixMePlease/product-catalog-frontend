import './ProductSlider.scss';
import React from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { CardItem } from '../CardItem';
import { Phone } from '../../types/Phone';

import 'swiper/css';
import 'swiper/css/navigation';

interface Props {
  title: string;
  products: Phone[];
}

export const ProductSlider: React.FC<Props> = ({ title, products }) => {
  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={16}
      slidesPerView={4}
      className="swiper"
      navigation
      breakpoints={{
        320: {
          width: 320,
          slidesPerView: 1,
        },

        640: {
          width: 640,
          slidesPerView: 2,
        },

        768: {
          width: 768,
          slidesPerView: 3,
        },

        1200: {
          width: 1140,
          slidesPerView: 4,
        },
      }}
    >
      <h2 slot="container-start">{title}</h2>

      {products.map((product) => (
        <div key={product.id}>
          <SwiperSlide>
            <CardItem phone={product} phones={products} />
          </SwiperSlide>
        </div>
      ))}
    </Swiper>
  );
};
