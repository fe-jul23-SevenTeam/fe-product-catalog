import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import './PhonesPage.scss';

import icon from '../../assets/icons/home_icon.svg';
import icon_arrow from '../../assets/icons/arrow-right_icon.svg';

import { ProductCard } from '../../components/ProductCard';
import { useSearchParams } from 'react-router-dom';
import { SearchParams, getSearchWith } from './components/searchHelpers';
import { SortedProducts } from './components/SortedProducts/SortedProducts';
import {
  getProductsByCategory,
  getProductsByParams,
} from '../../api/productsGeneral';
import { usePagination } from '../../helpers/customHooks/usePagination';
import { SortingOption } from '../../types/enumSortOption';
import { ItemsPerPage } from '../../types/enumPageSize';
import { Products } from '../../types/typeProducts';
import { RingLoader } from 'react-spinners';

export const PhonesPage: React.FC = () => {
  const [loader, setLoader] = useState(false);
  const [countProducts, setCountProducts] = useState(0);
  const [phones, setPhones] = useState<Products[]>([]);

  const [sorting, setSorting] = useState<SortingOption>(SortingOption.Newest);
  const [pageSize, setPageSize] = useState<ItemsPerPage>(ItemsPerPage.Four);

  const [searchParams, setSearchParams] = useSearchParams();

  const category = 'phones';

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
      .then(setPhones)
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
    <section className="phones wrapper">
      <div className="phones__pathname">
        <img className="phones__pathname-icon" src={icon} alt="Home icon" />
        <img
          className="phones__pathname-icon"
          src={icon_arrow}
          alt="Arrow icon"
        />

        <p className="phones__pathname-title">{category}</p>
      </div>

      <h1 className="phones__wrapper-title">Mobile phones</h1>
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
            {phones.map(phone => (
              <div className="catalog__card-container">
                <ProductCard product={phone} key={phone.id} />
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
