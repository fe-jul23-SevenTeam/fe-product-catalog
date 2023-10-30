import React from 'react';
import { CardSlider } from '../CardSlider/CardSlider';
import { ProductCard } from '../../../../components/ProductCard';
import { ReactComponent as LeftArrow } from '../../../../assets/icons/arrow-left_icon.svg';
import { ReactComponent as RightArrow } from '../../../../assets/icons/arrow-right_icon.svg';
import './NewBrand.scss';

export const NewBrand: React.FC = () => {
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

        <CardSlider
          leftArrowName="newBrand__arrow-left"
          rigthArrowName="newBrand__arrow-right"
        >
          <ProductCard />
        </CardSlider>
      </div>
    </section>
  );
};
