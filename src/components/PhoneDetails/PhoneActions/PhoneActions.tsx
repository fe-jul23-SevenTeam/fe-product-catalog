import { NavLink } from 'react-router-dom';
import { ReactComponent as FavoritesIcon } from '../../../assets/icons/favorites_icon.svg';

import './PhoneAction.scss';

export const PhoneActions: React.FC = () => {
  return (
    <div className="phone-actions">
      <div className="phone-actions__title">
        <h4>Avaliable colors</h4>
        <span>ID: 12345678</span>
      </div>

      {/* замепити кольори, додати функціонал */}
      <div className="phone-actions__color">
        <NavLink to="/">
          <button className="phone-actions__color-select selected"></button>
        </NavLink>
        <NavLink to="/">
          <button className="phone-actions__color-select"></button>
        </NavLink>
        <NavLink to="/">
          <button className="phone-actions__color-select"></button>
        </NavLink>
      </div>

      {/* замепити capacity, додати функціонал  */}
      <div className="phone-actions__capacity">
        <div className="phone-actions__title">
          <h4>Select capacity</h4>
        </div>
        <NavLink to="/">
          <button className="phone-actions__capacity-select">64 GB</button>
        </NavLink>
        <NavLink to="/">
          <button className="phone-actions__capacity-select selected">
            128 GB
          </button>
        </NavLink>
        <NavLink to="/">
          <button className="phone-actions__capacity-select">256 GB</button>
        </NavLink>
      </div>

      {/* якщо є знижка, показати ціну зі знижкою і стару ціну, інакше показати просто ціну */}
      <div className="phone-actions__price">
        <span className="phone-actions__price--regular">899 $</span>
        <span className="phone-actions__price--discount">1299 $</span>
      </div>

      <div className="phone-actions__buttons">
        {/* повішати onClick з хендлером який буде додавати продукт в кошик  */}
        <button className="phone-actions__buttons-cart">Add to cart</button>

        {/* повішати onClick з хендлером який буде додавати продукт в улюблені  */}
        <button className="phone-actions__buttons-like">
          <FavoritesIcon />
        </button>
      </div>

      {/* замепити дані */}
      <div className="phone-actions__categ categ">
        <div className="categ__info">
          <h4 className="categ__info--title">Screen</h4>
          <span className="categ__info--value">value</span>
        </div>

        <div className="categ__info">
          <h4 className="categ__info--title">Resolution</h4>
          <span className="categ__info--value">value</span>
        </div>

        <div className="categ__info">
          <h4 className="categ__info--title">Processor</h4>
          <span className="categ__info--value">value</span>
        </div>

        <div className="categ__info">
          <h4 className="categ__info--title">RAM</h4>
          <span className="categ__info--value">value</span>
        </div>
      </div>
    </div>
  );
};
