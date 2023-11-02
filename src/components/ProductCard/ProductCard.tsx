import './ProductCard.scss';
import { ReactComponent as FavoritesIcon } from 'assets/icons/favorites_icon.svg';
import { ReactComponent as FilledFavoritesIcon } from 'assets/icons/favourites-filled_icon.svg';
import React from 'react';
import { Product } from '../../types/Product';
import { useShoppingCart } from '../../context/ShoppingCartContext';
import { Link } from 'react-router-dom';

type Props = {
  product: Product;
};

export const ProductCard: React.FC<Props> = ({ product }) => {
  const { addToCart, addToFavorites, checkInCart, checkInFav, removeFromCart } =
    useShoppingCart();
  const { name, price, screen, capacity, ram, image, fullPrice, itemId, id } =
    product;

  const isInFav = checkInFav(id);
  const isInCart = checkInCart(id);

  return (
    <div className="card">
      <div className="card__container">
        <Link to={`/product-info/${itemId}`}>
          <div className="card__image">
            <img className="card__image-img" src={image} alt={name} />
          </div>
        </Link>

        <Link to={`/product-info/${itemId}`}>
          <h3 className="card__name">{name}</h3>
        </Link>

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
            <p className="card__specs__line-name">Capacity</p>
            <p className="card__specs__line-value">{capacity}</p>
          </div>

          <div className="card__specs__line">
            <p className="card__specs__line-name">RAM</p>
            <p className="card__specs__line-value">{ram}</p>
          </div>
        </div>

        <div className="card__buttons">
          {isInCart ? (
            <button
              className="phone-actions__buttons-cart selected"
              onClick={() => removeFromCart(id)}
            >
              Added
            </button>
          ) : (
            <button
              className="phone-actions__buttons-cart"
              onClick={() => addToCart(id)}
            >
              Add to cart
            </button>
          )}
          {isInFav ? (
            <button
              className="phone-actions__buttons-like selected"
              onClick={() => addToFavorites(id)}
            >
              <FilledFavoritesIcon />
            </button>
          ) : (
            <button
              className="phone-actions__buttons-like"
              onClick={() => addToFavorites(id)}
            >
              <FavoritesIcon />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
