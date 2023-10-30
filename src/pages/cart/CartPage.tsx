import { BackButton } from '../../components/BackButton/BackButton';
import { CartCard } from './components/CartCard';
import { Checkout } from './components/Checkout';

import './Cart.scss';

export const CartPage = () => {
  return (
    <div className="cart cart--margin-block grid wrapper">
      <div className="cart__title-container">
        <BackButton />
        <h1 className="cart__title">Cart</h1>
      </div>
      <section className="cart__products">
        <CartCard />
        <CartCard />
        <CartCard />
        <CartCard />
        <CartCard />
      </section>
      <section className="cart__checkout">
        <Checkout />
      </section>
    </div>
  );
};
