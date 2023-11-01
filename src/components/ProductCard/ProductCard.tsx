import './ProductCard.scss';
import { ReactComponent as FavoritesIcon } from 'assets/icons/favorites_icon.svg';
import React, { useState } from 'react';
import { Product } from '../../Types/Product';
import { useShoppingCart } from '../../context/ShoppingCartContext';

type Props = {
  product: Product;
};

export const ProductCard: React.FC<Props> = ({ product }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const { addToCart, addToFavorites, removeFromFavorites } = useShoppingCart();
  const { name, price, screen, capacity, ram, image, fullPrice, id } = product;

  const handleClick = () => {
    if (!isFavorite) {
      removeFromFavorites(id);
    } else {
      addToFavorites(product);
    }

    setIsFavorite(!isFavorite); // Toggle the favorite state
  };

  return (
    <div className="card">
      <div className="card__container">
        <div className="card__image">
          <img className="card__image-img" src={image} alt={name} />
        </div>

        <h3 className="card__name">{name}</h3>

        <p className="card__price">
          {`$${price} `}
          <span className="card__price-old">{`$${fullPrice}`}</span>
        </p>

        <div className="card__divider"></div>

        <div className="card__specs">
          <div className="card__specs__line">
            <p className="card__specs__line-name">Screen</p>
            <p className="card__specs__line-value">{screen}</p>
          </div>

          <div className="card__specs__line">
            <p className="card__specs__line-name">Capasity</p>
            <p className="card__specs__line-value">{capacity}</p>
          </div>

          <div className="card__specs__line">
            <p className="card__specs__line-name">RAM</p>
            <p className="card__specs__line-value">{ram}</p>
          </div>
        </div>

        <div className="card__buttons">
          <button
            className="card__buttons-card"
            onClick={() => addToCart(product)}
          >
            Add to cart
          </button>
          <button className="card__buttons-favorites" onClick={handleClick}>
            <FavoritesIcon className="card__buttons-favorites-icon" />
          </button>
        </div>
      </div>
    </div>
  );
};
