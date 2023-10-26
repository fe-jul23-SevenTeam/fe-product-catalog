import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/Logo-svg.svg';
import { ReactComponent as ArrowUpIcon } from '../../assets/icons/arrow-up_icon.svg';

import './Footer.scss';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__logo">
          <Link to="/" className="footer__logo--link">
            <Logo className="footer__logo--icon" />
          </Link>
        </div>

        <div className="footer__contacts contacts">
          <ul className="contacts__list">
            <li className="contacts__item">
              <Link
                className="contacts__link"
                to="https://github.com/fe-jul23-SevenTeam"
                target="_blank"
              >
                github
              </Link>
            </li>
            <li className="contacts__item">
              <Link className="contacts__link" to="/contacts">
                contacts
              </Link>
            </li>
            <li className="contacts__item">
              <Link className="contacts__link" to="/rights" target="_blank">
                rights
              </Link>
            </li>
          </ul>
        </div>

        <button
          className="footer__btn"
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
          }}
        >
          Back to top
          <div className="footer__btn--icon">
            <ArrowUpIcon />
          </div>
        </button>
      </div>
    </footer>
  );
};
