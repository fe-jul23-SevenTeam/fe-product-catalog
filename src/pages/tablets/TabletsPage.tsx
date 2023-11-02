import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Products } from '../../types/typeProducts';
import { SortingOption } from '../../types/enumSortOption';
import { ItemsPerPage } from '../../types/enumPageSize';
import { usePagination } from '../../helpers/customHooks/usePagination';
import {
  getProductsByCategory,
  getProductsByParams,
} from '../../api/productsGeneral';
import {
  SearchParams,
  getSearchWith,
} from '../phones/components/searchHelpers';
import { SortedProducts } from '../phones/components/SortedProducts/SortedProducts';
import { ProductCard } from '../../components/ProductCard';
import { Loader } from 'components/Loader';
import { PathnameCategory } from 'components/PathnameCategory';
import { Pagination } from 'components/Pagination/Pagination';
import './TabletsPage.scss';
import { DEFAULT_PAGE_NUMBER, TABLETS_CATEGORY } from 'helpers/constants';

export const TabletsPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [countProducts, setCountProducts] = useState(0);
  const [loader, setLoader] = useState(false);

  const [tablets, setTablets] = useState<Products[]>([]);

  const [sorting, setSorting] = useState<SortingOption>(SortingOption.Newest);
  const [pageSize, setPageSize] = useState<ItemsPerPage>(ItemsPerPage.Four);

  const { currentPage, totalPages, goToPage } = usePagination(
    countProducts,
    parseInt(pageSize),
  );

  useEffect(() => {
    setSearchWith({
      sortBy: sorting,
      pageSize: pageSize,
      category: TABLETS_CATEGORY,
    });

    getProductsByCategory(TABLETS_CATEGORY).then(products => {
      setCountProducts(products.length);
    });
  }, []);

  useEffect(() => {
    setLoader(true);

    getProductsByParams(currentPage, pageSize, sorting, TABLETS_CATEGORY)
      .then(setTablets)
      .finally(() => {
        setLoader(false);
      });
  }, [currentPage, pageSize, sorting]);

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

    setSearchWith({ pageSize: option || null });
  };

  return (
    <section className="tablets wrapper">
      <PathnameCategory category={TABLETS_CATEGORY} />

      <h1 className="tablets__wrapper-title">Tablets</h1>
      <p>{countProducts} models</p>

      <SortedProducts
        sorting={sorting}
        pageSize={pageSize}
        handleSortingChange={handleSortingChange}
        handleItemsPerPageChange={handleItemsPerPageChange}
      />

      {loader ? (
        <div className="tablets__loader">
          <Loader />
        </div>
      ) : (
        <div className="tablets__content grid">
          {tablets.map(tablet => (
            <div className="catalog__card-container">
              <ProductCard product={tablet} key={tablet.id} />
            </div>
          ))}
        </div>
      )}

      <div className="tablets__pagination">
        <Pagination
          totalPages={totalPages}
          onPageChange={(page: number) => {
            goToPage(page);
          }}
          currentPage={currentPage}
        />
      </div>
    </section>
  );
};
