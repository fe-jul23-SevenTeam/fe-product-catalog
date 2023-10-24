import {
  HashRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import { App } from './App';

import { HomePage } from './pages/home/HomePage';
import { PhonesPage } from './pages/phones/PhonesPage';
import { TabletsPage } from './pages/tablets/TabletsPage';
import { AccessoriesPage } from './pages/accessories/AccessoriesPage';
import { PageNotFound } from './pages/notfound/PageNotFound';
import { FavoritesPage } from './pages/favourites/FavouritesPage';
import { CartPage } from './pages/cart/CartPage';
import { ItemCard } from './pages/itemcard/ItemCard';

export const Root = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="phones" element={<PhonesPage />}>
          <Route path=":itemcard?" element={<ItemCard />} />
        </Route>
        <Route path="tablets" element={<TabletsPage />} />
        <Route path="accessories" element={<AccessoriesPage />} />
        <Route path="favorites" element={<FavoritesPage />} />
        <Route path="cart" element={<CartPage />} />

        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  </Router>
);
