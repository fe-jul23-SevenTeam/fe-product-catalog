import { Skeleton } from 'components/Skleton';

import './CatalogSkeleton.scss';

export const CatalogSkeleton = () => {
  return (
    <div className="catalog__card-container">
      <div className="catalog-skeleton__container">
        <Skeleton />
      </div>
    </div>
  );
};
