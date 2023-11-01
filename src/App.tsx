import './App.scss';
import { Outlet } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ShoppingCartProvider } from './context/ShoppingCartContext';

export const App = () => {
  return (
    <ShoppingCartProvider>
      <Header />
      <main style={{ flex: '1' }}>
        <Outlet />
      </main>
      <Footer />
    </ShoppingCartProvider>
  );
};
