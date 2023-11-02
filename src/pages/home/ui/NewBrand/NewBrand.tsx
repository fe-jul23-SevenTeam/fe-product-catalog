import React, { useEffect, useState } from 'react';
import { CardSlider } from '../CardSlider';
import { ReactComponent as LeftArrow } from 'assets/icons/arrow-left_icon.svg';
import { ReactComponent as RightArrow } from 'assets/icons/arrow-right_icon.svg';
import { getProductsForSlider } from 'api/productsGeneral';

import './NewBrand.scss';
import { Product } from '../../../../types/Product';
import { Loader } from 'components/Loader';

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
            <div className="newBrand__arrow-left newBrand__arrows-icons">
              <LeftArrow className="newBrand__arrows-icons-arrow" />
            </div>

            <div className="newBrand__arrow-right newBrand__arrows-icons">
              <RightArrow className="newBrand__arrows-icons-arrow" />
            </div>
          </div>
        </div>

        {isLoading ? (
          <Loader />
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
