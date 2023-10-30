import React from 'react';
import './HomePage.scss';
import { CategoriesShop } from './components/CategoriesShop/CategoriesShop';
import { HotPrices } from './components/HotPrices/HotPrices';
import { NewBrand } from './components/NewBrand/NewBrand';
// import { TitleAndBanner } from './components/TitleAndBanner/TitleAndBanner';

export const HomePage = () => {
  return (
    <main>
      {/* <TitleAndBanner /> */}
      <NewBrand />
      <CategoriesShop />
      <HotPrices />
    </main>
  );
};
