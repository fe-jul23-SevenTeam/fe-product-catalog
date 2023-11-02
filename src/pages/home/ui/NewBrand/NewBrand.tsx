import React, { useEffect, useState } from 'react';
import { CardSlider } from '../CardSlider';
import { ReactComponent as LeftArrow } from 'assets/icons/arrow-left_icon.svg';
import { ReactComponent as RightArrow } from 'assets/icons/arrow-right_icon.svg';
import { getProductsForSlider } from 'api/productsGeneral';

import './NewBrand.scss';
import { Product } from '../../../../types/Product';
import { CardSliderSkeleton } from 'components/CardSliderSkeleton';

export const NewBrand: React.FC = () => {
  const [newModels, setNewModels] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    getProductsForSlider(15, 'newest')
      .then(setNewModels)
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <section className="newBrand">
      <div className="newBrand__container">
        <div className="newBrand__top">
          <h2 className="newBrand__title">Brand new models</h2>

          <div className="newBrand__arrows">
            <div className="newBrand__arrow-left arrow">
              <LeftArrow />
            </div>

            <div className="newBrand__arrow-right arrow">
              <RightArrow />
            </div>
          </div>
        </div>

        {isLoading ? (
          <CardSliderSkeleton />
        ) : (
          <CardSlider
            leftArrowName="newBrand__arrow-left"
            rightArrowName="newBrand__arrow-right"
            products={newModels}
          />
        )}
      </div>
    </section>
  );
};
