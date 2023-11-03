import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

import { ReactComponent as FavoritesIcon } from '../../../assets/icons/favorites_icon.svg';
import { ReactComponent as FilledFavoritesIcon } from '../../../assets/icons/favourites-filled_icon.svg';

import { ProductDetails } from 'types/ProductDetails';
import { Product } from 'types/Product';
import { getProducts } from 'api/productsGeneral';
import './PhoneAction.scss';
import { changeItemId } from 'helpers/functions';
import { useShoppingCart } from 'context/ShoppingCartContext';

interface Props {
  product: ProductDetails;
  productId: string | undefined;
  colorsAvailable: string[];
  capacityAvailable: string[];
  setSelectedImage: (photo: string | null) => void;
}

export const PhoneActions: React.FC<Props> = ({
  product,
  productId,
  colorsAvailable,
  capacityAvailable,
  setSelectedImage,
}) => {
  const {
    color,
    capacity,
    priceRegular,
    priceDiscount,
    category,
    screen,
    resolution,
    processor,
    ram,
  } = product;

  const [selectedColor, setSelectedColor] = useState(color);
  const [selectedCapacity, setSelectedCapacity] = useState(capacity);
  const [id, setId] = useState<number>();
  const { addToCart, addToFavorites, checkInCart, checkInFav, removeFromCart } =
    useShoppingCart();

  useEffect(() => {
    const fetchId = async () => {
      try {
        const phonesFromServer = await getProducts();
        const id = phonesFromServer.find(
          (phone: Product) => phone.itemId === productId,
        )?.id;

        setId(id);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Error fetching phones:', error);
      }
    };

    fetchId();
  }, [productId]);

  const handleChangeProductColor = (col: string) => {
    setSelectedColor(col);
    setSelectedImage(null);
  };

  if (!id) {
    return null;
  }

  const isInFav = checkInFav(id);
  const isInCart = checkInCart(id);

  return (
    <div className="phone-actions">
      <div className="phone-actions__color">
        <div className="phone-actions__title">
          <h4>Available colors</h4>
          <span>{category}</span>
        </div>

        {colorsAvailable &&
          productId &&
          colorsAvailable.map(col => (
            <NavLink
              to={`/product-info/${changeItemId(
                productId,
                selectedColor,
                col,
              )}`}
              key={col}
              onClick={() => handleChangeProductColor(col)}
            >
              <button
                className={classNames(`phone-actions__color-select ${col}`, {
                  selected: selectedColor === col,
                })}
              ></button>
            </NavLink>
          ))}
      </div>

      <div className="phone-actions__capacity">
        <div className="phone-actions__title">
          <h4>Select capacity</h4>
        </div>

        {capacityAvailable &&
          productId &&
          capacityAvailable.map(cap => (
            <NavLink
              to={`/product-info/${changeItemId(
                productId,
                selectedCapacity,
                cap,
              )}`}
              onClick={() => setSelectedCapacity(cap)}
              key={cap}
            >
              <button
                className={classNames('phone-actions__capacity-select', {
                  selected: selectedCapacity === cap,
                })}
              >
                {cap}
              </button>
            </NavLink>
          ))}
      </div>

      {priceDiscount ? (
        <div className="phone-actions__price">
          <span className="phone-actions__price--regular">
            ${priceDiscount}
          </span>
          <span className="phone-actions__price--discount">
            ${priceRegular}
          </span>
        </div>
      ) : (
        <div className="phone-actions__price">
          <span className="phone-actions__price--regular">${priceRegular}</span>
        </div>
      )}

      <div className="phone-actions__buttons">
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
            <FavoritesIcon className="phone-actions__buttons-like-icon" />
          </button>
        )}
      </div>

      <div className="phone-actions__additional-info additional-info">
        <div className="additional-info__info">
          <h4 className="additional-info__info--title">Screen</h4>
          <span className="additional-info__info--value">{screen}</span>
        </div>

        <div className="additional-info__info">
          <h4 className="additional-info__info--title">Resolution</h4>
          <span className="additional-info__info--value">{resolution}</span>
        </div>

        <div className="additional-info__info">
          <h4 className="additional-info__info--title">Processor</h4>
          <span className="additional-info__info--value">{processor}</span>
        </div>

        <div className="additional-info__info">
          <h4 className="additional-info__info--title">RAM</h4>
          <span className="additional-info__info--value">{ram}</span>
        </div>
      </div>
    </div>
  );
};
