import './Checkout.scss';

type ProductsTotal = {
  quantity: number;
  sum: number;
};

export const Checkout = ({
  productsTotal,
}: {
  productsTotal: ProductsTotal;
}) => {
  const { quantity, sum } = productsTotal;

  return (
    <section className="checkout">
      <div className="checkout__price">
        <h2 className="checkout__title">{`$${sum}`}</h2>
        <h4 className="checkout__subtitle">{`Total for ${quantity} items`}</h4>
      </div>
      <button type="button" className="checkout__button">
        Checkout
      </button>
    </section>
  );
};
