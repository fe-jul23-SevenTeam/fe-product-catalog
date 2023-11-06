import { Skeleton } from 'components/Skleton';

import './PaginationSkeleton.scss';

export const PaginationSkeleton = () => {
  return (
    <div className="pagination-skeleton">
      <div className="pagination-skeleton__button">
        <Skeleton />
      </div>

      <div className="pagination-skeleton__button">
        <Skeleton />
      </div>

      <div className="pagination-skeleton__button">
        <Skeleton />
      </div>
      <div className="pagination-skeleton__button">
        <Skeleton />
      </div>
      <div className="pagination-skeleton__button">
        <Skeleton />
      </div>
    </div>
  );
};
