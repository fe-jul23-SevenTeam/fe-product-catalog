import React, { useEffect, useState } from 'react';
import './AccessoriesPage.scss';

import { ProductCard } from '../../components/ProductCard';
import { useSearchParams } from 'react-router-dom';

import {
  getProductsByCategory,
  getProductsByParams,
} from '../../api/productsGeneral';
import { usePagination } from '../../helpers/customHooks/usePagination';
import { SortingOption } from '../../types/enumSortOption';
import { ItemsPerPage } from '../../types/enumPageSize';
import { Products } from '../../types/typeProducts';
import { PathnameCategory } from 'components/PathnameCategory';
import { Pagination } from 'components/Pagination/Pagination';
import { ACCESSORIES_CATEGORY, DEFAULT_PAGE_NUMBER } from 'helpers/constants';
import {
  SearchParams,
  getSearchWith,
} from 'pages/phones/components/searchHelpers';
import { SortedProducts } from 'pages/phones/components/SortedProducts/SortedProducts';
import { CatalogSkeleton } from 'components/CatalogSkeleton';

export const AccessoriesPage: React.FC = () => {
  const [loader, setLoader] = useState(false);
  const [countProducts, setCountProducts] = useState(0);
  const [accessories, setAccessories] = useState<Products[]>([]);

  const [sorting, setSorting] = useState<SortingOption>(SortingOption.Newest);
  const [pageSize, setPageSize] = useState<ItemsPerPage>(ItemsPerPage.Four);

  const [searchParams, setSearchParams] = useSearchParams();

  const { pageCurrent, totalPages, goToPage } = usePagination(
    countProducts,
    parseInt(pageSize),
  );

  const sortBy = searchParams.get('sortBy') || SortingOption.Newest;
  const pageItems = searchParams.get('pageSize') || ItemsPerPage.Four;
  const page = searchParams.get('page') || pageCurrent;

  useEffect(() => {
    setSearchWith({
      sortBy: sortBy,
      pageSize: pageItems,
      category: ACCESSORIES_CATEGORY,
      page: String(page),
    });

    getProductsByCategory(ACCESSORIES_CATEGORY).then(products => {
      setCountProducts(products.length);
    });
  }, []);

  useEffect(() => {
    setSorting(sortBy as SortingOption);
    setPageSize(pageItems as ItemsPerPage);
    goToPage(Number(page));
  }, [sortBy, pageItems, page]);

  useEffect(() => {
    setLoader(true);

    getProductsByParams(Number(page), pageItems, sortBy, ACCESSORIES_CATEGORY)
      .then(setAccessories)
      .finally(() => {
        setLoader(false);
      });
  }, [pageCurrent, pageSize, sorting]);

  function setSearchWith(params: SearchParams) {
    const search = getSearchWith(params, searchParams);

    setSearchParams(search);
  }

  const handleSortingChange = (option: SortingOption) => {
    setSorting(option as SortingOption);
    goToPage(DEFAULT_PAGE_NUMBER);

    setSearchWith({
      sortBy: option || null,
      page: String(DEFAULT_PAGE_NUMBER),
    });
  };

  const handleItemsPerPageChange = (option: ItemsPerPage) => {
    setPageSize(option as ItemsPerPage);
    goToPage(DEFAULT_PAGE_NUMBER);

    setSearchWith({
      pageSize: option || null,
      page: String(DEFAULT_PAGE_NUMBER),
    });
  };

  const handlePageChange = (page: number) => {
    goToPage(page);

    setSearchWith({ page: String(page) || '1' });
  };

  return (
    <section className="accessories wrapper">
      <PathnameCategory category={ACCESSORIES_CATEGORY} />

      <h1 className="accessories__wrapper-title">Mobile phones</h1>
      <p>{countProducts} models</p>

      <SortedProducts
        sorting={sorting}
        pageSize={pageSize}
        handleSortingChange={handleSortingChange}
        handleItemsPerPageChange={handleItemsPerPageChange}
      />

      {loader ? (
        <CatalogSkeleton />
      ) : (
        <div className="accessories__content grid">
          {accessories.map(accessorie => (
            <div key={accessorie.id} className="catalog__card-container">
              <ProductCard product={accessorie} />
            </div>
          ))}
        </div>
      )}

      <div className="accessories__pagination">
        <Pagination
          totalPages={totalPages}
          onPageChange={(page: number) => {
            handlePageChange(page);
          }}
          currentPage={Number(pageCurrent)}
        />
      </div>
    </section>
  );
};
