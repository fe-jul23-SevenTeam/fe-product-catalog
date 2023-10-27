import './Checkout.scss';

export const Checkout = () => {
  const totalPrice = 2467;
  const itemsCount = 2;

  return (
    <section className="checkout">
      <div className="checkout__price">
        <h2 className="checkout__title">{`$${totalPrice}`}</h2>
        <h4 className="checkout__subtitle">
          {`Total for ${itemsCount} items`}
        </h4>
      </div>
      <button type="button" className="checkout__button">
        Checkout
      </button>
    </section>
  );
};
