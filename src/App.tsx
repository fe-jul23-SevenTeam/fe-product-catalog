import { Outlet } from 'react-router-dom';
import './App.css';

export const App = () => {
  return (
    <>
      <Outlet />

      <div>Group Project</div>
    </>
  );
};
