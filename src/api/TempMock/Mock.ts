import mockImage1 from '../../images/mockPhoneImages/mockImage1.jpg';
import mockImage2 from '../../images/mockPhoneImages/mockImage2.jpg';
import mockImage3 from '../../images/mockPhoneImages/mockImage3.jpg';
import mockImage4 from '../../images/mockPhoneImages/mockImage4.jpg';
import mockImage5 from '../../images/mockPhoneImages/mockImage5.jpg';

export const images = [
  {
    id: 1,
    source: mockImage1,
  },
  {
    id: 2,
    source: mockImage2,
  },
  {
    id: 3,
    source: mockImage3,
  },
  {
    id: 4,
    source: mockImage4,
  },
  {
    id: 5,
    source: mockImage5,
  },
];

export const productDataMock = {
  id: '7',
  category: 'phones',
  phoneId: 'apple-iphone-11-pro-64gb-gold',
  itemId: 'apple-iphone-11-pro-64gb-gold',
  name: 'Apple iPhone 11 Pro 64GB Gold',
  fullPrice: 1312,
  price: 1270,
  screen: "5.8' OLED",
  capacity: '64GB',
  color: 'gold',
  ram: '4GB',
  year: 2019,
  image: images[0].source,
};
