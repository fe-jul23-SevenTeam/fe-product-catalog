import { ReactComponent as CloseIcon } from '../../../../assets/icons/close_icon.svg';
import { ReactComponent as MinusIcon } from '../../../../assets/icons/minus_icon.svg';
import { ReactComponent as PlusIcon } from '../../../../assets/icons/plus_icon.svg';

import './CartCard.scss';

const cardData = {
  id: 1,
  // category: 'phones',
  itemId: 'apple-iphone-7-32gb-black',
  name: 'Apple iPhone 14 Pro 128GB Silver (MQ023)',
  // fullPrice: 400,
  price: 375,
  // screen: '4.7\' IPS',
  // capacity: '32GB',
  // color: 'black',
  // ram: '2GB',
  // year: 2016,
  image:
    'https://be-product-catalog-fhdi.onrender.com/images/img/phones/apple-iphone-7/black/00.webp',
  amount: 2,
};

export const CartCard = () => {
  const { id, image, name, amount, price } = cardData;

  const handleRemoveItem = () => localStorage.removeItem(`${id}`);

  return (
    <div className="card">
      <div className="card__product-info-container">
        <button
          type="button"
          onClick={handleRemoveItem}
          className="card__remove-button"
        >
          <CloseIcon className="card__remove-icon" />
        </button>

        <div className="card__img-container">
          <img src={image} alt={name} className="card__img" />
        </div>

        <h4 className="card__title">{name}</h4>
      </div>

      <div className="card__actions-container">
        <div className="card__amount">
          <button className="card__amount-button">
            <MinusIcon className="card__amount-button-icon" />
          </button>

          <span className="card__amount-number">{amount}</span>

          <button className="card__amount-button">
            <PlusIcon className="card__amount-button-icon" />
          </button>
        </div>
        <h5 className="card__price">{`$${price}`}</h5>
      </div>
    </div>
  );
};
