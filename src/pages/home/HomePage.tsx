import { Slider } from 'pages/home/components/Slider/Slider';
import './HomePage.scss';
import { CategoriesShop } from './components/CategoriesShop/CategoriesShop';
import { HotPrices } from './components/HotPrices/HotPrices';
import { NewBrand } from './components/NewBrand/NewBrand';

export const HomePage = () => {
  return (
    <main>
      <Slider />
      <NewBrand />
      <CategoriesShop />
      <HotPrices />
    </main>
  );
};
