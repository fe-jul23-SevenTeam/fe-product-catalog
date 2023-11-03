import { FC, useEffect, useState } from 'react';
import { ModalWindow } from 'components/ModalWindow';

import './OrderModal.scss';
import { SuccessContent } from '../SuccessContent';
import { useShoppingCart } from 'context/ShoppingCartContext';

type Props = {
  isOpen: boolean;
  close: () => void;
};

export const OrderModal: FC<Props> = ({ isOpen, close }) => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const { clearCart } = useShoppingCart();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsFormSubmitted(true);
    clearCart();
  };

  useEffect(() => {
    setIsFormSubmitted(false);
  }, [isOpen]);

  return (
    <ModalWindow isOpen={isOpen} close={close}>
      {!isFormSubmitted ? (
        <div className="order-modal">
          <h1 className="order-modal__title">Thank you for choosing us</h1>

          <form
            onSubmit={event => handleSubmit(event)}
            className="order-modal__form"
          >
            <input
              required
              type="text"
              placeholder="Full Name"
              className="order-modal__form-input order-modal__form-input-m"
            />

            <input
              required
              type="tel"
              placeholder="Phone No."
              className="order-modal__form-input order-modal__form-input-m"
            />

            <input
              required
              type="email"
              placeholder="Email"
              className="order-modal__form-input order-modal__form-input-l"
            />

            <input
              required
              type="text"
              placeholder="Delivery Address"
              className="order-modal__form-input order-modal__form-input-l"
            />

            <button type="submit" className="order-modal__form-button">
              Submit my order
            </button>
          </form>
        </div>
      ) : (
        <SuccessContent />
      )}
    </ModalWindow>
  );
};
