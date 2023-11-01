import { useState } from 'react';


export const usePagination = (totalRecords: number, recordsPerPage: number) => {
    const [currentPage, setCurrentPage] = useState(1);
  
    const totalPages = Math.ceil(totalRecords / recordsPerPage);
  
    const goToPage = (page: number) => {
      if (page >= 1 && page <= totalPages) {
        setCurrentPage(page);
      }
    };

    return {
      currentPage,
      totalPages,
      goToPage,
    };
  };