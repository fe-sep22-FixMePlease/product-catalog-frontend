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
  id: '1',
  category: 'phones',
  phoneId: 'apple-iphone-7-64gb-black',
  itemId: 'apple-iphone-7-64gb-black',
  name: 'Apple iPhone 7 64GB Black',
  fullPrice: 400,
  price: 375,
  screen: "4.7' IPS",
  capacity: '64GB',
  color: 'black',
  ram: '2GB',
  year: 2016,
  image: images[0].source,
};
