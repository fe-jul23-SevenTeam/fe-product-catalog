import { useEffect, useState } from 'react';
import { BackButton } from '../../components/BackButton/BackButton';
import { Product } from '../../types/Product';
import { getProducts } from '../../api/productsGeneral';
import { ProductCard } from '../../components/ProductCard';
import { useShoppingCart } from '../../context/ShoppingCartContext';

import './FavouritesPage.scss';
import { CatalogSkeleton } from 'components/CatalogSkeleton';

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
    <div className="favourites favourites--margin-block grid wrapper">
      <div className="favourites__title-container">
        <BackButton />
        <h1 className="favourites__title">FavoritesPage</h1>
      </div>
      <section className="favourites__products">
        {isLoading ? (
          <CatalogSkeleton />
        ) : (
          <div className="grid">
            {updatedProducts.map((product: Product) => (
              <div key={product.id} className="catalog__card-container">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};
