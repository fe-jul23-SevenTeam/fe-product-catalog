import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import cn from 'classnames';
import { ReactComponent as FavoritesIcon } from '../../../assets/icons/favorites_icon.svg';
import { ReactComponent as ShoppingBagIcon } from '../../../assets/icons/shopping-bag_icon.svg';
import { ReactComponent as BurgerMenuIcon } from '../../../assets/icons/menu_icon.svg';
import { ReactComponent as CloseIcon } from '../../../assets/icons/close_icon.svg';

import './HeaderButtons.scss';
import { BurgerMenu } from '../BurgerMenu';

import DarkMode from 'DarkMode/DarkMode';

import { useShoppingCart } from '../../../context/ShoppingCartContext';

export const HeaderButtons: React.FC = () => {
  const [isBurgerActive, setIsBurgerActive] = useState(false);
  const { cartItems, favoritesItems } = useShoppingCart();

  const handleCloseBurger = () => {
    setIsBurgerActive(false);

    document.body.style.overflow = 'unset';
  };

  const handleOpenBurger = () => {
    setIsBurgerActive(true);

    if (typeof window !== 'undefined' && window.document) {
      document.body.style.overflow = 'hidden';
    }
  };

  const handleChangeBurgerState = () => {
    isBurgerActive ? handleCloseBurger() : handleOpenBurger();
  };

  const quantityProducts = cartItems.reduce(
    (acc: number, item: { quantity: number }) => acc + item.quantity,
    0,
  );
  const quantityFavorites = favoritesItems.reduce(
    (acc: number, item: { quantity: number }) => acc + item.quantity,
    0,
  );

  return (
    <div className="buttons">
      <DarkMode />
      <div
        className="icon-wrapper icon-wrapper--menu"
        onClick={handleChangeBurgerState}
      >
        {isBurgerActive ? (
          <CloseIcon className="icon icon--close" />
        ) : (
          <BurgerMenuIcon
            className={cn('icon icon--menu', { 'is-active': isBurgerActive })}
          />
        )}
      </div>

      {isBurgerActive && (
        <div onClick={handleCloseBurger}>
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
        {favoritesItems.length > 0 && (
          <div className="icon__quantity">{quantityFavorites}</div>
        )}
      </NavLink>

      <NavLink
        to="cart"
        className={({ isActive }) =>
          cn('icon-wrapper', { 'is-active': isActive })
        }
      >
        <ShoppingBagIcon className="icon icon--shopping-bag" />
        {cartItems.length > 0 && (
          <div className="icon__quantity">{quantityProducts}</div>
        )}
      </NavLink>
    </div>
  );
};
