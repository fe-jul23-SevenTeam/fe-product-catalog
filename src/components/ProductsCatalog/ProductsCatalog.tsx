import React, { useEffect, useState } from 'react';

import { ProductCard } from '../ProductCard';
import { useSearchParams } from 'react-router-dom';
import { SearchParams, getSearchWith } from './ui/searchHelpers';
import { SortedProducts } from './ui/SortedProducts/SortedProducts';
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
import { DEFAULT_PAGE_NUMBER } from 'helpers/constants';
import { CatalogSkeleton } from './ui/CatalogSkeleton';
import { repeatComponentNtimes } from 'helpers/repeatComponentNTimes';

import './ProductsCatalog.scss';
import { ProductCategories } from 'types/enumProductCategories';
import { PaginationSkeleton } from './ui/PaginationSkeleton';

type Props = {
  title: string;
  category: ProductCategories;
};

export const ProductCatalog: React.FC<Props> = ({ title, category }) => {
  const [loader, setLoader] = useState(false);
  const [countProducts, setCountProducts] = useState(0);
  const [products, setProducts] = useState<Products[]>([]);

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
      category: category,
      page: String(page),
    });

    getProductsByCategory(category).then(products => {
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

    getProductsByParams(Number(page), pageItems, sortBy, category)
      .then(setProducts)
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

  const skeletonCards = repeatComponentNtimes(pageSize, CatalogSkeleton);

  return (
    <section className="products-catalog wrapper">
      <PathnameCategory category={category} />

      <h1 className="products-catalog__wrapper-title">{title}</h1>
      <p className="products-catalog__wrapper-title-second">
        {countProducts} models
      </p>

      <SortedProducts
        sorting={sorting}
        pageSize={pageSize}
        handleSortingChange={handleSortingChange}
        handleItemsPerPageChange={handleItemsPerPageChange}
      />

      {loader ? (
        <div className="products-catalog__content grid">
          {skeletonCards.map((Component, index) => (
            <Component key={index} />
          ))}
        </div>
      ) : (
        <div className="products-catalog__content grid">
          {products.map(gadget => (
            <div key={gadget.id} className="catalog__card-container">
              <ProductCard product={gadget} />
            </div>
          ))}
        </div>
      )}

      {loader ? (
        <PaginationSkeleton />
      ) : (
        <div className="products-catalog__pagination">
          <Pagination
            totalPages={totalPages}
            onPageChange={(page: number) => {
              handlePageChange(page);
            }}
            currentPage={Number(pageCurrent)}
          />
        </div>
      )}
    </section>
  );
};
