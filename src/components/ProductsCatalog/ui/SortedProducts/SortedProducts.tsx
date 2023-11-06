import React, { useState, useRef } from 'react';

import { ItemsPerPage } from '../../../../types/enumPageSize';
import cn from 'classnames';
import { SortingOption } from '../../../../types/enumSortOption';
import arrow from '../../../../assets/icons/arrow.png';
import './SortedProducts.scss';
import { useClickOutside } from 'helpers/customHooks/useOnClickOutside';
import { TABLET_WIDTH } from 'helpers/constants';

interface Props {
  sorting: string;
  pageSize: string;
  handleSortingChange: (option: SortingOption) => void;
  handleItemsPerPageChange: (option: ItemsPerPage) => void;
}

export const SortedProducts: React.FC<Props> = ({
  sorting,
  pageSize,
  handleItemsPerPageChange,
  handleSortingChange,
}) => {
  const [isOpenSorting, setIsOpenSorting] = useState(false);
  const [isOpenPageSize, setIsOpenPageSize] = useState(false);

  const sortingRef = useRef(null);
  const pageSizeRef = useRef(null);

  useClickOutside(
    sortingRef,
    () => setIsOpenSorting(false),
    window.innerWidth <= TABLET_WIDTH,
  );
  useClickOutside(
    pageSizeRef,
    () => setIsOpenPageSize(false),
    window.innerWidth <= TABLET_WIDTH,
  );

  return (
    <div className="sorted">
      <div className="sorted__selector">
        <h4 className="sorted__selector--title">Sort By</h4>

        <button
          ref={sortingRef}
          className="sorted__selector--button"
          onClick={() => setIsOpenSorting(prevState => !prevState)}
        >
          <p className="sorted__selector--button__text">{sorting}</p>
          <img
            src={arrow}
            alt="Arrow Dropdown"
            className={cn('sorted__selector--button__img', {
              'sorted__selector--button__rotate': !isOpenSorting,
            })}
          />
        </button>

        <ul
          className={cn('sorted__selector--list', {
            'sorted__selector--list__open': isOpenSorting,
          })}
        >
          {Object.values(SortingOption).map(option => (
            <li
              key={option}
              className="sorted__selector--list__options"
              onClick={() => {
                handleSortingChange(option);
                setIsOpenSorting(false);
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      </div>

      <div className="sorted__selector">
        <h4 className="sorted__selector--title">Items on page</h4>

        <button
          ref={pageSizeRef}
          className="sorted__selector--button"
          onClick={() => setIsOpenPageSize(prevState => !prevState)}
        >
          <p className="sorted__selector--button__text">{pageSize}</p>
          <img
            src={arrow}
            alt="Arrow Dropdown"
            className={cn('sorted__selector--button__img', {
              'sorted__selector--button__rotate': !isOpenPageSize,
            })}
          />
        </button>

        <ul
          className={cn('sorted__selector--list', {
            'sorted__selector--list__open': isOpenPageSize,
          })}
        >
          {Object.values(ItemsPerPage).map(option => (
            <li
              key={option}
              className="sorted__selector--list__options"
              onClick={() => {
                handleItemsPerPageChange(option);
                setIsOpenPageSize(false);
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
