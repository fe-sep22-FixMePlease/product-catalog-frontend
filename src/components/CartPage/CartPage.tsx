import React, { FC, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CartProductList } from '../CartProductList';
import { BackButton } from '../../images/icons/BackButton';
import './CartPage.scss';
import { Message } from '../Message/Message';

export const CartPage: FC = () => {
  const [isClicked, setIsClicked] = useState(false);
  const navigete = useNavigate();

  const handleClick = (event: React.MouseEvent) => {
    event.preventDefault();

    setIsClicked(!isClicked);

    setTimeout(() => {
      navigete('/');
    }, 2000);
  };

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

      <div className="cart-page__product-list">
        <CartProductList />
      </div>

      <div className="cart-page__checkout">
        <div className="cart-page__total-price">{`$${'1000'}`}</div>

        <div className="cart-page__counter">Total for 3 items</div>

        <div className="cart-page__line" />

        <button
          type="button"
          className="cart-page__checkout-button"
          onClick={handleClick}
        >
          Checkout
        </button>

        <Message isActive={isClicked} />
      </div>
    </div>
  );
};