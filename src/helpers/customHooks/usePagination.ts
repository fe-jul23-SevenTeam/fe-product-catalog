import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export const usePagination = (totalRecords: number, recordsPerPage: number) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchParams] = useSearchParams();

  const totalPages = Math.ceil(totalRecords / recordsPerPage);
  const pageCurrent = searchParams.get('page') || currentPage;

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return {
    pageCurrent,
    totalPages,
    goToPage,
  };
};
