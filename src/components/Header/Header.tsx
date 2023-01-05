import './Header.scss';
import '../../styles/icon.scss';
import { useEffect, useState } from 'react';

export const Header: React.FC = () => {
  const [width, setWidth] = useState(window.innerWidth);

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
            <a href="/" className='nav__link is-active'>HOME</a>
          </li>
          <li className='nav__item'>
            <a href="/phones" className='nav__link'>PHONES</a>
          </li>
          <li className='nav__item'>
            <a href="/tablets" className='nav__link'>TABLETS</a>
          </li>
          <li className='nav__item'>
            <a href="/accessories" className='nav__link'>ACCESSORIES</a>
          </li>
        </ul>
      </nav>

      {width > 639
        ? (
          <div className="header__container-left-side">
            <button className='header header__left-side-icons'>
              <img
                src={require('../../images/icons/Favourites.svg').default}
                alt="Heart Like"
                className="header__icon"
              />
            </button>
            <button className='header header__left-side-icons'>
              <img
                src={require('../../images/icons/ShopBag.svg').default}
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