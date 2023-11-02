import { FC, useEffect, useState } from 'react';
import { ModalWindow } from 'components/ModalWindow';

import './OrderModal.scss';
import { SuccessContent } from '../SuccessContent';

type Props = {
  isOpen: boolean;
  close: () => void;
};

export const OrderModal: FC<Props> = ({ isOpen, close }) => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // eslint-disable-next-line
    console.log(isFormSubmitted);

    setIsFormSubmitted(true);
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
              type="text"
              placeholder="Full Name"
              className="order-modal__form-input order-modal__form-input-m"
            />

            <input
              type="tel"
              placeholder="Phone No."
              className="order-modal__form-input order-modal__form-input-m"
            />

            <input
              type="email"
              placeholder="Email"
              className="order-modal__form-input order-modal__form-input-l"
            />

            <input
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
