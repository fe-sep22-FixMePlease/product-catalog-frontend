import './Header.scss';
import '../../styles/icon.scss';
import { useEffect, useState } from 'react';
import classNames from 'classnames';
import { Page } from './HeaderTypes';

export const Header: React.FC = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [isChoosen, setIsChoosen] = useState(Page.Home);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="header">
      <a href='/' className='header__main-link'>
        <img
          src={require('../../images/icons/Logo.svg').default}
          alt="Shopping bag"
          className="header__main-icon"
        />
      </a>

      <nav className='nav'>
        <ul className='nav__list'>
          <li className='nav__item '>
            <a
              href="/"
              className={classNames(
                'nav__link',
                {
                  'is-active': isChoosen === Page.Home,
                },
              )}
              onClick={() => setIsChoosen(Page.Home)}
            >
                Home
            </a>
          </li>
          <li className='nav__item'>
            <a
              href="/phones"
              className={classNames(
                'nav__link',
                {
                  'is-active': isChoosen === Page.Phones,
                },
              )}
              onClick={() => setIsChoosen(Page.Phones)}
            >
                Phones
            </a>
          </li>
          <li className='nav__item'>
            <a
              href="/tablets"
              className={classNames(
                'nav__link',
                {
                  'is-active': isChoosen === Page.Tablets,
                },
              )}
              onClick={() => setIsChoosen(Page.Tablets)}
            >
                Tablets
            </a>
          </li>
          <li className='nav__item'>
            <a
              href="/accessories"
              className={classNames(
                'nav__link',
                {
                  'is-active': isChoosen === Page.Accessories,
                },
              )}
              onClick={() => setIsChoosen(Page.Accessories)}
            >
                Accessories
            </a>
          </li>
        </ul>
      </nav>

      {width > 639
        ? (
          <div className="header__container-left-side">
            <button className='header header__left-side-icons'>
              <img
                src={require(
                  '../../images/icons/Favourites.svg'
                ).default}
                alt="Heart Like"
                className="header__icon"
              />
            </button>
            <button className='header header__left-side-icons'>
              <img
                src={require(
                  '../../images/icons/ShopBag.svg'
                ).default}
                alt="Shopping bag"
                className="header__icon"
              />
            </button>
          </div>
        ) : (
          <div className="header__container-left-side">
            <button className='header header__left-side-icons'>
              <img
                src={require('../../images/icons/Menu.svg').default}
                alt="Menu"
                className="header__icon"
              />
            </button>
          </div>
        )
      }
    </header>
  );
}
