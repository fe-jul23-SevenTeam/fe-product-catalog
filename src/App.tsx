import { Outlet } from 'react-router-dom';
import './App.scss';
import { Header } from './components/Header';
import { Slider } from './Slider/Slider';

export const App = () => {
  return (
    <>
      <Header />
      {/* <Outlet /> */}
      <Slider />
      {/* <div>Group Project</div> */}
    </>
  );
};
