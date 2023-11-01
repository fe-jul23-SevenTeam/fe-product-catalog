import { ItemsPerPage } from '../../../../types/enumPageSize';
import { SortingOption } from '../../../../types/enumSortOption';
import './SortedProducts.scss';

interface Props {
  sorting: string;
  pageSize: string;
  handleSortingChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  handleItemsPerPageChange: (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => void;
}

export const SortedProducts: React.FC<Props> = ({
  sorting,
  pageSize,
  handleItemsPerPageChange,
  handleSortingChange,
}) => {
  return (
    <div className="sorted">
      <label htmlFor="sorting" className="sorted__categories">
        Sort By
        <div>
          <select
            id="sorting"
            name="sorting"
            className="sorted__type"
            value={sorting}
            onChange={handleSortingChange}
          >
            {Object.values(SortingOption).map(option => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </label>

      <label htmlFor="itemsPerPage" className="sorted__categories">
        Items on page
        <div>
          <select
            id="itemsPerPage"
            name="itemsPerPage"
            className="sorted__type"
            value={pageSize}
            onChange={handleItemsPerPageChange}
          >
            {Object.values(ItemsPerPage).map(option => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </label>
    </div>
  );
};
