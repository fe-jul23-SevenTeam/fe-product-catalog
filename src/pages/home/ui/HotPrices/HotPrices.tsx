import React, { useEffect, useState } from 'react';
import { ReactComponent as LeftArrow } from 'assets/icons/arrow-left_icon.svg';
import { ReactComponent as RightArrow } from 'assets/icons/arrow-right_icon.svg';
import { CardSlider } from '../CardSlider';
import { Product } from 'types/Product';
import { getProducts } from 'api/productsGeneral';
import { Loader } from 'components/Loader';

import './HotPrices.scss';

export const HotPrices: React.FC = () => {
  const [hotModels, setHotModels] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    getProducts()
      .then(setHotModels)
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <section className="hotPrices">
      <div className="hotPrices__container">
        <div className="hotPrices__top">
          <h2 className="hotPrices__title">Hot Prices</h2>

          <div className="hotPrices__arrows">
            <div className="hotPrices__arrow-left arrow">
              <LeftArrow />
            </div>

            <div className="hotPrices__arrow-right arrow">
              <RightArrow />
            </div>
          </div>
        </div>

        {isLoading ? (
          <Loader />
        ) : (
          <CardSlider
            leftArrowName="newBrand__arrow-left"
            rightArrowName="newBrand__arrow-right"
            products={hotModels}
          />
        )}
      </div>
    </section>
  );
};
