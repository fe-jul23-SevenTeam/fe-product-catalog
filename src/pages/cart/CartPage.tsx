import React, { useEffect, useState } from 'react';

import { BackButton } from '../../components/BackButton/BackButton';
import { CartCard } from './components/CartCard';
import { Checkout } from './components/Checkout';
import { Product } from '../../types/Product';

import './Cart.scss';
import { getProducts } from '../../api/productsGeneral';
import { Loader } from '../../components/Loader';
import { useShoppingCart } from '../../context/ShoppingCartContext';

export const CartPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [updatedProducts, setUpdatedProducts] = useState<Product[]>([]);
  const [productsTotal, setProductsTotal] = useState({ quantity: 0, sum: 0 });
  const { cartItems } = useShoppingCart();

  useEffect(() => {
    setIsLoading(true);

    getProducts()
      .then(setProducts)
      .finally(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    const productsToRender = products.filter(product =>
      cartItems.some((item: { id: number }) => item.id === product.id),
    );

    const sum = productsToRender.reduce((acc, current) => {
      const addedItem = cartItems.find(
        (item: { id: number }) => item.id === current.id,
      );

      if (addedItem) {
        const productSum = current.price * addedItem.quantity;

        return acc + productSum;
      }

      return acc;
    }, 0);

    const quantity = cartItems.reduce(
      (acc: number, item: { quantity: number }) => acc + item.quantity,
      0,
    );

    setProductsTotal({ sum: sum, quantity: quantity });
    setUpdatedProducts(productsToRender);
  }, [cartItems, products]);

  return (
    <div className="cart cart--margin-block grid wrapper">
      <div className="cart__title-container">
        <BackButton />
        <h1 className="cart__title">Cart</h1>
      </div>
      <section className="cart__products">
        {isLoading ? (
          <Loader />
        ) : (
          updatedProducts?.map((product: Product) => (
            <CartCard key={product.id} product={product} />
          ))
        )}
        {isLoading ? (
          <Loader />
        ) : (
          updatedProducts?.map((product: Product) => (
            <CartCard key={product.id} product={product} />
          ))
        )}
      </section>
      <section className="cart__checkout">
        <Checkout productsTotal={productsTotal} />
      </section>
    </div>
  );
};
