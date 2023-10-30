import { Outlet } from 'react-router-dom';
import './App.scss';
import { Header } from './components/Header';
import { Slider } from './Slider/Slider';
// import { ProductCard } from './components/ProductCard/ProductCard';
import { Footer } from './components/Footer';

export const App = () => {
  return (
    <>
      <Header />
      <main style={{ flex: '1' }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
