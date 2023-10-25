import './ProductCard.scss';
import { ReactComponent as FavoritesIcon } from '../../assets/icons/favorites_icon.svg';

const phoneTest = {
  id: 1,
  category: 'phones',
  phoneId: 'apple-iphone-7-32gb-black',
  itemId: 'apple-iphone-7-32gb-black',
  name: 'Apple iPhone 11 Pro Max 512GB Midnight Green (iMT9G2FS/A)',
  fullPrice: 400,
  price: 375,
  screen: '4.7 IPS',
  capacity: '32GB',
  color: 'black',
  ram: '2GB',
  year: 2016,
  image: 'img/phones/apple-iphone-7/black/00.jpg',
  createdAt: '2023-10-24T07:48:54.344Z',
  updatedAt: '2023-10-24T07:48:54.344Z',
};

export const ProductCard = () => {
  const { name, price, screen, capacity, ram } = phoneTest;

  return (
    <div className="card" data-qa="card">
      <img
        src={require('../../assets/img/phones/apple-iphone-11-pro-max/midnightgreen/image 2.png')}
        alt="APPLE A1419 iMac 27"
        className="card__image"
      />

      <h3 className="card__name">{name}</h3>

      <p className="card__price">{`$${price}`}</p>

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
        <button className="card__buttons-favourites">
          <FavoritesIcon className="card__buttons-favourites-icon" />
        </button>
      </div>
    </div>
  );
};
