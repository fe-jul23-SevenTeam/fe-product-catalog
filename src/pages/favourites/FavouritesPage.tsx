import React, { useEffect, useState } from 'react';
import { BackButton } from '../../components/BackButton/BackButton';
import { Product } from '../../types/Product';
import { getProducts } from '../../api/productsGeneral';
import { Loader } from '../../components/Loader';
import { ProductCard } from '../../components/ProductCard';
import { useShoppingCart } from '../../context/ShoppingCartContext';

export const FavoritesPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [updatedProducts, setUpdatedProducts] = useState<Product[]>([]);
  const { favoritesItems } = useShoppingCart();

  useEffect(() => {
    setIsLoading(true);

    getProducts()
      .then(setProducts)
      .finally(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    const productsToRender = products.filter(product =>
      favoritesItems.some((item: { id: number }) => item.id === product.id),
    );

    setUpdatedProducts(productsToRender);
  }, [favoritesItems, products]);

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
