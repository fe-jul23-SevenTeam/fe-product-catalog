import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import './BurgerMenu.scss';
import { ReactComponent as FavoritesIcon } from '../../../assets/icons/favorites_icon.svg';
import { ReactComponent as ShoppingBagIcon } from '../../../assets/icons/shopping-bag_icon.svg';

export const BurgerMenu: React.FC = () => {
  return (
    <div className="menu">
      <nav className="menu__nav">
        <ul className="menu__list">
          <li className="menu__item">
            <NavLink
              className={({ isActive }) =>
                cn('menu__link', { 'is-active': isActive })
              }
              to="home"
            >
              home
            </NavLink>
          </li>

          <li className="menu__item">
            <NavLink
              className={({ isActive }) =>
                cn('menu__link', { 'is-active': isActive })
              }
              to="phones"
            >
              phones
            </NavLink>
          </li>

          <li className="menu__item">
            <NavLink
              className={({ isActive }) =>
                cn('menu__link', { 'is-active': isActive })
              }
              to="tablets"
            >
              tablets
            </NavLink>
          </li>

          <li className="menu__item">
            <NavLink
              className={({ isActive }) =>
                cn('menu__link', { 'is-active': isActive })
              }
              to="accessories"
            >
              accessories
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="menu__buttons">
        <NavLink
          to="favorites"
          className={({ isActive }) =>
            cn('menu__icon', { 'is-active': isActive })
          }
        >
          <FavoritesIcon className="icon icon--favorites" />
        </NavLink>

        <NavLink
          to="cart"
          className={({ isActive }) =>
            cn('menu__icon', { 'is-active': isActive })
          }
        >
          <ShoppingBagIcon className="icon icon--shopping-bag" />
        </NavLink>
      </div>
    </div>
  );
};
