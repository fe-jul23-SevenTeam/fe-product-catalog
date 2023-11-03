import React, { useEffect, useState } from 'react';
import { ReactComponent as LeftArrow } from 'assets/icons/arrow-left_icon.svg';
import { ReactComponent as RightArrow } from 'assets/icons/arrow-right_icon.svg';
import { CardSlider } from '../CardSlider';
import { Product } from 'types/Product';
import { getProductsForSlider } from 'api/productsGeneral';

import './HotPrices.scss';
import { CardSliderSkeleton } from 'components/CardSliderSkeleton';

export const HotPrices: React.FC = () => {
  const [hotModels, setHotModels] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    getProductsForSlider(15, 'best-price')
      .then(setHotModels)
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <section className="hotPrices">
      <div className="hotPrices__container">
        <div className="hotPrices__top">
          <h2 className="hotPrices__title">Hot Prices</h2>

          <div className="hotPrices__arrows">
            <div className="hotPrices__arrow-left hotPrices__arrows-icons">
              <LeftArrow className="hotPrices__arrows-icons-arrow" />
            </div>

            <div className="hotPrices__arrow-right hotPrices__arrows-icons">
              <RightArrow className="hotPrices__arrows-icons-arrow" />
            </div>
          </div>
        </div>

        {isLoading ? (
          <CardSliderSkeleton />
        ) : (
          <CardSlider
            leftArrowName="hotPrices__arrow-left"
            rightArrowName="hotPrices__arrow-right"
            products={hotModels}
          />
        )}
      </div>
    </section>
  );
};
