import React, { FC, useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../utils/context/Context';
import { CartProductList } from '../CartProductList';
import { BackButton } from '../../images/icons/BackButton';
import './CartPage.scss';
import { Message } from '../Message/Message';

export const CartPage: FC = () => {
  const [isClicked, setIsClicked] = useState(false);
  const {
    shop,
    totalProduct,
    setShop,
    setTotalPoduct,
  } = useContext(UserContext);
  const navigete = useNavigate();
  const [isCompleted, setIsCompleted] = useState(false);

  const handleClick = (event: React.MouseEvent) => {
    event.preventDefault();

    setIsClicked(!isClicked);

    if (!isCompleted && shop.length) {
      setShop([]);
      setTotalPoduct([]);
      localStorage.setItem('cartItems', '[]');
      setIsCompleted(true);

      setTimeout(() => {
        navigete('/');
      }, 2000);
    }
  };

  const counterProducts = shop.length;
  const totalPrice = totalProduct.reduce(
    (acumulator, product) => acumulator + product.price,
    0,
  );

  return (
    <div className="cart-page">
      <Link to="/">
        <button type="button" className="cart-page__button-back">
          <div className="cart-page__back-img">
            <BackButton />
          </div>

          <div className="cart-page__back-title">Back</div>
        </button>
      </Link>

      <div className="cart-page__title">Cart</div>

      <div className="cart-page__container">
        <div className="cart-page__product-list">
          <CartProductList />
        </div>

        <div className="cart-page__checkout">
          <div className="cart-page__total-price">{`$${totalPrice}`}</div>

          <div className="cart-page__counter">
            {`Total for ${counterProducts} items`}
          </div>

          <div className="cart-page__line" />

          <button
            type="button"
            className="cart-page__checkout-button"
            onClick={handleClick}
            disabled={!counterProducts}
          >
            Checkout
          </button>

          <Message isActive={isClicked} />
        </div>
      </div>
    </div>
  );
};
