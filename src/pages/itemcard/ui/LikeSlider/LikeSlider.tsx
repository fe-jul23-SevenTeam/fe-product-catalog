import React, { useEffect, useState } from 'react';
import { CardSlider } from 'pages/home/ui/CardSlider';
import { ReactComponent as LeftArrow } from 'assets/icons/arrow-left_icon.svg';
import { ReactComponent as RightArrow } from 'assets/icons/arrow-right_icon.svg';
import { getProductsForSlider } from 'api/productsGeneral';

import './LikeSlider.scss';
import { Product } from 'types/Product';
import { Loader } from 'components/Loader';

export const LikeSlider: React.FC = () => {
  const [newModels, setNewModels] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    getProductsForSlider(15, 'newest')
      .then(setNewModels)
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <section className="likeSlide">
      <div className="likeSlide__container">
        <div className="likeSlide__top">
          <h2 className="likeSlide__title">You may also like</h2>

          <div className="likeSlide__arrows">
            <div className="likeSlide__arrow-left arrow">
              <LeftArrow />
            </div>

            <div className="likeSlide__arrow-right arrow">
              <RightArrow />
            </div>
          </div>
        </div>

        {isLoading ? (
          <Loader />
        ) : (
          <CardSlider
            leftArrowName="likeSlide__arrow-left"
            rightArrowName="likeSlide__arrow-right"
            products={newModels}
          />
        )}
      </div>
    </section>
  );
};
