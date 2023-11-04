import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import { ReactComponent as FavoritesIcon } from '../../../assets/icons/favorites_icon.svg';
import { ReactComponent as ShoppingBagIcon } from '../../../assets/icons/shopping-bag_icon.svg';
import { navItems } from '../../../helpers/constants';

import './BurgerMenu.scss';

export const BurgerMenu: React.FC = () => {
  return (
    <div className="menu">
      <nav className="menu__nav">
        <ul className="menu__list">
          {navItems.map((item, index) => (
            <li className="menu__item" key={index}>
              <NavLink
                className={({ isActive }) =>
                  cn('menu__link', { 'is-active': isActive })
                }
                to={item.to}
              >
                {item.text}
              </NavLink>
            </li>
          ))}
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
