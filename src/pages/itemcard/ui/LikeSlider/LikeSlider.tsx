import React, { useEffect, useState } from 'react';
import { CardSlider } from 'pages/home/ui/CardSlider';
import { ReactComponent as LeftArrow } from 'assets/icons/arrow-left_icon.svg';
import { ReactComponent as RightArrow } from 'assets/icons/arrow-right_icon.svg';
import { getProductsForSlider } from 'api/productsGeneral';

import { Product } from 'types/Product';
import { CardSliderSkeleton } from 'components/CardSliderSkeleton';

import './LikeSlider.scss';

export const LikeSlider: React.FC = () => {
  const [recommended, setRecommended] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    getProductsForSlider(15, 'recommended')
      .then(setRecommended)
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <section className="likeSlide">
      <div className="likeSlide__container">
        <div className="likeSlide__top">
          <h2 className="likeSlide__title">You may also like</h2>

          <div className="likeSlide__arrows">
            <div className="likeSlide__arrow-left likeSlide__arrows-icons">
              <LeftArrow className="likeSlide__arrows-icons-arrow" />
            </div>

            <div className="likeSlide__arrow-right likeSlide__arrows-icons">
              <RightArrow className="likeSlide__arrows-icons-arrow" />
            </div>
          </div>
        </div>

        {isLoading ? (
          <CardSliderSkeleton />
        ) : (
          <div
            onClick={() => {
              window.location.reload();
            }}
          >
            <CardSlider
              leftArrowName="likeSlide__arrow-left"
              rightArrowName="likeSlide__arrow-right"
              products={recommended}
            />
          </div>
        )}
      </div>
    </section>
  );
};
