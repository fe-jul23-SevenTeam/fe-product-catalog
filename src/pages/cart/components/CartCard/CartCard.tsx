import { ReactComponent as CloseIcon } from '../../../../assets/icons/close_icon.svg';
import { ReactComponent as MinusIcon } from '../../../../assets/icons/minus_icon.svg';
import { ReactComponent as PlusIcon } from '../../../../assets/icons/plus_icon.svg';
import { useShoppingCart } from '../../../../context/ShoppingCartContext';

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

  const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity } =
    useShoppingCart();
  const quantity = getItemQuantity(id);

  return (
    <div className="cart-card">
      <div className="cart-card__product-info-container">
        <button
          type="button"
          onClick={handleRemoveItem}
          className="cart-card__remove-button"
        >
          <CloseIcon className="cart-card__remove-icon" />
        </button>

        <div className="cart-card__img-container">
          <img src={image} alt={name} className="cart-card__img" />
        </div>

        <h4 className="cart-card__title">{name}</h4>
      </div>

      <div className="cart-card__actions-container">
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
    </div>
  );
};
