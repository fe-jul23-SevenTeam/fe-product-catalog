import './ProductCard.scss';
import { ReactComponent as FavoritesIcon } from 'assets/icons/favorites_icon.svg';
import React from 'react';
import { Product } from 'types/Product';
import { Link } from 'react-router-dom';

type Props = {
  product: Product;
};

export const ProductCard: React.FC<Props> = ({ product }) => {
  const { name, price, screen, capacity, ram, image, fullPrice, itemId } =
    product;

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
        <button className="card__buttons-card">Add to cart</button>
        <button className="card__buttons-favorites">
          <FavoritesIcon className="card__buttons-favorites-icon" />
        </button>
      </div>
    </div>
  );
};
