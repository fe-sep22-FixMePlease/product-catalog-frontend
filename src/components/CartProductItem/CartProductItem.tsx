import React, { useContext } from 'react';
import { Cross } from '../../images/icons/Cross';
import { Minus } from '../../images/icons/Minus';
import { Plus } from '../../images/icons/Plus';
import { Phone } from '../../types/Phone';
import { UserContext } from '../../utils/context/Context';
import './CartProductItem.scss';

type Props = {
  productInfo: Phone;
};

export const CartProductItem: React.FC<Props> = ({ productInfo }) => {
  const {
    image,
    name,
    price,
    id,
  } = productInfo;

  const {
    setTotalPoduct, totalProduct, shop, setShop,
  }
    = useContext(UserContext);

  const counter = totalProduct.filter((product) => product.id === id).length;

  const handlerIncreaseCounter = () => {
    if (counter < 10) {
      setTotalPoduct([...totalProduct, productInfo]);
    }
  };

  const handlerDicreaseCounter = () => {
    if (counter > 1) {
      totalProduct.splice(totalProduct.lastIndexOf(productInfo), 1);

      setTotalPoduct([...totalProduct]);
    }
  };

  const handleClose = () => {
    const filtredListShop = shop.filter((poduct) => poduct.id !== id);
    const filterdListTotalProduct = totalProduct.filter(
      (poduct) => poduct.id !== id,
    );

    setShop([...filtredListShop]);
    setTotalPoduct([...filterdListTotalProduct]);
  };

  const totalPrice = price * (counter || 1);

  return (
    <div className="product-item">
      <div className="product-item__info">
        <button
          type="button"
          className="product-item__cross btn-reset"
          onClick={handleClose}
        >
          <Cross />
        </button>

        <div className="product-item__image-container">
          <img
            src={image}
            alt="ProductItemImage"
            className="product-item__image"
          />
        </div>
        <div className="product-item__title">{`${name} (iMT9G2FS/A)`}</div>
      </div>

      <div className="product-item__bottom-container">
        <div className="product-item__counter">
          <button
            type="button"
            className="product-item__minus btn-reset"
            onClick={handlerDicreaseCounter}
          >
            <Minus />
          </button>
          <div className="product-item__amount">{counter}</div>
          <button
            type="button"
            className="product-item__plus btn-reset"
            onClick={handlerIncreaseCounter}
          >
            <Plus />
          </button>
        </div>
        <div className="product-item__price">{`$${totalPrice}`}</div>
      </div>
    </div>
  );
};
