import { FC } from 'react';
import './Checkout.scss';

type ProductsTotal = {
  quantity: number;
  sum: number;
};

type Props = {
  productsTotal: ProductsTotal;
  openModal: () => void;
};

export const Checkout: FC<Props> = ({ productsTotal, openModal }) => {
  const { quantity, sum } = productsTotal;

  return (
    <section className="checkout">
      <div className="checkout__price">
        <h2 className="checkout__title">{`$${sum}`}</h2>
        <h4 className="checkout__subtitle">{`Total for ${quantity} items`}</h4>
      </div>
      <button onClick={openModal} type="button" className="checkout__button">
        Checkout
      </button>
    </section>
  );
};
