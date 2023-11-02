import { useEffect, useState } from 'react';

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
import { PathnameCategory } from 'components/PathnameCategory';

import { Loader } from 'components/Loader';
import { Pagination } from 'components/Pagination/Pagination';
import './AccessoriesPage.scss';
import { ACCESSORIES_CATEGORY, DEFAULT_PAGE_NUMBER } from 'helpers/constants';

export const AccessoriesPage = () => {
  const [loader, setLoader] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [countProducts, setCountProducts] = useState(0);

  const [accessories, setAccessories] = useState<Products[]>([]);

  const [sorting, setSorting] = useState<SortingOption>(SortingOption.Newest);
  const [pageSize, setPageSize] = useState<ItemsPerPage>(ItemsPerPage.Four);

  const { currentPage, totalPages, goToPage } = usePagination(
    countProducts,
    parseInt(pageSize),
  );

  useEffect(() => {
    setSearchWith({ sortBy: sorting, pageSize: pageSize, category: ACCESSORIES_CATEGORY, page: String(currentPage) });

    getProductsByCategory(ACCESSORIES_CATEGORY).then(products => {
      setCountProducts(products.length);
    });
  }, []);

  useEffect(() => {
    setLoader(true);

    getProductsByParams(currentPage, pageSize, sorting, ACCESSORIES_CATEGORY)
      .then(setAccessories)
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

    setSearchWith({ sortBy: option || null, page: String(DEFAULT_PAGE_NUMBER)});
  };

  const handleItemsPerPageChange = (option: ItemsPerPage) => {
    setPageSize(option as ItemsPerPage);

    setSearchWith({ pageSize: option || null });
  };

  return (
    <section className="accessories wrapper">
      <PathnameCategory category={ACCESSORIES_CATEGORY} />

      <h1 className="accessories__wrapper-title">Accessories</h1>
      <p>{countProducts} models</p>

      <SortedProducts
        sorting={sorting}
        pageSize={pageSize}
        handleSortingChange={handleSortingChange}
        handleItemsPerPageChange={handleItemsPerPageChange}
      />

      {loader ? (
        <div className="accessories__loader">
          <Loader />
        </div>
      ) : (
          <div className="accessories__content grid">
            {accessories.map(accessory => (
              <div className="catalog__card-container">
                <ProductCard product={accessory} key={accessory.id} />
              </div>
            ))}
          </div>
      )}

      <div className="accessories__pagination">
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
