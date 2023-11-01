import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
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
import { RingLoader } from 'react-spinners';

import icon from '../../assets/icons/home_icon.svg';
import icon_arrow from '../../assets/icons/arrow-right_icon.svg';
import './AccessoriesPage.scss';

export const AccessoriesPage = () => {
  const [loader, setLoader] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const [countProducts, setCountProducts] = useState(0);

  const [accessories, setAccessories] = useState<Products[]>([]);

  const [sorting, setSorting] = useState<SortingOption>(SortingOption.Newest);
  const [pageSize, setPageSize] = useState<ItemsPerPage>(ItemsPerPage.Four);

  const category = 'accessories';

  const { currentPage, totalPages, goToPage } = usePagination(
    countProducts,
    parseInt(pageSize),
  );

  useEffect(() => {
    setSearchWith({ sortBy: sorting, pageSize: pageSize, category: category });

    getProductsByCategory(category).then(products => {
      setCountProducts(products.length);
    });
  }, []);

  useEffect(() => {
    getProductsByParams(currentPage, pageSize, sorting, category)
      .then(setAccessories)
      .finally(() => {
        setLoader(false);
      });
  }, [currentPage, pageSize, sorting]);

  function setSearchWith(params: SearchParams) {
    const search = getSearchWith(params, searchParams);

    setSearchParams(search);
  }

  const handleSortingChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSorting(event.target.value as SortingOption);

    setSearchWith({ sortBy: event.target.value || null });
  };

  const handleItemsPerPageChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setPageSize(event.target.value as ItemsPerPage);

    setSearchWith({ pageSize: event.target.value || null });
  };

  return (
    <section className="accessories wrapper">
      <div className="accessories__pathname">
        <img
          className="accessories__pathname-icon"
          src={icon}
          alt="Home icon"
        />
        <img
          className="accessories__pathname-icon"
          src={icon_arrow}
          alt="Arrow icon"
        />

        <p className="accessories__pathname-title">{category}</p>
      </div>

      <h1 className="accessories__wrapper-title">Accessories</h1>
      <p>{countProducts} models</p>

      <SortedProducts
        sorting={sorting}
        pageSize={pageSize}
        handleSortingChange={handleSortingChange}
        handleItemsPerPageChange={handleItemsPerPageChange}
      />

      {loader ? (
        <div className="phones__loader">
          <RingLoader color="#36d7b7" />
        </div>
      ) : (
        <>
          <div className="phones__content grid">
            {accessories.map(accessory => (
              <div className="catalog__card-container">
                <ProductCard product={accessory} key={accessory.id} />
              </div>
            ))}
          </div>

          <div className="phones__pagination">
            <ReactPaginate
              pageCount={totalPages}
              pageRangeDisplayed={5}
              marginPagesDisplayed={2}
              onPageChange={data => {
                goToPage(data.selected + 1);
              }}
              containerClassName={'pagination'}
              activeClassName={'active'}
            />
          </div>
        </>
      )}
    </section>
  );
};
