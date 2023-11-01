import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import cn from 'classnames';
import { ReactComponent as FavoritesIcon } from '../../../assets/icons/favorites_icon.svg';
import { ReactComponent as ShoppingBagIcon } from '../../../assets/icons/shopping-bag_icon.svg';
import { ReactComponent as BurgerMenuIcon } from '../../../assets/icons/menu_icon.svg';
import { ReactComponent as CloseIcon } from '../../../assets/icons/close_icon.svg';

import './HeaderButtons.scss';
import { BurgerMenu } from '../BurgerMenu';

export const HeaderButtons: React.FC = () => {
  const [isActiveBurger, setIsActiveBurger] = useState(false);
  const shoppingItems = JSON.parse(
    localStorage.getItem('shopping-cart') || '[]',
  ); // Parse the added items from localStorage
  const favoritesItems = JSON.parse(
    localStorage.getItem('favorites-items') || '[]',
  ); // Parse the added items from localStorage

  const quantityProducts = shoppingItems.reduce(
    (acc: number, item: { quantity: number }) => acc + item.quantity,
    0,
  );
  const quantityFavorites = favoritesItems.reduce(
    (acc: number, item: { quantity: number }) => acc + item.quantity,
    0,
  );

  return (
    <div className="buttons">
      {/* тут буде іконка бургер меню і компонент меню */}
      <div
        className="icon-wrapper icon-wrapper--menu"
        onClick={() => setIsActiveBurger(!isActiveBurger)}
      >
        {isActiveBurger ? (
          <CloseIcon className="icon icon--close" />
        ) : (
          <BurgerMenuIcon
            className={cn('icon icon--menu', { 'is-active': isActiveBurger })}
          />
        )}
      </div>

      {isActiveBurger && (
        <div onClick={() => setIsActiveBurger(false)}>
          <BurgerMenu />
        </div>
      )}

      <NavLink
        to="favorites"
        className={({ isActive }) =>
          cn('icon-wrapper', { 'is-active': isActive })
        }
      >
        <FavoritesIcon className="icon icon--favorites" />
        {quantityFavorites}
      </NavLink>

      <NavLink
        to="cart"
        className={({ isActive }) =>
          cn('icon-wrapper', { 'is-active': isActive })
        }
      >
        <ShoppingBagIcon className="icon icon--shopping-bag" />
        {quantityProducts}
      </NavLink>
    </div>
  );
};
