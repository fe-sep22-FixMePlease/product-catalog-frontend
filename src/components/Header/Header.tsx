import './Header.scss';
import { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import { Page } from './HeaderTypes';
import { Logo } from '../../images/icons/Logo';
import { Menu } from '../../images/icons/Menu';
import { Favourites } from '../../images/icons/Favourites';
import { ShopBag } from '../../images/icons/ShopBag';
import { BurgerMenu } from '../BurgerMenu';
import { Cross } from '../../images/icons/Cross';
import { UserContext } from '../../utils/context/Context';
import '../../styles/blocks/icon.scss';

export const Header: React.FC = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [isChoosen, setIsChoosen] = useState(Page.Home);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { shop } = useContext(UserContext);
  const [countShop, setCountShop] = useState(0);

  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const setCounterShop = () => {
    const shopLength = shop.length;

    setCountShop(shopLength);
  };

  useEffect(setCounterShop, [shop]);

  return (
    <header className="header">
      <a href="#/" className="header__main-link">
        <Logo />
      </a>

      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item ">
            <a
              href="#/"
              className={classNames('nav__link', {
                'is-active': isChoosen === Page.Home,
              })}
              onClick={() => setIsChoosen(Page.Home)}
            >
              Home
            </a>
          </li>
          <li className="nav__item">
            <a
              href="#/phones"
              className={classNames('nav__link', {
                'is-active': isChoosen === Page.Phones,
              })}
              onClick={() => setIsChoosen(Page.Phones)}
            >
              Phones
            </a>
          </li>
          <li className="nav__item">
            <a
              href="#/tablets"
              className={classNames('nav__link', {
                'is-active': isChoosen === Page.Tablets,
              })}
              onClick={() => setIsChoosen(Page.Tablets)}
            >
              Tablets
            </a>
          </li>
          <li className="nav__item">
            <a
              href="#/accessories"
              className={classNames('nav__link', {
                'is-active': isChoosen === Page.Accessories,
              })}
              onClick={() => setIsChoosen(Page.Accessories)}
            >
              Accessories
            </a>
          </li>
        </ul>
      </nav>

      {width > 639 ? (
        <div className="header__container-left-side">
          <button type="button" className="header header__left-side-icons">
            <div className="header__icon">
              <Favourites />
            </div>
          </button>

          <NavLink
            to="/shopBag"
            className={isChoosen === Page.ShopBag ? 'is-active' : ''}
            onClick={() => setIsChoosen(Page.ShopBag)}
          >
            <button type="button" className="header header__left-side-icons">
              <div className="header__icon">
                {!!countShop && (
                  <span className="header__button-counter">{countShop}</span>
                )}
                <ShopBag />
              </div>
            </button>
          </NavLink>
        </div>
      ) : (
        <div className="header__container-left-side">
          <button
            type="button"
            className="header header__left-side-icons"
            onClick={handleToggle}
          >
            {!isMenuOpen ? <Menu /> : <Cross />}
          </button>

          <BurgerMenu
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
            countShop={countShop}
          />
        </div>
      )}
    </header>
  );
};
