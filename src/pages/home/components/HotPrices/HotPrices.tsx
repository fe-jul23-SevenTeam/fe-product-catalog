import { CardSlider } from '../CardSlider/CardSlider';
import { ProductCard } from '../../../../components/ProductCard';
import { ReactComponent as LeftArrow } from '../../../../assets/icons/arrow-left_icon.svg';
import { ReactComponent as RightArrow } from '../../../../assets/icons/arrow-right_icon.svg';
import './HotPrices.scss';

export const HotPrices = () => {
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

        {/* <CardSlider
          leftArrowName="hotPrices__arrow-left"
          rigthArrowName="hotPrices__arrow-right"
        >
          <ProductCard />
        </CardSlider> */}
      </div>
    </section>
  );
};
