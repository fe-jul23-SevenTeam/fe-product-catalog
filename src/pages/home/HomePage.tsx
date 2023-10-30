import './HomePage.scss';
import { HotPrices } from './components/HotPrices/HotPrices';
import { NewBrand } from './components/NewBrand/NewBrand';
import { ShopCategory } from './components/ShopCategory/ShopCategory';
import { TitleAndBanner } from './components/TitleAndBanner/TitleAndBanner';

export const HomePage = () => {
  return (
    <main>
      {/* <TitleAndBanner /> */}
      <NewBrand />
      {/* <ShopCategory /> */}
      <HotPrices />
    </main>
  );
};
