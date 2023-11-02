import React from 'react';

import { ReactComponent as CloseIcon } from '../../../../assets/icons/close_icon.svg';
import { ReactComponent as MinusIcon } from '../../../../assets/icons/minus_icon.svg';
import { ReactComponent as PlusIcon } from '../../../../assets/icons/plus_icon.svg';
import { useShoppingCart } from '../../../../context/ShoppingCartContext';
import { Product } from '../../../../types/Product';

import './CartCard.scss';

type Props = {
  product: Product;
};

export const CartCard: React.FC<Props> = ({ product }) => {
  const { id, image, name, price } = product;

  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);

  return (
    <div className="cart-card">
      <button
        type="button"
        onClick={() => removeFromCart(id)}
        className="cart-card__remove-button"
      >
        <CloseIcon className="cart-card__remove-icon" />
      </button>

      <div className="cart-card__img-container">
        <img src={image} alt={name} className="cart-card__img" />
      </div>

      <h4 className="cart-card__title">{name}</h4>

      <div className="cart-card__amount">
        <button
          className="cart-card__amount-button"
          onClick={() => decreaseCartQuantity(id)}
        >
          <MinusIcon className="cart-card__amount-button-icon" />
        </button>

        <span className="cart-card__amount-number">{quantity}</span>

        <button className="cart-card__amount-button">
          <PlusIcon
            className="cart-card__amount-button-icon"
            onClick={() => increaseCartQuantity(id)}
          />
        </button>
      </div>
      <h5 className="cart-card__price">{`$${price}`}</h5>
    </div>
  );
};
