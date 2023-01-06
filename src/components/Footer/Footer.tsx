/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */
import './Footer.scss';

const backToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

export const Footer: React.FC = () => (
  <footer className="footer">
    <div className="footer__container">
      <div className="footer__logo">
        <a href="/" className="footer__logo__link">
          <img
            src={require('../../images/icons/Logo.svg').default}
            alt="logo"
            className="footer__image"
          />
        </a>
      </div>

      <ul className="footer__nav">
        <li className="footer__nav__item">
          <a
            className="footer__nav__link"
            // eslint-disable-next-line max-len
            href="https://github.com/fe-sep22-FixMePlease/product-catalog-frontend"
            target="_blank"
            rel="noreferrer"
          >
            github
          </a>
        </li>
        <li className="footer__nav__item">
          <a className="footer__nav__link" href="/">
            contacts
          </a>
        </li>
        <li className="footer__nav__item">
          <a className="footer__nav__link" href="/">
            rights
          </a>
        </li>
      </ul>

      <div className="footer__back">
        <div className="footer__text">Back to top</div>

        <button type="button" onClick={backToTop} className="footer__button" />
      </div>
    </div>
  </footer>
);
