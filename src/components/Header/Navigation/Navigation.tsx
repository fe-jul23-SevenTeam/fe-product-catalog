import { NavLink } from 'react-router-dom';
import cn from 'classnames';

import './Navigation.scss';
import { navItems } from '../../../helpers/constants';

export const Navigation = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        {navItems.map((item, index) => (
          <li className="nav__item" key={index}>
            <NavLink
              className={({ isActive }) =>
                cn('nav__link', { 'is-active': isActive })
              }
              to={item.to}
            >
              {item.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
