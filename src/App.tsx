import { Outlet } from 'react-router-dom';
import './App.scss';
import { Header } from './components/Header';
import { ProductCard } from './components/ProductCard/ProductCard';

export const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      {/* <ProductCard /> */}
      {/* <div>Group Project</div> */}
    </>
  );
};
