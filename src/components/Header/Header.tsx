/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */
import './Header.scss';
import { useEffect, useState } from 'react';
import classNames from 'classnames';
import { Page } from './HeaderTypes';
import { Logo } from '../../images/icons/Logo';
import { Menu } from '../../images/icons/Menu';
import { Favourites } from '../../images/icons/Favourites';
import { ShopBag } from '../../images/icons/ShopBag';

export const Header: React.FC = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [isChoosen, setIsChoosen] = useState(Page.Home);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
            <Favourites />
          </button>
          <button type="button" className="header header__left-side-icons">
            <ShopBag />
          </button>
        </div>
      ) : (
        <div className="header__container-left-side">
          <button type="button" className="header header__left-side-icons">
            <Menu />
          </button>
        </div>
      )}
    </header>
  );
};
