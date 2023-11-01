import React, { useEffect, useState } from 'react';
import { BackButton } from '../../components/BackButton/BackButton';
import { Product } from '../../Types/Product';
import { getProducts } from '../../api/productsGeneral';
import { Loader } from '../../components/Loader';
import { ProductCard } from '../../components/ProductCard';

export const FavoritesPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [updatedProducts, setUpdatedProducts] = useState<Product[]>([]);

  useEffect(() => {
    setIsLoading(true);

    getProducts()
      .then(setProducts)
      .finally(() => setIsLoading(false));
  }, []);

  const addedItems = JSON.parse(
    localStorage.getItem('favorites-items') || '[]',
  ); // Parse the added items from localStorage

  useEffect(() => {
    const productsToRender = products.filter(product =>
      addedItems.some((item: { id: number }) => item.id === product.id),
    );

    setUpdatedProducts(productsToRender);
  }, [addedItems, products]);

  return (
    <div className="cart cart--margin-block grid wrapper">
      <div className="cart__title-container">
        <BackButton />
        <h1 className="cart__title">FavoritesPage</h1>
      </div>
      <section className="cart__products">
        {isLoading ? (
          <Loader />
        ) : (
          updatedProducts.map((product: Product) => (
            <ProductCard product={product} />
          ))
        )}
      </section>
    </div>
  );
};
