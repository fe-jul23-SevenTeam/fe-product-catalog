import React, { useEffect, useState } from 'react';
import { ReactComponent as LeftArrow } from 'assets/icons/arrow-left_icon.svg';
import { ReactComponent as RightArrow } from 'assets/icons/arrow-right_icon.svg';
import './Pagination.scss';

interface Props {
  totalPages: number;
  onPageChange: (page: number) => void;
  currentPage: number;
}

export const Pagination: React.FC<Props> = ({
  totalPages,
  onPageChange,
  currentPage,
}) => {
  const [pages, setPages] = useState<number[]>([]);
  const displayPages = 4;

  useEffect(() => {
    const tempPages: number[] = [];
    const startPage = Math.max(1, currentPage - Math.floor(displayPages / 2));
    const endPage = Math.min(totalPages, startPage + displayPages - 1);

    for (let i = startPage; i <= endPage; i++) {
      tempPages.push(i);
    }

    setPages(tempPages);
  }, [totalPages, currentPage]);

  const handlePageClick = (page: number) => {
    if (onPageChange) {
      onPageChange(page);
    }
  };

  return (
    <ul className="pagination">
      <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
        <button
          disabled={currentPage === 1}
          className="page-link"
          onClick={() => handlePageClick(currentPage - 1)}
        >
          <LeftArrow className="page-link-icon" />
        </button>
      </li>
      {pages.map(page => (
        <li
          key={page}
          className={`page-item ${currentPage === page ? 'active' : ''}`}
        >
          <button className="page-link" onClick={() => handlePageClick(page)}>
            {page}
          </button>
        </li>
      ))}
      <li
        className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}
      >
        <button
          disabled={currentPage === totalPages}
          className="page-link"
          onClick={() => handlePageClick(currentPage + 1)}
        >
          <RightArrow className="page-link-icon" />
        </button>
      </li>
    </ul>
  );
};
