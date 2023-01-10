/* eslint-disable max-len  */

import { FC, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Favourites } from '../../images/icons/Favourites';
import { ShopBag } from '../../images/icons/ShopBag';
import './BurgerMenu.scss';

type Props = {
  isMenuOpen: boolean;
  setIsMenuOpen: (isMenuOpen: boolean) => void;
};

export const BurgerMenu: FC<Props> = ({ isMenuOpen, setIsMenuOpen }) => {
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  return (
    <div className="burger-menu">
      <div className={`burger-menu__page ${isMenuOpen ? 'showMenu' : ''}`}>
        <ul className="burger-menu__nav">
          <li className="burger-menu__item">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? 'burger-menu__link active' : 'burger-menu__link')}
              onClick={() => closeMenu()}
            >
              Home
            </NavLink>
          </li>
          <li className="burger-menu__item">
            <NavLink
              to="/phones"
              className={({ isActive }) => (isActive ? 'burger-menu__link active' : 'burger-menu__link')}
              onClick={() => closeMenu()}
            >
              Phones
            </NavLink>
          </li>
          <li className="burger-menu__item">
            <NavLink
              to="/tablets"
              className={({ isActive }) => (isActive ? 'burger-menu__link active' : 'burger-menu__link')}
              onClick={() => closeMenu()}
            >
              Tablets
            </NavLink>
          </li>
          <li className="burger-menu__item">
            <NavLink
              to="/accessories"
              className={({ isActive }) => (isActive ? 'burger-menu__link active' : 'burger-menu__link')}
              onClick={() => closeMenu()}
            >
              Accessories
            </NavLink>
          </li>
        </ul>

        <div className="burger-menu__buttons">
          <div className="burger-menu__buttons-buttom">
            <div className="burger-menu__button">
              <Favourites />
            </div>
          </div>

          <NavLink
            to="/shopBag"
            className="burger-menu__buttons-buttom"
            onClick={() => closeMenu()}
          >
            <div className="burger-menu__button">
              <ShopBag />
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
