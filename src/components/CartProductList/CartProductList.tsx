import { useContext } from 'react';
import { CartProductItem } from '../CartProductItem';
import './CartProductList.scss';
import { UserContext } from '../../utils/context/Context';

export const CartProductList: React.FC = () => {
  const { shop } = useContext(UserContext);

  return (
    <>
      {shop.length ? (
        shop.map((product) => (
          <CartProductItem productInfo={product} key={product.id} />
        ))
      ) : (
        <div className="title">Cart is empty</div>
      )}
    </>
  );
};
