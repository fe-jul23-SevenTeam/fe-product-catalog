import { Skeleton } from 'components/Skleton';
import './CardSliderSkeleton.scss';

export const CardSliderSkeleton = () => {
  return (
    <div className="card-slider-skeleton wrapper">
      <div className="card-slider-skeleton__item-container">
        <Skeleton />
      </div>

      <div className="card-slider-skeleton__item-container">
        <Skeleton />
      </div>

      <div className="card-slider-skeleton__item-container">
        <Skeleton />
      </div>

      <div className="card-slider-skeleton__item-container">
        <Skeleton />
      </div>
    </div>
  );
};
